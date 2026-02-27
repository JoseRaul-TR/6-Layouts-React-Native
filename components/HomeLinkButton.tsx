import { Href, useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import { Pressable, StyleSheet, Text } from "react-native";

type HomeLinkButtonProps = {
  title: string;
  href: Href;
};

export default function HomeLinkButton({ title, href }: HomeLinkButtonProps) {
  const router = useRouter();

  const handlePress = () => {
    // Tactile feedback on iOS & Android (not in web)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    router.push(href);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    width: "100%",
  },
  buttonPressed: {
    backgroundColor: "#0051A8",
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
