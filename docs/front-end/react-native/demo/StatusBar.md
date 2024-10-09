## 基本使用

```tsx
import { useRef } from "react";
import { StyleSheet, View, SectionList, Text, StatusBar } from "react-native";

export default function StatusBarDemo() {
  const sectionListRef = useRef<SectionList>(null);
  const statusBarRef = useRef<StatusBar>(null);
  const renderItem = ({ item, index, section }: any) => {
    return <Text style={styles.txt}>{item}</Text>;
  };

  return (
    <View style={styles.root}>
      <StatusBar
        ref={statusBarRef}
        barStyle={"dark-content"} //  内容颜色
        backgroundColor={"#2030ff50"}
        animated={true}
        // 只有安卓生效 页面布局和状态栏一起
        translucent={false}
        // 隐藏状态栏
        hidden={false}
      />
      <SectionList
        ref={sectionListRef}
        style={styles.section_list}
        sections={[
          {
            type: "a",
            data: [1, 2, 3],
          },
          {
            type: "b",
            data: [1, 2, 3],
          },
          {
            type: "c",
            data: [1, 2, 3],
          },
          {
            type: "d",
            data: [1, 2, 3],
          },
        ]}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section_header}>{section.type}</Text>
        )}
        ItemSeparatorComponent={() => <Text>------------</Text>}
        // 分组吸顶
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#c0c0c0",
  },
  section_list: {
    height: "100%",
    width: "100%",
  },
  txt: {
    width: "100%",
    height: 50,
    color: "#000",
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  section_header: {
    width: "100%",
    height: 30,
    color: "#000",
    backgroundColor: "pink",
    marginBottom: 10,
  },
});
```
