---
permalink: /study/alg/asymptotic
title: "Asymptotic Notation & Recurrence Equation"
sidebar:
  nav: "alg"
---
# 渐进记号
## Θ-notation
### 定义
定义：Θ(g(n)) = {f(n)|存在正常数$C_{1},C_{2},n_{0}$，使得当n $ {\ge} n_{0} $时，有$ 0 \le C_{1} g(n) \le f(n) \le C_{2}g(n) $ }，也称g(n)是f(n)的一个**渐近紧确界**

<p class="notice--info">注：对上述定义的理解：<br>1.Θ记号讨论的函数一定是<strong>渐进非负</strong>的，其他函数不在讨论范围内<br>2.当n->$\infty$，f(n)和g(n)是同阶的，但是注意这是一种理解而不是严格无二义性的定义，因为相比《数学分析》中同阶无穷大的定义，这里多了渐进非负的条件，并且n是趋近于无穷的，而非可趋近无穷也可趋近于某一点，但是Θ-notation可以按照同阶无穷大理解</p>

### 相关证明
- 按照定义，选取合适的$C_{1},C_{2}和n_{0}$即可
- 采用极限的方法，计算以下极限  
  $$ \lim_{n \to \infty} \frac{f(x)}{g(x)} $$   
  若极限属于$[C_{1},C_{2}]$，那么即f(x)和g(x)是同阶的，特别的，如果极限等于某正常数C，那么两个函数也是同阶的

## O-notation
### 定义
定义：$O$(g(n)) = {f(n)|存在正常数$C和n_{0}$，使得当n$ \ge n_{0}$时，有$ 0  \le f(n) \le Cg(n) $}  

<p class="notice--info">1.可理解为f(n)的阶不大于g(n)，如果二者都是趋于无穷大时，而g(n)是f(n)的渐进上界，但不是多么紧确。<br>
2.O-notation用于描述最坏时间复杂度，当出现“运行时间为O(g(n))”这样的描述时，意指运行时间上界无论n为多少都有一个上界f(n)，这个函数属于O(g(n))。</p>


## $\Omega$-notation
### 定义
定义：$\Omega$(g(n)) = {f(n)|存在正常数$C和n_{0}$，使得当n $ \ge n_{0}$时，有$ 0 \le Cg(n) \le f(n) $}  

<p class="notice--info">可理解为f(n)的阶不小于g(n)，如果二者都是趋于无穷大时</p>

## o-notation
### 定义
定义：$o$(g(n)) = {f(n)|对任意正常数$C$，存在$n_{0}$，使得当n$ \ge n_{0}$时，有$ 0  \le f(n) \lt Cg(n) $}  

<p class="notice--info">可理解为f(n)的阶小于g(n)，如果二者都是趋于无穷大时</p>

### 相关证明
在讨论的函数都是渐进非负的情况下，可以认为f(n) = $o$(g(n))等价于:  
$$ \lim_{n \to \infty} \frac{f(x)}{g(x)} = 0$$  
这一点可以用上述极限的"$\varepsilon-N$"语言说明

## $\omega$-notation
### 定义
定义：$\omega$(g(n)) = {f(n)|对任意正常数$C$，存在$n_{0}$，使得当n$ \ge n_{0}$时，有$ 0  \le  Cg(n) \lt f(n) $}  

<p class="notice--info">可理解为f(n)的阶大于g(n)，如果二者都是趋于无穷大时</p>

### 相关证明
与小o记号类似，在讨论的函数都是渐进非负的情况下，可以认为f(n) = $\omega$(g(n))等价于:  
$$ \lim_{n \to \infty} \frac{f(x)}{g(x)} = \infty$$  
这一点可以用上述极限的"$\varepsilon -N$"语言说明

## 渐进记号的关系
本部分讨论的所有函数都是渐近非负的
### $\Theta$-notation的等价描述
若f(n),g(n)都是渐近非负的那么
$$ f(n) = \Theta(g(n)) \iff f(n) = O(g(n))且f(n) = \Omega(g(n))$$ 

