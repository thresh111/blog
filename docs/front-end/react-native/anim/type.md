# 动画类型

## 四大类型

平移 旋转 缩放 渐变

## 平移

### 平移动画的属性支持

#### 1.margin

#### 2.transform:[{translateX:0,translateY:0}]

#### 3.left top right bottom

::: code-group

```tsx {5,12,13,20} [index.tsx]
import { View, Button, StyleSheet, Animated } from "react-native";
import { useRef } from "react";

const Anim1 = () => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title={"按钮"}
        onPress={() => {
          Animated.timing(marginLeft, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}
      />

      <Animated.View style={[styles.view, { marginLeft: marginLeft }]} />
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

## 旋转

rotateValue 值尽量一致，多个动画可不用一致，可从 0-1 表达

::: code-group

```tsx{5,7,8,9,10,18,31}
import { View, Button, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";

const Anim1 = () => {
  const rotate = useRef(new Animated.Value(0)).current;

  const rotateValue = rotate.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.root}>
      <Button
        title={"按钮"}
        onPress={() => {
          Animated.timing(rotate, {
            toValue: 360,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}
      />

      <Animated.View
        style={[
          styles.view,
          {
            transform: [
              {
                rotate: rotateValue,
              },
            ],
          },
        ]}
      />
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
    marginTop: 60,
    marginLeft: 60,
  },
});
```

:::

## 缩放

::: code-group

```tsx{5,13,26} [index.tsx]
import {View, Button, StyleSheet, Animated} from 'react-native';
import React, {useRef} from 'react';

const Anim1 = () => {
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.root}>
      <Button
        title={'按钮'}
        onPress={() => {
          Animated.timing(scale, {
            toValue: 1.5,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}
      />

      <Animated.View
        style={[
          styles.view,
          {
            transform: [
              {
                scale: scale,
              },
            ],
          },
        ]}
      />
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
    marginTop: 60,
    marginLeft: 60,
  },
});
```

:::

## 渐变

::: code-group

```tsx {5,12,13,20}[index.tsx]
import { View, Button, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";

const Anim1 = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title={"按钮"}
        onPress={() => {
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}
      />

      <Animated.View style={[styles.view, { opacity: opacity }]} />
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
    marginTop: 60,
    marginLeft: 60,
  },
});
```

:::
