## 基本使用

```tsx
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function FlatListDemo() {
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setTimeout(() => {
      // 推荐
      flatListRef.current?.scrollToIndex({
        index: 4,
        animated: true,
        viewPosition: 0, // 滚动位置 0 顶部  0.5 中间  1 底部
      });
      // 不推荐(性能差，需要遍历所有元素)
      flatListRef.current?.scrollToItem({
        item: 6,
        animated: true,
      });
      flatListRef.current?.scrollToOffset({
        offset: 400,
        animated: true,
      });
      flatListRef.current?.scrollToEnd({
        animated: true,
      });
    }, 2000);
  }, []);
  const renderItem = ({ item, index }: any) => {
    return <Text style={styles.list_item}>{`list item --- ${item}`}</Text>;
  };

  const renderItem2 = ({ item, index }: any) => {
    return <Text style={styles.list_item2}> {`list item --- ${item}`}</Text>;
  };

  const ListHeader = (
    <View style={styles.header}>
      <Text>header</Text>
    </View>
  );

  const ListFooter = (
    <View style={[styles.header, styles.footer]}>
      <Text>footer</Text>
    </View>
  );

  const ListEmpty = (
    <View style={[styles.header, styles.empty]}>
      <Text>Empty</Text>
    </View>
  );

  const Separator = <View style={{ height: 10, backgroundColor: "#00000030" }}></View>;

  return (
    <View style={styles.root}>
      <FlatList
        style={styles.flat_list}
        data={data}
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ListEmptyComponent={ListEmpty} // empty
        ItemSeparatorComponent={Separator} // 分割元素
        initialNumToRender={6} // 初始渲染个数
        // inverted // 渲染方向，默认从上到下，true为从下到上
        // numColumns={2} // 列数
        // onViewableItemsChanged 可视元素信息
        onViewableItemsChanged={(info: any) => {
          console.log(info.viewableItems);
        }}
        // 继承 ScrollView 属性
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          console.log(event.nativeEvent.contentOffset.y);
        }}
        keyboardDismissMode={"on-drag"}
        keyboardShouldPersistTaps={"handled"}
      />
      {/* <FlatList
        style={styles.flat_list}
        data={data}
        renderItem={renderItem2}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#cccccc",
  },
  header: {
    backgroundColor: "#00ff0030",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    backgroundColor: "#0000ff30",
  },
  footer: {
    backgroundColor: "#ff000030",
  },
  flat_list: {
    height: "100%",
    width: "100%",
  },
  list_item: {
    width: "100%",
    height: 100,
    backgroundColor: "pink",
    marginBottom: 20,
  },
  list_item2: {
    width: 100,
    height: 100,
    textAlign: "center",
    backgroundColor: "pink",
    marginRight: 20,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#f5f5f5",
  },
  separator: {
    width: "100%",
    height: 12,
    backgroundColor: "#d0d0d0",
  },
});
```
