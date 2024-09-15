## 基本使用

```tsx
import { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";

export default function ViewDemo() {
  const viewRef = useRef<View>(null);

  useEffect(() => {
    setTimeout(() => {
      viewRef.current?.setNativeProps({
        style: {
          backgroundColor: "blue",
          marginTop: 40,
        },
      });
    }, 2000);
  }, []);

  return (
    <View
      ref={viewRef}
      onLayout={(e) => {
        console.log(e.nativeEvent);
      }}
    />
  );
}
```
