import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/Button";

export default function index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Layout Practise Exercise</Text>

        <View style={styles.linkContainer}>
          {/* Use array to display the 6 screens (one for each exercise) */}
          {["one", "two", "three", "four", "five", "six"].map(
            (route, index) => (
              <Link key={route} href={route} asChild>
                <MyButton
                  variant="home"
                  title={`Layout ${index + 1}`}
                  onPress={() => {}}
                />
              </Link>
            ),
          )}
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
  title: {
    fontSize: 22,
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
