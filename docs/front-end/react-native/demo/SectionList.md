## 基本使用

```tsx
import { useEffect, useRef } from "react";
import { StyleSheet, View, SectionList, Text } from "react-native";

export default function SectionListDemo() {
  const sectionListRef = useRef<SectionList>(null);

  useEffect(() => {
    setTimeout(() => {
      sectionListRef.current?.scrollToLocation({
        sectionIndex: 1,
        itemIndex: 1, // itemIndex 会把 sectionIndex 当作 0 一起
        viewPosition: 0,
        animated: true,
      });
    }, 2000);
  }, []);

  const renderItem = ({ item, index, section }: any) => {
    return <Text style={styles.txt}>{item}</Text>;
  };

  return (
    <View style={styles.root}>
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
