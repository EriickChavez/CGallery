import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import HomeScreen from "./screens/home/home";
import GalleryScreen from "./screens/gallery/gallery";
import PreviewScreen from "./screens/preview/preview";
import SettingsScreen from "./screens/settings/settings";

// Navigation Stack
const Stack = createNativeStackNavigator();

function App() {
  
  const options = {
    gestureEnabled: true,
    headerShown: false,
  }

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{...options, animation: "slide_from_left"}} />
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{...options, animation: "slide_from_bottom"}} />
        <Stack.Screen name="Preview" component={PreviewScreen} options={{...options, animation: "fade"}} />
        <Stack.Group >
          <Stack.Screen name="Settings" component={SettingsScreen} options={{...options, presentation: "modal"}} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;