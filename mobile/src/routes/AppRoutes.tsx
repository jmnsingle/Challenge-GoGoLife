import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Camera from '../screens/Camera';
import CivilProtection from '../screens/CivilProtection';
import Comunication from '../screens/Comunication';
import Covid from '../screens/Covid';
import Schedule from '../screens/Schedule';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="camera" component={Camera} />
        <Tab.Screen name="protecao-civil" component={CivilProtection} />
        <Tab.Screen name="comunicar" component={Comunication} />
        <Tab.Screen name="covid" component={Covid} />
        <Tab.Screen name="agenda" component={Schedule} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
