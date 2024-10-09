# PermissionsAndroid 权限问题

6.0 之后动态权限

## 权限列表

```js
console.log(PermissionsAndroid.PERMISSIONS);
```

## 检查权限

check()

##

request()
requestMultiple()

::: warning
请求的权限需要在 android 中的 manifest 文件中注册权限
:::

```xml
   <!-- 网络权限 -->
    <uses-permission android:name="android.permission.INTERNET" />

    <!-- 存储权限 -->
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

    <!-- 相机权限 -->
    <uses-permission android:name="android.permission.CAMERA" />

    <!-- 位置权限 -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

示例：

```jsx
<Button
  title={"按钮"}
  onPress={() => {
    // Linking.openSettings();
    // console.log(PermissionsAndroid.PERMISSIONS);
    const needsPermission = PermissionsAndroid.PERMISSIONS.CAMERA;
    PermissionsAndroid.check(needsPermission).then((res) => {
      if (!res) {
        PermissionsAndroid.request(needsPermission).then((res) => {
          console.log(res);
          if (res === "denied") {
            Alert.alert("需要权限");
          } else if (res === "granted") {
            Alert.alert("权限已开启");
          } else if (res === "never_ask_again") {
            Alert.alert("需要权限", "你已经选择了不再询问该权限，请在设置中手动开启。", [
              { text: "取消", onPress: () => console.log("取消") },
              { text: "去设置", onPress: () => Linking.openSettings() },
            ]);
          }
        });
      }
    });
  }}
/>
```
