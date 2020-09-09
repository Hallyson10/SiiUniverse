import React from 'react';
import { createStackNavigator,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import Login from '../Screens/Login/index';
import MainLogout from '../Screens/MainLogout/index';
import MainVideo from "../Screens/InitialVideo/index";
import ResetCode from "../Screens/ResetCode/index";
import { EquipamentosProvider } from "../Contexts/Equipamentos";
import { MenuProvider } from 'react-native-popup-menu';

import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function Index(){
    const [loaded] = useFonts({
        segoe: require('../../assets/fonts/segoe-ui.otf'),
      });
    
      if (!loaded) {
        return <></>;
      }
    return(
      <MenuProvider>
        <EquipamentosProvider>
        <Stack.Navigator
            screenOptions={{
              gestureEnabled :true,
              gestureDirection:'horizontal',
              ...TransitionPresets.SlideFromRightIOS,
              cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
              
            }}
            animation="fade"
            headerMode="float"
            >
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Mainvideo" component={MainVideo} />
               <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="MainLogout" component={MainLogout} />
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Login" component={Login} />
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="ResetCode" component={ResetCode} />
       </Stack.Navigator>
       </EquipamentosProvider>
        </MenuProvider>

    )
}