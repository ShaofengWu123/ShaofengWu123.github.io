---
permalink: /study/alg/asymptotic
title: "Asymptotic Notation & Recurrence Equation"
sidebar:
  nav: "alg"
---
# 渐进记号
## Θ-notation
### 定义
> 定义：Θ(g(n)) = {f(n)|存在正常数$C_{1},C_{2}和n_{0}$，使得当n$ \ge n_{0}$时，有$ 0 \le C_{1} g(n) \le f(n) \le C_{2}g(n) $}，也称g(n)是f(n)的一个**渐近紧确界**

<p class="notice--info">注：对上述定义的理解：<br>1.Θ记号讨论的函数一定是<strong>渐进非负</strong>的，其他函数不在讨论范围内<br>2.当n->$\infty$，f(n)和g(n)是同阶的，但是注意这是一种理解而不是严格无二义性的定义，因为相比《数学分析》中同阶无穷大的定义，这里多了渐进非负的条件，并且n是趋近于无穷的，而非可趋近无穷也可趋近于某一点，但是可以按照同阶无穷大理解</p>

### 相关证明
- 按照定义，选取合适的$C_{1},C_{2}和n_{0}$即可
- 采用极限的方法，计算以下极限  
  $$ \lim_{n \to \infty} \frac{f(x)}{g(x)} $$   
  若极限属于$[C_{1},C_{2}]$，那么即f(x)和g(x)是同阶的，特别的，如果极限等于某正常数C，那么两个函数也是同阶的

## O-notation
### 定义
> 定义：$O$(g(n)) = {f(n)|存在正常数$C和n_{0}$，使得当n$ \ge n_{0}$时，有$ 0  \le f(n) \le Cg(n) $}  

<p class="notice--info">1.可理解为f(n)的阶不大于g(n)，如果二者都是趋于无穷大时，而g(n)是f(n)的渐进上界，但不是多么紧确。<br>
2.O-notation用于描述最坏时间复杂度，当出现“运行时间为O(g(n))”这样的描述时，意指运行时间上界无论n为多少都有一个上界f(n)，这个函数属于O(g(n))。</p>


## $\Omega$-notation
### 定义
> 定义：$\Omega$(g(n)) = {f(n)|存在正常数$C和n_{0}$，使得当n$ \ge n_{0}$时，有$ 0 \le Cg(n) \le f(n) $}  

<p class="notice--info">可理解为f(n)的阶不小于g(n)，如果二者都是趋于无穷大时</p>

## o-notation
### 定义
> 定义：$o$(g(n)) = {f(n)|存在正常数$C和n_{0}$，使得当n$ \ge n_{0}$时，有$ 0  \le f(n) \lt Cg(n) $}  

<p class="notice--info">可理解为f(n)的阶小于g(n)，如果二者都是趋于无穷大时</p>

### 相关证明
在讨论的函数都是渐进非负的情况下，可以认为f(n) = $o$(g(n))等价于:  
$$ \lim_{n \to \infty} \frac{f(x)}{g(x)} = 0$$  
这一点可以用上述极限的"$\varepsilon-N$"语言说明

## $\omega$-notation
### 定义
> 定义：$\omega$(g(n)) = {f(n)|存在正常数$C和n_{0}$，使得当n$ \ge n_{0}$时，有$ 0  \le  Cg(n) \lt f(n) $}  

<p class="notice--info">可理解为f(n)的阶大于g(n)，如果二者都是趋于无穷大时</p>

### 相关证明
与小o记号类似，在讨论的函数都是渐进非负的情况下，可以认为f(n) = $\omega$(g(n))等价于:  
$$ \lim_{n \to \infty} \frac{f(x)}{g(x)} = \infty$$  
这一点可以用上述极限的"$\varepsilon -N$"语言说明