import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistor from './store/persistor';
export default class App extends React.Component {
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
