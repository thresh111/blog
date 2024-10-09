## 基本使用

```tsx
import React, { useEffect, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function TextInputDemo() {
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      // textInputRef.current?.focus();
      // textInputRef.current?.blur();
    }, 2000);
  }, []);
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        autoFocus={false} // 自动获取焦点，默认为false
        blurOnSubmit={true} // 提交时失去焦点，默认为true
        ref={textInputRef}
        caretHidden={false} // 隐藏光标，默认为false
        clearButtonMode={"while-editing"} // 清除按钮，默认为never
        editable={true} // 是否可编辑，默认为true
        defaultValue={"Hello World"} // 默认值
        keyboardType={"default"} // 键盘类型，默认为default 双平台都支持的类型 number-pad decimal-pad numeric email-address phone-pad
        returnKeyType={"done"} // 键盘右下角按钮类型，默认为default done go next search send
        maxLength={11} // 最大长度
        multiline={true} // 是否多行，默认为false
        numberOfLines={2} // 行数，默认为1
        onBlur={() => {
          console.log("onBlur");
        }}
        onFocus={() => {
          console.log("onFocus");
        }}
        onChange={(event) => {
          console.log("onChange", event.nativeEvent);
        }}
        onChangeText={(text) => {
          console.log("onChangeText", text);
        }}
        selection={{ start: 0, end: 3 }} // 选中文字
        selectionColor={"red"} // 选中文字颜色
        selectTextOnFocus={true} // 获取焦点时选中文字，默认为false
        secureTextEntry={true} // 是否隐藏输入内容，默认为false
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
  },
  input: {
    width: "100%",
    height: 200,
    backgroundColor: "#D0D0D0",
    fontSize: 20,
    color: "#333333",
    fontWeight: "bold",
    // textAlignVertical: 'top',
    // textAlign: 'left',
  },
});
```
