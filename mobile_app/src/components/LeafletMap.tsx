import React, { useCallback, useRef } from 'react'
import { View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { WebView } from 'react-native-webview'
import { DISHES } from '../mocks/dishes'
import { DishType } from '../types'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MapBottomSheet from './MapBottomSheet'

interface MapProps {
  latitude: number
  longitude: number
  markerImage: string
  zoom?: number
  height?: number
  width?: number
}

const SIZE_IMAGE = 60
const ZOOM = { default: 9, max: 14, min: 8 }
const LIMIT_ZONE = { 
  top: '3.7',
  right: '-76.3',
  bottom: '-0.7',
  left: '-79.7'
}

export default function LeafletMap({ 
  latitude, 
  longitude, 
  zoom = ZOOM.default,
  height = hp(100),
  width = wp(100),
  markerImage
}: MapProps) {
  
  const [selectedDish, setSelectedDish] = React.useState<DishType | null>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
        />
        <script 
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        ></script>
        <style>
          ${mapStyles}
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          ${getMapScripts(latitude, longitude, zoom, markerImage)}
        </script>
      </body>
    </html>
  `.trim()

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  
  const onSelectedDish = (dish: DishType) => {
    setSelectedDish(dish);
    handlePresentModalPress()
  }

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View 
          className='flex-1 overflow-hidden'
          style={{ height, width }}
        >
          <WebView
            source={{ html: htmlContent }}
            scrollEnabled={false}
            onError={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent
              console.warn('WebView error: ', nativeEvent)
            }}
            onMessage={(e) => {
              onSelectedDish(JSON.parse(e.nativeEvent.data))
            }}
          />

        </View>

        <MapBottomSheet bottomSheetRef={bottomSheetRef} dish={selectedDish} />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}


// Estilos CSS para el mapa
const mapStyles = /*css*/`
  body { margin: 0; }
  #map { height: 100dvh; }
  .custom-marker {
    width: ${SIZE_IMAGE}px;
    height: ${SIZE_IMAGE}px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.3);
    object-fit: cover;
    aspect-ratio: 1;
  }
  .custom-marker.opaque { opacity: 0.5; }
  .leaflet-marker-icon {
    background: none;
    border: none;
  }
`


// Funciones auxiliares del mapa
const getMapScripts = (latitude: number, longitude: number, zoom: number, markerImage: string) => /*js*/`
  // Configuración inicial del mapa
  const setupMap = () => {
    const mapBounds = {
      northEast: L.latLng(${LIMIT_ZONE.top}, ${LIMIT_ZONE.right}),
      southWest: L.latLng(${LIMIT_ZONE.bottom}, ${LIMIT_ZONE.left})
    };
    const bounds = L.latLngBounds(mapBounds.southWest, mapBounds.northEast);

    const mapConfig = {
      zoomControl: false,
      minZoom: ${ZOOM.min},
      maxZoom: ${ZOOM.max}, 
      maxBounds: bounds,
      maxBoundsViscosity: 1.0
    };

    const map = L.map('map', mapConfig).setView([${latitude}, ${longitude}], ${zoom});

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    });
    tileLayer.addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    
    return map;
  }

  // Funciones para crear elementos del mapa
  const createMapElements = {
    circle: (lat, lng) => {
      const circleConfig = {
        radius: 5000,
        fillColor: '#3388ff',
        fillOpacity: 0.2,
        color: '#3388ff',
        weight: 2
      };
      return L.circle([lat, lng], circleConfig);
    },

    marker: (lat, lng, imgSrc, isOpaque = false, dishId = null) => {
      const iconConfig = {
        html: '<img src="' + imgSrc + '" class="custom-marker ' + (isOpaque ? 'opaque' : '') + '" data-dish-id="' + dishId + '">',
        className: '',
        iconSize: [50, 50],
        iconAnchor: [25, 25]
      };
      return L.marker([lat, lng], { icon: L.divIcon(iconConfig) });
    }
  };

  // Gestión de marcadores activos
  const markerManager = {
    currentCircle: null,
    currentMarker: null,

    select: function(marker, circle, dish = null) {
      if (this.currentMarker) {
        const prevIcon = this.currentMarker.getIcon();
        prevIcon.options.html = prevIcon.options.html.replace('custom-marker', 'custom-marker opaque');
        this.currentMarker.setIcon(prevIcon);
      }
      
      if (this.currentCircle) {
        this.currentCircle.remove();
      }

      const newIcon = marker.getIcon();
      newIcon.options.html = newIcon.options.html.replace('opaque', '');
      marker.setIcon(newIcon);

      this.currentMarker = marker;
      this.currentCircle = circle;
      circle.addTo(map);

      // Centrar el mapa en el marcador seleccionado
      map.setView([marker.getLatLng().lat - 0.2, marker.getLatLng().lng], ${ZOOM.default});

      if (dish) {
        window.ReactNativeWebView.postMessage(JSON.stringify(dish));
      }
    }
  };

  // Inicialización del mapa y elementos
  const map = setupMap();
  const initialDish = ${JSON.stringify(DISHES.find(d => d.location.lat === latitude && d.location.long === longitude))};
  const initialElements = {
    circle: createMapElements.circle(${latitude}, ${longitude}),
    marker: createMapElements.marker(${latitude}, ${longitude}, "${markerImage}", false, initialDish?.id)
  };

  initialElements.marker.addTo(map);
  initialElements.marker.on('click', () => 
    markerManager.select(initialElements.marker, initialElements.circle, initialDish)
  );
  markerManager.select(initialElements.marker, initialElements.circle);

  // Agregar marcadores adicionales
  const otherDishes = ${JSON.stringify(DISHES)};
  otherDishes.forEach(dish => {
    const isDifferentLocation = dish.location.lat !== ${latitude} || dish.location.long !== ${longitude};
    
    if (isDifferentLocation) {
      const additionalElements = {
        marker: createMapElements.marker(
          dish.location.lat, 
          dish.location.long, 
          dish.backgroundImg, 
          true,
          dish.id
        ),
        circle: createMapElements.circle(dish.location.lat, dish.location.long)
      };
      
      additionalElements.marker.on('click', () => 
        markerManager.select(additionalElements.marker, additionalElements.circle, dish)
      );
      additionalElements.marker.addTo(map);
    }
  });
`