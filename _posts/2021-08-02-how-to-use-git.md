---
title: "How to Use Git?"
categories:
  - Tools
tags:
  - git
  - tools
---
# What is Git
Git is a distributed open-source version control tool. Developers use Git to collaborate their work and control program versions.
![git](/assets/images/git.png)      

# Git commands
<p>Following is a list of frequently used Git commands and how to use them.</p>

## git init 
Create a local repo in your local machine.
```
git init
```

## git remote add origin
Link your local repo with a remote repo, for example, a Github repo.
```
git remote add origin [URL]
```

## git clone

Create a local repo. Link the repo to and clone contents from a remote repo.

```
git clone [URL]
```

## git pull

Update the code in your local repo and workspace by pulling codes from remote repo. For example, if you want to pull codes from the linked remote repo's main branch, you should use <code>git pull origin main</code> command.
```
git pull [origin] [branch]
```

## git status 
View the current status of local repo and workspace. This command can be used to view if there is any untracked files or modified files.
```
git status
```

## git add 
Add some files to the index. You can use <code>git add -A</code> command to add all files to the index. 
Note: Files in index are tracked files, which means they will be committed to local repo using <code>git commit</code> command. If you want to add only one file to the index, use <code>git add filename</code> command. 
```
git add [options] [filename]
```

## git commit
Commit file in index to local repo. Frequently used command is <code>git commit -a -m "description"</code>, which can commit all tracked files to local repo with specific description.  
```
git commit [options]
```

## git push
Push codes to update a branch of a remote repo. <code>git push origin main</code> can update your linked remote repo.
```
git push [origin] [branch]
```

## git branch
Create a new branch from current branch in local repo.
```
git branch [branchname]
```

## git merge
Merge a branch into current branch. If I am currently in main branch, <code>git merge anotherbranch</code> can merge another branch branch to main branch.
```
git merge [another branchname]
```

## git checkout
Change to another branch by <code>git checkout [branchname]</code>.
```
git checkout [branchname]
```
Revert back to previous version by <code>git checkout [version-hash]</code>.
```
git checkout [version-hash]
```

## git log
View version log of the program. Version hash can be view by this command.
```
git log
```

# Some cases
Here I listed several cases that people, especially beginners, may frequently encounter when they are using Git.
## Q1: How to create a local repo, link it to a remote repo and update it with remote repo?

- `git clone` can do this for you. Simply `git clone` a remote repo.


<p class="notice--info"><strong>More quick tips</strong>: Always pull codes from remote repo before you get down to coding.</p>

## Q2: How to delete one or some files in one branch but still keep them in another branch?
<ol>
  <li><i><strong>rm [filename]</strong></i> in branchA.</li>
  <li><i><strong>git add -A</strong></i> to make sure all files are tracked in this branch.</li>
  <li><i><strong>git commit -am "comments"</strong></i> to commit changes to local repo branchA.</li>
  <li><i><strong>git checkout main</strong></i>, and you will find that deleted files will appear in this branch.</li>
</ol>
<p class="notice--info"><strong>More quick tips</strong>: <i><strong>rm -rf [directory]</strong></i> to remove a whole directory (recursively and without asking).</p>

# Reference 

- [GitHub Documentation](https://docs.github.com/en)