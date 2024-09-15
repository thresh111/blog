## diff

![img](../assets/vue3diff.png)

## 无键（Unkeyed）子节点更新：`Patch Unkeyed Children`

对于没有键的子节点，更新过程分为三个步骤：

1. **替换** - 替换不匹配的节点。
2. **新增** - 添加新节点。
3. **删除** - 移除多余的旧节点。

## 有键（Keyed）子节点更新：`Patch Keyed Children`

当子节点具有键时，更新流程更加复杂，涉及五个步骤：

1. **前序算法** - 使用 `isSameVNodeType` 函数比较节点类型和键。当遇到不匹配时，停止比较并进入尾序算法。

   ```typescript
   function isSameVNodeType(n1: VNode, n2: VNode) {
     return n1.type === n2.type && n1.key === n2.key;
   }
   ```

2. **尾序算法** - 继续从末尾开始比较，寻找匹配的节点。

3. **新增节点** - 当检测到新节点不存在于旧节点中时，调用 `patch(null, n2)` 插入新节点。

4. **卸载节点** - 如果旧节点中存在但新节点中不存在的节点，则调用 `unmount` 方法卸载该节点。

5. **处理乱序节点** - 当节点顺序发生变化时，采用最长递增子序列算法来确定哪些节点需要移动。

   ### 最长递增子序列算法 (LIS)

   1. **构建映射关系** - 创建新节点的键到索引映射，同时对键进行排序。

   2. **删除多余节点** - 创建新节点在旧节点中的位置数组，并基于此数组识别并删除多余的旧节点或不存在于新节点集中的节点。

   3. **求解最长递增子序列**

      - 利用贪心算法和二分查找计算最长递增子序列。

      - 遍历过程中，如果当前节点不在子序列中，则表示需要移动该节点`moved = true`。

      ```typescript
      getSequence(arr: number[]);

      if (当前遍历的节点不在这个子序列) {
        move(nextChild, container, anchor, MoveType.REORDER);
      } else {
        // 节点在序列中，跳过
        j--;
      }
      ```
