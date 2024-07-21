## ref

`ref` 创建一个深层次的响应式 ref。

## shallowRef

`shallowRef` 创建一个浅层响应式 ref，只到`.value `层

```markdown
shallowRef 和 ref 不能一起写的，会影响 shallowRef 造成视图的更新
```

## triggerRef

`triggerRef` 会强制更新收集的依赖，参数为响应式依赖项

## customRef

`customRef` 可以自定义依赖项的依赖收集和依赖更新

```vue
<script setup lang="ts">
import { customRef } from "vue";

// track 收集依赖
// trigger 更新依赖
function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
      },
    };
  });
}
</script>
```

ref 获取 DOM

```vue
<template>
  <div ref="dom"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dom = ref<HTMLDivElement>();
console.log(dom.value?.innerText);
</script>
```

## 源码解析

```typescript
export function ref(value?: unknown) {
  return createRef(value, false);
}

function createRef(rawValue: unknown, shallow: boolean) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
```

```typescript
/**
 * RefImpl 类实现了 Vue 中的 Ref 接口，用于创建响应式的数据引用。
 * Ref 是响应式系统中的一个重要概念，它允许你对响应式数据进行存取和监听。
 *
 * @template T Ref 所引用的数据类型。
 */
class RefImpl<T> {
  /**
   * 存储响应式处理后的值，用于对外提供访问。
   */
  private _value: T;

  /**
   * 存储原始值，即未经过响应式处理的值。
   */
  private _rawValue: T;

  /**
   * 可能存在的依赖跟踪对象，用于响应式系统内部管理。
   */
  public dep?: Dep = undefined;

  /**
   * 标记当前对象为 Ref 实例，用于内部识别。
   */
  public readonly __v_isRef = true;

  /**
   * 构造函数初始化 Ref 实例。
   *
   * @param value 初始值，可以是任何类型。
   * @param __v_isShallow 是否为浅层 Ref 的标记，用于控制值的处理方式。
   */
  constructor(value: T, public readonly __v_isShallow: boolean) {
    // 根据是否为浅层 Ref，决定是直接使用值还是进行响应式处理
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }

  /**
   * 获取 Ref 的当前值。
   *
   * 访问 Ref 的值会触发依赖跟踪，确保后续对值的修改可以被响应。
   *
   * @returns 当前的响应式值。
   */
  get value() {
    trackRefValue(this);
    return this._value;
  }

  /**
   * 设置 Ref 的新值。
   *
   * 设置新值时，如果值发生了变化，会触发相应的依赖更新，并更新内部的响应式值。
   *
   * @param newVal 新的值。
   */
  set value(newVal) {
    // 判断是否直接使用新值，还是进行响应式处理
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);

    // 如果新值和原始值不同，进行更新处理
    if (hasChanged(newVal, this._rawValue)) {
      const oldVal = this._rawValue;
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      // 触发值更新的回调，通知依赖该 Ref 的地方更新。
      triggerRefValue(this, DirtyLevels.Dirty, newVal, oldVal);
    }
  }
}
```
