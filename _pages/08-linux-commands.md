---
permalink: /notes/linux/cmd
title: "Useful Linux Commands"
sidebar:
    nav: "linux" 
---

Here is some useful Linux commands that are frequently used.

# Network Configuration

## ip



## ifconfig

# File Transmission

## wget

`wget` is a tool for downloading files using https protocol.

On Linux platforms

```
wget [url]
```

For Windows, `wget` is the alias for `Invoke-WebRequest`. One must specify url and file name to correctly download a file.

```
wget -Uri [url] -OutFile "filename.xxx"
```



## scp

`scp` can be used for transmitting files between two machines with ssh. 

Transmitting files from Windows to Linux.

```
scp C:\Users\shaofeng\filename shaofeng@[target_alias/ip]:/home/shaofeng/directory
```



# User Management

## usermod(user modify)

