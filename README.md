# Documentación de la App eCommerce de Películas

Esta es la documentación de la aplicación eCommerce de Películas desarrollada con React Native. Esta aplicación permite a los usuarios explorar y comprar películas, a su vez como la autenticación vía Firebase Authentication y, a partir del localId, setear configuraciones personales del cliente, como su foto de perfil y su dirección. 
A continuación, se proporciona información sobre cómo configurar y utilizar la aplicación, así como las principales bibliotecas utilizadas en el proyecto.

## Requisitos Previos

Asegúrese de tener instalado Node.js y npm en su sistema. Además, se recomienda tener el entorno de desarrollo Expo CLI instalado globalmente. Puede instalar Expo CLI ejecutando el siguiente comando:

- npm install -g expo-cli

Luego de hacer git clone y encontrarse en el directorio de la app, ejecute: 

- npm install

Para levantar el server de expo, y abrir la app con Expo Go: 

- npx/npm start

## Configuración de Bibliotecas

- La aplicación eCommerce de Películas utiliza varias bibliotecas para la navegación y la gestión del estado. Estas son las principales bibliotecas utilizadas:

@react-navigation/bottom-tabs: Versión 6.5.8
@react-navigation/native: Versión 6.1.7
@react-navigation/native-stack: Versión 6.9.13
@react-navigation/stack: Versión 6.3.17
@reduxjs/toolkit: Versión 1.9.5
expo: Versión 48.0.18
expo-font: Versión 11.1.1
expo-image-picker: Versión 14.1.1
expo-screen-orientation: Versión 5.1.1
expo-status-bar: Versión 1.4.4
react: Versión 18.2.0
react-native: Versión 0.71.8
react-native-gesture-handler: Versión 2.9.0
react-native-safe-area-context: Versión 4.5.0
react-native-screens: Versión 3.20.0
react-redux: Versión 8.1.1
expo-location: Versión 15.1.1
expo-sqlite: Versión 11.1.1

- Asegúrese de que estas bibliotecas estén instaladas correctamente en su proyecto.