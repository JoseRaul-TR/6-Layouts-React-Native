import { Text, Pressable, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import * as Haptics from "expo-haptics";

type MyButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; // for layout overrides (width, alignSelf)
  textStyle?: StyleProp<TextStyle>;
  variant?: "primary" | "home"; // Handle the different looks
};

export default function MyButton({ title, onPress, style, textStyle, variant = "primary" }: MyButtonProps) {
  const handlePress = () => {
    // Provide a subtle "click" feeling every time the button is pressed
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        variant === "home" ? styles.homeButton : styles.primaryButton,
        style,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonText, variant === "home" && styles.homeText, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#4d97f7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  homeButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  buttonPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  homeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});