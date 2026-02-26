import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { useState } from "react";

export default function LayoutFour() {
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
      <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        {/* Top Strip */}
        <View style={{ backgroundColor: "#c5e1fc", flex: 1 }} />

        {/* Middle Container */}
        <View
          style={{
            flex: 5,
            backgroundColor: "#fff",
            padding: 10,
            justifyContent: "center",
          }}
        >
          {/* Row 1 */}
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginBottom: 20,
              justifyContent: "center",
            }}
          >
            <View style={styles.squareBox} />
            <View style={styles.squareBox} />
          </View>

          {/* Row 2 */}
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <View style={styles.squareBox} />
            <View style={styles.squareBox} />
          </View>
        </View>

        {/* Bottom Strip */}
        <View style={{ backgroundColor: "#c5e1fc", flex: 1 }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  squareBox: {
    backgroundColor: "#4d97f7",
    flex: 1,
    aspectRatio: 1,
    maxWidth: 200,
  },
});
