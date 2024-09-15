# useCountdown

## 功能

用于在 React 组件中实现倒计时功能。

## 参数

| Parameter    | Type   | Description                                                                                    |
| ------------ | ------ | ---------------------------------------------------------------------------------------------- |
| initialCount | number | The initial count value when the hook is used.                                                 |
| intervalMs   | number | The interval in milliseconds at which the count should decrease. Default is 1000ms (1 second). |

## 代码实现

```tsx
import { useState, useEffect } from "react";

export function useCountdown(initialCount: number, intervalMs: number = 1000) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count === 0) return;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, intervalMs);

    // 清理副作用
    return () => clearInterval(timer);
  }, [count, intervalMs]);

  return count;
}
```
