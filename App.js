/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// React
import React from 'react';
import {Platform, StatusBar} from 'react-native';

// Redux
import {Provider} from 'react-redux'
import reduxStore from "./src/redux/store";
import {PersistGate} from "redux-persist/integration/react";
// Navigation
import Nav from "./src/navigation";

const App = () => {
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
