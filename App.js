import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import MenuScreen from "./screens/MenuScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Welcome"
        screenOptions = { ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                
                if (route.name === 'Welcome') 
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                else
                    if (route.name === 'Menu')
                        iconName = 'ios-list';
                
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

