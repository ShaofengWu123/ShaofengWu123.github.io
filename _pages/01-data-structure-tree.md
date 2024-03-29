---
permalink: /study/data-structure/tree
title: "Tree"
sidebar:
    nav: "ds" 
---
# 1.树基本概念
node, <abbr title="子树的数量">degree</abbr>, leaf, branch node, <abbr title="节点最大度数">degree of tree</abbr>, level, height, <abbr title="孩子左右顺序是否能变换">ordered/disordered tree</abbr>, forest, child, parent, sibling, ancestor, descendant

# 2.二叉树


# 3.二叉树遍历
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

# 4.树、森林
## 树的存储结构
<ul>
  <li>双亲表示法</li>
  <li>孩子表示法</li>
  <ul>
    <li>多重链表</li>
    <li>孩子链表（图的邻接表）</li>
    <li>带双亲的孩子链表（双亲表示法+孩子链表）</li>
  </ul>
  <li>孩子兄弟表示法</li>
</ul>

## 树的遍历
<ul>
  <li><abbr title="先访问根，然后依次先根遍历它的子树">先根遍历</abbr>：<br>借助孩子兄弟表示法和二叉树的先序遍历实现</li>
  <li><abbr title="先依次后根遍历根的子树，然后访问根">后根遍历</abbr>：<br>借助孩子兄弟表示法和二叉树的中序遍历实现</li>
  <li>层序遍历：<br>借助孩子兄弟表示法和队列实现，但要注意孩子兄弟表示法下的层序不是原来树的层序，入队顺序应是将当前出队元素的左孩子以及左孩子所有右子孙全部入队</li>
</ul>

## 森林的存储结构
森林可使用孩子兄弟表示法存储

## 森林的遍历
以下均是在森林非空的前提下进行的
<ul>
  <li><abbr title="访问第一颗子树的根，然后先序遍历第一颗子树去掉根后的子树森林，最后先序遍历去掉第一棵树后的森林">先序遍历</abbr>：<br>借助孩子兄弟表示法和先序遍历实现，也可看做依次先根遍历子树</li>
  <li><abbr title="中序遍历第一颗子树去掉根后的子树森林，然后访问第一颗子树的根，最后中序遍历去掉第一棵树后的森林">中序遍历</abbr>：<br>借助孩子兄弟表示法和中序遍历实现，也可看做依次后根遍历子树</li>
</ul>

# 5.树和二叉树应用
## 5.1.二叉排序树
### 定义与特点
对于所有节点，其左子树所有节点小于该节点，右子树所有节点大于该节点。  
![二叉排序树](/assets/images/ds/二叉排序树.png)

*** 
### 二叉排序树常见算法
- <strong>查找算法</strong>：沿着二叉树尾递归即可
<p class="notice--info">二叉排序树平均查找长度：<br>
1. 理想情况：(n+1)/n log<sub>2</sub>n +C = O(logn)<br>
2. 最坏情况：输入序列是有序的，导致二叉排序树变为有序单链表，此时查找长度为O(n)</p>
   
- <strong>中序遍历算法</strong>：由二叉排序树的关键字大小特点可知，中序遍历序列能得到一个顺序有序序列。
- <strong>插入算法</strong>：查找不成功时，在最终查找位置的孩子处插入新节点。插入节点一定是叶子节点，这样比较方便。
- <strong>删除算法</strong>：
  - 删除节点为叶子：直接删除，双亲对应孩子指针置NULL。
  - 删除节点只有右/左孩子：删除节点，用右/左孩子替代该节点即可。
  - 删除节点同时有左右孩子：
    - 方案一：删除节点，用该节点左子树里最大的节点(即中序序列直接前驱)或者右子树里最小的节点(即中序序列的直接后继)替换该节点。此时相当于删除节点为直接前驱节点/后继结点，递归调用删除算法，最终化为前两种情况(叶子/只有一个子树)
    - 方案二：删除节点，用该节点左孩子替换该节点，然后将该节点右子树接到对应的位置上去。对于该节点左子树，相当于删除根，递归调用删除算法。

