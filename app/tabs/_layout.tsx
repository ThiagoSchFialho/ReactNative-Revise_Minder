import { Image } from 'react-native';
import { Tabs } from 'expo-router';
import { theme } from "@/app/constants/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navigationBackground,
          height: 60,
          position: "absolute",
          borderTopWidth: 1,
          borderColor: theme.navigationBorder,
          paddingTop: 12
        },
        tabBarLabelStyle : {
          fontSize: 12,
          fontFamily: "Montserrat-Regular",
          color: theme.text
        }
      }}
    >
      <Tabs.Screen
        name="dashboard/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? require("@/app/assets/images/tabBar/home-selected.png")
                : require("@/app/assets/images/tabBar/home.png")
              }
              style={{height: 30, width: 30, marginBottom: 10}}
            />
          ),
          tabBarLabel: "Início"
        }}
      />

      <Tabs.Screen
        name="myStudies/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? require("@/app/assets/images/tabBar/studies-selected.png")
                : require("@/app/assets/images/tabBar/studies.png")
              }
              style={{height: 30, width: 30, marginBottom: 10}}
            />
          ),
          tabBarLabel: "Estudos"
        }}
      />  
    </Tabs>
  );
}