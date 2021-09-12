---
permalink: /study/data-structure/string
title: "String"
sidebar:
    nav: "ds" 
---
# 基本定义
## 串的定义
0个或多个字符组成的有限序列

## 其他的一些概念
串值、串长、空串、<abbr title="空格组成的串">空白串</abbr>、子串、<abbr title="从1开始计数，要注意英文字符、数字等为1字节，汉字是2字节">子串的位置</abbr>、串相等、串变量、串常量


# 数据结构实现
## 定长顺序存储实现
```c
#define MAXSTRLEN 100
typedef struct _sstring{
  unsigned char str[MAXSTRLEN+1];//0位置存储串长
}SString;
```
## 堆分配存储实现
```c
#define INITSTRLEN 100
typedef struct _hstring{
  char * ch;
  int length;
}HString;<
```
<p class="notice--info">堆分配要注意做操作时要要释放原来的空间，因为原来内存可能被占用</p>

## 块链存储实现
```c
#define BLOCK_SIZE 4
typedef struct _bnode{
  char data[BLOCK_SIZE];//以Bnode为单元，每个单元BLOCK_SIZE个字符，为了提高内存利用率；若不够一个单元，用'@'占位
  struct _bnode * next;
}Bnode;
typedef struct _bstring{
  Bnode * head;
  int strlne;
}BString;
```
<hr>

# 串的模式匹配
## 暴力模式匹配 
- 算法核心思想：逐个扫描母串每个字符，发现与模式串首字符匹配，那么开始进行一次对模式串的匹配，否则或者失配则接着扫描。
- 时间复杂度O(nm)，即每次都在最后一个出错，实际情况下近似于O(n+m)

## KMP算法
- 算法核心思想：对模式串T计算next[]数组，当T的j位置失配，j=next[j]，即按照寻路表向右滑动一定距离
- 算法实现<br>注：其中串使用顺序实现，下标为0位置储存串长

```c
int KMP_SString(SString S, SString T, int pos, int next[]) {
  if (pos <= 0 || pos > S[0]) { return -1; }//检查pos是否合法
    int j = 1; int i = 1;
    while (j<=T[0]&&i<=S[0]) {
      if (j == 0 || S[i] == T[j]) { i++; j++; }//首个字符失配（此时j=0，是非法的值）或者当前字符匹配，i和j都往后移动一下
      else { j = next[j]; }
    }
    if (j > T[0]) { return i - T[0]; }
    return -1;
  }
```
- 时间复杂度：O(length(s))，其中s为主串的长度<br>原因是：主串指针向后移动length次，在单个字符匹配并且i向后移动的过程中模式串最多会回跳j次，而j取决于匹配的次数，最多为length，所以时间复杂度为O(length(s))；另外这里不包括求next数组的复杂度。

## 求next[]数组
<ul>
    <li>暴力（穷举）法：比较长1,2，...，j-1的子串</li>
    <li>改进穷举法：先比较长1,2，...，j-1的子串最后一位，相等再比较这两个子串</li>
    <li>递推法（实现类似KMP算法）</li>
</ul>

```c
void next3(int next[], SString T) {
  next[0] = T[0];
	next[1] = 0;
	next[2] = 1;
	int i=2, j =1;
  while(i&ltT[0]){
    if(j==0||T[i]==T[j]){i++;j++;next[i]=j}
    else{j=next[j];}
  }
}
```                    
<p class="notice--info">求next[]数组可以直接根据定义求，求的时候一定要找到最长匹配的子串，不然next值可能有误</p>



