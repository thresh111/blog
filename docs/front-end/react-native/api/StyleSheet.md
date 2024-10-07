# StyleSheet

## compose

```js
static compose(...style: Array<ViewStyle>): ViewStyle;
```

将多个样式对象合并为一个样式对象。

避免数组写法 ， diff 算法性能问题

## flatten

数组平铺，将嵌套的样式对象展开

## absoluteFill

覆盖全屏的布局方式
等同于`{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}`

```jsx
const style = StyleSheet.create({
  test: {
    ...StyleSheet.absoluteFill,
    backGroundColor: "red",
  },
});
```

## hairlineWidth 头发丝尺寸

一个固定值，表示最细的线宽。在 Android 上，这通常为 0.5，而在 iOS 上，这通常为 1。

1px 等于 `1 / Dimensions.get('screen').scale`
