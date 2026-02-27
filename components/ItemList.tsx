import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Item = {
  id: number;
  text: string;
  completed: boolean;
};

type ItemListProps = {
  items: Item[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function ItemList({ items, onToggle, onDelete }: ItemListProps) {
  return (
    <ScrollView
      style={styles.scrollArea}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {items.map((item) => (
        <View
          key={item.id}
          style={[styles.card, item.completed && styles.cardCompleted]}
        >
          {/* LEFT: toggle checkbox */}
          <Pressable onPress={() => onToggle(item.id)}>
            <Ionicons
              name={item.completed ? "checkbox" : "square-outline"}
              size={24}
              color="#fff"
            />
          </Pressable>

          {/* MIDDLE: Text */}
          <Text
            style={[styles.cardText, item.completed && styles.textCompleted]}
          >
            {item.text}
          </Text>

          {/* RIGHT: Delete checkbox */}
          <Pressable onPress={() => onDelete(item.id)}>
            <Ionicons name="close-circle-outline" size={24} color="#ffcccc" />
          </Pressable>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardCompleted: {
    opacity: 0.5, // Dim completed card
  },
  cardText: {
    fontSize: 14,
    color: "#fdfdfd",
    flex: 1,
    marginHorizontal: 15,
  },
  textCompleted: {
    textDecorationLine: "line-through",
  },
});
