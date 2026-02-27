import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Pressable,
  Switch,
} from "react-native";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import ScreenFiveSixLayout from "../components/ScreenFiveSixLayout";
import CatList from "../components/CatList";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";

type Cat = {
  id: number;
  name: string;
  age: number;
  isFed: boolean;
};

export default function LayoutSix() {
  // States for the two input fields and the items in the list
  const [catName, setCatName] = useState("");
  const [catAge, setCatAge] = useState(""); // Always string in input field
  const [cats, setCats] = useState<Cat[]>([]);
  const [isFeedingMode, setIsFeedingMode] = useState(false);
  const [showErrors, setShowErrors] = useState(false); // Tracks submission attempts

  const handleAddCat = () => {
    const numericAge = parseInt(catAge); // Converts the string input to a number to match the type in Cat

    // Check and reset both input fields
    if (catName.trim() && !isNaN(numericAge)) {
      const newCat: Cat = {
        id: Date.now(),
        name: catName,
        age: numericAge, // Now is a "safe" number
        isFed: false,
      };
      setCats([newCat, ...cats]);
      setCatName("");
      setCatAge(""); // Reset so the placeholder shows empty string
      // No visual error feedback
      setShowErrors(false);
      // Success vibration feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); // Success vibration feedback
      Keyboard.dismiss();
    } else {
      // Visual error feedback - red border input field
      setShowErrors(true);
      // Error vibration feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); // Error vibration feedback
    }
  };

  const toggleFed = (id: number) => {
    setCats(cats.map((c) => (c.id === id ? { ...c, isFed: !c.isFed } : c)));
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <ScreenFiveSixLayout>
          {/* SWITCH SECTION */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>🦴 Feeding mode 🦴</Text>
            <Switch
              value={isFeedingMode}
              onValueChange={(value) => {
                setIsFeedingMode(value);
                if (value) Keyboard.dismiss();
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }}
              trackColor={{ false: "#767577", true: "#4daa64" }}
              thumbColor={isFeedingMode ? "#fff" : "#f4f3f4"}
            />
          </View>

          {/* INPUT SECTION (Hidden in feeding mode) */}
          {!isFeedingMode && (
            <>
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
                    onSubmitEditing={handleAddCat}
                  />
                </View>
              </View>

              <MyButton
                title="Add cat"
                onPress={handleAddCat}
                style={styles.addBtn}
              />
            </>
          )}

          {/* CAT LIST (Always visible, passing feeding mode state) */}
          <View style={{ flex: 1 }}>
            <CatList
              items={cats}
              onToggleFed={toggleFed}
              isFeedingMode={isFeedingMode}
            />
          </View>
        </ScreenFiveSixLayout>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  inputWrapper: {
    flex: 1,
  },
  addBtn: {
    width: "50%",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
});