> 证明：根据定义可易知，证明略

理解：$\Theta-notation$蕴含着$O$和$\Omega$-notation，它是比后两个更强的概念
{:.notice--info}

### 传递性
$$f(n) = \Theta(g(n)),g(n) = \Theta(h(n)) \implies f(n) = \Theta(h(n))$$
上述性质对$O,\Omega,o,\omega$都成立

### 自反性
$$f(n) = \Theta(f(n)) $$
$$f(n) = O(f(n))$$
$$f(n) = \Omega(f(n))$$


注意：自反性对$o,\omega$不成立
{:.notice--danger}

### 对称性
$$ f(n) = \Theta(g(n))\iff g(n) = \Theta(f(n))$$
这是因为f(n)和g(n)是同阶的

### 转置对称性
$$ f(n) = O(g(n))\iff g(n) = \Omega(f(n))$$
$$ f(n) = o(g(n))\iff g(n) = \omega(f(n))$$


如果按照与实数类比的方法，可以将渐进记号按如下的对应关系理解  
$$ \Theta 类比于 =$$  
$$ O 类比于 \le$$
$$ \Omega 类比于 \ge$$
$$ o 类比于 \lt$$
$$ \omega 类比于 \gt$$
{:.notice--info}

## 渐近记号用于等式
### 渐近记号在右侧
如何正确理解等式中的渐近记号？   
对于等式中出现的渐近记号，理解为**其代表某个不关注名称的匿名函数**，在某些情况下这个函数只有一种可能性，是确定的；在另外一些情况下，这个函数可能有一定变化，但是它们仍然属于相应渐进记号表示的同一类中
例如对于递推式$T(n) = T(\frac{n}{2})+\Theta(n)$，没有必要说明所有的低阶项，因为这样的低阶项可能在不同的递归轮数会有细微的差别，这样避免了细节引起的混乱，总之这些低阶项属于$\Theta(n)$表示的匿名函数
### 两侧都有渐近记号
例如$2n^2+\Theta(n) = \Theta(n^2)$，理解为$\forall f(n)\in\Theta(n),\exists g(n)\in\Theta(n^2)$使得等式对所有n成立

## Quick Questions
1.$\Theta(g(n))$本质上是什么？  
本质上是一个函数集合，所有的渐进记号都是满足一定条件的函数集合  
2.是不是所有函数都是渐近可比的？对于所有的渐近非负的函数呢？  
不是所有函数都是渐近可比的，即使是渐近非负的任意两个函数，也有可能是非渐近可比的，例如$n$和$n^{1+sin\ n}$

# 常见函数
下面列举了一些常见的函数以及它们的性质
## 取整函数
常用公式以及结论如下  
- 取整的差
$$
\lceil x\rceil-\lfloor x\rfloor=
\begin{cases}
0, &if\ i\ is\ integer \\
1, &if\ i\ is\ not\ integer
\end{cases}
$$

- $x-1\lt\lfloor x\rfloor\le x\le\lceil x\rceil\lt x+1$

- $\lfloor \frac{x}{2} \rfloor + \lceil \frac{x}{2} \rceil  = n$
- $\lfloor \frac{a}{b} \rfloor \le \frac{(a+(b-1))}{b}$  
  $\lceil \frac{a}{b} \rceil \ge \frac{(a-(b-1))}{b}$  
  证明只需设a=kb+m即可
