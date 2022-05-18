import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatsFirstPage from './StatsFirstPage';
import LandingPage from './LandingPage';
import { createAppContainer } from 'react-navigation';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{
            headerShown: false,
            title: ""
          }}
        />
        <Stack.Screen 
        name="Settings" 
        component={StatsFirstPage}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;