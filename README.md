## Cloudbleed-Domain-Checker
This is a small Node.JS app that uses this database https://github.com/pirate/sites-using-cloudflare to figure out, if sites you used, may be affected by Cloudbleed.

## What is Cloudbleed?
Cloudbleed is a memory leak on Cloudflares reverse proxys leading to the problem, that search engines could cache data like session cookies, OAuth tokens and other sensitive data.

## What is my motivation?
I wanted to create a simple to use Site, where you can enter the URL you want to have checked and get your results as quickly as possible
To get quick search results, the whole database is cached once the first person checks their URL and stays cached until a restart of the app happens when I update the database.
The database is (hopefully, if it works) updated every 30 minutes to keep the results up-to-date.

## Where can I visit the current site?
The site is offline, this issue is no longer relevant. 

The server is maintained by me.

## How can I help?
You can help me with the text in either the index.html, true.html or false.html. I'm not a native English speaker, so I could use your help to phrase things better. 
If you also want to help me with the "core" like adding more functionality or improving things, feel free to do so too. One thing I would like to add is the ignoring of "http://" or "https://". Currently the domain entered is not allowed to have a "http://" or "https://" in front of it.

If I messed something up in this Readme, please help me too :D

## Licence
This project is licenced under the ISC licence https://en.wikipedia.org/wiki/ISC_license

```
Copyright (c) 2017, Mining_Pickaxe

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
```
