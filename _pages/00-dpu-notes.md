---
permalink: /research/dpu/docs/
title: "Documentations"
sidebar:
    nav: "dpu" 
---

# NVIDIA Docs

- What is a DPU? [What Is a SmartNIC? | NVIDIA Blog](https://blogs.nvidia.com/blog/2021/10/29/what-is-a-smartnic/)
- [DOCA](https://courses.nvidia.com/courses/course-v1:DLI+S-NP-01+V1/course/)



# Demystify Subfunction(SF)

> An SF is a lightweight function which has a parent PCIe function on which it is deployed. The SF, therefore, has access to the capabilities and resources of its parent PCIe function and has its own function capabilities and its own resources. This means that an SF would also have its own dedicated queues (i.e., txq, rxq).

Set-up steps of SF on BlueField

- Create a new SF

  - `/opt/mellanox/iproute2/sbin/mlxdevm port add pci/<pci_address> flavour pcisf pfnum <corresponding pfnum> sfnum <sfnum>`

- Configure the SF

  - `/opt/mellanox/iproute2/sbin/mlxdevm port function set pci/<pci_address>/<sf_index>  hw_addr <MAC address> trust on state active`. Note this command is assembled with three sub-commands: MAC address, trust and state configurations.

- Deploy the SF

  - Unbind SF from default config driver and bind it to actual SF driver

    ```bash
    echo mlx5_core.sf.<next_serial> >  /sys/bus/auxiliary/drivers/mlx5_core.sf_cfg/unbind
    echo mlx5_core.sf.<next_serial>  > /sys/bus/auxiliary/drivers/mlx5_core.sf/bind
    ```

- Use the SF

  - Configure OVS

  - Bring up interfaces. First find the interfaces in **DOWN** state then change their state to **UP**

    ```bash
    ip -a
    ifconfig [interface] up
    ```

    

- Remove the SF

  - Inactivate SF

    ```bash
    /opt/mellanox/iproute2/sbin/mlxdevm port function set pci/<pci_address>/<sf_index> state inactive
    ```

  - Delete SF

    ```bash
    /opt/mellanox/iproute2/sbin/mlxdevm port del pci/<pci_address>/<sf_index>
    ```

    

- Other commands

  - View  available sub-functions

    ```bash
    devlink dev show
    ```

    



## Reference 

- [DPU CLI :: NVIDIA DOCA SDK Documentation](https://docs.nvidia.com/doca/sdk/cli-guide/index.html)
