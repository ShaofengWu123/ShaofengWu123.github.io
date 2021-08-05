---
permalink: /study/data-structure/
title: "Data-Structure"
sidebar:
    nav: "ds" 
---

# 二叉树遍历
## 遍历算法递归实现
  先序/中序/后序/层序遍历
## 遍历算法非递归实现

## 线索二叉树
### 基本概念
  线索二叉树(线索链表)指利用二叉树中共n+1个空指针指向某节点在遍历序列中的前驱/后继形成的二叉树
### 代码实现
```c
typedef struct _ThreadNode{
  int ltag,rtag;
  struct _ThreadNode * lchild,* rchild 
}ThreadNode,*ThreadTree;
```
其中ltag和rtag表示的意义为:0表示正常父子关系，1表示前驱、后继关系

### 线索化
  即对二叉树进行一次遍历，同时将线索补充完整的过程。遍历思路(以中序为例)：  
  对左子树调用遍历函数，节点内修改pre的rtag、rchild和自身的ltag、lchild，对右子树调用遍历函数
  #### 代码实现：
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

### 线索二叉树遍历
