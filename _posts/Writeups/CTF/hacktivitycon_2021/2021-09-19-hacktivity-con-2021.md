---
title: Hacktivity Con 2021 [CTF] Writeup
author: Arijit Bhowmick [sys41x4]
date: 2021-09-19 18:32:00 -0500
categories: [CTF Writeup, "Hacktivity Con", "HacktivityCon2021-CTF"]
tags: ["Hacktivity Con", "Hacktivity Con 2021", "Hacktivity Con CTF", "Hacktivity Con 2021 CTF","2021", "September", Hackerone, writeup, CTFtime]
permalink: "/CTF-Writeup/HacktivityCon-2021-CTF.html"
---
# Team Details

```
Team Name : MINOTAURSEC

Team Members : sys41x4 [Arijit Bhowmick]
               (https://twitter.com/sys41x4)
               meet9#4291 {Discord}
Team Points Earned : 1011
Team Position : 331
Challenges Solved : Bass64 [WARMUPS]
                    Read The Rules [WARMUPS]
                    2EZ [WARMUPS]
                    Target Practice [WARMUPS]
                    Tsunami [WARMUPS]
                    Six Four Over Two [WARMUPS]
                    Butter Overflow [WARMUPS]
                    Pimple [WARMUPS]
                    Confidentiality [WEB]
                    Integrity [WEB]
                    Swaggy [WEB]
                    Jed Sheeran [OSINT]
                    Mike Shallot [OSINT]

Team Score Board : 1011
```
<a href="/assets/CTF/hacktivitycon_2021/hacktivitycon_ctf_2021-MINOTAURSEC.pdf">VIEW TEAM SCORE BOARD</a>

# Challenges

## Bass64 [WARMUPS]

![Bass64 Details](/assets/CTF/hacktivitycon_2021/Challenges/Bass64/bass64_details.png)

`Author: @JohnHammond#6971`

`It, uh... looks like someone bass-boosted this? Can you make any sense of it ?`

## Bass64 | [SOLUTION]

Download the challenge File from the attachment button<br>
After oppening it we will be presented with an ASCII ART<br>

![Bass64 ASCII ART](/assets/CTF/hacktivitycon_2021/Challenges/Bass64/bass64_ascii-art.png)

Here I have used **micro** (A terminal text editor) to open the file.<br>
We can also use **nano**,**sublime text**, or any other text editor we want

After getting the text, we just have to type those in terminal and we will be presented with a base64 encoded string.<br>
Just decoding it will give us the FLAG for this challenge

![Bass64 FLAG](/assets/CTF/hacktivitycon_2021/Challenges/Bass64/bass64_flag.png)

`FLAG : flag{35a5d13da6a2afa0c62bfcbdd6301a0a}`

## Read The Rules [WARMUPS]

![Read-The-Rules Details](/assets/CTF/hacktivitycon_2021/Challenges/Read-the-Rules/read-the-rules_details.png)

`Author: @JohnHammond#6971`

`Please follow the rules for this CTF`

## Read The Rules | [SOLUTION]

In the Challenge description there will be a link<br>
which is `https://ctf.hacktivitycon.com/rules`

On viewing the source-code of the webpage<br>
we are going to have our flag in HTML comments<br>

![Read-The-Rules Flag](/assets/CTF/hacktivitycon_2021/Challenges/Read-the-Rules/read-the-rules_flag.png)

`FLAG : flag{90bc54705794a62015369fd8e86e557b}`

## 2EZ [WARMUPS]

![2EZ Details](/assets/CTF/hacktivitycon_2021/Challenges/2EZ/2EZ_details.png)

`Author: @JohnHammond#6971`

`These warmups are just too easy! This one definitely starts that way, at least!`

## 2EZ | [SOLUTION]

Let us first download the provided attachment file<br>
After, downloading it we are going to open it in hexedit<br>

![2EZ Challenge File](/assets/CTF/hacktivitycon_2021/Challenges/2EZ/2EZ_challenge_file.png)

There we can see that it is a `JPEG` file.<br>
We can say so by analysing the header bytes<br>
But the first bytes are changed in this case<br>

So we can fix this JPEG file by fixing it's header bytes<br>
The magical header bytes of `jpeg` is `FF D8 FF E0`

![2EZ Solved File](/assets/CTF/hacktivitycon_2021/Challenges/2EZ/2EZ_solved_file.png)

So fixing the first 4 bytes of the file with `FF D8 FF E0`<br>
we will be provided with the flag, which is written in the JPEG file.

![2EZ FLAG](/assets/CTF/hacktivitycon_2021/Challenges/2EZ/2EZ_flag.png)

