---
permalink: /research/dpu/rxpbench/
title: "rxpbench"
sidebar:
    nav: "dpu" 
---

This page holds notes for configuring and using REgeX engine on Bluefield-2.

# RXPbench

RXPbench is a benchmarking tool to compare pattern matching ability between hardware acceleration by REgex engine and software acceleration by Hyperscan.

## Update Mellanox Driver

- Check newest version of MLNX_OFED driver at: [Linux InfiniBand Drivers (nvidia.com)](https://network.nvidia.com/products/infiniband-drivers/linux/mlnx_ofed/)

```
shaofeng@host:~/$ wget https://www.mellanox.com/page/mlnx_ofed_eula?mtag=linux_sw_drivers&mrequest=downloads&mtype=ofed&mver=MLNX_OFED-5.8-1.1.2.1&mname=MLNX_OFED_LINUX-5.8-1.1.2.1-ubuntu18.04-x86_64.tgz
shaofeng@host:~/$ sudo tar -zxvf MLNX_OFED_LINUX-5.8-1.1.2.1-ubuntu18.04-x86_64.tgz
shaofeng@host:~/$ sudo ./MLNX_OFED_LINUX-5.8-1.1.2.1-ubuntu18.04-x86_64/mlnxofedinstall --auto-add-kernel-support --force --skip-unsupported-devices-check
shaofeng@host:~/$ sudo /etc/init.d/openibd restart
```

Note: an older version of mellanox driver may cause runtime error due to lack of some dynamic libraries.

## Install DPDK

RXPbench works with DPDK. Make sure DPDK is installed system wide before installing RXPbench.

```
shaofeng@host:~$ wget http://fast.dpdk.org/rel/dpdk-20.11.6.tar.xz 
shaofeng@host:~$ tar xJf dpdk-20.11.6.tar.xz 
shaofeng@host:~$ sudo apt-get install build-essential python3-pyelftools libnuma-dev python3-pip 
shaofeng@host:~$ sudo pip3 install meson ninja 
shaofeng@host:~$ cd dpdk-stable-20.11.6
shaofeng@host:~$ meson -Ddisable_drivers=regex/octeontx2 build 
shaofeng@host:~$ cd build 
shaofeng@host:~$ ninja -j 32 
shaofeng@host:~$ sudo ninja install 
shaofeng@host:~$ sudo ldconfig 
```

## Install Hyperscan

- Install hyperscan and hyperscan-dev

```
# On ubuntu 18.04
shaofeng@host:~$ apt install libhyperscan4 libhyperscan-dev
```

## (Optional)Install DOCA

DOCA can be installed to support doca-regex feature of RXPbench. Clean version of RXPbench(supports dpdk-regex and hyperscan) does not need doca sdk and runtime.

## Install RXPbench

RXPbench will be installed when installing **doca-tools**. 

[RXPBench :: NVIDIA DOCA SDK Documentation](https://docs.nvidia.com/doca/sdk/rxpbench/index.html#host-installation)

## Compile RXPbench

RXPbench can also be compiled from source. 

- Source code: Source code of RXPbench can be obtained by installing doca-tools package. Please refer to [Linux Installation Guide :: NVIDIA DOCA SDK Documentation](https://docs.nvidia.com/doca/sdk/installation-guide-for-linux/index.html#installing-prerequisites-on-host-for-target-dpu).

- RXPbench could be compiled as a standalone binary or DPDK example. Please refer to [RXPBench :: NVIDIA DOCA SDK Documentation](https://docs.nvidia.com/doca/sdk/rxpbench/index.html#running-rxpbench-on-bluefield). 

Note: newest version of doca may not be compatible with RXPbench. And directly compiling from source may also fail even if doca-runtime, doca-sdk are installed. **An alternative is to delete all doca-related parts from the source code to get a clean version of doca. This version is not capable of using doca-regex device but will still work with dpdk-regex and hyperscan**

## Using RXPbench

RXPbench runs with DPDK. So its parameters have two parts: 1) DPDK EAL 2) its own parameters. 

### DPDK EAL

The network interface and lcores to be used must be on the same numa node. And the numa node must have available hugepages

- **Check the pci bdf of a specific interface**

```
shaofeng@host:~/$ realpath /sys/class/net/<dev>/device
shaofeng@host:~/$ realpath /sys/class/net/<dev>
```

These are symbolic links pointing to `/sys/devices/...`.

- **Check the numa node of network interface and enable hugepage**

```
shaofeng@host:~/$ cat /sys/class/net/<dev>/device/numanode
shaofeng@host:~/$ echo 8192 | sudo tee /sys/devices/system/node/node0/hugepages/hugepages-2048kB/nr_hugepages
```

### Other parameters

Details can be found in [NVIDIA DOCA RXPBench User Guide](https://docs.nvidia.com/doca/sdk/rxpbench/index.html#regular-expressions). 

An example:

```
shaofeng@host:~/$ rxpbench -D "-l5,6 -n 1 -a 03:00.0,class=regex" --input-mode text_file -f ../../datasets/shakespeare.txt -d rxp -r ./build/snort3_pcre.rof2.binary -c 1 -s 10 -l 2048
```



# Related links:

- [NVIDIA DOCA RXPBench User Guide](https://docs.nvidia.com/doca/sdk/rxpbench/index.html#regular-expressions)

- [NVIDIA RXP Compiler User Guide](https://docs.nvidia.com/doca/sdk/rxp-compiler/index.html)
