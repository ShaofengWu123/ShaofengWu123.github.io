---
permalink: /study/data-structure/array
title: "数组/Array"
sidebar:
    nav: "ds" 
---
# 基本定义
数组是n(n>1)个具有相同特性数据元素组成的地址连续的有限序列。数组采用随机存取，可以视为线性表的推广，其中数据元素可以是一个数据结构，例如多维数组的数据元素是一个线性表。


# 数组的存储方式
## 二维数组
- 行优先存放：同一行的元素优先放在连续的地址空间<br>LOC(i,j) = a + (in+j)L，其中数组的下标都是从0开始的。
- 列优先存放：同理

## n维数组
- 使用映象函数，即位置和坐标转换的函数。LOC(j1,j2,j3,...,jn) = a + Σc<sub>i</sub>j<sub>i</sub>，其中ci是第i维地址系数，用于提高运算速度，j是第i维坐标
  <br>推导方法：n维数组由b1个n-1维数组构成，以此类推，即：cn = L, c<sub>j-1</sub> = cj * bj


<p class="notice--info">对于特殊的矩阵：三对角矩阵、上/下三角矩阵计算坐标和顺序位置的关系？
特殊矩阵实际上是二维数组，但是压缩存储时不会直接按照上述方法中挨个填入，因此可以使用方程组或者直接按规律推导某元素前面有多少个，详见下一章"特殊矩阵"</p>


# 数据结构实现
## 顺序实现
```c
typedef struct _array{
  Elemtype * base;//数组元素基址
  int dim;//维度
  int * bounds;//各维度元素个数存放基址
  int * constant;//各维度地址系数存放基址  
}
```

# 拓展：C语言实现参数个数可变函数
<ul>
  <li>va_list类型：存放变参</li>
  <li>va_start(va_list, n)：从本函数参数中读取变参到va_list变参表中</li>
  <li>va_arg(va_list, int)：以int类型读取从va_list中读取一个参数，每读取一个下次读取会自动读下一个</li>
  <li>va_end(va_list)：结束读取，与va_start配合使用</li>
</ul>


