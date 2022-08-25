---
title: "What is the difference between a domain name that has www or no www?"
categories:
  - Tech blog
tags:
  - computer network
---
When browsing websites, you may happen to notice a difference among the domain names that you type into the browser: some of the domain names have "www" prefix while others do not.
What's more, sometimes you can use these two kinds of domain names to visit the same website. For example, you can try links below to visit Baidu search engine website:  

- [https://www.baidu.com/](https://www.baidu.com/) 
- [https://baidu.com/](https://baidu.com/)  

So why does some domain names have "www"? And what is the point in having a "www" prefix while you can use its alternative(without "www") to visit the same website? Questions will be answered below.

# Basic concepts: IP address, domain name, URL, http and DNS
## IP address and domain name
IP address identifies a router, a host or other devices in network layer. For IPv4 address, it has 32 digits. People can use an IP address to visit a website or other resources. However it is not a preferable approach since it is hard and boring to remember a 32 bit binary number. So <strong>domain name</strong> is introduced to act as an string representation of the IP address. For example, domain name <strong>www.baidu.com</strong> represents IP address 202.108.22.5. 
<p class="notice--info"><strong>Note</strong>: An IP address can have several domain names. A domain name can refer to several IP addresss, for example, when several servers hold one website.</p>

Then next questions is: how do we know the domain name of an IP address?

## Domain name system(DNS)
DNS is a protocol that runs on application layer. It is used to establish the mapping between IP address and its domain name. When you use a domain name to visit a website, it is translated into an IP address if there has been already records in your computer. If not, DNS request is first sent to DNS server to ask if there is any record of the domain name you want to visit.

## URL and http
To visit a website, type its domain name into the browser is not enough. Something like "http://" should be added to the prefix of the domain name, which refers to the protocol. So the complete form is "https:///www.baidu.com" and it is called a Uniform Resource Locator(URL). As its name suggests, URL is used to locate resource on the Internet. 

# Why www and why not?

# References