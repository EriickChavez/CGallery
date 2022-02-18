/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Nav from "./src/navigation";
import {Provider} from 'react-redux'
import reduxStore from "./src/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {Platform, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

const App = () => {
  const [splash, setSplash] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 1000)
  }, []);

  if (splash) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <FastImage
          style={{width: '90%', height: '100%'}}
          resizeMode={"contain"}
          source={require('./src/assets/logo/logo.png')} />
      </SafeAreaView>
    )
  }

  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar animated={true} barStyle={Platform.OS === "ios" ? 'dark-content' : 'light-content'} />
        <Nav />
      </PersistGate>
    </Provider>
  )
};

export default App;
