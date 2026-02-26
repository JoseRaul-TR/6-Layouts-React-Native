import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";

type MyInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions; // prop to specify type of keyboard
  error?: boolean; // prop for visual feedback
};

export default function MyTextInput({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  error = false,
}: MyInputProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCorrect={false}
        spellCheck={false}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { marginBottom: 12 },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  inputError: {
    borderColor: "#ff3b30",
    borderWidth: 1.5,
  },
});
