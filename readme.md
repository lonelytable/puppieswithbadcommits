BY HAMLET TAMAZIAN

## Git Workflow With Puppies

In this example application, you will be practicing git workflow as a team.

__Objectives__

* Describe the forking workflow in git
* Describe what rebase does
* Setup diff and merge tools
* Handle a merge with conflicts

### Forking Workflows

There are many different workflows for using git as a team.  We are going to focus on the forking workflow which is common for open source projects.

The forking workflow is described below:

1. Create an organization with an official repository for the project
2. All contributors to the project should fork the repo to their own github account and then clone it locally
3. All changes for the project will be done in your personal reposity (likely in a feature branch) and then merged into the offical repository via a pull request.
4. The pull request is reviewed by someone else on the team, approved, then merged.  Note that approval means looking over the quality of the code and making sure there are no merge conflicts

__EXERCISE__

For more details read this [atlasian article on git workflows](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Rebase

Rebasing is a powerful tool in git that must be understood and used correctly.  A rebase essentially changes the commit history.  It should only be done to commits that have not be checked in publically yet.

A common use case for a rebase is described in this [atlasian article on rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase).


### Diff and Merge Tools

It is often useful to see the changes to your code visually.  With xcode installed, you should have a tool installed in the terminal called `opendiff`.  If you prefer another tool, check out [this article](https://www.git-tower.com/blog/diff-tools-mac).

To tell git to use opendiff, open the `.gitconfig` file in your home directory.  Add the following to `.gitconfig`:

```
[merge]
	tool = opendiff
[diff]
	tool = opendiff
[difftool]
	prompt = false
```

To use the tool, run `git mergetool` or `git difftool`.  You can modify the `.gitconfig` file to add an alias.  For example:

```
[alias]
  dt = difftool
```

Now you can run `git dt` for `git difftool`.

Here are some other useful alias':

```
[alias]
  lol = log --graph --decorate --pretty=short --abbrev-commit
  lola = log --graph --decorate --pretty=oneline --abbrev-commit --all
  last = log -1 HEAD
  co = checkout
  br = branch
  ci = commit
  st = status
  unstage = reset HEAD --
  dt = difftool
  mt = mergetool
```

### Merge Conflicts

To understand fixing merge conflicts, you have to learn by doing. As a group of at least 2 or 3 people:

1. Create an organization in github.
2. Fork this repo into your organization. 
3. Pretend that your new fork is now your official repo for the project
4. All members should then fork the repo into their personal github accounts
5. Clone, `npm install`, `knex migrate:latest` and make sure the app is running.
6. Now make some commits!  In `home.jade`, add some information about the puppy rescue shelter.  Each person should add different info:
	* When the shelter was founded
	* What you should do if you found a puppy that needs rescuing
	* How to adopt a puppy
	* Contact info
	* etc
7. We want to keep all of the info on the page, so any merge should try to perserve all info
8. Perform pull requests following the forking workflow.

