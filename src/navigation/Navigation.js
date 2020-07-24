import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  <Drawer.Navigator>
    <Drawer.Screen name="home" component={Home} options={{title: 'Home'}} />
  </Drawer.Navigator>;
}

// export default function Navigation() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="about" component={HomeStack} options={{title: 'home'}} />
//       <Tab.Screen
//         name="contact"
//         component={ContactStack}
//         options={{title: 'contact'}}
//       />
//     </Tab.Navigator>
//   );
// }
