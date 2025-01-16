import React from 'react'
import { View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { WebView } from 'react-native-webview'
import { DISHES } from '../mocks/dishes'

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
  top: '3.1',
  right: '-76.5',
  bottom: '-0.1',
  left: '-79.3'
}

export default function LeafletMap({ 
  latitude, 
  longitude, 
  zoom = ZOOM.default,
  height = hp(100),
  width = wp(100),
  markerImage
}: MapProps) {
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <style>
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
          .custom-marker.opaque {
            opacity: 0.5;
          }
          .leaflet-marker-icon {
            background: none;
            border: none;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          // Definir los límites de la región de Nariño
          const northEast = L.latLng(${LIMIT_ZONE.top}, ${LIMIT_ZONE.right});
          const southWest = L.latLng(${LIMIT_ZONE.bottom}, ${LIMIT_ZONE.left});
          const bounds = L.latLngBounds(southWest, northEast);

          const map = L.map('map', {
            zoomControl: false,
            minZoom: ${ZOOM.min},
            maxZoom: ${ZOOM.max},
            maxBounds: bounds,
            maxBoundsViscosity: 1.0 // Hace que el mapa "rebote" al llegar al límite
          }).setView([${latitude}, ${longitude}], ${zoom});
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Agregar controles de zoom en la esquina inferior izquierda
          L.control.zoom({
            position: 'bottomright'
          }).addTo(map);

          let currentCircle = null;
          let currentMarker = null;

          function createCircle(lat, lng) {
            return L.circle([lat, lng], {
              radius: 5000,
              fillColor: '#3388ff',
              fillOpacity: 0.2,
              color: '#3388ff',
              weight: 2
            });
          }

          function createMarker(lat, lng, imgSrc, isOpaque = false) {
            const customIcon = L.divIcon({
              html: \`<img src="\${imgSrc}" class="custom-marker \${isOpaque ? 'opaque' : ''}">\`,
              className: '',
              iconSize: [50, 50],
              iconAnchor: [25, 25]
            });

            return L.marker([lat, lng], {
              icon: customIcon
            });
          }

          function selectMarker(marker, circle) {
            if (currentMarker) {
              // Hacer opaco el marcador anterior
              const prevIcon = currentMarker.getIcon();
              prevIcon.options.html = prevIcon.options.html.replace('custom-marker', 'custom-marker opaque');
              currentMarker.setIcon(prevIcon);
            }
            if (currentCircle) {
              currentCircle.remove();
            }

            // Actualizar el marcador seleccionado
            const newIcon = marker.getIcon();
            newIcon.options.html = newIcon.options.html.replace('opaque', '');
            marker.setIcon(newIcon);

            currentMarker = marker;
            currentCircle = circle;
            circle.addTo(map);
          }

          // Crear y seleccionar el marcador inicial
          const initialCircle = createCircle(${latitude}, ${longitude});
          const initialMarker = createMarker(${latitude}, ${longitude}, "${markerImage}");
          initialMarker.addTo(map);
          
          // Agregar evento click al marcador inicial
          initialMarker.on('click', function() {
            selectMarker(initialMarker, initialCircle);
          });
          
          selectMarker(initialMarker, initialCircle);

          // Agregar los otros platos con marcadores opacos
          const otherDishes = ${JSON.stringify(DISHES)};
          otherDishes.forEach(dish => {
            if (dish.location.lat !== ${latitude} || dish.location.long !== ${longitude}) {
              const marker = createMarker(dish.location.lat, dish.location.long, dish.backgroundImg, true);
              const circle = createCircle(dish.location.lat, dish.location.long);
              
              marker.on('click', function() {
                selectMarker(marker, circle);
              });
              
              marker.addTo(map);
            }
          });
        </script>
      </body>
    </html>
  `
  return (
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
      />
    </View>
  )
}