import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../screens/About';
import Contact from '../screens/Contact';

import HomeStack from './HomeStack';
import ContactStack from './ContactStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="about"
        component={HomeStack}
        options={{title: 'about'}}
      />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'contact'}}
      />
    </Tab.Navigator>
  );
}
