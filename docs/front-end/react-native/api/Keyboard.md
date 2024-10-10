# Keyboard

## 键盘事件监听

```jsx
useEffect(() => {
  const keyboardDidShowEvent = Keyboard.addListener("keyboardDidShow", () => {
    console.log("keyboardDidShow");
  });
  const keyboardDidHideEvent = Keyboard.addListener("keyboardDidHide", () => {
    console.log("keyboardDidHide");
  });

  return () => {
    keyboardDidShowEvent.remove();
    keyboardDidHideEvent.remove();
  };
}, []);
```

## 键盘隐藏

```js
Keyboard.dismiss();
```
