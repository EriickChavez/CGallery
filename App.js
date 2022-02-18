/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Nav from "./src/index";
import {Provider} from 'react-redux'
import reduxStore from "./src/redux/store";
import {PersistGate} from "redux-persist/integration/react";

const App = () => {
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Nav />
      </PersistGate>
    </Provider>
  )
};

export default App;
