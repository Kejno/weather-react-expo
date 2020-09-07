
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Archive from './screens/Archive';
import Home from './screens/Home';
import { MainProvider } from './screens/MainContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <MainProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === "home") {
                iconName = 'home-city-outline'
              } else if (route.name === "archive") {
                iconName = "city"
              }
              return <MaterialCommunityIcons name={iconName} size={25} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "gray",
            activeBackgroundColor: "#00aaff",
            inactiveBackgroundColor: "#00aaff"
          }}

        >
          <Tab.Screen name="home" component={Home}
          />
          <Tab.Screen name="archive" component={Archive} />
        </Tab.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
};

export default App;
