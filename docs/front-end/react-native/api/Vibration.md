# Vibration

> 只需要在 Android 的 manifest 文件中 申请静态权限

```xml
    <uses-permission android:name="android.permission.VIBRATE" />
```

## 震动

:::warning
仅 android 能设置震动时间 , ios 固定 400ms
:::

```js
Vibration.vibrate(1000);
```

## 取消震动

```js
Vibration.cancel();
```

## 安卓 时间模式

```js
// 停0 震500 停200 震500
Vibration.vibrate([0, 500, 200, 500]);
```

## ios 时间模式

```js
// 停0 震400ms 停500ms 震400ms 停200ms 震400ms
Vibration.vibrate([0, 500, 200, 500], true);
// 参数解析
// [0, 500, 200, 500] 震动模式
// true 是否重复
```
