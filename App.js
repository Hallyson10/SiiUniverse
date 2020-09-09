import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/Navigation/index';
import { UserProvider } from "./src/Contexts/User";

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='transparent' />
    <NavigationContainer>
    <UserProvider>
    <Navigation/>
    </UserProvider>
    </NavigationContainer>
    </>
  );
}
