import { Image } from 'react-native';
import { Tabs } from 'expo-router';
import { theme } from "@/app/constants/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme.navigationBackground,
          height: 65,
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

      <Tabs.Screen
        name="addStudy/index"
        options={{
          tabBarIcon: () => (
            <Image
              source={require("@/app/assets/images/tabBar/addStudy.png")}
              style={{height: 60, width: 60, marginBottom: 35}}
            />
          ),
          tabBarLabel: ""
        }}
      />

      <Tabs.Screen
        name="reviews/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
            source={
              focused ? require("@/app/assets/images/tabBar/reviews-selected.png")
              : require("@/app/assets/images/tabBar/reviews.png")
            }
              style={{height: 30, width: 24, marginBottom: 10}}
            />
          ),
          tabBarLabel: "Revisões"
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
            source={
              focused ? require("@/app/assets/images/tabBar/profile-selected.png")
              : require("@/app/assets/images/tabBar/profile.png")
            }
              style={{height: 30, width: 30, marginBottom: 10}}
            />
          ),
          tabBarLabel: "Perfil"
        }}
      />
    </Tabs>
  );
}