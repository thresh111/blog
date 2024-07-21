## 基本使用

1. 选项式写法 支持一个对象传入 `get` `set` 函数 自定义操作

```vue
<template>
  <div>
    姓：
    <input type="text" v-model="firstName" />
  </div>
  <div>
    名：
    <input type="text" v-model="lastName" />
  </div>

  <div>姓名： {{ name }}</div>

  <button @click="handleChange">修改值</button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const firstName = ref("张");
const lastName = ref("三");

let name = computed({
  get() {
    return firstName.value + "--" + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split("--");
  },
});
const handleChange = () => {
  name.value = "李--四";
};
</script>
```

2. 函数式写法 只能支持一个 `getter` 函数不允许修改值

```vue
<template>
  <div>
    姓：
    <input type="text" v-model="firstName" />
  </div>
  <div>
    名：
    <input type="text" v-model="lastName" />
  </div>

  <div>姓名： {{ name }}</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const firstName = ref("张");
const lastName = ref("三");

let name = computed(() => firstName.value + "--" + lastName.value);
</script>
```

## 案例

```vue
<template>
  <div>
    <input type="text" v-model="keyword" />
    <table border width="600" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <td>名称</td>
          <td>数量</td>
          <td>单价</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchValue" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <button @click="item.nums > 1 ? item.nums-- : null">-</button>
            {{ item.nums }}
            <button @click="item.nums < 99 ? item.nums++ : null">+</button>
          </td>
          <td>{{ item.price * item.nums }}</td>
          <td>
            <button @click="data.splice(index, 1)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>总价：{{ total }}</tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

type DataType = {
  name: string;
  price: number;
  nums: number;
};

const keyword = ref<string>("");

const data = reactive<DataType[]>([
  {
    name: "apple",
    price: 10,
    nums: 1,
  },
  {
    name: "banana",
    price: 20,
    nums: 2,
  },
  {
    name: "orange",
    price: 30,
    nums: 3,
  },
]);

const total = computed(() => data.reduce((pre, cur) => pre + cur.price * cur.nums, 0));

const searchValue = computed(() => data.filter((item) => item.name.includes(keyword.value)));
</script>
```

## 源码

computed 支持两种模式 `选项式` 和 `函数式`

第一步 会进行格式化参数

```typescript
let getter: ComputedGetter<T>;
let setter: ComputedSetter<T>;
```

1. 如果传过来的参数是一个函数，那么就是`只读的`
   就会把传过来的 `getter`函数`getterOrOptions` 赋值给`getter`
   setter 不支持设置值 ，不然就报错

2. 如果传过来的参数是一个对象，那么就可以读取值，设置值的

```typescript
const onlyGetter = isFunction(getterOrOptions);
if (onlyGetter) {
  getter = getterOrOptions;
  setter = `warnError`;
} else {
  getter = getterOrOptions.get;
  setter = getterOrOptions.set;
}
```

初始化之后，会将 `getter` 和 `setter` 传到给 `ComputedRefImpl`

ComputedRefImpl 是一个类，里面有 `value` 属性，`dirty` 属性
