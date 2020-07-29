import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function HomeStack(props) {
  const {navigation} = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => <Text onPress={navigation.openDrawer}>Menu</Text>,
          headerRight: () => <Text>POWER</Text>,
        }}
      />
      <Stack.Screen name="about" component={About} options={{title: 'about'}} />
    </Stack.Navigator>
  );
}
