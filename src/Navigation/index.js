import React, { useContext,useEffect } from 'react';

import { useFonts } from 'expo-font';

import ScreensLogged from "./LoggedScreens";
import Auth from "./Auth";

import UserContext from "../Contexts/User";

export default function Index(){
  const { isLogged } = useContext(UserContext);
    const [loaded] = useFonts({
        segoe: require('../../assets/fonts/segoe-ui.otf'),
      });
      if (!loaded) {
        return <></>;
      }
    return isLogged ? <ScreensLogged/> : <Auth/>
}