`FLAG : flag{812a2ca65f334ea1ab234d8af3c64d19}`

## Target Practice [WARMUPS]

![Target Practice Details](/assets/CTF/hacktivitycon_2021/Challenges/Target-Practice/Target-Practice_details.png)

`Author: @JohnHammond#6971`

`Can you hit a moving target?`

`Note, this flag contains only 24 hexadecimal characters.`

## Target Practice | [SOLUTION]

Let us first download the provided attachment file.<br>
We got to see that it is a `GIF` file.

![Target Practice Challenge File](/assets/CTF/hacktivitycon_2021/Challenges/Target-Practice/target_practice.gif)

While opening it we can see that it is showing some random qr codes like images

I have used strings, hexedit, steghide, exiftool, binwalk but those didn't work.

So I thought to extract all the frames from the GIF file and then analyse it.

So I have used an online <a href="https://extractgif.imageonline.co/index.php">gif-to-png</a> converter tool
and got all the frames from the GIF file in png format.

We got to have 22 png file, which means that there might be 22 frames in the PNG file.

![Target Practice 22 PNG Files](/assets/CTF/hacktivitycon_2021/Challenges/Target-Practice/Target-Practice_22_png_files.png)

So I thought to do a quick reverse search using **Google Reverse Image Search Tool** `https://www.google.com/imghp`
with the first png image that was extracted from the GIF file

There we got to see that it is referring to `MAXI CODE`

![Target Practice google Reverse Image Search](/assets/CTF/hacktivitycon_2021/Challenges/Target-Practice/Target_practice_google_rev_search.png)

Then with no time I have searched for the `Maxicode Decoder` and got a website for decoding maxicode images `https://products.aspose.app/barcode/recognize/maxicode#`

There I have started to try all 22 PNGs that I have.

On the 16th PNG we got the flag for this challenge

![Target Practice maxicode flag](/assets/CTF/hacktivitycon_2021/Challenges/Target-Practice/Target-Practice_flag_maxicode.png)

![Target Practice maxicode flag](/assets/CTF/hacktivitycon_2021/Challenges/Target-Practice/Target-Practice_flag.png)

`FLAG : flag{385e3ae5d7b2ca2510be8ef4}`

## Tsunami [WARMUPS]

![Tsunami Details](/assets/CTF/hacktivitycon_2021/Challenges/Tsunami/Tsunami_details.png)

`Author: @JohnHammond#6971`

`Woah! It's a natural disaster! But something doesn't seem so natural about this big wave...`

## Tsunami | [SOLUTION]

So let us download the file.<br>
while analysing the file type with `file` command<br>
we got to see that it is a `WAV` file.

![Tsunami filetype](/assets/CTF/hacktivitycon_2021/Challenges/Tsunami/Tsunami_filetype.png)

After playing the wav file, I was sure that it's an `Audio Stegnography`

I quickly fireup the `Audacity` and opened the wav file in it.<br>
changed the view from `waveform` to `Spectrogram`

![Tsunami Audacity Analysis](/assets/CTF/hacktivitycon_2021/Challenges/Tsunami/Tsunami_audacity_analysis.png)

While moving at the very end we got our flag \0/

![Tsunami Flag](/assets/CTF/hacktivitycon_2021/Challenges/Tsunami/Tsunami_flag.png)

`FLAG : flag{f8fbb2c761821d3af23858f721cc140b}`

## Six Four Over Two [WARMUPS]

![Six Four Over Two Details](/assets/CTF/hacktivitycon_2021/Challenges/Six-Four-Over-Two/Six-Four-Over-Two_details.png)

`Author: @JohnHammond#6971`

`I wanted to cover all the bases so I asked my friends what they thought, but they said this challenge was too basic...`

## Six Four Over Two | [SOLUTION]

Let us download the file of the challenge.

After opening the file we got to see that it has some string written in it.<br>
`EBTGYYLHPNQTINLEGRSTOMDCMZRTIMBXGY2DKMJYGVSGIOJRGE2GMOLDGBSWM7IK`<br>

With first glance I have understood that it's a `Base32` encoded string.<br>
Then decoding the `base32` encoded string gives us the flag for this challenge.

![Six Four Over Two Flag](/assets/CTF/hacktivitycon_2021/Challenges/Six-Four-Over-Two/Six-Four-Over-Two_flag.png)

`FLAG : flag{a45d4e70bfc407645185dd9114f9c0ef}`

## Butter Overflow [WARMUPS]

![Butter Overflow Details](/assets/CTF/hacktivitycon_2021/Challenges/Butter-Overflow/Butter-Overflow_details.png)

