---
title: "Linkage in C"
categories:
  - Tech blog
tags:
  - C 
  - Compilation and Linkage 
---
# Intro

As a C programmer, you may occasionally notice the usage of  keywords `static` and `extern` in other people's code. What's more, you may also notice the combination of `static inline` or `extern inline` in some projects, e.g. in linux kernel. We will discuss some confusing terms regarding this in the following sections.  



# Static v.s. Extern 

Keyword `static` leads to internal linkage, which causes an identifier to be not accessible outside the translation unit it is declared in. Keyword `extern` leads to external linkage, which causes an identifier to be accessible in every translation unit. If an `extern` identifier `int x` is to be referenced in local scope, it needs to be declared with `extern int x` before using so that compiler can know linker will deal with it later and trust the `extern` keyword.  



# Inline with static/extern

According to gnu gcc online docs, `inline` is used for integrating a function’s code into the code for its callers. However, using only `inline` keyword for function definition will not work since by default function is externally linked. So the calls therein cannot be integrated and a non-`static` inline function is always compiled on its own in the usual fashion.

- `static inline`:  If all calls to the function are integrated into the caller, and the function’s address is never used, GCC does not actually output assembler code for the function since the function’s own assembler code is never referenced, unless you specify the option -fkeep-inline-functions. If there is a nonintegrated call, then the function is compiled to assembler code as usual. For example, the function must also be compiled as usual if the program refers to its address, because that cannot be inlined.
- `extern inline`: 
  - The definition is used only for inlining. In no case is the function compiled on its own, not even if you refer to its address explicitly. Such an address becomes an external reference, as if you had only declared the function, and had not defined it. If the linker can not find a function with the same name, undefined error will occur during the linking stage. 
  - `extern inline` function allows the existence of another global library function of the same name. So the suggested way to use it is to put a function definition in a header file with `extern inline` keywords, and put another copy of the definition (lacking `inline` and `extern`) in a library file. The definition in the header file causes most calls to the function to be inlined. But if any uses of the function remain, for example use the function via pointer or recursively call the function, they refer to the single copy in the library.



# Reference 

- [Inline (Using the GNU Compiler Collection (GCC))](https://gcc.gnu.org/onlinedocs/gcc/Inline.html)

- [Internal Linkage and External Linkage in C - GeeksforGeeks](https://www.geeksforgeeks.org/internal-linkage-external-linkage-c/)

  
