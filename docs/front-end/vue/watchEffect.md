## watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

`watchEffect` 接收以下参数：

1. `effect`：一个函数 `(onCleanup: OnCleanup) => void`
2. `options`：配置对象 `WatchEffectOptions`
   - `flush`：执行时机，默认值为 `pre`（组件更新之前），可选值为 `sync`（同步执行）和 `post`（组件更新之后执行）
   - `onTrack`：当依赖被追踪时的回调函数 `(event: DebuggerEvent) => void`
   - `onTrigger`：当依赖变化时的回调函数 `(event: DebuggerEvent) => void`

## case1 监听数据变化

`watchEffect` 内包含哪个状态，就自动监听哪个状态。

```vue
<template>
  <div>
    state1:
    <input type="text" v-model="state1" />
    <br />
    state2:
    <input type="text" v-model="state2" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const state1 = ref("state1");
const state2 = ref("state2");

watchEffect(() => {
  console.log("watchEffect -- state1", state1.value);
  console.log("watchEffect -- state2", state2.value);
});
</script>
```

## case2 回调函数

`onInvalidate` 回调函数不会在页面初始化时执行，只会在监听属性变化时执行。

```vue
<template>
  <div>
    state1:
    <input type="text" v-model="state1" />
    <br />
    state2:
    <input type="text" v-model="state2" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const state1 = ref("state1");
const state2 = ref("state2");

watchEffect((onInvalidate) => {
  onInvalidate(() => {
    console.log("before");
  });

  console.log("watchEffect -- state1", state1.value);
  console.log("watchEffect -- state2", state2.value);
});
</script>
```

## case3 停止监听

```vue
<template>
  <div>
    state1:
    <input type="text" v-model="state1" />
    <br />
    state2:
    <input type="text" v-model="state2" />
    <br />
    <button @click="stopWatchEffect">停止监听</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const state1 = ref("state1");
const state2 = ref("state2");

const stop = watchEffect((onInvalidate) => {
  onInvalidate(() => {
    console.log("before");
  });

  console.log("watchEffect -- state1", state1.value);
  console.log("watchEffect -- state2", state2.value);
});

const stopWatchEffect = () => stop();
</script>
```

## case4 读取 `DOM` 属性

```vue
<template>
  <div>
    state1:
    <input id="ipt" type="text" v-model="state1" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const state1 = ref("state1");

watchEffect(
  (onInvalidate) => {
    const ipt = document.getElementById("ipt") as HTMLInputElement;
    onInvalidate(() => {
      console.log("before");
    });
    console.log(ipt, "HTMLInputElement");
  },
  {
    flush: "post",
  }
);
</script>
```

## case4 配合 `onTrigger` 进行 `debugger`

```vue
<template>
  <div>
    state1:
    <input type="text" v-model="state1" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const state1 = ref("state1");

watchEffect(
  () => {
    console.log("state1", state1.value);
  },
  {
    onTrigger(event) {
      debugger;
    },
  }
);
</script>
```