`Author: @M_alpha#3534`

`Can you overflow this right?`

## Butter Overflow | [SOLUTION]

We will be provided with 3 files as an attachment<br>
But I have used 2 from them which are<br>
`source.c` and `butter_overflow`<br>

`butter_overflow` is an binary file, and `source.c` is it's source File.

As it it a warmup challenge I was sure that a basic buffer overflow will get us the flag.

The `source.c` has a C-code which is

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <sys/stat.h>

void give_flag();

void handler(int sig) {
    if (sig == SIGSEGV)
        give_flag();
}

void give_flag() {
    char *flag = NULL;
    FILE *fp = NULL;
    struct stat sbuf;

    if ((fp = fopen("flag.txt", "r")) == NULL) {
        puts("Could not open flag file.");
        exit(EXIT_FAILURE);
    }

    fstat(fileno(fp), &sbuf);

    flag = malloc(sbuf.st_size + 1);
    if (flag == NULL) {
        puts("Failed to allocate memory for the flag.");
        exit(EXIT_FAILURE);
    }

    fread(flag, sizeof(char), sbuf.st_size, fp);
    flag[sbuf.st_size] = '\0';

    puts(flag);

    fclose(fp);
    free(flag);

    exit(EXIT_SUCCESS);
}

int main() {
    char buffer[0x200];

    setbuf(stdout, NULL);
    setbuf(stdin, NULL);

    signal(SIGSEGV, handler);

    puts("How many bytes does it take to overflow this buffer?");
    gets(buffer);

    return 0;
}
```

So what I have done is first I have make the binary executable<br>
using the command `chmod +x butter_overflow`<br>

Then I have analysed it with `checksec` (A tool from pwntools package)

![Butter Overflow checksec analysis](/assets/CTF/hacktivitycon_2021/Challenges/Butter-Overflow/Butter-Overflow_checksec.png)

Then I have generated a len 100 cyclic string and forward it to file named `alphabet`<br>
using the command `cyclic 100 > alphabet`<br>
Which means `alphabet` is a filename and can be of any name you want, and it contains a string having length 100.

Let Us now use gdb to analyse the binary.

![Butter Overflow gdb analysis](/assets/CTF/hacktivitycon_2021/Challenges/Butter-Overflow/Butter-Overflow_gdb.png)

After passing the strings from the `alphabet` file using<br>
`r < alphabet`<br>
we got to see that a bufferoverflow has occured.

![Butter Overflow pwndbg analysis](/assets/CTF/hacktivitycon_2021/Challenges/Butter-Overflow/Butter-Overflow_pwndbg.png)

We got to see that we have a hit at string `faafgaf`<br>
Finding the string in the `alphabet` file using `grep` give us the exact string<br>
which we require to cause the overflow.

![Butter Overflow grep](/assets/CTF/hacktivitycon_2021/Challenges/Butter-Overflow/Butter-Overflow_search_exact_string.png)

There was a `deploy` button at the challenge details<br>
which provide us an ip address and a port to connect with `nc`<br>
On deploying the instance we got to see an input string, which ask us to provide an input.

![Butter Overflow deploy instance](/assets/CTF/hacktivitycon_2021/Challenges/Butter-Overflow/Butter-Overflow_nc_connect.png)

Providing the string that causes the buffer-overflow in the program<br>
as an input string provide us the flag for this challenge.

![Butter Overflow Flag](/assets/CTF/hacktivitycon_2021/Challenges/Butter-Overflow/Butter-Overflow_flag.png)

`FLAG : flag{72d8784a5da3a8f56d2106c12dbab989}`

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

## Pimple [WARMUPS]

![Pimple Details](/assets/CTF/hacktivitycon_2021/Challenges/Pimple/pimple_details.png)

`Author: @JohnHammond#6971`

`This challenge is simple,it's just a pimple!`

## Pimple | [SOLUTION]

Let us first download the file, and check the type of the file.

![Pimple Filetype](/assets/CTF/hacktivitycon_2021/Challenges/Pimple/pimple_filetype.png)

Here we can see that it is a GIMP file.

Let us open the challenge file `pimple` in GIMP or <a href="https://www.photopea.com/">photopea</a> (alternative GIMP file opener Online)<br>
As I don't have GIMP installed in my system, I am using the online alternative version for it.

![Pimple load Image](/assets/CTF/hacktivitycon_2021/Challenges/Pimple/pimple_load_image.png)

After removing 6 Top-most layers we got to see out flag.

![Pimple Flag](/assets/CTF/hacktivitycon_2021/Challenges/Pimple/pimple_flag.png)


