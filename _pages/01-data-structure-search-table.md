---
permalink: /study/data-structure/search-table
title: "查找表（Search table）"
sidebar:
    nav: "ds" 
---

# 基本概念
## 关键字
- 关键字：数据元素中某数据项的值，用于标识一个或多个数据元素
- 主关键字：只能识别唯一一个记录的关键字
- 次关键字：可以识别多个记录的关键字

## 静态/动态查找表
- 静态查找表：仅做查询和检索操作的查找表
- 动态查找表：查找过程中插入或删除记录的查找表

## 平均查找长度(ASL)
指查找成功/不成功时平均比较的次数，一般而言，查找成功时ASL=Σpici；查找不成功时设置虚拟节点，假设等概率查找到虚拟节点，从而计算ASL

<ul>
  <li>查找成功ASL：需要知道每种成功情况(即表中有这个元素的情况)的概率(一般假设为等概率)、查找长度</li>
  <li>查找不成功ASL：需要知道每种不成功情况概率(一般假设为等概率)、查找长度。
    <ul>
      <li>例如：哈希表(除留余数法)不成功的情况包括余数为0,1,...,p-1共p种情况，而不是表中每个位置不成功共m种情况</li>
    </ul>
  </li>
</ul>


## 同义词
指哈希值相同元素

# 静态查找表
## 顺序查找表
<ul>
  <li>查找方式：设置0处为哨兵，<strong>从后往前</strong>查找，到达哨兵停止。</li>
  <li>ASL：<br>查找成功时，若为等概率查找，ASL为(n+1)/2；不等概率查找，则越往后p越大，则ASL越小。<br>查找失败时，ASL = n + 1<br>算法的ASL：查找成功ASL和失败ASL的期望</li>
</ul>

## 有序查找表
<ul>
  <li>查找方式：记录已经按关键字排序，因此和顺序查找表查找方式不同。
    <ul>
      <li>折半查找 <br>比较次数不超过(log<sub>2</sub>n)下界+1，时间复杂度O(logn)，并且需要随机访问</li>
      <li>斐波拉契查找：若表长为F<sub>n+1</sub>-1 = F<sub>n</sub>-1 + F<sub>n-1</sub>-1 + 1，那么将表分成F<sub>n</sub>-1（前半）和F<sub>n-1</sub>-1（后半）两部分；若表长不为F<sub>n+1</sub>-1，取表前F<sub>n+1</sub>-1项，让n尽量大。</li>
      <li>插值查找：假设关键字“均匀分布”，i = (key-最小key)/(最大key-最小key) * 查找表长度</li>
    </ul>
  </li>
</ul>

## 索引顺序表
索引顺序表是块间有序，块内无序的查找表<br>
<img src="/assets/images/ds/索引顺序表.png">
<ul>
  <li>查找方式：利用索引表确定块，然后在块内顺序查找。</li>
</ul>
<p class="notice--info"><strong>静态查找表插入删除最好的时间复杂度为？查找呢？</strong> <br>答：插入删除最好的为O(1)，即无序链表查找表(不把查找元素算在内)；查找最好为O(logn)，即有序查找表的查找，例如折半查找。</p>


# 动态查找表
## B-树
<img src="/assets/images/ds/B-树例子.png">

### 定义
B-树为多路平衡查找树，一棵非空的m阶B-树满足以下的性质：
1、根节点至少有两棵子树，至多有m棵子树。<br>
2、除根节点外的所有非终端节点至少有⌈m/2⌉棵子树，至多有m棵子树。<br>
3、所有的叶子节点都在同一层上。<br>
4、每个节点包含信息(n,A0,K1,A1,K2,...,Kn,An)，其中n是该节点关键字数量，Ai是子树指针，Ki是关键字。另外该节点应该还包含指向对应关键字记录的指针，这里省略没有写出。<strong>注意</strong>：根据B-树的定义，由于n+1为子树数量，
因此⌈m/2⌉-1 <= n <= m-1，即节点的关键字记录至少⌈m/2⌉-1个，至多m-1个，这决定了子树的数量。<br>
B-树每个节点为磁盘的一页，在B-树上寻找节点在磁盘内进行，找到节点后将这一页读入内存，然后在内存上寻找对应的关键字。

### B-树存储结构
```c
#define M 3
typedef struct _BTNode{
  int keynum;
  KeyElemtype key[M+1];//关键字，key[0]不使用，最多只用到key[M-1]
  BTNode * ptr[M+1];//子树指针，ptr[0]使用，最多ptr[M-1]
  RecElemtype * recptr[M+1];//关键字记录指针，recptr[0]不使用 
  BTNode * parent;//双亲指针
}BTNode;
```

### B-树操作      
#### B-树的查找
即在B-树上找节点和在节点上找关键字。B-树每个节点为磁盘的一页，在B-树上寻找节点在磁盘内进行，找到节点后将这一页读入内存，然后在内存上寻找对应的关键字。
                      <img src="/assets/images/ds/B-树查找算法.png">

#### B-树插入：
1. 叶子结点的关键字数 < m-1：直接插入<br>
2. 叶子结点的关键字数 = m-1：将结点“分裂”，分裂时要注意必须符合B-树定义，即节点对半分裂，向父节点插入位于原节点中间的关键字，此时如果父节点不满足B-树定义，那么父节点也要发生分裂。
<img src="/assets/images/ds/B-树插入.png">

