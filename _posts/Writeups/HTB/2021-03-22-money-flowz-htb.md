---
title: Money Flowz [HackTheBox] Writeup
author: Arijit Bhowmick [sys41x4]
date: 2021-03-22 18:32:00 -0500
categories: [HackTheBox, Challenges, OSINT]
tags: [HackTheBox, Easy, "Money Flowz", OSINT, Challenge, writeup]
permalink: "/HTB/challenge/osint/Money Flowz.html"
---

[![HTB Img](/assets/htb/htb-img/htb_logo.jpeg)](http://hackthebox.eu)

### Challenge Description

![Challenge Details](/assets/htb/challenge/osint/money-flowz/img/challenge_desc.png)

`Frank Vitalik is a hustler, can you figure out where the money flows?`

## SOLUTION

We got a name `Frank Vitalik` from the challenge description.

I have used `Google Dorking`, To search his details (profile, discussion, and mentioned name).
The query I have used is

```google-dorking
intext:Frank Vitalik site:facebook.com OR site: reddit.com OR site:twitter.com OR site:instagram.com OR site:linkedin.com
```

![google_dorking_result](/assets/htb/challenge/osint/money-flowz/img/google_dorking_result.png)

## Depth Search

1. From the First two links, we get into two reddit conversation.
In the first one it is mentioned about `ETH crypto scam` and a link.

![reddit_conv_1](/assets/htb/challenge/osint/money-flowz/img/reddit_discussion_1.png)

We get a conversation in the given address about a scam.

2. On the second link of the google dorking, we get into another reddit conversation,
with another `link` in it.

![reddit_conv_2](/assets/htb/challenge/osint/money-flowz/img/reddit_discussion_2.png)

Which lead us into a webpage mentioning `Super Ethereum SCAM Giveaway` and a `ETH address`<br>
In the comment it is mentioned about `ropsten`.

While searching for `ropsten` in google search.

![ropsten_google_search](/assets/htb/challenge/osint/money-flowz/img/ropsten_google_search.png)

The first link goes for `https://ropsten.etherscan.io`.
After opening the link I have searched for the ETH address `0x1b3247Cd0A59ac8B37A922804D150556dB837699`<br>

![ropsten_addr_transaction_list](/assets/htb/challenge/osint/money-flowz/img/ropsten_addr_transaction_list.png)

We have to deal with outbound transactions.

While searching for the outbound transactions in the list.
The oldest outbound transaction I found was `0xe1320c23f292e52090e423e5cdb7b4b10d3c70a8d1b947dff25ae892609f2ef4`

![transaction_addr](/assets/htb/challenge/osint/money-flowz/img/transaction_addr.png)

We got the details of the transactions and a comment in it, while clicking on the transaction address.

![transaction_comment](/assets/htb/challenge/osint/money-flowz/img/transaction_comment.png)

Click on the `View input as` and click on `UTF-8`.

![flag](/assets/htb/challenge/osint/money-flowz/img/flag.png)

Yes!!! We have our flag.

This is how, I solved this challenge.

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

<a href="/support/sys41x4">Support Me</a> if you want to.