# Alert

## Alert.alert

```js
Alert.alert(
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions
)
```

显示一个带有标题、消息和按钮的警告框。

### 参数

| 参数名  | 类型          | 必填 | 说明                         |
| ------- | ------------- | ---- | ---------------------------- |
| title   | string        | 是   | 警告框的标题                 |
| message | string        | 否   | 警告框的消息                 |
| buttons | AlertButton[] | 否   | 警告框的按钮，默认为`['OK']` |

```js
const buttons = [
  {
    text: "取消",
    onPress: () => {
      console.log("取消");
    },
  },
  {
    text: "确定",
    onPress: () => {
      console.log("确定");
    },
  },
];
Alert.alert("这是标题", "这是内容", buttons);
```

## alert

```jsx
alert("这是内容");
```
