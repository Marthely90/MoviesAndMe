// App.js

import React from 'react'
// In App.js in a new project

// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search'
import FilmDetail from './Components/FilmDetail'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Recherche" component={Search} />
          <Stack.Screen name="Détail" component={FilmDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;