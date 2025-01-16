import React from 'react'
import { View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { WebView } from 'react-native-webview'

interface MapProps {
  latitude: number
  longitude: number
  markerImage: string
  zoom?: number
  height?: number
  width?: number
}

const SIZE_IMAGE = 50
const ZOOM = { default: 9, max: 14, min: 8 }

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
          .leaflet-marker-icon {
            background: none;
            border: none;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          const map = L.map('map', {
            zoomControl: false,
            minZoom: ${ZOOM.min},
            maxZoom:  ${ZOOM.max}
          }).setView([${latitude}, ${longitude}], ${zoom});
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Agregar controles de zoom en la esquina inferior izquierda
          L.control.zoom({
            position: 'bottomright'
          }).addTo(map);

          // Crear un círculo con un radio de 5km
          const circle = L.circle([${latitude}, ${longitude}], {
            radius: 5000, // 5000 metros = 5km
            fillColor: '#3388ff',
            fillOpacity: 0.2,
            color: '#3388ff',
            weight: 2
          }).addTo(map);

          // Crear un ícono personalizado con la imagen del plato en el centro del círculo
          const customIcon = L.divIcon({
            html: \`<img src="${markerImage}" class="custom-marker">\`,
            className: '',
            iconSize: [50, 50],
            iconAnchor: [25, 25]
          });

          // Agregar marcador personalizado en el centro
          L.marker([${latitude}, ${longitude}], {
            icon: customIcon
          }).addTo(map);
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