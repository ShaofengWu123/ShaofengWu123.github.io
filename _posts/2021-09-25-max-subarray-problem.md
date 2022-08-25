---
title: "Maximum Subarray Problem"
categories:
  - Tech blog
tags:
  - algorithm
---
# Problem Description
> **Input**: An array A[1,...,n] consists of integer elements
> **Output**: An array A\[i,...,j], it is a subarray of A[1,...,n] and the sum of its elemments are the biggest among all subarrays 

# Solution 1. Brute-force
The Brute-force method simply traverse all subarrays of A\[1,..,n] to find the maximum subarray. It takes $\Theta (n^2)$ time.

# Solution 2. Divide and Conquer 
This method can be viewed in *Introduction to Algorithms*. 

![最大子数组分治法](/assets/images/alg/maxsubarray_divide.png)

The algorithm above can be further improved by not searching each entire half array to find maximum cross-sum. We can stop when we go beyond the end of max-subarray in each half. This is because when our array has included the max-subarray in this half, our array will never be greater than the max-subarray. So there is no need to continue iterating.

# Solution 3. Scanning
This method is based on the fact that if max subarray for $A[1,...,j]$ is already known as $A_{max}$, then new $A_{max}$ in $A[1,...,j+1]$ must be previous $A_{max}$ or subset in the form of $A[k,...,j+1]$. And we can use information from last round of iteration to find the new $A_{max}$ in **constant** time.  
Then the biggest question is: what information should we record in a round of iteration? The answer is : we should keep the sum of $A[i,...,j]$(which is called $temp$), where $i$ is the head of current max subset. Then we can compare $sum$ with $temp+A[j+1]$ to determine if we have found a new max subset and should update. If not, we should examine if $temp$ is below zero. Why? It is because if $temp$ is negative, it will not contribute to $A[j+1]$ or say $A[j+1]$ will definitely be less than $A[j+1]+temp$. Also, we no longer need to keep previous sum of $A[i,...,j]$ or say $temp$ anymore. Instead, we use $A[j+1]$ to update $temp$. This means re-accumulate $temp$ and prepare for the calculation of sum of $temp+A[j+1]$ and comparation, which can be finished within $O(n)$ time.

![最大子数组线性时间算法](/assets/images/alg/maxsubarray_On.png)

