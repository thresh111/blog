## 基本使用

```tsx
import { useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Button, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ScrollViewDemo() {
  const scrollViewRef = useRef<ScrollView>(null);
  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollTo(100);
      scrollViewRef.current?.scrollTo({
        x: 0,
        y: 100,
        animated: true,
      });
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 2000);
  }, []);
  return (
    <>
      <ScrollView
        style={styles.root}
        ref={scrollViewRef}
        contentContainerStyle={styles.containerStyle}
        // none, interactive(ios), on-drag 滚动的时候键盘消失
        keyboardDismissMode={"none"}
        keyboardShouldPersistTaps={"handled"} // never, always, handled 会影响点击事件
        // 滚动开始触发多次，结束触发一次
        onMomentumScrollBegin={() => {
          console.log("onMomentumScrollBegin");
        }}
        onMomentumScrollEnd={() => {
          console.log("onMomentumScrollEnd");
        }}
        onScroll={(event) => {
          console.log(event.nativeEvent.contentOffset.y);
        }}
        // 初始滚动距离
        contentOffset={{
          y: 100,
          x: 0,
        }}
        // 展示滚动条
        showsVerticalScrollIndicator={false}
        // ScrollView中吸顶元素下标（单个）
        stickyHeaderIndices={[0]}
        scrollEnabled={false} // 是否可以滚动
        // ios 滚动频率触发函数（特定）
        scrollEventThrottle={16}
        //  ios 滚动到顶部和底部的时候，是否可以继续滚动
        overScrollMode={"never"}
      >
        <TextInput style={styles.input} />
        <Button
          title={"按钮"}
          onPress={() => {
            console.log("button pressed");
          }}
        ></Button>
        {Array.from({ length: 20 }).map((item, index) => {
          return (
            <Text style={styles.txt} key={index}>
              {index}
            </Text>
          );
        })}
      </ScrollView>

      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "yellow",
        }}
        horizontal // 水平滚动
        pagingEnabled // 分页
      >
        <View style={{ width, height: 200, backgroundColor: "red" }}></View>
        <View style={{ width, height: 200, backgroundColor: "pink" }}></View>
        <View style={{ width, height: 200, backgroundColor: "green" }}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "#c0c0c0",
  },
  input: {
    height: 50,
    fontSize: 24,
    color: "#fff",
    backgroundColor: "pink",
  },
  txt: {
    width: "100%",
    height: 50,
    fontSize: 24,
    color: "#000",
  },
  containerStyle: {
    paddingHorizontal: 16,
    backgroundColor: "#e0e0e0",
    paddingTop: 20,
  },
});
```
