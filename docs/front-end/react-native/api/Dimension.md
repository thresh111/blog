# Dimension / useWindowDimension

## 获取屏幕宽高

```js
const { width, height } = Dimensions.get("window");

console.log(width, height, "width height");

// hook
const { width, height } = useWindowDimensions();
console.log(width, height, "width height");
```

## 获取缩放，文字缩放

```js
console.log(scale, fontScale, "scale, fontScale");
```

## Dimensions.get 传 screen 和 window 的区别

:::info
window 是获取当前屏幕的宽高，screen 是获取设备的宽高，一般用 **window** 就可以了
:::

## 监听屏幕变化

```js
useEffect(() => {
  const subscription = Dimensions.addEventListener("change", (window, screen) => {
    console.log(window, screen, "window, screen");
  });

  return () => {
    subscription.remove();
  };
}, []);
```
