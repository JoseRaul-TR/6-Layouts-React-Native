import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layout Practise Exercise</Text>

      <View style={styles.linkContainer}>
        <Link href="/app/(tabs)/one.tsx" style={styles.linkText}>
          <Text>Layout 1</Text>
        </Link>
        <Link href="/app/(tabs)/two.tsx" style={styles.linkText}>
          <Text>Layout 2</Text>
        </Link>
        <Link href="/app/(tabs)/three.tsx" style={styles.linkText}>
          <Text>Layout 3</Text>
        </Link>
        <Link href="/app/(tabs)/four.tsx" style={styles.linkText}>
          <Text>Layout 4</Text>
        </Link>
        <Link href="/app/(tabs)/five.tsx" style={styles.linkText}>
          <Text>Layout 5</Text>
        </Link>
        <Link href="/app/(tabs)/six.tsx" style={styles.linkText}>
          <Text>Layout 6</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  linkContainer: {
    gap: 15,
  },
  linkText: {
    color: "#007aff",
    fontSize: 18,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
