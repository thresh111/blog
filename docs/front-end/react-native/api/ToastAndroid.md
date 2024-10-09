# ToastAndroid

> 显示一个原生的 Android toast 消息

## ToastAndroid.show(message, duration)

> 显示一个 toast 消息

### 参数

| 参数名   | 类型   | 必填 | 说明                                                        |
| :------- | :----- | :--- | :---------------------------------------------------------- |
| message  | string | 是   | 要显示的消息                                                |
| duration | number | 是   | 持续时间，`ToastAndroid.SHORT` 2s 或 `ToastAndroid.LONG` 5s |

## ToastAndroid.showWithGravity(message, duration, gravity)

::: warning
android 30 以后就阉割掉了 定位不能用了
:::

> 显示一个 toast 消息，并指定显示位置<br/>

### 参数

> | 参数名   | 类型   | 必填 | 说明                                                        |
> | :------- | :----- | :--- | :---------------------------------------------------------- |
> | message  | string | 是   | 要显示的消息                                                |
> | duration | number | 是   | 持续时间，`ToastAndroid.SHORT` 2s 或 `ToastAndroid.LONG` 5s |
> | gravity  | number | 是   | 显示位置 `ToastAndroid.center`                              |

```jsx
ToastAndroid.showWithGravity("222", ToastAndroid.LONG, ToastAndroid.TOP);
```
