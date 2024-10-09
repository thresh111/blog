# BackHandler

## 拦截

```jsx
useEffect(() => {
  BackHandler.addEventListener("hardwareBackPress", backForAndroid);
  return () => {
    BackHandler.removeEventListener("hardwareBackPress", backForAndroid);
  };
}, []);

const backForAndroid = () => {
  if (Platform.OS === "android") {
    Alert.alert("提示", "是否退出应用");
  }
  return true;
};
```

## exitApp

```jsx
const backForAndroid = () => {
  if (Platform.OS === "android") {
    Alert.alert("提示", "是否退出应用", [
      {
        text: "取消",
        onPress: () => {},
      },
      {
        text: "确定",
        onPress: () => {
          BackHandler.exitApp();
        },
      },
    ]);
  }
  return true;
};
```

## 社区 hook

Installation with npm

```zsh
npm install @react-native-community/hooks
```

```jsx
import { useBackHandler } from "@react-native-community/hooks";

useBackHandler(() => {
  return true;
});
```