- <strong>构造算法</strong>：给定序列，构造唯一的二叉排序树。对于一个序列来说，构造二叉排序树就是一个排序的过程。


### 二叉排序树经典问题
<ul>
  <li>插入节点是不是一定为叶子节点？ 不一定，若为空树，插入节点为根。</li>
  <li>最小元素无左孩子，最大元素无右孩子，此命题是否正确？ 正确。</li>
  <li>最小元素和最大元素是否一定为叶节点？ 不一定。</li>
  <li>判断二叉树是否为二叉排序树的算法？ 先序遍历，访问内容为判断左孩子是否小于当前节点，右孩子是否大于当前节点。</li>
  <li>...</li>
</ul>

***

## 5.2.平衡二叉树(AVL)
### 定义和特点
既是平衡树又是二叉排序树的树。其中平衡树左右子树深度相差最大为1，且左右子树也是平衡树。平衡二叉排序树可以解决二叉排序树性能受形态影响的缺点。

***
### 平衡二叉树的性质
对于深度为h的平衡二叉树，其拥有的最少节点数为N<sub>h</sub>，其中N<sub>h</sub> = N<sub>h-1</sub>+N<sub>h-2</sub>+1。  
因此对于拥有n个节点的平衡二叉树，可反推出h为O(logn)（斐波那契数列），平均查找长度为O(logn)


### 平衡化旋转
平衡化旋转可用于平衡二叉树的构造
- LL型旋转：某节点的左孩子的左子树插入节点后引起该节点失衡，进行右单旋

![LL](/assets/images/ds/LL型.gif)
- RR型旋转：某节点的右孩子的右子树插入节点后引起该节点失衡，进行左单旋

![RR](/assets/images/ds/RR型.gif)
- LR型旋转：某节点的左孩子的右子树插入节点后引起该节点失衡，先左单旋转化成LL型，然后右单旋

![LR](/assets/images/ds/LR型.png)
- RL型旋转：某节点的右孩子的左子树插入节点后引起该节点失衡，先右单旋转化成RR型，然后左单旋
![RL](/assets/images/ds/RL型.png)


***
### 平衡二叉树常见算法
- <strong>平衡因子与平衡二叉树的判定</strong>  
    平衡因子 = 左子树深度-右子树深度，平衡二叉树节点平衡因子必为0,-1,1。通过后序遍历递归计算各节点左右子树的高度，从而获得平衡因子，并判断是否符合AVL的定义。
 
![平衡二叉树与平衡因子](/assets/images/ds/平衡二叉树与平衡因子.png)
- <strong>平衡二叉排序树的构造</strong>    
    方法：按给定序列构造二叉排序树，每增加一个节点就从增加节点位置向上检查平衡因子(每次调整的都是最小失去平衡子树)，对失衡节点执行平衡化旋转即可。

- <strong>平衡二叉树的查找</strong>     
  查找算法与普通的二叉排序树相同
  <p class="notice--info">AVL平均查找长度为O(log<sub>2</sub>n)与普通二叉树相同，但是平衡二叉树对某固定数量的节点存在最大高度(即最多比较次数固定)</p>


## 5.3.Huffman树
### 基本概念   
- 前缀码：不为彼此前缀的编码
- 内部路径/外部路径
- 带权路径长度
- 哈夫曼树：带权路径长度最小的二叉树
### 相关问题  
- 包含n个权值的Huffman树总共多少节点？ 2n-1
- 由权值列表画Huffman树 
- 最佳判定树 
<p class="notice--info"><strong>注意：</strong>最佳判定树不一定能套用Huffman算法来构建，例如成绩判定问题，因为if else语句一次只能判断大于还是小于等于，构建Huffman树必须使用相邻的成绩区间项相结合，但权值最小的两个区间不一定相邻</p>
- 计算外部路径、带权路径

### Huffman算法  
构建Huffman树
### Huffman树以及Huffman算法的代码实现   
结构体数组

## 5.4.B-树
## 5.5.B+树
