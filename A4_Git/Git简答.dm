Git

1.	Suppose you had a file, called first.md, and you made a copy of this file, named it second.md and made some changes to it. Next, suppose you ran diff -u first.md second.md.
Here is the content of the original first.md
A
B
C
D
E
F
Here is the output of the diff command:
 What is the content of second.md?
+表示新增，-表示删除，所以second.md中现在显示为一下结果。
A
B
$
C
#
%
E
F

2.	(True or False) If you accidentally add a file to the staging area, you can remove it using git reset. For example, if you accidentally add thrid.md, but don’t want it to be committed yet, run git reset thrid.md and the file will be removed from the staging area, but it will still be in your working directory.
3.	(True or False) The commands git reset and git revert can only be used to undo commits in the git repository.
4.	(True or False) The commands git checkout can be used to roll back to a certain commit hash (check the documentation if you are unsure).
5.	(True or False) We cannot commit changes in the working directory directly to the repo without adding it to the staging index first (read the documentation if you are unsure).
6.	(True or False) git log -p and git log will give you the same output.
7.	(True or False) git log --oneline and git log --stat will give you the same output.
8.	(True or False) It is recommended that in most cases we should use git revert rather than git reset to undo commits because git revert is safer.
