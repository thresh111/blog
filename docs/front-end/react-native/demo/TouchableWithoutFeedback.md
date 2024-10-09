## 基本使用

1. 自身不支持样式，需要包裹一层 View

```tsx
import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";

export default function TouchableWithoutFeedbackDemo() {
  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback
      // style={styles.button}  // 自身不支持样式，需要包裹一层View
      >
        <View style={styles.button}>
          <Text>按钮</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#c0c0c0",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#2030ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
```
