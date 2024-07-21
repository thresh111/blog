## life-cycle

- `beforeCreate` 和 `created` 在 `setup` 语法糖模式中无法使用。
- 在 `beforeMount` 阶段读不到 DOM，`mounted` 阶段可以读取 DOM。
- `beforeUpdate` 是更新之前的 DOM 状态，`updated` 是更新之后的 DOM 状态。
- `onRenderTracked` 和 `onRenderTriggered` 接受 effect 对象。

![img](../assets/life-cycle.png)
