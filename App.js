import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import Navigation from './src/Navigation/StackNavigation';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='transparent' />
    <Navigation/>
    </>
  );
}
