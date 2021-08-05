---
permalink: /study/data-structure/linear-list
title: "Linear List"
sidebar:
    nav: "ds" 
---
# 基本定义
n(n>=0)个具有相同特性数据元素(每个数据元素可能包含多个数据项)组成的有限序列。

# 数据结构实现

## 顺序实现：顺序表

```c
#define LIST_INIT_SIZE 100
#define LIST_INCREMENT 10
typedef struct _sqlist{
    Elemtype* elem;
    int length;
    int size;
}SqList;
```
## 链式实现
链式表 (用一组任意的存储单元存储线性表中元素)
```c
#define LIST_INIT_SIZE 100
typedef struct _lnode{
    Elemtype* elem;
    struct _lnode * next;  
}Lnode,*LinkList;
```
其他的链式表：循环链表（尾部next回到头结点head）、双向链表、双向循环链表

## 一些典型问题
  <ul>
    <li>顺序表和链式表的比较，例如是否能随机存取和顺序存取</li>
    <li>链式表不同实现对于线性结构(线性表、栈、队列)的不同操作时间复杂度的影响
    <li>时间复杂度分析：线性表插入、删除，链式表插入、删除...</li>
    <li>容易搞错的基本操作：清空表、销毁表</li>
  </ul>
