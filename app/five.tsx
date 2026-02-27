import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import ScreenFiveSixLayout from "../components/ScreenFiveSixLayout";
import ItemList from "../components/ItemList";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";

export default function LayoutFive() {
  // States for the input and the list
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [showError, setShowError] = useState(false); // Tracks submission attempts

  const handleAddItem = () => {
    if (inputText.trim().length > 0) {
      setItems([inputText, ...items]);
      setInputText("");
      setShowError(false);
      // Success vibration
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      // Error visual feedback
      setShowError(true);
      // Error vibration
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
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
      <ItemList items={items} />
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
