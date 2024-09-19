## 基本使用

```tsx
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TouchableOpacityDemo() {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7} // 0.1 to 1 default 0.5 不透明度变化范围
        onPress={() => {
          console.log("onPress...");
        }}
        onLongPress={() => {
          console.log("onLongPress...");
        }}
        delayLongPress={1000} // 长按时间
        onPressIn={() => {
          console.log("onPressIn..."); // 按下时触发
        }}
        onPressOut={() => {
          console.log("onPressOut..."); // 松开时触发
        }}
      >
        <Text style={styles.text}>1232</Text>
      </TouchableOpacity>
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
