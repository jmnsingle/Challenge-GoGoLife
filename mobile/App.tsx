import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes/AppRoutes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
