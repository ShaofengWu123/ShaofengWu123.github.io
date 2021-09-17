---
permalink: /study/alg/asymptotic
title: "Asymptotic Notation & Recurrence Equation"
sidebar:
  nav: "alg"
---
# 渐进记号
## Θ-notation
### 定义
> 定义：Θ(g(n)) = {f(n)|存在正常数$C_1,C_2和n_0$，使得当n$>=n_0$时，有0 <= C<sub>1</sub>g(n) <= f(n) <= C<sub>2</sub>g(n)}，也称g(n)是f(n)的一个**渐近紧确界**

<p>注：对上述定义的理解：<br>1.Θ记号讨论的函数一定是<strong>渐进非负</strong>的，其他函数不在讨论范围内<br>2.当n->∞，f(n)和g(n)是同阶的，但是注意这是一种理解而不是严格无二义性的定义，因为相比《数学分析》中同阶无穷大的定义，这里多了渐进非负的条件，并且n是趋近于无穷的，而非可趋近无穷也可趋近于某一点，但是可以按照同阶无穷大理解</p>

### 相关证明
- 按照定义，选取合适的$C_1,C_2和n_0$即可
- 采用极限的方法，计算以下极限  
  $$ \lim_{n \to \infty} \frac{f(x)}{g(x)} $$   
  若极限属于$[C_1,C_2]$，那么即f(x)和g(x)是同阶的，特别的，如果极限等于某正常数C，那么两个函数也是同阶的

## O-notation
### 定义

## $\Omega$-notation
### 定义
> 定义：$\Omega$(g(n)) = {f(n)|}