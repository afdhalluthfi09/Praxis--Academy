# create  folder your project
```
luthfi@DE /Documents
$ mkdir rhyames
$ cd rhymes
```
![alt text](https://github.com/afdhalluthfi09/image/blob/master/touchfileREADMI.jpg?raw=true)

Global config github afdhalluthfi09
```
luthfi@DE MINGW64/e /Documents
$ git config --global user.name "afdhalluthfi09"
luthfi@DE MINGW64/e /Documents
$ git config --global user.email "afdhalluthfi@gmail.com"
```
To make this directory and empty Git repo do this:
```
luthfi@DE MINGW64/e /Documents
$ git init
Initialized empty Git repository in /home/hj/rhymes/.git/
```
I usually create an empty README.txt file for the first commit in my project history. 
```
luthfi@DE MINGW64/e /Documents
$ touch README.txt
luthfi@DE MINGW64/e /Documents
$ git add README.txt
luthfi@DE MINGW64/e /Documents
$ git commit -m 'First commit.'
[master (root-commit) e34657f] First commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt
 ```
Add some explanation about the project to the README file.
```
luthfi@DE MINGW64/e /Documents
$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt
```
Review uncommitted changes. Then commit them.
```
luthfi@DE MINGW64/e /Documents
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")
luthfi@DE MINGW64/e /Documents$ git diff
diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.
luthfi@DE MINGW64/e /Documents
$ git add README.txt
luthfi@DE MINGW64/e /Documents
$ git commit -m 'Added project overview to README.txt'
[master aefb37e] Added project overview to README.txt
 1 file changed, 1 insertion(+)
```
Alice downloads favorite rhymes.
```
luthfi@DE MINGW64/e /Documents
$ wget https://github.com/bryanhirsch/rhymes/blob/master/all-around-the-mulberry-bush.txt
--2019-08-28 10:13:49--  https://github.com/bryanhirsch/rhymes/blob/master/all-around-the-mulberry-bush.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘all-around-the-mulberry-bush.txt’

all-around-the-mulb     [  <=>               ]  69,08K   180KB/s    in 0,4s    

2019-08-28 10:13:52 (180 KB/s) - ‘all-around-the-mulberry-bush.txt’ saved [70733]

luthfi@DE MINGW64/e /Documents
$ wget https://github.com/bryanhirsch/rhymes/blob/master/jack-and-jill.txt
--2019-08-28 10:14:17--  https://github.com/bryanhirsch/rhymes/blob/master/jack-and-jill.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘jack-and-jill.txt’

jack-and-jill.txt       [   <=>              ]  65,02K  90,3KB/s    in 0,7s    

2019-08-28 10:14:19 (90,3 KB/s) - ‘jack-and-jill.txt’ saved [66581]

luthfi@DE MINGW64/e /Documents
$ wget https://github.com/bryanhirsch/rhymes/blob/master/old-mother-hubbard.txt
--2019-08-28 10:14:30--  https://github.com/bryanhirsch/rhymes/blob/master/old-mother-hubbard.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘old-mother-hubbard.txt’

old-mother-hubbard.     [  <=>               ]  69,45K   218KB/s    in 0,3s    

2019-08-28 10:14:31 (218 KB/s) - ‘old-mother-hubbard.txt’ saved [71117]

luthfi@DE MINGW64/e /Documents
$ wget https://github.com/bryanhirsch/rhymes/blob/master/twinkle-twinkle.txt
--2019-08-28 10:14:42--  https://github.com/bryanhirsch/rhymes/blob/master/twinkle-twinkle.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘twinkle-twinkle.txt’

twinkle-twinkle.txt     [        <=>         ]  63,95K  21,9KB/s    in 2,9s    

2019-08-28 10:14:46 (21,9 KB/s) - ‘twinkle-twinkle.txt’ saved [65486]

luthfi@DE MINGW64/e /Documents
$ wget https://github.com/bryanhirsch/rhymes/blob/master/hokey-pokey.txt
--2019-08-28 10:14:58--  https://github.com/bryanhirsch/rhymes/blob/master/hokey-pokey.txt
Resolving github.com (github.com)... 52.74.223.119
Connecting to github.com (github.com)|52.74.223.119|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: ‘hokey-pokey.txt’

hokey-pokey.txt         [     <=>            ]  65,83K  49,7KB/s    in 1,3s    

2019-08-28 10:15:00 (49,7 KB/s) - ‘hokey-pokey.txt’ saved [67408]
```
The files have been downloaded, but not committed.
You can see this with git status. git status
Alice adds the files one-by-one to make her git history look nice and tidy.
```
luthfi@DE MINGW64/e /Documents
$ git add all-around-the-mulberry-bush.txt
luthfi@DE MINGW64/e /Documents
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	hokey-pokey.txt
	jack-and-jill.txt
	old-mother-hubbard.txt
	twinkle-twinkle.txt

luthfi@DE MINGW64/e /Documents
$ git commit -m 'Added all-around-the-mulberry-bush.txt.'
[master bbd5a1c] Added all-around-the-mulberry-bush.txt.
 1 file changed, 958 insertions(+)
 create mode 100644 all-around-the-mulberry-bush.txt
luthfi@DE MINGW64/e /Documents
$ git add jack-and-jill.txt
luthfi@DE MINGW64/e /Documents
$ git commit -m 'Added jack-and-jill.txt.'
[master dbde4d1] Added jack-and-jill.txt.
 1 file changed, 898 insertions(+)
 create mode 100644 jack-and-jill.txt
```
Alice gets lazy and decides to just add everything else at once.
```
luthfi@DE MINGW64/e /Documents
$ git add .
luthfi@DE MINGW64/e /Documents
$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
[master 0606457] Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
 3 files changed, 2780 insertions(+)
 create mode 100644 hokey-pokey.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 twinkle-twinkle.txt
 ```
Alice reviews and admires her commit history.
```
luthfi@DE MINGW64/e /Documents
$ git log
commit 060645776250d4cc49873f840483adf94491b3d5 (HEAD -> master)
Author: afdhalluthfi09 <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 10:15:51 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit dbde4d131f49629a0df13bde7eea3a692b8b0371
Author: afdhalluthfi09 <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 10:15:35 2019 +0700

    Added jack-and-jill.txt.

commit bbd5a1c800ba72b6aed17f4b965b1887f150d617
Author: afdhalluthfi09 <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 10:15:23 2019 +0700

    Added all-around-the-mulberry-bush.txt.

commit aefb37e601254f89a24f4fcee406d8defa640a4b
Author: afdhalluthfi09 <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 10:13:24 2019 +0700

    Added project overview to README.txt
```
```
luthfi@DE MINGW64/e /Documents
$ git log --oneline
0606457 (HEAD -> master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
dbde4d1 Added jack-and-jill.txt.
bbd5a1c Added all-around-the-mulberry-bush.txt.
aefb37e Added project overview to README.txt
e34657f First commit.
```
```
luthfi@DE MINGW64/e /Documents
$ git log -p
commit 060645776250d4cc49873f840483adf94491b3d5 (HEAD -> master)
Author: afdhalluthfi09 <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 10:15:51 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..44f9c6e
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,916 @@
+
+
+
+
+
+
+<!DOCTYPE html>
+<html lang="en">
+  <head>
+    <meta charset="utf-8">
+  <link rel="dns-prefetch" href="https://github.githubassets.com">
```
she pushes her repo up to GitHub like this
```
luthfi@DE MINGW64/e /Documents
$ git remote add origin https://github.com/afdhalluthfi09/rhymes.git
luthfi@DE MINGW64/e /Documents$ git push -u origin master
Username for 'https://github.com': afdhalluthfi09
Password for 'https://afdhalluthfi09@github.com': 
Counting objects: 17, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (14/14), done.
Writing objects: 100% (17/17), 21.80 KiB | 1.68 MiB/s, done.
Total 17 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), done.
To https://github.com/afdhalluthfi09/rhymes.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
```
Alice renames origin -> alice.
```
hj@hj:~$ cd rhymes
luthfi@DE MINGW64/e /Documents
$ git remote rename origin afdhalluthfi09
```
Add a remote pointing to Bob's copy of the project.
```
luthfi@DE MINGW64/e /Documents
$ git remote add bobpraxis https://github.com/afdhalluthfi09/rhymes.git
```
Review remotes.
```
luthfi@DE MINGW64/e /Documents
$ git remote
afdhalluthfi09
bobpraxis
```
Confirm each remote points to the correct repository.
```
luthfi@DE MINGW64/e /Documents
$ git remote -v
afdhalluthfi09	https://github.com/afdhalluthfi09/rhymes.git (fetch)
afdhalluthfi09	https://github.com/afdhalluthfi09/rhymes.git (push)
bobpraxis	https://github.com/afdhalluthfi09/rhymes.git (fetch)
bobpraxis	https://github.com/afdhalluthfi09/rhymes.git (push)
```
Fetch a copy of Bob's work.
```
luthfi@DE MINGW64/e /Documents
$ git fetch bobpraxis 
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/afdhalluthfi09/rhymes
 * [new branch]      hickory-dickory -> bobpraxis/hickory-dickory
 * [new branch]      master          -> bobpraxis/master
```
Review all the branches (both local and remote).
```
luthfi@DE MINGW64/e /Documents
$ git branch -a
* master
  remotes/afdhalluthfi09/master
  remotes/bobpraxis/hickory-dickory
  remotes/bobpraxis/master
```
Check out a local copy of Bob's work and review it.
```
luthfi@DE MINGW64/e /Documents
$ git checkout -b hickory-dickory bobpraxis/hickory-dickory
Branch hickory-dickory set up to track remote branch hickory-dickory from bobpraxis.
Switched to a new branch 'hickory-dickory'
luthfi@DE MINGW64/e /Documents
$ git diff master hickory-dickory 
diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..eee59ad
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,899 @@
+
+
+
+
+
+
+<!DOCTYPE html>
+<html lang="en">
+  <head>
+    <meta charset="utf-8">
+  <link rel="dns-prefetch" href="https://github.githubassets.com">
+  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
+  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
+
+
+
+  <link crossorigin="anonymous" media="all" integrity="sha512-UDS3MR1FfvqHmqZAs2MWSDCWPwLemVRLqCwld4/zfwH0vhv7I6RYmDnMnNAVQKP1YYvqnccOCH4iOhFaUUyrjw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-2e9090135c22aad5f56c2f72dcba7880.css" />
+  <link crossorigin="anonymous" media="all" integrity="sha512-l4JpykYR1c86XfE0TExTqRFbnoD7WA39FhTTEgPt22zLFiepYq+L+3XUGBZoGsnBv15oKHTomwpEAUrCbmoRqw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-2f0f446a127a5a480dfb139991acd1cd.css" />
+    <link crossorigin="anonymous" media="all" integrity="sha512-D8GUhgLn0Pm94+eZHS2+GVyUSkcIQCn86Is/aPo/SqDdh84zzgsUc3pYlfSvK7YJvxqihMWsJET2Tsc6QOD5Ow==" rel="stylesheet" href="https://github.githubassets.com/assets/github-e0bb7eeb3d3f55bf57453459bf0da4e8.css" />
+    
+    
+    
+    
+
+  <meta name="viewport" content="width=device-width">
+  
+  <title>rhymes/hickory-dickory-dock.txt at master · bryanhirsch/rhymes · GitHub</title>
+    <meta name="description" content="Alice&#39;s repo. (This is an example repo for a how-to blog post about collaboration with Git.) - bryanhirsch/rhymes">
luthfi@DE MINGW64/e /Documents$ git log -1 -p
commit 2dfc0f35bbe02e32a43be3ce24afdc79cd844ef5 (HEAD -> hickory-dickory, bobpraxis/hickory-dickory)
Author: bobpraxis <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 10:30:56 2019 +0700

    Added hickory-dickory-dock.txt.

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..eee59ad
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,899 @@
+
+
+
+
+
+
+<!DOCTYPE html>
+<html lang="en">
+  <head>
+    <meta charset="utf-8">
+  <link rel="dns-prefetch" href="https://github.githubassets.com">
+  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
+  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
+  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
+
+
+
+  <link crossorigin="anonymous" media="all" integrity="sha512-UDS3MR1FfvqHmqZAs2MWSDCWPwLemVRLqCwld4/zfwH0vhv7I6RYmDnMnNAVQKP1YYvqnccOCH4iOhFaUUyrjw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-2e9090135c22aad5f56c2f72dcba7880.css" />
+  <link crossorigin="anonymous" media="all" integrity="sha512-l4JpykYR1c86XfE0TExTqRFbnoD7WA39FhTTEgPt22zLFiepYq+L+3XUGBZoGsnBv15oKHTomwpEAUrCbmoRqw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-2f0f446a127a5a480dfb139991acd1cd.css" />
+    <link crossorigin="anonymous" media="all" integrity="sha512-D8GUhgLn0Pm94+eZHS2+GVyUSkcIQCn86Is/aPo/SqDdh84zzgsUc3pYlfSvK7YJvxqihMWsJET2Tsc6QOD5Ow==" rel="stylesheet" href="https://github.githubassets.com/assets/github-e0bb7eeb3d3f55bf57453459bf0da4e8.css" />
+    
+    
+    
```
Checkout master and merge Bobs changes in.
```
luthfi@DE MINGW64/e /Documents
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'afdhalluthfi09/master'.
luthfi@DE MINGW64/e /Documents$ git merge hickory-dickory 
Updating 0606457..2dfc0f3
Fast-forward
 hickory-dickory-dock.txt | 899 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 899 insertions(+)
 create mode 100644 hickory-dickory-dock.txt
```
Push changes up to GitHub git push alice master
Remove our local copy of the hickory-dickory branch. We don't need it anymore.
```
luthfi@DE MINGW64/e /Documents
$ git branch -D hickory-dickory 
Deleted branch hickory-dickory (was 2dfc0f3).
```


# Bobpraxis Scenario
Global config github bobpraxis
```
luthfi@DE:rhymes @afdhalluthfi$ git config --global user.name "bobpraxis"
luthfi@DE:rhymes @afdhalluthfi$ git config --global user.email "afdhalluthfi@gmail.com"
```
First Bob clones his fork of Alice's rhymes project.
```
luthfi@DE:~ @afdhalluthfi$ git clone https://github.com/afdhalluthfi09/rhymes.git
Cloning into 'rhymes'...
remote: Enumerating objects: 17, done.
remote: Counting objects: 100% (17/17), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 17 (delta 6), reused 17 (delta 6), pack-reused 0
Unpacking objects: 100% (17/17), done.
luthfi@DE:~ @afdhalluthfi$ cd rhymes/
```
To keep things simple and tidy, Bob will keep the master branch in sync with Alice's version of the master branch.
Bob creates a new branch, where he will store his changes.
```
luthfi@DE:rhymes @afdhalluthfi$ git checkout -b hickory-dickory
Switched to a new branch 'hickory-dickory'
```
Add Hickory Dickory Dock to the repo.
```
luthfi@DE:rhymes @afdhalluthfi$ wget https://github.com/bryanhirsch/rhymes/blob/master/hickory-dickory-dock.txt
--2019-08-28 10:28:58--  https://github.com/bryanhirsch/rhymes/blob/master/hickory-dickory-dock.txt
Resolving github.com (github.com)... 13.250.177.223
Connecting to github.com (github.com)|13.250.177.223|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'hickory-dickory-dock.txt'

hickory-dickory-dock.txt         [  <=>                                        ]  66.15K   157KB/s    in 0.4s    

2019-08-28 10:29:00 (157 KB/s) - 'hickory-dickory-dock.txt' saved [67735]
```
Bob pushes the changes from his local copy of rhymes up to GitHub.
```
luthfi@DE:rhymes @afdhalluthfi$ git push origin hickory-dickory
Username for 'https://github.com': afdhalluthfi09
Password for 'https://afdhalluthfi09@github.com': 
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 14.70 KiB | 2.10 MiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: Create a pull request for 'hickory-dickory' on GitHub by visiting:
remote:      https://github.com/afdhalluthfi09/rhymes/pull/new/hickory-dickory
To https://github.com/afdhalluthfi09/rhymes.git
 * [new branch]      hickory-dickory -> hickory-dickory
```
Add a remote pointing to Alice's copy of the project.
```
luthfi@DE:rhymes @afdhalluthfi
$ git remote rename origin bobpraxis
luthfi@DE:rhymes @afdhalluthfi
$ git remote add afdhalluthfi09 https://github.com/afdhalluthfi09/rhymes.git
```
Review remotes.
```
luthfi@DE:rhymes @afdhalluthfi$ git remote
afdhalluthfi09
bobpraxis
```
Confirm each remote points to the correct repository.
```
luthfi@DE:rhymes @afdhalluthfi
$ git remote -v
afdhalluthfi09	https://github.com/afdhalluthfi09/rhymes.git (fetch)
afdhalluthfi09	https://github.com/afdhalluthfi09/rhymes.git (push)
bobpraxis	https://github.com/afdhalluthfi09/rhymes.git (fetch)
bobpraxis	https://github.com/afdhalluthfi09/rhymes.git (push)
```
Update master branch. 
```
luthfi@DE:rhymes @afdhalluthfi
$ git remote update
Fetching bobpraxis
Fetching afdhalluthfi09
From https://github.com/afdhalluthfi09/rhymes
 * [new branch]      hickory-dickory -> afdhalluthfi09/hickory-dickory
 * [new branch]      master          -> afdhalluthfi09/master

luthfi@DE:rhymes @afdhalluthfi
$ git remote update
Fetching bobpraxis
Fetching afdhalluthfi09
luthfi@DE:rhymes @afdhalluthfi
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'bobpraxis/master'.
luthfi@DE:rhymes @afdhalluthfi
$ git merge afdhalluthfi09/master
Already up to date.
```
To confirm you did everything right check the difference between your local copy of master 
and Alice's master branch. There should be no difference. 
```
luthfi@DE:rhymes @afdhalluthfi
$ git diff afdhalluthfi09/master
```
Push to GitHub 
```
luthfi@DE:rhymes @afdhalluthfi
$ git push bobpraxis master
Everything up-to-date
```
Bob creates a new branch where he will add more stuff.
```
luthfi@DE:rhymes @afdhalluthfi$ git checkout -b bobpraxis-changes
Switched to a new branch 'bobpraxis-changes'
```
Bob adds more rhymes.
```
luthfi@DE:rhymes @afdhalluthfi
$ wget https://github.com/@afdhalluthfi/rhymes/blob/master/jack-be-nimble.txt
--2019-08-28 11:30:49--  https://github.com/@afdhalluthfi/rhymes/blob/master/jack-be-nimble.txt
Resolving github.com (github.com)... 13.229.188.59
Connecting to github.com (github.com)|13.229.188.59|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'jack-be-nimble.txt'

jack-be-nimble.txt               [  <=>                                        ]  66.21K   184KB/s    in 0.4s    

2019-08-28 11:30:50 (184 KB/s) - 'jack-be-nimble.txt' saved [67798]

luthfi@DE:rhymes @afdhalluthfi
$ git add jack-be-nimble.txt
luthfi@DE:rhymes @afdhalluthfi
$ git commit -m 'Added jack-be-nimble.txt.'
[bobpraxis-changes 0436008] Added jack-be-nimble.txt.
 1 file changed, 905 insertions(+)
 create mode 100644 jack-be-nimble.txt
luthfi@DE:rhymes @afdhalluthfi$ wget https://github.com/@afdhalluthfi/rhymes/blob/master/mother-goose.txt
--2019-08-28 11:31:37--  https://github.com/@afdhalluthfi/rhymes/blob/master/mother-goose.txt
Resolving github.com (github.com)... 13.229.188.59
Connecting to github.com (github.com)|13.229.188.59|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'mother-goose.txt'

mother-goose.txt                 [  <=>                                        ]  67.25K   171KB/s    in 0.4s    

2019-08-28 11:31:38 (171 KB/s) - 'mother-goose.txt' saved [68860]
luthfi@DE:rhymes @afdhalluthfi
$ git add mother-goose.txt
luthfi@DE:rhymes @afdhalluthfi
$ git commit -m 'Added mother-goose.txt.'
[bobpraxis-changes d0b45e5] Added mother-goose.txt.
 1 file changed, 925 insertions(+)
 create mode 100644 mother-goose.txt
 ```
Bob changes README.txt to try and make it more useful. He updates it with this text: 
 ```
luthfi@DE:rhymes @afdhalluthfi
$ nano README.txt 
luthfi@DE:rhymes @afdhalluthfi
$ git commit -am 'Updated README.txt.'
[bobpraxis-changes db68099] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)
```
Review changes word-by-word. Commit. 
```
luthfi@DE:rhymes @afdhalluthfi
$ git diff --word-diff
luthfi@DE:rhymes @afdhalluthfi
$ git commit -am 'Fixed typo in README.txt.'
On branch bobpraxis-changes
nothing to commit, working tree clean
```
Bob fixes his typo:
```
luthfi@DE:rhymes @afdhalluthfi
$ nano README.txt 
luthfi@DE:rhymes @afdhalluthfi
$ git commit -am 'Fixed typo in README.txt.'
[bobpraxis-changes 8af5619] Fixed typo in README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```
Bob changes the wording again:
 ```
luthfi@DE:rhymes @afdhalluthfi
$ nano README.txt 
luthfi@DE:rhymes @afdhalluthfi
$ git commit -am 'Updated README.txt.'
[bobpraxis-changes ace7790] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```
 Bob changes the wording again:
 ```
luthfi@DE:rhymes @afdhalluthfi
$ nano README.txt 
luthfi@DE:rhymes @afdhalluthfi
$ git commit -am 'Updated README.txt.'
[bobpraxis-changes 1e0646b] Updated README.txt.
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```
 Bob adds a few more rhymes.
 ```
luthfi@DE:rhymes @afdhalluthfi
$ wget https://github.com/@afdhalluthfi/rhymes/blob/master/old-king-cole.txt
--2019-08-28 11:47:57--  https://github.com/@afdhalluthfi/rhymes/blob/master/old-king-cole.txt
Resolving github.com (github.com)... 13.229.188.59
Connecting to github.com (github.com)|13.229.188.59|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'old-king-cole.txt'

old-king-cole.txt                [   <=>                                       ]  67.54K  72.7KB/s    in 0.9s    

2019-08-28 11:47:59 (72.7 KB/s) - 'old-king-cole.txt' saved [69162]
luthfi@DE:rhymes @afdhalluthfi
$ git add old-king-cole.txt
luthfi@DE:rhymes @afdhalluthfi
$ git commit -m 'Added old-king-cole.txt.'
[bobpraxis-changes e4a70c4] Added old-king-cole.txt.
 1 file changed, 926 insertions(+)
 create mode 100644 old-king-cole.txt
 luthfi@DE:rhymes @afdhalluthfi
 $ wget https://github.com/@afdhalluthfi/rhymes/blob/master/twinkle-twinkle.txt
--2019-08-28 11:49:39--  https://github.com/@afdhalluthfi/rhymes/blob/master/twinkle-twinkle.txt
Resolving github.com (github.com)... 13.229.188.59
Connecting to github.com (github.com)|13.229.188.59|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'twinkle-twinkle.txt.1'

twinkle-twinkle.txt.1            [                      <=>                    ] 309.10K  34.8KB/s    in 7.8s    

2019-08-28 11:49:48 (39.9 KB/s) - 'twinkle-twinkle.txt.1' saved [316523]

luthfi@DE:rhymes @afdhalluthfi
$ git add twinkle-twinkle.txt.1
luthfi@DE:rhymes @afdhalluthfi
$ git commit -m 'Added twinkle-twinkle.txt.1.'
[bobpraxis-changes fd24876] Added twinkle-twinkle.txt.1.
 1 file changed, 4688 insertions(+)
 create mode 100644 twinkle-twinkle.txt.1
 ```
 Bob keeps making updates to the README. Now he changes it to:README =======
 ```
 luthfi@DE:rhymes @afdhalluthfi
 $ nano README.txt 
luthfi@DE:rhymes @afdhalluthfi
$ git commit -am 'Updated README.txt'
[bobpraxis-changes 2c46c6f] Updated README.txt
 1 file changed, 1 insertion(+), 1 deletion(-)
luthfi@DE:rhymes @afdhalluthfi$ git log
commit 2c46c6fd23af02e8e342a90bd981d447bd7f99b1 (HEAD -> bobpraxis-changes)
Author: bobpraxis <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 11:51:26 2019 +0700

    Updated README.txt

commit fd248764b5708b2612a26455a00f38641da57af9
Author: bobpraxis <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 11:50:15 2019 +0700

    Added twinkle-twinkle.txt.1.

commit e4a70c4d1832e15ad85ffd8bb895b4f51cac7ced
Author: bobpraxis <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 11:48:30 2019 +0700

    Added old-king-cole.txt.

commit 1e0646bdf9eee24cd450df9143f1e81cd6724b0a
Author: bobpraxis <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 11:43:36 2019 +0700

    Updated README.txt.

commit ace779084f34b00986b04885b115a94ac5bb94ac
Author: bobpraxis <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 11:42:59 2019 +0700

    Updated README.txt.

commit 8af5619c06b1d859cc3a4e30ab2818787c691556
Author: bobpraxis <afdhalluthfi@gmail.com>
Date:   Wed Aug 28 11:41:45 2019 +0700

    Fixed typo in README.txt.
```
Bob cleans up his work before submitting
```
luthfi@DE:rhymes @afdhalluthfi
$ git log --oneline
2c46c6f (HEAD -> bobpraxis-changes) Updated README.txt
fd24876 Added twinkle-twinkle.txt.1.
e4a70c4 Added old-king-cole.txt.
1e0646b Updated README.txt.
ace7790 Updated README.txt.
8af5619 Fixed typo in README.txt.
db68099 Updated README.txt.
d0b45e5 Added mother-goose.txt.
0436008 Added jack-be-nimble.txt.
0606457 (bobpraxis/master, bobpraxis/HEAD, afdhalluthfi09/master, master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
dbde4d1 Added jack-and-jill.txt.
bbd5a1c Added all-around-the-mulberry-bush.txt.
aefb37e Added project overview to README.txt
e34657f First commit.

luthfi@DE:rhymes @afdhalluthfi
$ git log --oneline
2c46c6f (HEAD -> bobpraxis-changes) Updated README.txt
fd24876 Added twinkle-twinkle.txt.1.
e4a70c4 Added old-king-cole.txt.
1e0646b Updated README.txt.
ace7790 Updated README.txt.
8af5619 Fixed typo in README.txt.
db68099 Updated README.txt.
d0b45e5 Added mother-goose.txt.
0436008 Added jack-be-nimble.txt.
0606457 (bobpraxis/master, bobpraxis/HEAD, afdhalluthfi09/master, master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
dbde4d1 Added jack-and-jill.txt.
bbd5a1c Added all-around-the-mulberry-bush.txt.
aefb37e Added project overview to README.txt
e34657f First commit.
luthfi@DE:rhymes @afdhalluthfi$ git push origin master
Counting objects: 27, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (26/26), done.
Writing objects: 100% (27/27), 59.87 KiB | 2.72 MiB/s, done.
Total 27 (delta 12), reused 0 (delta 0)
remote: Resolving deltas: 100% (12/12), completed with 1 local object.
To https://github.com/afdhalluthfi09/rhymes.git
   0606457..fb7a0ce  master -> master
```
