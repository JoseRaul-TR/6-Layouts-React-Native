import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* This hides the double header (Root Stack + Tab Header) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/*              This defines the modal/popup style for the 404 page*/}
      <Stack.Screen
        name="+not-found"
        options={{ title: "Oops!", presentation: "modal" }}
      />
    </Stack>
  );
}
