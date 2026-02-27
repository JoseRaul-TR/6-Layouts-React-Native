import {
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import * as Haptics from "expo-haptics";

type MyButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; // for layout overrides (width, alignSelf)
};

export default function MyButton({ title, onPress, style }: MyButtonProps) {
  const handlePress = (event: any) => {
    // Provide a medium "click" haptic feedback for actions
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4d97f7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
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
});
