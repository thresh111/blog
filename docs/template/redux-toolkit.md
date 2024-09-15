## 1. 安装

```bash
pnpm install @reduxjs/toolkit react-redux

```

## 2. 配置 Redux Store

```typescript
// src/store/index.ts

import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

export default configureStore({
  reducer: {},
});
```

## 3.为 React 提供 Redux Store

```typescript
import store from "./store";
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>;
```

## 4.创建 Redux State Slice

```typescript
// src/store/features/counter/counterSlice.ts

import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

const initialState = {
  value: 0,
  xxx: [],
  loading: false,
};

export const getXXX = createAsyncThunk<XXX[], void>("get/XXX", async (action, state) => {
  const res: AxiosRes<ResData<XXX>> = await axios.get("/api/xxx/xxx");
  return res.data.data;
});

export const xxxSlice = createSlice({
  name: "xxx",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getXXX.pending, () => {
        state.loading = true;
      })
      .addCase(getXXX.fulfilled, () => {
        state.xxx = res.payload;
        state.loading = false;
      });
  },
});

// 导出 state 选择器
export const xxxLoading = (state: RootState) => state.xxx.loading;
export const xxxCount = (state: RootState) => state.xxx.count;

// 导出 actions
export const { increment, decrement, incrementByAmount } = xxxSlice.actions;

// 导出 reducer
export default xxxSlice.reducer;
```

## 5.将 Slice Reducers 添加到 Store 中

```typescript
// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

# 6.在 React 组件中使用 Redux 状态和操作

```tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, xxxCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(xxxCount);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
}
```
