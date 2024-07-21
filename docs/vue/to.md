## toRef

`toRef` 函数用于将响应式对象的一个属性转化为一个单独的响应式引用类型。它接收两个参数：一个是响应式对象，另一个是对象的属性名。返回的是一个只读的响应式引用。

```vue
<script setup lang="ts">
import { reactive, toRef } from "vue";

const state = reactive({
  name: "123",
  age: 2024,
  sex: "男",
});

// toRef
const name = toRef(state, "name");
</script>
```

## toRefs

`toRefs` 用于将一个响应式对象拆解为普通的引用对象，其中每个属性都是一个响应式引用。

```vue
<script setup lang="ts">
import { reactive, toRefs } from "vue";

const state = reactive({
  name: "123",
  age: 2024,
  sex: "男",
});

// toRefs
const { name, age, sex } = toRefs(state);
</script>
```

## toRaw

`toRaw` 用于获取一个响应式对象的原始版本，即绕过响应式包装，直接访问底层的普通 JavaScript 对象。

```vue
<script setup lang="ts">
import { reactive, toRaw } from "vue";

const state = reactive({
  name: "123",
  age: 2024,
  sex: "男",
});

// toRaw
const rawState = toRaw(state);
</script>
```

## 源码解析
