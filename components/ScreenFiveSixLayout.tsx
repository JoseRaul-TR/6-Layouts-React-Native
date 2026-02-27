import {
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "expo-router";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function ScreenFiveSixLayout({ children }: Props) {
  const navigation = useNavigation();
  const [showHeader, setShowHeader] = useState(false);

  const toggleHeader = () => {
    const newState = !showHeader;
    setShowHeader(newState);
    // This dynamically tells the Stack to show or hide the top bar
    navigation.setOptions({ headerShown: newState });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={styles.mainWrapper}>
          {/* Top Strip - Pressable to toggle header navigation*/}
          <Pressable
            onPress={toggleHeader}
            style={({ pressed }) => [
              styles.strip,
              pressed && styles.stripPressed,
            ]}
          />

          {/* Middle Container */}
          <View style={styles.middleContainer}>{children}</View>

          {/* Bottom Strip  - Pressable to toggle naviation via header*/}
          <Pressable
            onPress={toggleHeader}
            style={({ pressed }) => [
              styles.strip,
              pressed && styles.stripPressed,
            ]}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainWrapper: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },

  // Strip Styles
  strip: {
    backgroundColor: "#c5e1fc",
    flex: 1,
  },
  stripPressed: {
    opacity: 0.7,
  },
  middleContainer: {
    flex: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 20,  // Padding Left & Right
    paddingVertical: 100, // Padding Top & Bottom
    gap: 20,
  },
});
