import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "#007aff",
        headerTransparent: true, // Allows content to go under the header
        headerShown: false, // Hidden header per default
        animation: "slide_from_right",
        contentStyle: { backgroundColor: '#F2F2F7' } // Global background
      }}
    >
      {/* This hides the double header (Root Stack + Tab Header) */}
      <Stack.Screen name="index" options={{ title: "Home" }} />

      <Stack.Screen name="one" options={{ title: "Layout One" }} />
      <Stack.Screen name="two" options={{ title: "Layout Two" }} />
      <Stack.Screen name="three" options={{ title: "Layout Three" }} />
      <Stack.Screen name="four" options={{ title: "Layout Four" }} />
      <Stack.Screen name="five" options={{ title: "Layout Five" }} />
      <Stack.Screen name="six" options={{ title: "Layout Six" }} />

      {/*              This defines the modal/popup style for the 404 page*/}
      <Stack.Screen
        name="+not-found"
        options={{ title: "Oops!" }}
      />
    </Stack>
  );
}
