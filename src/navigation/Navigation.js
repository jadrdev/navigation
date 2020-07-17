import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../screens/About';
import Contact from '../screens/Contact';

import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen name="about" component={About} options={{title: 'About'}} />
      <Tab.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
    </Tab.Navigator>
  );
}