- $f(x)$是某连续单调上升的函数，并且**只在**整数点才能取整数值，那么其一定满足  
  $\lfloor f(x)\rfloor = \lfloor f(\lfloor x\rfloor)\rfloor$  
  $\lceil f(x)\rceil = \lceil f(\lceil x\rceil)\rceil$  
    
  **证明**:对第二个式子进行证明，第一个证明类似的。  
  假设$\exists x_0$，使得$\lceil f(x)\rceil \neq \lceil f(\lceil x\rceil)\rceil$，则一定有$x_0,f(x_0)$均不为整数  
  由于$f(x_0)$单调上升，因此：  
  $f(\lceil x_0 \rceil) \gt f(x_0)$并且$\lceil f(x_0)\rceil \neq \lceil f(\lceil x_0\rceil)\rceil$     
  $\implies \lceil f(x_0)\rceil \lt \lceil f(\lceil x_0\rceil)\rceil$   
  $\implies \lceil f(x_0)\rceil \le \lceil f(\lceil x_0\rceil)\rceil -1$   
  $\implies \lceil f(x_0)\rceil \lt f(\lceil x_0\rceil)$   
  $\implies f(x_0) \lt \lceil f(x_0)\rceil \lt f(\lceil x_0\rceil)$   
  $\implies$在$x_0,\lceil x_0 \rceil$之间出现了一个整数$y_0$，使得$f(y_0) = \lceil f(x_0)\rceil$，但$x_0,\lceil x_0 \rceil$之间不可能有整数，矛盾，定理得证  

  **推论**:  
  $\lceil {\frac{\lceil {\frac{n}{a}} \rceil}{b}} \rceil = \lceil {\frac{n}{ab}} \rceil$  
  $\lfloor {\frac{\lfloor {\frac{n}{a}} \rfloor}{b}} \rfloor = \lfloor {\frac{n}{ab}} \rfloor$  


## 模运算
常用的公式、结论如下  
- $a\ mod\ n = a-n\lfloor {\frac{a}{n}} \rfloor$

## 阶乘
$$
f(n)=
\begin{cases}
1, &if\ n=0 \\
n\ \cdot\ (n-1)!, &if\  n\gt0
\end{cases}
$$

### Stirling近似公式
$$ n! = \sqrt{2{\pi}n}(\frac{n}{e})^n(1+\Theta(\frac{1}{n})) $$

#### 证明应用
下列公式可使用Stirling近似公式证明
$$ \lg n! = {\Theta}(n{\lg} n) $$
$$ n! = o(n^n)$$
$$ n! = \omega(2^n)$$


上述公式说明阶乘比指数增长**快**，但比$n^n$**慢**
{:.notice--info}


## 多重函数
将函数f(n)反复作用于一个初值i上，即可得到多重函数（递归定义）。  
$$
f^{(i)}(n)=
\begin{cases}
n, &if\ i=0 \\
f(f^{(i-1)}), &if\  i\gt0
\end{cases}
$$  


### 多重对数函数
多重对数函数的定义区别于多重函数，其最终的函数值为重数i而不是多重计算的结果，其定义为：  
$$ lg^*n = min(i\ge0:lg^{(i)}n\le 1) $$

多重对数函数还满足下列关系  
$lg^*n = k \implies n$是2的2次幂的2次幂的...，总共包含k个2    
也即$lg^*2^k = 1+lg^*k$  


多重对数函数增长**非常缓慢**，并且在实际应用中很少会碰到使$lg^*n \ge 5$的$n$  
{:.notice--info}  



# 递归方程
求解递归方程主要由三种方法
## 替代法
替代法的原理是数学归纳法，通过猜测一个解，然后带入递推式归纳。  
一个经典的递归方程为$T(n) = 2T(n/2)+\Theta(n)$，其解为$\Theta(nlogn)$。此结论可用于其他方程求解。

### 替代法的技巧
1. 当某猜测代入后无法得到相同形式的归纳时，原因可能是放缩过度，也有可能是假设不够强，通常可以通过减去一个低阶项来解决，而不要减弱这个假设。  
**例子**：递归方程$T(n) = T(\lfloor n/2 \rfloor)+T(\lceil n/2 \rceil)+1$，需要证明$T=O(n)$  
使用假设$T(n)\leq cn$无法证明，可以将假设改为$T(n)\leq cn-1$  
那么得到$T(n)=c(\lfloor n/2\rfloor+\lceil n/2\rceil)-1\leq cn-1$，得证  

2. 变量代换


