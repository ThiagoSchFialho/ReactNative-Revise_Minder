import { Stack } from "expo-router";
import * as Font from 'expo-font';
import { StatusBar } from "react-native";
import { theme } from "./constants/theme";

export default function RootLayout() {
  const [fontsLoaded] = Font.useFonts({
    'Montserrat-Thin': require('@/app/assets/fonts/Montserrat-Thin.ttf'),
    'Montserrat-ExtraLight': require('@/app/assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Light': require('@/app/assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('@/app/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('@/app/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('@/app/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('@/app/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Black': require('@/app/assets/fonts/Montserrat-Black.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.background}
        translucent={false}
      />

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
