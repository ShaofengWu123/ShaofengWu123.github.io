---
permalink: /notes/linux/cmd
title: "Useful Linux Commands"
sidebar:
    nav: "linux" 
---

Here are some useful Linux commands.

# Network Configuration

## ip

## ifconfig
``sudo ifconfig [interface] [ip addr] netmask [netmask] [up/down]`` 
```console
sfwu22@proj88:~$ sudo ifconfig tmfifo_net0 192.168.100.1 netmask 255.255.255.0 up
```

## iptables
Check [this link](/notes/linux/iptables).

# File Transmission

## wget

`wget` is a tool for downloading files using https protocol.

On Linux platforms

```console
sfwu22@proj88:~$ wget [url]
```

For Windows, `wget` is the alias for `Invoke-WebRequest`. One must specify url and file name to correctly download a file.

```console
sfwu22@proj88:~$ wget -Uri [url] -OutFile "filename.xxx"
```



## scp

`scp` can be used for transmitting files between two machines with ssh. 

Transmitting files from Windows to Linux.

```console
sfwu22@proj88:~$ scp C:\Users\shaofeng\filename shaofeng@[target_alias/ip]:/home/shaofeng/directory
```



# User Management

## usermod(user modify)

