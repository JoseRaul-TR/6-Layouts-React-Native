import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeLinkButton from "../components/HomeLinkButton";

export default function index() {
  const exercisesScreens = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
  ] as const;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.subtitle}>App development course</Text>
        <Text style={styles.title}>Layout Practice Exercise</Text>

        <View style={styles.linkContainer}>
          {/* Use array to display the 6 screens (one for each exercise) */}
          {exercisesScreens.map((route, index) => (
            <HomeLinkButton
              key={route}
              href={`/${route}`}
              title={`Layout ${index + 1}`}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#007AFF",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1c1c1e",
    marginBottom: 40,
    letterSpacing: -0.5,
    textAlign: "center",
  },

  linkContainer: {
    width: "100%",
    maxWidth: 400,
    gap: 16,
  },
});
