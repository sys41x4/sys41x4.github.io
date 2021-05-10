---
title: Easy Phish [HackTheBox] Writeup
author: Arijit Bhowmick [sys41x4]
date: 2021-03-23 18:32:00 -0500
categories: [HackTheBox, Challenges, OSINT]
tags: [HackTheBox, Easy, "Easy Phish", OSINT, Challenge, writeup]
permalink: "/HTB/challenge/osint/Easy Phish.html"
---

[![HTB Img](/assets/htb/htb-img/htb_logo.jpeg)](http://hackthebox.eu)

### Challenge Description

![Challenge Details](/assets/htb/challenge/osint/easy-phish/img/challenge_desc.png)

`Customers of secure-startup.com have been recieving some very convincing phishing emails, can you figure out why?`

## SOLUTION

After Visiting the webpage at `secure-statup.com`, it is mentioned to be a parked domain on godaddy.

So, We have to use some osinet tools to gather information about this domain.

I have used `host`, `dig`, `nslookup` and some other tools.

To get the flag, I have used the command

```console
dig TXT secure-startup.com _dmarc.secure-startup.com
```

![flag](/assets/htb/challenge/forensics/illumination/img/flag.png)

This is how, I solved this challenge.

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

<a href="/support/sys41x4">Support Me</a> if you want to.