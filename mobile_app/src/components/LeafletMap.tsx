import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { WebView } from 'react-native-webview'

interface MapProps {
  latitude: number
  longitude: number
  zoom?: number
  height?: number
  width?: number
}

export default function LeafletMap({ 
  latitude, 
  longitude, 
  zoom = 13,
  height = hp(100),
  width = wp(100)
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
          .leaflet-control-zoom {
            position: fixed;
            bottom: 20px;
            right: 10px;
            z-index: 1000;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          const map = L.map('map', {
            zoomControl: false
          }).setView([${latitude}, ${longitude}], ${zoom});
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Agregar controles de zoom en la esquina inferior izquierda
          L.control.zoom({
            position: 'bottomleft'
          }).addTo(map);

          // Agregar marcador
          L.marker([${latitude}, ${longitude}]).addTo(map);
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