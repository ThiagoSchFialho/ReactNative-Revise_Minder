import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screens/home/home" options={{ title: "Home" }} />
    </Stack>
  );
}
