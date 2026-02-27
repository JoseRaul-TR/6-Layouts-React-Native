import { StyleSheet } from "react-native";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import ScreenFiveSixLayout from "../components/ScreenFiveSixLayout";
import ItemList from "../components/ItemList";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";

export default function LayoutFive() {
  // States for the input and the list
  const [inputText, setInputText] = useState("");
  // Array of objects to control "things" state
  const [items, setItems] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]); // "things" items contains: id, text, completed
  // Tracks submission attempts
  const [showError, setShowError] = useState(false);

  const handleAddItem = () => {
    if (inputText.trim().length > 0) {
      const newItem = {
        id: Date.now(), // Unique ID for each item
        text: inputText,
        completed: false,
      };
      setItems([newItem, ...items]);
      setInputText("");
      setShowError(false);
      // Success vibration
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      // Error visual feedback (red border in input fields)
      setShowError(true);
      // Error vibration
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
    // Light haptic (vibration) feedback to user
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    // Light haptic (vibration) feedback to user by item deletion
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <ScreenFiveSixLayout>
      {/* Form using custom component */}
      <MyTextInput
        label="Thing:"
        value={inputText}
        onChangeText={setInputText}
        error={showError && !inputText.trim()}
      />

      <MyButton
        title="Add thing"
        onPress={handleAddItem}
        style={styles.buttonAlignment}
      />

      {/* List display using custom component */}
      <ItemList items={items} onToggle={toggleItem} onDelete={deleteItem} />
    </ScreenFiveSixLayout>
  );
}

const styles = StyleSheet.create({
  buttonAlignment: {
    width: "50%",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
});