`FLAG : flag{9a64bc4a390cb0ce31452820ee562c3f}`

## Confidentiality [WEB]

![Confidentiality Details](/assets/CTF/hacktivitycon_2021/Challenges/Confidentiality/Confidentiality_details.png)

`Author: @JohnHammond#6971`

`My school was trying to teach people about the cIA triad so they made all these dumb example applications... as if they know anything about information security. Can you prove these aren't secure?`

## Confidentiality | [SOLUTION]

Let us start the instance for this challenge.

Then we are provided with a HTTP Address<br>
In this case we are provided with `http://challenge.ctf.games:31265`

On visiting the webapp we will be provided with a basic webpage<br>
where in the input field it was written as `/etc/hosts`

On providing the input as `/etc/hosts` we are provided with a response text<br>
which is similar for listing directory.

![Confidentiality Basic Command](/assets/CTF/hacktivitycon_2021/Challenges/Confidentiality/Confidentiality_basic-command-input.png)

While getting a proper response, we can also generate an error<br>
so that we can analyse the process in a better way<br>

While providing `aaa` we can get the command `ls -l` that is used to provide us the response.

![Confidentiality Error](/assets/CTF/hacktivitycon_2021/Challenges/Confidentiality/Confidentiality_error-generating.png)

So I thought of using piping which is `|`<br>
We can also use `;` or `&` to execute two commands at the same time<br>
with which we can generate a one-liner command.

So, First of all I use to list the home directory using the command `/etc/hosts | ls -la /home`<br>
Then, I got the user in the instance, named as `user`<br>
Then I list the `user` home directory using the command `/etc/hosts | ls -la /home/user`<br>
and got to see the files in the user directory.<br>
There we have our flag as `flag.txt`

![Confidentiality List User directory](/assets/CTF/hacktivitycon_2021/Challenges/Confidentiality/Confidentiality_command-execution.png)

Then I use the `cat` command to get the content of `flag.txt`<br>
providing input as `/etc/hosts | cat /home/user/flag.txt`

![Confidentiality Flag](/assets/CTF/hacktivitycon_2021/Challenges/Confidentiality/Confidentiality_flag.png)

`FLAG : flag{e56abbce7b83d62dac05e59fb1e81c68}`

## Integrity [WEB]

![Integrity Details](/assets/CTF/hacktivitycon_2021/Challenges/Integrity/Integrity_details.png)

`Author: @JohnHammond#6971`

`My school was trying to teach people about the CIA triad so they made all these dumb example applications... as if they know anything about information security.`<br>
`Supposedly they learned their lesson and tried to make this one more secure. Can you prove it still vulnerable?`

## Integrity | [SOLUTION]

Let us start the instance for this challenge.

Then we are provided with a HTTP Address<br>
In this case we are provided with `http://challenge.ctf.games:30043`

On visiting the webpage we got to see a homepage, where it was written `/etc/hosts` in the input field.

![Integrity Homepage](/assets/CTF/hacktivitycon_2021/Challenges/Integrity/Integrity_homepage.png)

While providing the input as `/etc/hosts` we got to see that the webapp was returning a SHA256 hash of that file.

![Integrity SHA256 HASH of /etc/hosts](/assets/CTF/hacktivitycon_2021/Challenges/Integrity/Integrity_basic-input-sha256-hash.png)

After lot of Try-&-Errors I thought of passing the request through burp.<br>
Sorry but I don't have the snap of those errors.<br>

Passing the request through burp provide us the request.

![Integrity first request through burp](/assets/CTF/hacktivitycon_2021/Challenges/Integrity/Integrity_basic-input-burp-req.png)

Then passing the request to repeater, and with an unusual guess I got Command Injection in the instance.

![Integrity list home Directory](/assets/CTF/hacktivitycon_2021/Challenges/Integrity/Integrity_list-home-directory.png)

There we got the user as `user`<br>
Then listing the `user` directory provide us the files in that directory<br>
and we got to see the flag for this challenge there as `flag.txt`

![Integrity list user Directory](/assets/CTF/hacktivitycon_2021/Challenges/Integrity/Integrity_list-user-directory.png)

Then using the `cat` command to print the content of `flag.txt` file provide us the flag fo rthis challenge.

![Integrity Flag](/assets/CTF/hacktivitycon_2021/Challenges/Integrity/Integrity_flag.png)

`FLAG : flag{62b8b3cb5b8c6803bf3dc585b1b5141d}`

### Other solutions comming soon ...

Thankyou, for reading my writeup :)<br>
Hope, I would see you in my next writeup.

<a href="/support/sys41x4">Support Me</a> if you want to.