## 基本使用

`ref` 支持所有类型
`reactive` 支持引用类型 `对象`、`数组`、`Map`、`Set`、`WeakMap`、`WeakSet`
`shallowReactive` 只代理第一层属性，不支持嵌套

`ref` 取值赋值需要.value
`reactive` 取值不需要.value

```vue
<template>
  <form>
    <input type="text" v-model="state.name" />
    <br />
    <input type="text" v-model="state.name" />
    <br />
    <button @click="submit">提交</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  name: "hello",
  age: 18,
});

const submit = () => {
  console.log(state);
};
</script>
```

`reactive` 是 proxy 代理的对象，不能直接赋值，否则会破坏响应式对象
解决方案

- 数组可以使用 push ，解构等

```vue
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ item }}</li>
  </ul>

  <button @click="addSync">同步添加XXX</button>
  <button @click="addAsync">异步添加YYY</button>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const list = reactive<string[]>([]);

const addSync = () => {
  list.push("XXX");
};

const addAsync = () => {
  setTimeout(() => {
    list.push("YYY");
  }, 1000);
};
</script>
```

- 添加一个对象 ，把数组作为一个属性去赋值

```vue
<template>
  <ul>
    <li v-for="(item, index) in state.list" :key="index">{{ item }}</li>
  </ul>

  <button @click="handleClick">修改</button>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  list: ["1", "2", "3"],
});

const handleClick = () => {
  state.list = ["XXX", "YYY"];
};
</script>
```

## 源码解析

createReactiveObject 中做了 判断

- 传普通类型就报错

```typescript
if (!isObject(target)) {
  return "warn";
}
```

- target 已经被代理过，并且不是为了将响应式对象变为只读，直接 return

```typescript
if (target[ReactiveFlags.RAW] && !(isReadonly && target[ReactiveFlags.IS_REACTIVE])) {
  return target;
}
```

- 从缓存中（readonlyMap，reactiveMap）中查找，如果已经代理过，直接 return

```typescript
const existingProxy = proxyMap.get(target);
if (existingProxy) {
  return existingProxy;
}
```

- 如果在白名单中直接，直接 return

```typescript
const targetType = getTargetType(target);
if (targetType === TargetType.INVALID) {
  return target;
}
```

- 否则，创建代理对象，并缓存到缓存中（readonlyMap，reactiveMap）中

```typescript
const proxy = new Proxy(
  target,
  targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
);
ProxyMap.set(target, proxy);
return proxy;
```
