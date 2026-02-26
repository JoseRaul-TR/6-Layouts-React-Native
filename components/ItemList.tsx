import { ScrollView, StyleSheet, Text, View } from "react-native";

type ItemListProps = {
  items: string[];
};

export default function ItemList({ items }: ItemListProps) {
  return (
    <ScrollView
      style={styles.scrollArea}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {items.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#8a558fa4",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#fdfdfd",
    textAlign: "center",
  },
});
