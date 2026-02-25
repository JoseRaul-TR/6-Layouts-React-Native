import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007aff",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen name="one" options={{ title: "L1" }}></Tabs.Screen>
      <Tabs.Screen name="two" options={{ title: "L2" }}></Tabs.Screen>
      <Tabs.Screen name="three" options={{ title: "L3" }}></Tabs.Screen>
      <Tabs.Screen name="four" options={{ title: "L4" }}></Tabs.Screen>
      <Tabs.Screen name="five" options={{ title: "L5" }}></Tabs.Screen>
      <Tabs.Screen name="six" options={{ title: "L6" }}></Tabs.Screen>
    </Tabs>
  );
}
