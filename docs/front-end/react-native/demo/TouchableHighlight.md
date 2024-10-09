## 基本使用

1. 必须复写 onPress 方法
2. 只支持一个子节点
3. underlayColor={'#00bcd4'} 设置按下时的颜色
4. activeOpacity={0.5} 设置按下时的透明度

```tsx
import {} from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";

export default function TouchableHighlightDemo() {
  return (
    <View style={styles.root}>
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.7}
        underlayColor={"#00bcd4"}
        onPress={() => {
          console.log("onPress ...");
        }}
      >
        <Text style={styles.text}>按钮</Text>
      </TouchableHighlight>
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
