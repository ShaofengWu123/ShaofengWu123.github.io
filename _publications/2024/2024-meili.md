---
title:          "Meili: Enabling SmartNIC as a Service in the Cloud"
date:           2024-07-31 00:00:00 +0800
selected:       true
# pub:            "ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
pub_last:       '<span class="badge badge-pill badge-preprint">Preprint</span><span class="badge badge-pill badge-network">Network</span><span class="badge badge-pill badge-system">System</span>'
pub_date:       "2024"

abstract: >-
  SmartNICs are touted as an attractive substrate for network application offloading, offering benefits in programmability, host resource saving, and energy efficiency. The current usage restricts offloading to local hosts and confines SmartNIC ownership to individual application teams, resulting in poor resource efficiency and scalability. This paper presents Meili, a novel system that realizes SmartNIC as a service to address these issues. Meili organizes heterogeneous SmartNIC resources as a pool and offers a unified one-NIC abstraction to application developers. This allows developers to focus solely on the application logic while dynamically optimizing their performance needs. Our evaluation on NVIDIA BlueField series and AMD Pensando SmartNICs demonstrates that Meili achieves scalable single-flow throughput with a maximum 8 $\mu$s latency overhead and enhances resource efficiency by 3.07$\times$ compared to standalone deployments and 1.44$\times$ compared to state-of-the-art microservice deployments.
cover:          /assets/images/covers/meili.png
authors:
  - Qiang Su
  - Shaofeng Wu
  - Zhixiong Niu
  - Ran Shu
  - Peng Cheng
  - Yongqiang Xiong
  - Zaoxing Liu
  - Hong Xu
links:
  arXiv: https://arxiv.org/abs/2312.11871
  Poster: https://dl.acm.org/doi/10.1145/3603269.3610859
---