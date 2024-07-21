## watch

在状态变化时执行一些“副作用”，例如更改 DOM 或根据异步操作的结果修改另一处的状态。`watch` 函数接收以下参数：

1. 侦听的属性名或属性名数组
2. 回调函数
3. 配置对象 `options`：
   - `deep`：开启深度监听，默认值为 `false`
   - `immediate`：立即执行一次回调函数，默认值为 `false`
   - `flush`：执行时机，默认值为 `pre`（组件更新之前），可选值为 `sync`（同步执行）和 `post`（组件更新之后执行）

## case1 监听单个值

```vue
<template>
  <div>
    <input type="text" v-model="message" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const message = ref<string>("watch");

watch(message, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
</script>
```

## case2 监听多个值

```vue
<template>
  <div>
    message1:
    <input type="text" v-model="message1" />
    <br />
    message2:
    <input type="text" v-model="message2" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const message1 = ref<string>("watch");
const message2 = ref<string>("watch22");

watch([message1, message2], (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
</script>
```

## case3 监听对象

- `ref` 需要开启 `deep` 选项。
- `reactive` 不需要开启 `deep` 选项，因为在源码中已经自动隐式开启了。
- 需要注意的是 `newValue` 与 `oldValue` 是一样的。

```vue
<template>
  <div>
    state:
    <input type="text" v-model="state.name" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const state = ref({
  name: "11212",
});

watch(
  state,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  },
  {
    deep: true,
  }
);
</script>
```

## case4 监听对象中的某一个属性

- 需要编写一个函数来返回该属性

```vue
<template>
  <div>
    state.name:
    <input type="text" v-model="state.name" />
    state.age:
    <input type="text" v-model="state.age" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const state = ref({
  name: "11212",
  age: 18,
});

watch(
  () => state.value.age,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  },
  {
    deep: true,
  }
);
</script>

<style scoped></style>
```
