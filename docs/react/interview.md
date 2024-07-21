---
title: react interview questions
pageClass: home
---

## 1.React 为什么要设计 hook ？ 解决什么问题 ?

总的来说是以下三个原因

- Component 非 UI 逻辑复用困难。
- 组件的生命周期函数不适合 side effect 逻辑的管理
- 不友好的 Class Component.

## 2.类组件的生命周期方法 ?

React 组件的生命周期可以分为三个阶段:挂载阶段、更新阶段和卸载阶段。

- 挂载阶段包括 `constructor`、`render`、`componentDidMount` 等方法，用于初始化组件、染到真实 DOM 和处理副作用。
- 更新阶段包括 `shouldComponentUpdate`、`render`、`componentDidUpdate` 等方法，用于控制组件的重新渲染和处理更新后的副作用。
- 卸载阶段包括 `componentWilUnmount` 方法，用于清理组件产生的副作用和资源。

## 3.状态 state 和属性 props 区别 ?

状态 state:React 组件的可变数据，用于存储组件内部的状态信息。状态可以通过 `setState` 方法进行更新并且只能在组件内部访问和修改。
属性 props:是 React 组件的外部输入，用于传递数据和配置信息给组件。属性是不可变的，只能由父组件传递给子组件，子组件不能直接修改父组件传递的属性。
