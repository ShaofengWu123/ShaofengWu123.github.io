---
permalink: /notes/linux/iptables/
title: "Iptables"
sidebar:
    nav: "linux" 
---
`iptables` is a powerful tool for managing firewall rules, NAT and other network functions.

Note: 
- Never use any command to delete all rules or a single rule without checking in ``iptable``, especially for rules relating to 
**gateways, ssh protocol, packet drop**. It may make a remote server forever out of reach unless on-site resetting.
- Rules in the same table are **checked from rule number 1 to the last rule one by one**. Since the last rule in a table is usually "drop all packets", adding rules after the last rule is meaningless. 

# Commands
## View Rules
```console
# view rules in INPUT, OUTPUT, FORWARDING table
sfwu22@proj88:~$ sudo iptables -nvL --line-number
...
# view rules in nat table
sfwu22@proj88:~$ sudo iptables -t nat -nvL --line-number
```

## Add/Insert Rules
```console
# add rules to the end of a table
sfwu22@proj88:~$ sudo iptables -nvL --line-number
...
# insert rule into a table
sfwu22@proj88:~$ sudo iptables -t nat -nvL --line-number
```

## Delete Rules
```console
# delete rule number 1 from INPUT chain
sfwu22@proj88:~$ sudo iptables -D FORWARD 1

# delete rule number 1 from nat table POSTROUTING chain
sfwu22@proj88:~$ sudo iptables -t nat -D POSTROUTING 1
```