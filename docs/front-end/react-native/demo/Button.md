## 基本使用

```tsx
import { Button, StyleSheet, View } from "react-native";

export default function ButtonDemo() {
  return (
    <View style={styles.root}>
      <Button
        title={"按 钮"}
        color={"green"}
        onPress={() => {
          console.log("onPress...");
        }}
        disabled={false}
      />
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
});
```
