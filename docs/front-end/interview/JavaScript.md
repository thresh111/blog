# JavaScript

<a name="my-anchor">如何判断 object 为空</a>

## 1. 如何判断 object 为空

```javascript
JSON.stringify(obj) === "{}"; //  处理不了 const obj = {[Symbol("a"):1]}

Object.keys(obj).length === 0; // 处理不了 const obj = {[Symbol("a"):1]}

Reflect.ownKeys(obj).length === 0; // （推荐）
```

## 2. 如何判断 object 为 null

```javascript
typeof obj === "object" && obj === null;

Object.prototype.toString.call(obj) === "[object Null]";

Object.is(object, null);
```

## 3.如何判断对象相等

```javascript
JSON.stringify(obj1) === JSON.stringify(obj2);
```

## 4.ES 每个版本引入了什么内容 {#my-anchor}

### ES6

- let const
- 模版字符串
- 箭头函数
- 类和模块
- 解构赋值
- Promise

### ES7

- Array.prototype.includes()
- 指数操作符 2\*\*3 = 8 (2 的三次方)

### ES8

- async await
- Object.values() 和 Object.entries()
- 字符串填充方法

### ES9

- Promise.prototype.finally()
- 扩展运算符
- 异步迭代器

### ES10

- String 的 trimStart 和 trimEnd 方法 (去除字符串首尾空格)
- 数组的 flat 和 flatMap 方法（处理嵌套数组）
- 动态导入

### ES11

- BigInt
- 可选操作符 ？(允许在属性访问中省略 undefined )
- 空值合并操作符 ?? (只有左边是 null 或者 undefined 才返回右边的值)