**例子1**：求解方程$T(n)=2T(\lfloor n/2 \rfloor + 17)+n$  
上述方程与$T(n) = 2T(n/2)+\Theta(n)$类似。令$S(n)=T(n+34)$  
则$S(n) = 2T(\lfloor n/2 \rfloor + 34)+n+34 = 2S(\lfloor n/2 \rfloor)+\Theta(n)$，即可解出$S(n)$  

**例子2**：求解方程$T(n)=2T(\sqrt{n})+logn$  
可令$m=logn$，则原式变为$T(2^m) = 2T(2^{m/2})+m$  
令$T(2^m)=S(m)$，则$S(m) = 2S(m/2)+m$，故$T(2^m) = \Theta(mlogm))$  
因此$T(n) = \Theta(lognloglogn)$   

### 替代法的经典错误
1. 没有严格得到假设的结论，误将归纳不成立的情况当做成立的情况。  
**例子**：递归方程$T(n) = 2T(\lfloor n/2 \rfloor)+n$，需要证明$T=O(n)$  
假设$\exists c, s.t. T\leq cn$，代入原式进行归纳推导  
则$T(n) = 2T(\lfloor n/2 \rfloor)+n \leq 2c\frac{n}{2}+n=cn+n$  
不满足原假设，不能证明$T\leq cn$
  
这里非常容易存在的误区是认为$cn+n=o(n)$，因此得证。这种看法的错误之处在于我们的假设实际上是$\exists c, s.t. T\leq cn \ for\ large\ enough\ n$，因此不符合原假设。
{.:warning--info}

## 递归树法
递归树主要的作用是为替代法猜测一个好的解，然后利用替代法进行求解。
### 主要步骤
1. 省略原递归方程的一些细节(例如向下取整等)，画出递归树。由于最终只是要猜测一个解，因此省略细节，便于猜测。
2. 计算各行行和，计算时要注意观察各行行和之间的关系
3. 根据问题证明的需要，求解整个递归树的代价或者代价的上/下界(例如对于不均衡的递归树)

## 主方法
主方法即the master method。其描述了某一部分符合特定形式的递归方程的解的结论，具体的证明可以参考《算法导论》  
### 适用方程
主方法适用于如下形式的递归方程  
$$T(n)=aT(n/b)+f(n)$$
其中$a \geq 1$,$b \gt 1$，$f(n)$渐近非负；并且如果右边部分为$T(\lfloor n/b\rfloor)$或者$T(\lceil n/b\rceil)$，利用主方法解决时可以替换为$T(n/b)$  
### 三种情况
主方法包含以下三种情况（假设递归方程均是$T(n)=aT(n/b)+f(n)$形式的）  
1. $\exists \epsilon, s.t. f(n)=O(n^{log_b a-\epsilon}) \implies T(n)=\Theta (n^{log_b a})$，也即如果$f(n)$比$n^{log_b a}$小多项式量级，那么可以解出$T(n)$的渐近紧确界
2. $\exists k\geq 0, s.t. f(n)=\Theta (n^{log_b a}log^kn) \implies T(n)=\Theta (n^{log_b a}log^{k+1}n)$，也即如果$f(n)$和$n^{log_b a}log^kn$同量级，那么可以解出$T(n)$的渐近紧确界  
3. $\exists \epsilon, s.t. f(n)=\Omega (n^{log_b a+\epsilon}) \And \exists c \lt 1,N_0 \gt 0, s.t. af(n/b)\leq cf(n) for\ all\ n\gt N_0 \implies T(n)=\Theta(f(n))$，也即如果$f(n)$比$n^{log_b a}$大多项式量级并且$f(n)$满足某特殊条件，那么可以解出$T(n)$的渐近紧确界


**注意**:在case1,2,3之间是存在gap的，即有一些$f(n)$对应情况无法使用主方法。例如$T(n)=4T(b/2)+\frac{n^2}{logn}$，其中$f(n)$小于$n^{log_b a}$，但没有小多项式量级。又例如$T(n)=2T(n/2)+nloglogn$大于$n^{log_b a}log^n$，但没有大多项式量级。
{:.notice--info}