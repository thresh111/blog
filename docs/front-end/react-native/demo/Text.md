## 基本使用

```tsx
export default function TextDemo() {
  return (
    <View style={styles.root}>
      <Text
        style={styles.text}
        selectable={true} // 是否可选
        numberOfLines={1} // 显示行数
        ellipsizeMode={"tail"} // 超出部分显示...
        onPress={() => console.log("Text Pressed")} //  点击事件
        onLongPress={() => console.log("Text Long Pressed")} // 长按事件
        allowFontScaling={true} // 是否允许字体缩放
      >
        0123456789
      </Text>
    </View>
  );
}
```

## 嵌套 Text

```tsx
export default function TextDemo() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>
        本次期末考试不及格人数
        <Text style={styles.num}>8</Text>人
      </Text>
    </View>
  );
}
```

## 属性

```css

// 文本装饰
textDecorationLine: 'underline',
textDecorationStyle: 'solid',

// 文本阴影
textShadowColor: '#808080',
textShadowOffset: {width: 2, height: 4},
textShadowRadius: 6,
```
