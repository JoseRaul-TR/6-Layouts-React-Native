import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import ScreenFiveSixLayout from "../components/ScreenFiveSixLayout";
import ItemList from "../components/ItemList";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/Button";

export default function LayoutSix() {
  // States for the two input fields and the items in the list
  const [catName, setCatName] = useState("");
  const [catAge, setCatAge] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [showErrors, setShowErrors] = useState(false); // Tracks submission attempts

  const handleAddItem = () => {
    // Check and reset both input fields
    if (catName.trim().length > 0 && catAge.trim().length > 0) {
      const newItem = `Name: ${catName}, Age: ${catAge}`;
      setItems([newItem, ...items]);
      setCatName("");
      setCatAge("");
      // No visual error feedback
      setShowErrors(false);
      // Success vibration feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); // Success vibration feedback
    } else {
      // Visual error feedback - red border input field
      setShowErrors(true);
      // Error vibration feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); // Error vibration feedback
    }
  };

  return (
    <ScreenFiveSixLayout>
      {/* Form using custom component */}
      <View style={styles.inputRow}>
        <View style={styles.inputWrapper}>
          <MyTextInput
            label="Cat"
            value={catName}
            onChangeText={setCatName}
            error={showErrors && !catName.trim()}
          />
        </View>
        <View style={styles.inputWrapper}>
          <MyTextInput
            label="Age"
            value={catAge}
            onChangeText={setCatAge}
            keyboardType="numeric"
            error={showErrors && !catAge.trim()}
          />
        </View>
      </View>

      <MyButton
        title="Add cat"
        onPress={handleAddItem}
        style={{ width: "50%", alignSelf: "flex-end", marginBottom: 20 }}
      />

      {/* List display using custom component */}
      <ItemList items={items} />
    </ScreenFiveSixLayout>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    marginBottom: 10,
  },
  inputWrapper: {
    flex: 1,
  },
  button: {
    backgroundColor: "#4d97f7",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    width: "50%",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  buttonPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.9,
    backgroundColor: "#3a84e6",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
