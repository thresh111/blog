# Linking

## openURL canOpenUrl 打开链接

`Linking.openURL(url)`

canOpenUrl 可以判断是不是合法的 url

- 网页链接
- 地图定位
- 电话，短信，邮件
- 应用跳转

```js
if (Linking.canOpenURL("https://www.baidu.com")) {
  Linking.openURL("https://www.baidu.com");
}
Linking.openURL("geo:39.904211,116.407395");
Linking.openURL("tel:10086");
Linking.openURL("sms:10086");
Linking.openURL("mailto:123456789@qq.com");
```

## 跳转应用

```jsx
try {
  Linking.openURL("thr://demo?name=123");
} catch (error) {
  console.error("Error opening URL: ", error);
}

Linking.sendIntent("com.thr.demo.test", [
  {
    key: "name",
    value: "33",
  },
]);
```

安卓项目清缓存

```shell
cd android && ./gradlew clean
```

## 跳转应用设置

```js
Linking.openSettings();
```

## 获取初始 URL

```js
Linking.getInitialURL();
```
