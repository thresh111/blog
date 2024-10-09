## 基本使用

```tsx
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import avatar from "../assets/img/avatar.jpg";

export default function ImageDemo() {
  const imgRef = useRef<Image>(null);

  useEffect(() => {
    Image.getSize(
      "https://github.githubassets.com/assets/univers24-banner-graphic-8-763b557479be.webp",
      (width, height) => {
        console.log("Image.getSize ...", width, height);
      },
      (error) => {
        console.log(error);
      }
    );
    Image.prefetch(
      "https://github.githubassets.com/assets/univers24-banner-graphic-8-763b557479be.webp"
    )
      .then((res) => {
        console.log(res, "2222");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.root}>
      <Image
        ref={imgRef}
        // source={{url: 'http:xxxx.jpg'}}  // 网络图片
        source={avatar} // 本地图片
        // defaultSource={avatar}  // 默认图
        style={styles.img}
        // blurRadius={10} // 模糊
        fadeDuration={200} // 渐进加载
        // onLoad={event => console.log('onLoad ...', event.nativeEvent)}
        onLoadStart={() => console.log("onLoadStart ...")} // 加载失败也会触发这个回调函数
        onLoadEnd={() => console.log("onLoadEnd ...")} // 加载失败不会触发这个回调函数
        onError={() => console.log("onError ...")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "#c0c0c0",
  },
  img: {
    width: 240,
    height: 240,
    backgroundColor: "#a0a0a0",
    resizeMode: "contain",
    tintColor: "red", // 仅支持png图片
  },
});
```
