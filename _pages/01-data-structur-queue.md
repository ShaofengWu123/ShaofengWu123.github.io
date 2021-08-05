---
permalink: /study/data-structure/queue
title: "Queue"
sidebar:
    nav: "ds" 
---

              </li>
              <li>顺序实现：循环队列
                <div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code></code></pre></div></div>
                <ul>
                  
                </ul>
              </li>
            </ul>
          </div>
          </li> 



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
<p class="notice--info"><strong>注意:</strong>链式队列由于有front和rear指针，当队列中最后一个元素出队时，**rear指针指向无意义的出队元素**，应重新给rear赋值为front</p>


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


# 栈的应用
  <ul>
    <li>操作系统中进程调度队列、I/O任务队列</li>
  </ul>