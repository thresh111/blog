## 案例

```tsx
import { useRef } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import bg_card from "../assets/img/bg_card.png";
import icon_bank from "../assets/img/icon_bank.png";
export default function ImageBackgroundDemo() {
  return (
    <View style={styles.root}>
      <ImageBackground style={styles.viewStyle} imageStyle={styles.imgStyle} source={bg_card}>
        <Image source={icon_bank} style={styles.icon_logo} />
        <Text style={styles.text_bank}>
          {`招商银行\n`}
          <Text style={styles.card_type}>
            {`储蓄卡 \n\n`}
            <Text style={styles.card_number}>●●●● ●●●● ●●●● 3068</Text>
          </Text>
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "#c0c0c0",
    flexDirection: "column",
  },
  viewStyle: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imgStyle: {
    resizeMode: "cover",
    borderRadius: 14,
  },
  icon_logo: {
    width: 48,
    height: 48,
    marginLeft: 20,
    marginTop: 20,
  },
  text_bank: {
    fontSize: 24,
    color: "#fff",
    marginLeft: 10,
    marginTop: 24,
    fontWeight: "bold",
  },
  card_type: {
    fontSize: 20,
    color: "#ffffffA0",
    fontWeight: "normal",
  },
  card_number: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff",
  },
});
```

## 效果

![alt text](./img/image.png)
