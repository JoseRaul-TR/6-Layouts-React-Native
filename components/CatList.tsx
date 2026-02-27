import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Cat = {
  id: number;
  name: string;
  age: number;
  isFed: boolean;
};

type CatListProps = {
  items: Cat[];
  onToggleFed: (id: number) => void;
  isFeedingMode: boolean;
};

export default function CatList({
  items,
  onToggleFed,
  isFeedingMode,
}: CatListProps) {
  return (
    /* TODO - Fix scroll in Cat List */
    <ScrollView
      style={styles.scrollArea}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {items.map((cat) => {
        // Text color based on mode active (feeding mode)
        const isActionable = isFeedingMode && !cat.isFed;
        const textColor = isActionable ? "#f2ac4b" : "#fff";

        return (
          <View
            key={cat.id}
            style={[
              styles.card,
              !isFeedingMode && styles.cardOrange,
              isFeedingMode && cat.isFed && styles.cardFed,
              isFeedingMode && !cat.isFed && styles.cardNotFed,
            ]}
          >
            <View style={styles.textContainer}>
              <Text style={[styles.cardText, { color: textColor }]}>
                Name: {cat.name}, Age: {cat.age}
              </Text>
            </View>

            {isFeedingMode && (
              <Pressable onPress={() => onToggleFed(cat.id)}>
                <Ionicons
                  name={cat.isFed ? "checkmark-circle" : "ellipse-outline"}
                  size={28}
                  color={textColor}
                />
              </Pressable>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  cardOrange: {
    backgroundColor: "#f2ac4b",
  },
  cardNotFed: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#f2ac4b",
  },
  cardFed: {
    backgroundColor: "#4daa64",
  },
  textContainer: {
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
});
