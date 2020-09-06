import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import Main from '../Screens/Main/index';
import Login from '../Screens/Login/index';
import MainLogout from '../Screens/MainLogout/index';
import Profile from '../Screens/Profile/index';
import MainVideo from "../Screens/InitialVideo/index";
import ResetCode from "../Screens/ResetCode/index";
import { LocaisAdicionadosProvider } from "../Contexts/LocaisAdicionados";
import { PreferenciaProvider } from "../Contexts/Preferencias";
import { LocaisProximosProvider } from "../Contexts/LocaisProximos";
import { MeusLocaisProvider } from "../Contexts/MeusLocais";
import { ScenesProvider } from "../Contexts/Scenes";
import { ControlsProvider } from "../Contexts/Controls";
import { StatusProvider } from "../Contexts/Status";
import { ServiceProvider } from "../Contexts/Service";
import { MenuProvider } from 'react-native-popup-menu';
import { UserProvider } from "../Contexts/User";
import  UserContext  from "../Contexts/User";
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function Index(){
    const userContext = useContext(UserContext);
    const [loaded] = useFonts({
        segoe: require('../../assets/fonts/segoe-ui.otf'),
      });
    
      if (!loaded) {
        return <></>;
      }
    return(
      <MenuProvider>
        <NavigationContainer>
        <UserProvider>
        <LocaisAdicionadosProvider>
        <PreferenciaProvider>
        <LocaisProximosProvider>
        <MeusLocaisProvider>
        <ScenesProvider>
        <ControlsProvider>
        <StatusProvider>
        <ServiceProvider>
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
            {!userContext.isLogged ? 
            <>
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
            
            </>
            :
            <>
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Mainvideo" component={MainVideo} />
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Main" component={Main} />
          
            <Stack.Screen 
            options={{
            headerShown:false,
            }}  name="Profile" component={Profile} />
            </>
        }
        </Stack.Navigator>
        </ServiceProvider>
        </StatusProvider>
        </ControlsProvider>
        </ScenesProvider>
        </MeusLocaisProvider>
        </LocaisProximosProvider>
        </PreferenciaProvider>
        </LocaisAdicionadosProvider>
        </UserProvider>
        </NavigationContainer>
        </MenuProvider>

    )
}