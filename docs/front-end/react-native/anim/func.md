# 3 大动画函数

## 1. Animated.timing() 时间动画函数 （95% ！！！）

组合函数效果

[缓动函数速查表](https://easings.net/#)

### 四种内置动画 Easing

#### back 回拉

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.back(5), // 回啦
  useNativeDriver: false,
}).start();
```

#### bounce 弹跳

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.bounce,
  useNativeDriver: false,
}).start();
```

#### ease 平缓

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.ease, // 平缓
  useNativeDriver: false,
}).start();
```

#### elastic 弹性

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.elastic(3), // 弹几次 （推荐3）
  useNativeDriver: false,
}).start();
```

### 三种标准函数(速度)

#### linear 一次方函数

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.linear, // 匀速
  useNativeDriver: false,
}).start();
```

#### quad 二次方函数

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.quad, // 加速
  useNativeDriver: false,
}).start();
```

#### cubic 三次方函数

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.cubic, // 加速
  useNativeDriver: false,
}).start();
```

### 四种补充函数 (运行的速率)

#### bezier 贝塞尔曲线

[贝塞尔曲线](https://cubic-bezier.com/)

```js
Animated.timing(marginLeft, {
  toValue: 200,
  duration: 1000,
  easing: Easing.bezier(0.8, 0.74, 0.9, 0.25),
  useNativeDriver: false,
}).start();
```

#### circle 环形

#### sin 正弦

#### exp 指数

### 自由组合动画

#### Easing.in(Easing.bounce) 加速 + 弹跳

#### Easing.out(Easing.exp) 减速 + 指数

#### Easing.inOut(Easing.elastic(1)) 加减速 + 弹性

## 2. Animated.decay() 衰减动画函数

| args         |   name   |
| ------------ | :------: |
| velocity     | 初始速度 |
| deceleration |  减速度  |

::: code-group

```tsx {12,13,14,15,16}[index.tsx]
import { View, Button, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";

const Anim1 = () => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button
        title={"按钮"}
        onPress={() => {
          Animated.decay(marginLeft, {
            velocity: 1, // 速度
            deceleration: 0.997, // 减速
            useNativeDriver: false, // 使用原生动画驱动
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

## 3. Animated.spring() 弹性动画函数

### 弹性模型

对应三种物理公式

::: code-group

```js [第一组（个人推荐）]
bounciness (弹性) : 控制弹性，越弹越大，默认值 8
speed (速度) : 控制速度，默认值 12 , 越小越平滑
```

```js [第二组]
tension (拉伸/张力) : 控制拉伸，默认值 40 , 越大速度越快
friction (摩擦力) : 控制摩擦力，默认值 7 , 越小越弹
```

```js [第三组]
stiffness (刚度) : 控制弹簧刚度系数，默认值 100 , 越大越弹
damping (阻尼) : 控制弹簧因运动而受到的阻尼 , 默认值 10 , 越小越弹
mass (质量) : 控制附着在弹簧末端的物体的质量，默认值 1 , 越大惯性越大,动画越难停下

```

```js [其他参数]
velocity (初始速度) : 控制初始速度，默认值 0
overshootClamping (是否允许超出目标值) : 默认值 false
restDisplacementThreshold (目标值容差) : 默认值 0.001
restSpeedThreshold (速度容差) : 默认值 0.001
delay (延迟时间) : 默认值 0
```

:::
