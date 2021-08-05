---
permalink: /study/data-structure/stack
title: "Data-Structure"
sidebar:
    nav: "ds" 
---
# 基本定义
仅限定在表尾或者说栈顶进行插入删除操作的特殊线性表，LIFO


# 数据结构实现

## 顺序实现：顺序栈
### 代码
```c
#define STACK_INIT_SIZE 100
#define STACK_INCREMENT 10
  typedef struct _sqstack{
      Elemtype* base;
      Elemtype* top;
      int stacksize;//已分配的存储空间
  }SqStack;
```
### 特点
栈空：base==top，栈满：top-base==stacksize，top指向栈顶元素下一个位置，也可以定义top指向栈顶元素，初始时top为-1

### 共享栈
两个栈共享一块存储空间，栈顶对向生长，可以节省存储空间并防止上溢(top1==top0即停止增长，不会出现top超出存储空间边界的情况)
![共享栈](/assets/images/ds/shared_stack.png)

## 链式实现：链式栈
```c
typedef struct _stacknode{
  Elemtype data;
  struct _stacknode * next;
}StackNode;

typedef struct _linkstack{
  StackNode * top;
}LinkStack;
```
### 特点
栈不会发生栈满溢出，并且入栈出栈都在链表头部实现(有没有头节点取决于具体实现)


# 基本操作
判断栈空，出栈，入栈，清空栈，销毁栈


# 栈的应用
  <ul>
    <li>数制转换计算时储存结果并按顺序输出</li>
    <li>行编辑器的实现</li>
    <li>检测括号匹配</li>
    <li>中缀式求值：
      <ul>
        <li>双栈求值（符号栈和数字栈）：数字入栈；当前符号优先级小于栈顶符号优先级，处理栈顶符号；当前符号优先级大于栈顶符号优先级，入栈等待；相等，消配对括号</li>
        <li>中缀式转后缀式（逆波兰式）：数字直接输出，注意碰到右括号时一直出栈直到左括号出栈，转为后缀式优先计算中缀式后半部分；逆波兰式求值一次弹出两个数字，此时运算顺序已经排列好了</li>
        <li>中缀式转前缀式（波兰式）：和前缀式构造类似，从中缀式最右侧开始倒着读，输出放入一个队列中，数字输出，符号优先级低于栈顶那么栈顶出栈，注意碰到右括号时一直出栈直到左括号出栈，转为前缀式优先计算中缀式前半半部分；波兰式求值从右往左进行，同样遇到符号一次弹出两个数字，运算顺序已经排列好</li>
      </ul>
    <li>函数调用
      <ul>
        <li>调用过程：<abbr title="包括返回地址、局部变量、寄存器。不同语言、不同编译器存在差异">栈帧</abbr>入栈、执行被调函数、出栈、按返回地址继续执行主调函数</li>
        <li><abbr title="直接或间接调用、定义自己">递归</abbr>
          <ul>
            <li>典型问题：汉诺塔、斐波那契数列、阶乘时间空间复杂度（On）</li>
            <li>提高算法时空性能：尾递归、全局栈存储信息</li>
          </ul>
      </ul>
    </li>
  </ul>