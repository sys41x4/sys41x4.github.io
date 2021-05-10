---
title: Illumination [HackTheBox] Writeup
author: Arijit Bhowmick [sys41x4]
date: 2021-03-21 18:32:00 -0500
categories: [HackTheBox, Challenges, Forensics]
tags: [HackTheBox, Easy, Illumination, Forensics, Challenge, writeup, "git commit"]
permalink: "/HTB/challenge/forensics/illumination.html"
---

[![HTB Img](/assets/htb/htb-img/htb_logo.jpeg)](http://hackthebox.eu)

### Challenge Description

![Challenge Details](/assets/htb/challenge/forensics/illumination/img/challenge_desc.png)


`A Junior Developer just switched to a new source control platform. Can you find the secret token?`

## SOLUTION

Download the zip file provide by the challenge.
The Password for the zip file would be `hackthebox`.

First of all unzip the files from zip file using the command `unzip Illumination.zip`

![Unzip_Files](/assets/htb/challenge/forensics/illumination/img/unzip_compressed_file.png)

Then `cd` into `Illumination.JS` directory as `cd Illumination.JS` and list the files in the directory as  `ls -la`

![list_files](/assets/htb/challenge/forensics/illumination/img/list_files.png)

Here, it can be seen that the directory contain `.git` folder, which seems that it is a git repository.

Then using the command `git log`, we can view the commit details.

![repo_log](/assets/htb/challenge/forensics/illumination/img/git_log_details.png)

Using `git show 335d6cfe3cdc25b89cae81c50ffb957b86bf5a4a` we can view the, **log message and textual diff** of that commit.

![repo_log](/assets/htb/challenge/forensics/illumination/img/commit_details.png)

Here we can see the `token` is shown at the end of the file.
![token](/assets/htb/challenge/forensics/illumination/img/token.png)

Let us decode the `base64` encoding of the `token` value.

![flag](/assets/htb/challenge/forensics/illumination/img/flag.png)

This is how, I solved this challenge.

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

<a href="/support/sys41x4">Support Me</a> if you want to.
