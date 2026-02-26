import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { useState } from "react";

export default function LayoutThree() {
  const navigation = useNavigation();
  const [showHeader, setShowHeader] = useState(false);

  const toggleHeader = () => {
    const newState = !showHeader;
    setShowHeader(newState);
    // This dynamically tells the Stack to show or hide the top bar
    navigation.setOptions({ headerShown: newState });
  };

  return (
    <Pressable style={styles.container} onPress={toggleHeader}>
      <View style={{ flex: 1, flexDirection: "column", gap: 20, width: "100%" }}>
        <View style={{ backgroundColor: "#f6d053", flex: 1 }} />
        <View style={{ flex: 2, flexDirection: "row" }}>
          <View style={{ backgroundColor: "#f2ac4b", flex: 1 }} />
          <View style={{ backgroundColor: "#4d97f7", flex: 1 }} />
        </View>
        <View style={{ flex: 2, flexDirection: "row" }}>
          <View style={{ backgroundColor: "#f2ac4b", flex: 1 }} />
        <View style={{ backgroundColor: "#4daa64", flex: 1 }} />
          <View style={{ backgroundColor: "#f2ac4b", flex: 1 }} />
        <View style={{ backgroundColor: "#4daa64", flex: 1 }} />
        </View>
        <View style={{ backgroundColor: "#f6d053", flex: 2, marginBottom: 20, }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
