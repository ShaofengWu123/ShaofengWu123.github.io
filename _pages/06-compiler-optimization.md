---
permalink: /study/compiler/opt
title: "Code Optimization"
sidebar:
    nav: "com" 
---



# 基本块与流图

 ## 基本块

​	**基本块指**能顺序执行的程序代码序列。其入口为：

- 程序的第一代码
- 条件或无条件转移代码所转到的目标代码
- 跟在条件或无条件转移代码后的代码

​	因此，基本块的划分规则如下：

1. 相邻入口中间的代码序列（**仅含前一入口**）。
2. 某入口到程序的停止语句代码之间的代码序列。



## 流图

​	基本块之间按照控制流方向形成的有向图。



# 循环优化

## 必经节点与回边

​	如果从流图开始节点出发到达结点n的每条路径上必须经过结点d，那么称d为n的必经节点，记做$d\ DOM\ n$。

​	n与d之间存在一条回边，当且仅当$d\ DOM\ n$，记做$n \rightarrow d$。

## 循环定义

​	循环指程序流图中有**唯一入口**的**强连通**子图。

​	**自然循环**指由某条回边($n \rightarrow d$)确定的循环，记做$Loop(n \rightarrow d)$，该循环包含的所有节点为
$$
\{d\} \cup\{all\ vertex\ that\ can\ reach\ n\ without\ passing\ d\}
$$
​	要注意判断回边确定的自然循环一定要**严格按照上述定义判断**。例子如下图：

![](/assets/images/com/natural_loop.png)

​    去除回边后的子图是无环有向图，这个过程叫做归约。结构化的流图是可归约的。

## 优化手段

代码外提：内循环不变的部分，例如外循环计数器变量，可以外提到外循环计算一次即可。

归纳变量消除：每一轮循环变化步调一致的变量可以合并。对变量x，具体方法为在循环外设置一个变量t1=0，进入循环后x=t1，完成更内的循环后，t1 += step，这样下一轮x=t1就会加上step。

强度削弱：循环中按照固定步长，每一轮循环用乘法来增长的变量可以改为加法。



注：为了方便起见，可以先用addr()来代表地址，然后之后替换成首地址加具体的偏移的形式。

# 全局数据流分析

## 到达-定值数据流分析

### 定值和引用

```pseudocode
d : x := y + z  //d是x的一个定值点
...
u : w := x + v //u是x的一个引用点
```

​	如果流图中有路径d---->u，且该路径上没有x的其它（无二义）定值，那么称**变量x在d点的定值到达u点**。

### 数据流归属分类

1. IN[B]，到达基本块入口处定值集合。
2. OUT[B]，到达基本块出口处定值集合。
3. GEN[B]，基本块产生且能到达基本块出口的定值集合。
4.  KILL[B]，由基本块注销的定值集合（这些定值不能传播或到达到块出口），**只要基本块中对某变量做了定值，那么其他不论哪个基本块中对相同变量的定值表达式都会在此块被注销**，即把所有其他基本块涉及到的对这些变量的定值都算在KILL里面。

​	例如下图：

![](/assets/images/com/数据流归属.png)

### 到达-定值数据流分析过程

​	基本方法：通过迭代计算直到各块入口、出口定值集合不变为止。最终结果可用于确定引用可能来自何处定值（ud链）。

​	迭代计算方法：

1. 计算次序：深度优先次序，即对流图深度优先遍历得到深度优先树，然后前序遍历树时最后访问结点的逆序，例如对上一章节图中，深度优先次序为：$B_1B_2B_3B_4$，每一轮迭代都按照这个顺序计算、更新。
2. 初始值：初始时$IN(B) = \emptyset$，$OUT(B) = GEN(B)$
3. 每一轮迭代依据的公式(数据流分析方程)：

$$
OUT[B] = GEN[B] ∪ (IN[B]-KILL[B]) \\
IN[B] = ∪OUT[P] , P∈Pred(B)
$$

​		即进入的定值去除掉被注销的部分，以及自身产生的定值，合起来就是到达出口处的定值。

### ud链

​	对于某一基本块内任意的引用，**如果在同一块内在引用前无定值**，那么其定值**必然来自于$IN[B]$中对应的定值**；否则只可能来自于同一块内在引用前的定值。

## 活跃变量数据流分析

### 活跃变量

```pseudocode
d : x := y + z  //d是x的一个定值点
...
u : w := x + v //u是x的一个引用点
```

​	从d点开始的某条路径上有该x值的引用，则称**x在d点活跃**。

### 变量分类

1. OUT[B] ：出口处活跃变量。
2. IN[B]：入口处活跃变量。
3. USE[B]：基本块B中有引用且该**引用前无定值**的变量集合，例如典型的`i = i+1`，该变量属于USE但不属于DEF。
4. DEF[B]：基本块B中有定值且**该定值前无引用**的变量集合。

​	例如下图：

![](/assets/images/com/活跃变量分析.png)

### 活跃变量数据流分析过程

1. 计算次序：结点深度优先序的逆序（向后流）
2. 初始值：$IN[B] = \{ \}$, $OUT[出口块]=\{ \}$(即计算次序第一块OUT为空)
3. 迭代计算公式：

$$
OUT[B] = ∪ IN[S], S∈Succ(B) \\
IN[B]     =  USE[B] ∪ (OUT[B]-DEF[B])
$$

​	即已知本块出口处活跃变量，那么入口处的活跃变量为本块中使用的变量以及出口处活跃变量去除掉本块中自己定义的变量。