import * as React from 'react'; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/home/home";
import Gallery from "./screens/gallery/gallery";
import Preview from "./screens/preview/preview";


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
        <Stack.Screen name="Gallery" component={Gallery} options={{...options, animation: "slide_from_bottom"}} />
        <Stack.Screen name="Preview" component={Preview} options={{...options, animation: "fade"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;