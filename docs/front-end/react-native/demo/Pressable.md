## 基本使用

```tsx
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function PressableDemo() {
  return (
    <View style={styles.root}>
      <Pressable
        style={(state) => {
          const { pressed } = state;
          return {
            ...styles.btn,
            backgroundColor: pressed ? "#2030ff70" : "#2030ff",
          };
          // return [styles.btn ,pressed && { backgroundColor: '#2030ff70'} ]
        }}
      >
        {(state) => {
          const { pressed } = state;
          return <Text style={pressed ? styles.txt_pressed : styles.txt}>按 钮</Text>;
        }}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    padding: 32,
    backgroundColor: "#cccccc",
  },
  btn: {
    width: 300,
    height: 65,
    borderRadius: 10,
    backgroundColor: "#2030ff",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_pressed: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2030ff",
  },
});
```
