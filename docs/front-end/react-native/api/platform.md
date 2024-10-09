# platform 获取平台属性

## Platform.OS

判断平台类型
ios android web macos tvos windows

## Platform.Version

获取平台版本号

## Platform.Constants

获取平台常量

```json
{
  "Brand": "google",
  "Fingerprint": "google/sdk_gphone64_arm64/emu64a:14/UE1A.230829.036.A4/12096271:user/release-keys",
  "Manufacturer": "Google",
  "Model": "sdk_gphone64_arm64",
  "Release": "14",
  "Serial": "unknown",
  "ServerHost": "10.0.2.2:8081",
  "Version": 34,
  "isTesting": false,
  "reactNativeVersion": { "major": 0, "minor": 75, "patch": 2, "prerelease": null },
  "uiMode": "normal"
}
```

## Platform.isPad

判断是否是平板(ios)

## Platform.isTV

判断是否是 tv

## Platform.select

根据平台选择

```js
Platform.select({
  ios: () => {},
  android: () => {},
  web: () => {},
});

const num = Platform.select({
  ios: 20,
  android: 10,
  web: 0,
  default: 0,
});
```
