---
permalink: /study/data-structure/tree
title: "Tree"
sidebar:
    nav: "ds" 
---
# 树基本概念
# 二叉树
# 二叉树遍历
## 遍历算法递归实现
  先序/中序/后序/层序遍历
## 遍历算法非递归实现

## 线索二叉树
### 基本概念
  线索二叉树(线索链表)指利用二叉树中共n+1个空指针指向某节点在遍历序列中的前驱/后继形成的二叉树
### 数据结构定义
```c
typedef struct _ThreadNode{
  int ltag,rtag;
  struct _ThreadNode * lchild,* rchild 
}ThreadNode,*ThreadTree;
```
其中ltag和rtag表示的意义为:0表示正常父子关系，1表示前驱、后继关系

### 线索化
  即对二叉树进行一次遍历，同时将线索补充完整的过程。遍历思路(以中序为例)：  
  对左子树调用遍历函数，节点内修改pre的rtag、rchild和自身的ltag、lchild，修改时要注意一些特殊情况(例如前驱节点为NULL，说明当前节点是第一个、空树跳过遍历)，对右子树调用遍历函数
![中序线索二叉树](/assets/images/ds/threadtree.png)
#### 代码实现
```c
void CreateInThread(ThreadTree root){
  static ThreadTree pre=NULL;
  InThread(root);
  //last node
  if(pre!=NULL){
    pre->rtag=1;
    pre->rchild=NULL;
  }
}
void InThread(ThreadTree root){
  if(!root){
    InThread(root->lchild);
    root->rtag=0;root->ltag=0;
    if(pre!=NULL&&pre->rchild==NULL){
      pre->rtag = 1;
      pre->rchild = root;
    }
    if(root->lchild==NULL){
      root->ltag = 1;
      root->lchild = pre;
    }
    pre= root;
    InThread(root->rchild);
  }
  else{;}
}
```
先序、后序同理。


### 线索二叉树遍历  
  线索二叉树遍历无需使用递归算法，可按照循环的方式进行遍历。重点在于寻找到当前节点的下一个节点，以中序遍历为例：
  1.若rtag==1，那么rchild为后继
  2.若rtag==0，那么右子树最左下方节点为后继
  具体函数的代码实现略，以下为遍历主函数的实现
```c
void InOrder(ThreaTree root){
  ThreadTree p=NULL;
  for(p=FindFirst(root);p!=NULL;p=FindNext(p)){
    Visit(p);
  }
}
```

# 树、森林
# 树和二叉树应用
## 二叉排序树
## 平衡二叉树
## Huffman树
