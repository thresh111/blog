## 基本使用

```tsx
import { useState } from "react";
import { StyleSheet, View, Switch } from "react-native";

export default function SwitchDemo() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View style={styles.root}>
      <Switch
        value={switchValue}
        onValueChange={(value) => {
          setSwitchValue(value);
        }}
        // disabled
        trackColor={{
          true: "pink",
        }}
        // thumbColor={'blue'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#f8f8f8",
  },
});
```
