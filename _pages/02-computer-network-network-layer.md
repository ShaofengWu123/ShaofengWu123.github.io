---
permalink: /study/computer-network/network-layer
title: "Computer Network"
sidebar:
    nav: "cn" 
---
# IPv4地址分类
## 分类
IPv4地址共分为A,B,C,D,E五类
![IP地址分类](/assets/images/cn/network-layer/IP地址分类.svg)   

## 特殊的TPv4地址
### 特殊的网络号
- A类: 全0网络号代表“本网络”，127代表回环地址
- B类：网络号为128.0的地址不允许分配
- C类：网络号为192.0.0的地址不允许分配
### 特殊的主机号或地址
- 主机号全0：表示本身
- 主机号全1：表示本网络的广播地址
- 127.x.x.x：回环地址，用于自检，不会出现在网络上
- 32位全0：表示本网络的本主机，不能用于目的地址
- 32位全1：整个TCP/IP网络的广播地址，但是由于路由器隔离广播域，因此实际上是受限广播地址，等效于本网络的广播地址
<p class="notice--info"><strong>注意</strong>：划分得到某子网，该子网的最多主机数应减2，即去掉主机号全0和全1的情况</p>

### NAT私有地址网段
- A类：10.0.0.0 ~ 10.255.255.255
- B类：172.16.0.0 ~ 172.31.255.255
- C类：192.168.0.0 ~ 192.168.255.255

# ICMP
## 定义和作用
Internet Control Message Protocal，互联网控制消息报文，让主机和路由器报告差错和异常情况，提高IP数据报成功传输的概率

## 分类
- 差错报文
- 询问报文
  
# IPv6
![IPv6](/assets/images/cn/network-layer/IPv6.png)
## 与IPv4的区别
- IPv6地址为128位
- 简化了头标，处理头标更快
- 头标不含header checksum
- 改善了选项功能(next header)，提供了安全功能
- 增加了流标记域，也提供QoS
- IPv6的分片只在端到端进行，路由器不允许进行分片，如果路由器收到过大的包，那么丢弃
