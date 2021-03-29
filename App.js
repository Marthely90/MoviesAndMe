// App.js

import React from 'react'
// In App.js in a new project

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from './Components/Search'
import FilmDetail from './Components/FilmDetail'
import Favorites from './Components/Favorites'
import Test from './Components/Test'

import { Provider } from 'react-redux'
import Store from './Store/configureStore'

const RechercheStack = createStackNavigator();
const FavorieStack = createStackNavigator();

function RechercheStackScreen() {
  return (
    <RechercheStack.Navigator>
      <RechercheStack.Screen name="Recherche" component={Search} />
      <RechercheStack.Screen name="Détail" component={FilmDetail} />
    </RechercheStack.Navigator>
  );
}
function FavorieStackScreen() {
  return (
    <FavorieStack.Navigator>
      <FavorieStack.Screen name="Favories" component={Favorites} />
      <FavorieStack.Screen name="Détail" component={FilmDetail} />
    </FavorieStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
            inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
            showLabel: false, // On masque les titres
            showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              let iconName
              let size = 25
              let color = '#000000'
              switch(route.name){
                case 'Recherche':
                  iconName = 'search'
                  break

                case 'Favories':
                  iconName = 'heart-circle'
                  break

                default:
                  iconName = "shuffle-outline"
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name="Test" component={Test} />
          <Tab.Screen name="Recherche" component={RechercheStackScreen}  />
          <Tab.Screen name="Favories" component={FavorieStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;