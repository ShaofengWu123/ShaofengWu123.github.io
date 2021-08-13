---
permalink: /study/data-structure/queue
title: "Queue"
sidebar:
    nav: "ds" 
---
# 基本定义
仅限定在一端进行插入，另一端进行删除的特殊线性表，FIFO

***
# 数据结构实现

## 链式实现：链式队列
### 代码
```c
typedef struct _queuenode{
  Elemtype data;
  struct _queuenode * next;
}QueueNode;
                
typedef struct _linkqueue{
  QueueNode * front, *rear;//front指针恒等于head，这样出队方便改变指针指向
}LinkQueue;
```
### 特点
适合元素变动大的情况，并且能减少空间碎片化问题
<p class="notice--info"><strong>注意:</strong>链式队列由于有front和rear指针，当队列中最后一个元素出队时，<strong>rear指针指向无意义的出队元素</strong>，应重新给rear赋值为front</p>


## 顺序实现：循环队列
```c
#define MAXSIZE 100
typedef struct _sqqueue{
  Elemtype *queue;
  int front, rear;//用下标指示队头队尾
}SqQueue;
```
### 特点
循环队列一般留出一个位置用于区分队满和队空，rear指向队尾元素下一个位置
<ul>
  <li>入队：rear = (rear+1)%MAXSIZE</li>
  <li>出队：front = (front+1)%MAXSIZE</li>
  <li>判断队满：front==(rear+1)%MAXSIZE</li>
  <li>判断队空：front==rear</li>
</ul>


***

# 基本操作
判断队空，判断队满，出队，入队

***

# 双端队列
指不止一端可以出队或者入队的特殊队列。分为如下三类
- 双端队列：两端均可入队/出队
- 输入受限的双端队列：只有一端可以入队，两端均可出队
- 输出受限的双端队列：只有一端可以出队，两端均可入队 
<p class="notice--info">Tips：判断输出序列是否合法，可以将输出序列按可能的方式排列到队列内，再考虑是否可以由指定的输入序列得到这样的排列</p>

***

# 队列的应用
  <ul>
    <li>操作系统中进程调度队列、I/O任务队列</li>
  </ul>