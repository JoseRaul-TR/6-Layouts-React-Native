# React Native Layout & State Practice

A comprehensive React Native (Expo) application showcasing the evolution of mobile UI development—from mastering Flexbox layouts to implementing complex interactive state management and Haptics.

## 🚀 Features

### 📐 Layout Mastery (Screens 1-4)
* **Progressive Complexity**: Demonstrates `flexDirection`, `flex` ratios, and `gap` properties.
* **Dynamic Headers**: Implementation of a custom "strip" navigation system that toggles the `expo-router` stack header on tap.
* **Responsive Design**: Utilizes `aspectRatio` and `maxWidth` to ensure UI consistency across different screen sizes.

### 📝 Interactive Task Manager (Screen 5)
* **Full CRUD Logic**: Add, toggle (complete), and delete "Things" from a list.
* **Form Validation**: Visual feedback (red borders) and haptic warnings when trying to submit empty fields.
* **Custom Components**: Reusable `MyTextInput` and `MyButton` components.

#### **Progress (Screen 5)**
- ✅ **Achieved**: Items add as new purple boxes.
- ✅ **Achieved**: `ScrollView` implementation for long lists.
- ✅ **Achieved**: Checkbox on the left to toggle completion (visual line-through).
- ✅ **Achieved**: Delete icon on the far right to remove items.
- 🚧 **Missing/Challenge**: Swipe-to-delete functionality (Requires `react-native-gesture-handler` and `Reanimated`).
- 🚧 **Missing/Challenge**: Entry/Exit Animations for list items.

### 🐈 Cat Feeding Dashboard (Screen 6)
* **Advanced State Machine**: A "Feeding Mode" switch that transforms the entire UI.
* **Conditional Styling**:
    * **View Mode**: Orange cards showing names and ages.
    * **Feeding Mode**: High-contrast mode—White cards for hungry cats (!isFed), Green for fed cats (isFed).
* **Keyboard Strategy**: Integrated `KeyboardAvoidingView` and `TouchableWithoutFeedback` to ensure the keyboard never blocks the action.
* **TypeScript Integration**: Strict typing for `Cat` objects and numeric age conversion.

#### **Progress (Screen 6)**
- ✅ **Achieved**: Forms create new orange cards with Name and Age data.
- ✅ **Achieved**: Functional `ScrollView` for the cat list.
- ✅ **Achieved**: "Feeding Mode" logic using a `Switch` for a better dashboard feel.
- ✅ **Achieved**: Dynamic UI State transformation based on `isFed` status.
- 🔄 **Design Pivot**: Switched from a bottom button to a top `Switch` to trigger Feeding Mode, improving accessibility.
- 🚧 **Missing/Challenge**: Swipe-to-feed gesture.

---

## 🐛 Known Bugs & Future Improvements

1. **The "Vanishing" ScrollView**
   - **Issue**: High vertical padding (100px) in `ScreenFiveSixLayout` can compress the list area on small devices.
   - **Improvement**: Adjust padding dynamically or use flexible flex growth.

2. **Input Validation**
   - **Issue**: `parseInt` rounds decimals down (e.g., 2.5 becomes 2).
   - **Improvement**: Use `parseFloat` or a regex to restrict input to integers only.

3. **Data Persistence**
   - **Bug**: Data is lost on app reload.
   - **Improvement**: Implement `AsyncStorage` or `SQLite` for local persistence.

4. **Interactive UX**
   - **Improvement**: Add "Empty State" components to guide users when no items exist.

---

## 🛠 Tech Stack

* **Framework**: Expo (React Native)
* **Navigation**: `expo-router` (File-based routing)
* **Icons**: `@expo/vector-icons` (Ionicons)
* **Feedback**: `expo-haptics`
* **Language**: TypeScript

---


## 🚦 Getting Started

1. **Clone the repository**
```bash
   git clone [https://github.com/JoseRaul-TR/6-Layouts-React-Native.git](https://github.com/JoseRaul-TR/6-Layouts-React-Native.git)
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the app**
```bash
npx expo start
```
---

## 📁 Project Structure

```text
├── app/
│   ├── _layout.tsx               # Global Stack Navigator & Root settings
│   ├── index.tsx                 # Home navigation hub
│   ├── one.tsx...four.tsx        # Layout & Flexbox exercises
│   ├── five.tsx                  # Task manager implementation
│   └── six.tsx                   # Cat Feeding dashboard (Main Logic)
├── components/
│   ├── CatList.tsx               # Complex list with conditional state-theming
│   ├── ItemList.tsx              # Standard list with toggle/delete
│   ├── MyTextInput.tsx           # Reusable input with error states
│   ├── MyButton.tsx              # Reusable button with haptic feedback
│   └── ScreenFiveSixLayout.tsx   # Specialized layout with KeyboardAvoidingView
