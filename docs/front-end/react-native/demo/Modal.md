## 基本使用

```tsx
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SectionList,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import icon_close_modal from "../assets/img/icon_close_modal.png";

export default function ModalDemo() {
  const [visible, setVisible] = useState(false);

  const renderItem = ({ item, index, section }: any) => {
    return <Text style={styles.txt}>{item}</Text>;
  };
  return (
    <View style={styles.root}>
      <Button
        title={"打开弹窗"}
        onPress={() => {
          setVisible(true);
        }}
      />
      <Modal
        visible={visible}
        // android
        // onRequestClose={event => {
        //   setVisible(false);
        // }}
        // 透明
        transparent={true}
        // 状态栏透明
        statusBarTranslucent={true}
        // 动画方式
        // animationType={'slide'} // fade 渐变  slide 滑动

        // 展示 和 消失 的回调函数
        onShow={() => {
          console.log("onShow...");
        }}
        onDismiss={() => {
          console.log("onDismiss...");
        }}
      >
        <View style={styles.blank}></View>
        <View style={styles.content}>
          <SectionList
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
            ListHeaderComponent={() => (
              <View>
                <Text style={styles.section_header}>ListHeaderComponent</Text>
                <Button
                  title={"关闭弹窗"}
                  onPress={() => {
                    setVisible(false);
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    setVisible(false);
                  }}
                  style={{
                    width: 24,
                    height: 24,
                    position: "absolute",
                    right: 16,
                    top: 30,
                  }}
                >
                  <Image source={icon_close_modal} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
              </View>
            )}
            // 分组吸顶
            stickySectionHeadersEnabled={true}
            keyExtractor={(item, index) => `${item}-${index}`}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "column",
    backgroundColor: "#cccccc",
  },
  blank: {
    height: "10%",
    width: "100%",
    backgroundColor: "#00000050",
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "pink",
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