#### B-树删除
（参考书本P245例子）  
1. 叶子节点关键字数 &gt ⌈m/2⌉-1，直接删除
2. 叶子节点关键字数 = ⌈m/2⌉-1，删除节点后用父节点补充该节点，用兄弟节点补充父节点；若兄弟节点关键字数 = ⌈m/2⌉-1，无法补充，那么将父节点中分界关键字、该节点剩余部分合并到兄弟节点中，如果这导致父节点关键字过少，那么同理将父节点剩余信息（包括指针和关键字）和其父节点合并到兄弟节点中。
  一个典型例子是3阶B-树，父节点合并到左孩子后，父节点只有一个指针，这时将其和其父节点合并到右兄弟，最左侧指针来自于剩下的那个指针。
3. 删除非终端节点中关键字，若删除后关键字数仍大于等于⌈m/2⌉-1，将子树合并即可；若小于⌈m/2⌉-1，用其左子树中最大值替换它，然后问题转化成非终端节点关键字的删除。

<img src="/assets/images/ds/B-树删除.png">

## B+树：B-树的变体
### 定义
一棵非空的m阶B+树满足以下性质：
1. 根节点至少有两棵子树，至多有m棵子树
2. 除根节点外的所有节点至少有⌈m/2⌉项关键字，至多有m项关键字。
3. 有n棵子树的节点有n项关键字。
4. 非叶节点可以视作索引项，每个关键字索引对应子树最大关键字；关键字记录指针只存在于叶子节点中，叶子节点同时用链表的形式横向串联，并且位于同一层。

<img src="/assets/images/ds/B+树例子.png">

### B+树操作
#### B+树的查找
类似于B-树，但对于所有记录查找长度都相同，均为树高，因为记录只存在于叶节点
#### B+树的插入和删除
类似于B-树，但是要符合B+树的定义，并且只在叶子节点进行，同时改变对应的非终端节点。



## 哈希表
根据设定的哈希函数H(key) = Addr(a)，将一组关键字映射到一个有限的、地址连续的地址集上。哈希查找（散列查找）通过key和H，理想情况下一次计算就能找到要查找的记录。

### 常见哈希函数：
<ul>
  <li>直接定址法<br>H(key) = key / H(key) = a*key+b。地址空间和关键字空间大小相等。</li>
  <li>平方取中法<br>H(key) = (key)<sup>2</sup><sub>中间几位</sub>。适合于关键字中的每一位都有某些数字重复出现频度很高的现象，或不知道关键字频率分布情况时。</li>
  <li>随机数法<br>H(key) = random(key)，其中key为随机数种子。对长度不等的关键字构造哈希函数。</li>
  <li>数字分析法<br>分析所有关键字，从中提取分布均匀的若干位或它们的组合作为地址，例如1、2、3位只出现某几个数字，但4、5、6位几乎随机，可选取4、5、6三位中的某些位作为地址。适于能预先估计出全体关键字的每一位上各种数字出现的频度的情况。</li>
  <li>折叠法<br>将关键字分割成若干部分，然后取它们的叠加和为哈希地址，例如移位叠加、间界（折返）叠加。</li>
  <li><strong>除留余数法</strong>：H(key) = key MOD p(p&lt=m)，其中m为表长，p为质数或者没有小于20的质因子，这样的p可以防止地址为某质因子的倍数，发生地址冲突。</li>
</ul>

### 冲突处理方法
<ul>
  <li><strong>开放定址法：为冲突的地址H(key)准备一系列备选地址，依次尝试</strong><br>
  H(key)<sub>i</sub> = (H(key)+d<sub>i</sub>) MOD m，其中m为表长，d<sub>i</sub>为增量
  <ul>
    <li>线性探测再散列：d<sub>i</sub> = c * i，一般情况下c=1，即d<sub>i</sub>=i，即依次尝试后续地址。能探测到所有可用单元，但可能造成在冲突地址附近堆积的现象，同义词探测序列影响非同义词的探测序列，造成平均查找长度上升。</li>
    <li>平方探测再散列：d<sub>i</sub> = 1<sup>2</sup>、-1<sup>2</sup>、2<sup>2</sup>、-2<sup>2</sup>...。只能探测到一半的可用单元，但不会造成堆积。</li>
    <li>伪随机探测再散列：d<sub>i</sub>是一组伪随机数</li>
    <li>再哈希法：当发生冲突时，用另一个哈希函数计算下一个哈希地址，即H<sub>i</sub>=RH<sub>i</sub>(key)</li>
    以上方法中增量应满足使H<sub>i</sub>能覆盖哈希表中所有地址，且不冲突。
  </ul>
  </li>
  <li>链地址法：将所有哈希地址相同的记录都链接在同一链表中。
    <img src="/assets/images/ds/链地址法.png">
  </li>
  
  <li>建立公共溢出区：在基本散列表之外，另设一个溢出表保存与基本表中记录冲突的所有记录，当在哈希表中查找到的值不匹配时，在公共溢出区顺序查找
    <img src="/assets/images/ds/建立公共溢出区.png">
  </li>
</ul>

### 哈希表操作
#### 哈希查找
哈希表查找步骤如下图
<img src="/assets/images/ds/哈希查找.png">
<p class="notice--info">哈希查找的ASL是<strong>冲突处理方法和装填因子（α=n/m）的函数</strong>，而非仅仅是n的函数(或者说不直接依赖于m,n)；通过控制装填因子α，可以将ASL限制在某个范围内，所有哈希表都有这个特点。</p>
                        
#### 哈希表中元素的删除
哈希表中元素删除要考虑探测链与同义词
<ul>
  <li>对于开放定址法：不能物理清空位置，而应逻辑上进行标记表示已经删除，否则会打断探测链，探测链中靠后的同义词查找不到。</li>
  <li>其他方法如链地址法可以物理删除</li>
</ul>
<p class="notice--info"><strong>注意</strong>：探测链上不一定都是同义词</p>


