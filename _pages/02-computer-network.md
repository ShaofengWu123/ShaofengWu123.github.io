---
permalink: /study/computer-network/
title: "Computer Network"
sidebar:
    nav: "cn" 
---
Computer Network mainly discuss devices, functions, protocals, interfaces, methods, algorithms and other important aspects of computer network. Based on a layered architecture, each layer has its own functions and provide services to upper layer through interface(SAP). And for each pair of layer entity, they adopt same protocals to achieve communication through a logical channel. Different methods and algorithms are used to achieve traffic control, routing and other functions in the network. Devices act as their physical support.

Please find attached hand-written notes [here](https://shaofengwu123.github.io/assets/notes/computer_network.pdf).

# Content outline: 
- Computer network models and structure
- Physical layer
  - Baisc concepts: band width, rate of transmission, ...
  - Nyquist Theorem and Shannon Theorem
  - Transport media and physical interface
  - Modulation, baseband and passband transmission
  - Switch techniques
- Data link layer
  - Services: no acknowledgement and no connection, acknowledgement without connection, connection-oriented
  - Framing and padding
  - Error control
  - Traffic control
  - Protocals
    - Stop-and-wait
    - Slide window
      - Go-back-n
      - Select-retransmission  
    - Actual protocals: HDLC, PPP 
  - Media access control sublayer
    - MAC frame
    - Multiple access protocals
    - 802.3(Ethernet)
    - 802.11(WIFI)
- Network layer
  - Services(OSI)
    - Virtual circuit
    - Datagram
  - Service quality parameters
  - Connnection devices of networks
  - Routing algorithms
    - Flooding
    - Distance vector
    - Link state 
  - Conjestion Control
    - Open loop control
      - Leaky bucket
      - Token bucket
    - Closed loop control
      - Admission control
      - Supress packet
      - Random early-stage test 
  - Internet Protocal
    - Protocal stack
    - IP address allocation
    - IP adress categories
    - DHCP
    - Adress resolution protocals
    - IP
    - Routing protocals: RIP, OSPF, BGP
    - ICMP
    - IP multicast: IGMP
    - IPv4 extension
      - subnet
      - CIDR
      - Network address translation
    - IPv6 
- Transport layer
  - Services
  - UDP
  - TCP
    - Services
    - Header
    - Connection establishment: three-way handshake
    - Connection release: four-way handwave
    - Slide window: traffice control and sequential transmission
    - Conjestion control algorithm
- Application layer
  - Network computing and acess models
    - Client-Server
    - P2P
    - Cloud computing
  - Domain name system(DNS)
  - Email
    - Simple Mail Transfer Protocal(SMTP)
    - Postal Office Protocal-Version 3(POP3)
    - Internet Mail Access Protocal(IMAP)
  - Hypertext Transfer Protocal(HTTP)

# Links and References
- [VLAN基本知识](https://zhuanlan.zhihu.com/p/35616289)
- [NAT基本知识](https://zhuanlan.zhihu.com/p/49255466)
- [IPv4与IPv6之间的转换](https://www.zhihu.com/question/19619799)
- [数字签名](https://zhuanlan.zhihu.com/p/82128984)
