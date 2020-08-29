import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import Main from '../Screens/Main/index';
import Login from '../Screens/Login/index';
import MainLogout from '../Screens/MainLogout/index';

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
        <NavigationContainer>
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
            }}  name="MainLogout" component={MainLogout} />
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Main" component={Main} />
          
             <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Login" component={Login} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}