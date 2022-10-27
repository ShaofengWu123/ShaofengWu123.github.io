---
permalink: /notes/linux/environemnt-variable
title: "Environemnt Variable"
sidebar:
    nav: "linux" 
---

## View environment variable

```bash
echo $PATH
```



## Modify

- Add a line at the end of `/etc/profile`

```
export PATH=[directory_path]:$PATH
```

Then use `source /etc/profile` or reboot to make the modification take effect.

Note that this modification will take effect for all normal users as it is a pre-script for shell.

