import React from 'react';
import { createStackNavigator,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import Main from '../Screens/Main/index';
import Profile from '../Screens/Profile/index';
import { ControlsProvider } from "../Contexts/Controls";
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
        <ControlsProvider>
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
            }}  name="Main" component={Main} />
          
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Profile" component={Profile} />
       </Stack.Navigator>
       </EquipamentosProvider>
        </ControlsProvider>
        </MenuProvider>

    )
}