---
permalink: /study/compiler/lex
title: "Lexical Analysis/词法分析"
sidebar:
    nav: "com" 
---
# 词法分析器的功能
1. 将字符流转换成记号流，提供给语法分析器使用
2. 

# 词法记号、模式、词法单元
## 词法记号
### 定义
token/词法记号号是一类符合相同模式的词法单元的统称，实际上记号包含记号名和属性，而前者是一类词法单元的抽象名字，后者是可选的(可以没有)<br>
即 token = <token_name,attribute_value>
### 词法记号的属性

## 模式
pattern/模式描述了某一记号的字符串的构成规则

## 词法单元
lexeme/词法单元(也称词素、单词)是词法记号的实例，即匹配某个记号模式的字符序列

## 三者关系举例




