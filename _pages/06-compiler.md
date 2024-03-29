---
permalink: /study/compiler/
title: "Principles of Compiler"
sidebar:
    nav: "com" 
---

<p>此部分正在更新中！</p>

# 主要内容
此部分包括中科大编译原理课程相关内容。
- 引论
- 词法分析
- 语法分析
- 语义分析
- 中间代码生成
- 代码优化
- 代码生成

# 参考资料
- 《编译原理》第三版
- 程序员的自我修养-链接、装载与库

# 各章问题及答案
## 语法分析
- 如何理解上下文无关文法中的“上下文无关”？上下文无关文法是否能进行计数？上下文无关文法和正规式的关系是什么样的？
- 二义性文法有什么特征？
- 什么是自顶向下分析？自顶向下分析的一般是什么样的？
- 在自顶向下分析中，为什么需要消除左递归？为什么要提左因子？
- 预测分析是什么？相较于试探分析，优点何在？
- 什么是LL(1)文法？LL(1)文法和预测分析表的关系是什么样的？
- 递归下降分析如何实现？为什么对于包含有$X \rightarrow \epsilon$产生式的非终结符$X$，其递归下降分析函数`X()`可以不包含`error()`的`else`分支？如果某非终结符$X$没有空产生式，能不能推迟报错？ 
- 二义性文法有可能是LL(1)文法么？非二义性文法一定是LL(1)文法么？
- 非递归预测分析是如何实现的或者说步骤是什么样的？如何构建分析表？为什么LL(1)文法预测分析表不会发生表项冲突？
- 如果某个终结符a不属于A的起始符，但是属于A的后继符，那么M[A,a]一定有产生式填入么？什么情况下M[A,a]一定是`error()`？
- 如果想用移进-归约分析来分析二义性文法，应该怎么做？
- 为什么大多数编程语言的文法都是二义性的？
- 活前缀是什么？为什么LR分析栈内一定存放文法的活前缀？为什么称构建的DFA是“识别文法活前缀的DFA”？
- LR(0)文法和二义性文法的关系如何？SLR(1),LR(1),LALR(1)文法呢？
- LR(0)文法如何构建分析表？缺点是什么？
- SLR(1)文法与LR(0)文法的区别在哪里？其分析能力为什么相较LR(0)文法有所提升？
- LR(1)文法为什么分析能力最强？分析能力排序？
- LALR(1)为什么是LR(1)和SLR(1)的折衷？什么是同心集？作用是什么？
- 如何判断一个文法是不是SLR(1)文法？LR(1)和LALR(1)呢？
  
## 语法分析参考答案
- 如何理解上下文无关文法中的“上下文无关”？上下文无关文法是否能进行计数？上下文无关文法和正规式的关系是什么样的？
- 产生式含有相同的前缀。
- 什么是自顶向下分析？自顶向下分析的一般是什么样的？
- 在自顶向下分析中，为什么需要消除左递归？为什么要提左因子？
- 略
- 定义。LL(1)文法有唯一且不发生表项冲突的预测分析表，如果一个文法的分析表有表项冲突，那么一定不是LL(1)文法。
- 不可能，不一定。
- 实现略。推迟报错，在之后总会发现错误；不能，因为这个时候必须进行匹配，没有$\epsilon$，当然不能认为可以的任何符号相配
- 不一定，因为A可能无法推导到空，只有A能推导到空，才能在面临A后继符时采用推导到空的策略，否则只能面临A首符号，不然就错误。
- 引入优先级，可以考虑先移进或者先归约。
- 二义性文法的状态图状态更少，分析更方便。并且可以通过优先级策略来避免冲突。
- 活前缀即可变长的且不超过句柄右部的前缀；因为从左至右读取记号，在找到句柄前必然符合该句柄的活前缀，否则一定报错。
- LR文法一定不是二义性的，但非二义性的不一定是LR文法
- 见相关内容
- 归约在follow名下
- 因为把归约对应到最右推导时紧跟着的那个后继符号的名下，非常精确。LR(1) > LALR(1) > SLR(1)
- 仍然将归约放在子集名下而非follow全集，但是相对LR(1)合并了一部分同心的项目集，导致可能会产生新的归归冲突。LR(0)项目相同的LR(1)项目集。目的是合并以减少状态数。
- 要说明一个文法是SLR(1)\LR(1)\LALR(1)的，那么需要列出分析表，并说明表项不存在两种冲突。要说明不是只需要举出某个状态存在两种冲突的一种即可。对于SLR(1)只需要说明某项目移进期待符号a属于归约项目左部follow即可；LR(1)项目需要说明移进期待符号a符号是某归约项目的搜索符；如果不是LR(1)文法，那么一定不是LALR(1)，如果是LR(1)文法，还要考察同心集合并后会不会有归归冲突