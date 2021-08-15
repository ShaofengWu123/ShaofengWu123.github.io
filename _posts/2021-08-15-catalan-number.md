---
title: "Catalan Number"
categories:
  - Blog
tags:
  - math
  - data structure
  - computer science
---
# Definition
Catalan number is a group of numbers that satisfy a specific recurrence relationship. If we use C<sub>k</sub> to represent the kth catalan number, then it follows the recurrence relationship below:  

*C<sub>k</sub> = C<sub>1</sub>C<sub>k-1</sub> + C<sub>2</sub>C<sub>k-2</sub> + ... + C<sub>k-1</sub>C<sub>1</sub>*

*C<sub>0</sub> = 1, C<sub>1</sub> = 1*

Another equivalent form of recurrence formula is:  

*C<sub>k</sub> = C<sub>k-1</sub>(4n-2)/(n+1)*

The solution is:  
*C<sub>k</sub> = C<sub>2n</sub><sup>n</sup>/(n+1) = C<sub>2n</sub><sup>n</sup> - C<sub>2n</sub><sup>n+1</sup>*

# Application
## Parenthesesation
Parenthesesation means to add parentheses into a equation of matrix product like B = A<sub>1</sub> A<sub>2</sub>...A<sub>n</sub> and calculate how many different ways there are to add parentheses.  
The problem can be divided into sub-problems considering parenthesation of first k matrix and n-k matrix left. So obviously, the total number of parenthesation approaches is catalan number according to the recurrence relationship.

## Stack Push and Pop
If there is a stack that is big enough and the pushing sequence is 1,2,3...,n, then how many different poping sequences will appear? 
### Solution 1
Assume that the last poped number is k, then it means before k is pushed into the stack, numbers that are less than k must have been poped. As a result, the problem is naturaly divided into two sub-problems: poping sequence of 1,...,k-1 and poping sequence of k-1,...,n. Obviously, the total number of poping sequences is catalan number.

### Solution 2
This probelm can also be regarded as a problem of permutation and combination. The problem consists n push operation adn n pop operation. So basically, we are arranging the 2n operations among 2n positions.  
The total number of ways of arrangement is C<sub>2n</sub><sup>n</sup> but there are invalid conditions. How to calculate invalid conditions? There are two basic facts:
- When positions of n push operations are selected, the positions and sequence of n pop operations are also determined. There is no second condition. For example, if first n positions are all push operation, then last n position can only be pop n, pop n-1, pop n-2..., pop 1. 
- The valid sequence has to be the sequence follows the rules below:
  - For first 2m+1 operations, number of push operations must be no less than that of pop operations. Otherwise, it is obviously invalid since an empty stack cannot pop.

Based on the facts above, we can calcualte invalid conditions like this:  
Assume that first 2m+1 operations have s push and 2m+1-s pop. Then remaining operations must be n-s push and n-2m-1+s pop. There must be one m that satisfy that s = m. In this situation, the operations consists (m push, m+1 pop) and (n-m push, n-m-1 pop). From the aspect of permutation, it is equivalent to arrange n-1 pop and n+1 push together.   
So the total number of invalid situation is C<sub>2n</sub><sup>n+1</sup> = C<sub>2n</sub><sup>n-1</sup>. So the total number of valid situation is C<sub>2n</sub><sup>n</sup> - C<sub>2n</sub><sup>n+1</sup>, which is catalan number.

## Traverse of Binary Tree
//to do