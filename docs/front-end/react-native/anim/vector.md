# 矢量动画

::: code-group

```tsx{5,12,19} [index.tsx]
import { View, Button, StyleSheet, Animated, Easing } from "react-native";
import React, { useRef } from "react";

const Anim1 = () => {
  const vector = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  return (
    <View style={styles.root}>
      <Button
        title={"按钮"}
        onPress={() => {
          Animated.timing(vector, {
            toValue: { x: 300, y: 300 },
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
      />

      <Animated.View style={[styles.view, { marginLeft: vector.x, marginTop: vector.y }]} />
    </View>
  );
};

export default Anim1;
```

```js [css.js]
const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: "#3050ff",
    marginTop: 20,
  },
});
```

:::
