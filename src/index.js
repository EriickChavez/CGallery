import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/home/home";
import Gallery from "./screens/gallery/gallery";
import Preview from "./screens/preview/preview";

const Stack = createNativeStackNavigator();

function App() {
  const options1 = {
    gestureEnabled: true,
    animation: "slide_from_left"
  }
  const options2 = {
    gestureEnabled: true,
    animation: "slide_from_bottom"
  }
  const options3 = {
    gestureEnabled: true,
    animation: "fade"
  }
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={options1} />
        <Stack.Screen name="Gallery" component={Gallery} options={options2} />
        <Stack.Screen name="Preview" component={Preview} options={options3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;