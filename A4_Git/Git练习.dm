1.	Create a GitHub repo called ‘jr-git-intro’ and clone it to your local.
Git clone https://github.com/xuewei-li-L/jr-git-intro.git

2.	Inside your local repo, create a new file called ‘first.md’ and add some text to it. Commit the change to your local using the commit message “JR-101: Set up the first file”.
cd jr-git-intro
touch first.md
echo "这是第一段文字内容" > first.md
echo "这是第二段文字内容" >> first.md
echo "这是第三段文字内容" >> first.md
cat first.md
git add first.md
git commit -m "JR-101: Set up the first file"

3.	Push the branch (master) to your remote.
git push origin main

4.	Create two other files ‘second.md’ and ‘third.md’. Add some text to it. Commit the change using the commit message “JR-102: Set up the second and third file”.
touch second.md third.md
echo "This is the content." > second.md
echo "This is the content." > third.md
git add second.md third.md
git commit -m "JR-102: Set up the second and third file"

5.	Remove ‘third.md’ and commit the change using the commit message “JR-103: Refactor and clean up redundant code”.
git rm third.md
git commit -m "JR-103: Refactor and clean up redundant code"

6.	Create a branch called bugfix/JR-104-fix-words-in-second-file
git branch bugfix/JR-104-fix-words-in-second-file
git checkout bugfix/JR-104-fix-words-in-second-file(更换到这个分支)

7.	In this new branch, change the first line of ‘second.md’ to something else. Commit the change with the message “JR-104: Modify first line of second file”
sed -i '' '1s/.*/This is the modified first line of second.md/' second.md
git add second.md
git commit -m "JR-104: Modify first line of second file"

8.	Switch back to master branch, make a commit to change the first line of ‘second.md’ to something different to what you did in Step 7. Commit the change with the message “JR-105: Modify first line of second file in a different way”.
git checkout main
sed -i '' '1s/.*/This is a different modification of the first line./' second.md
git add second.md
git commit -m "JR-105: Modify first line of second file in a different way"

9.	Merge branch bugfix/JR-104-fix-words-in-second-file into master. Resolve the conflicts to accept changes in the bugfix branch. 
git merge bugfix/JR-104-fix-words-in-second-file
code .
在vs code里调试并更新上传。

10.	Delete the bugfix branch and push the new commits in master to GitHub.
git branch -d bugfix/JR-104-fix-words-in-second-file
git push origin main

11.	Check out branch feature/JR-106-create-home-page, add a new file ‘index.html’ with <h1>Home Page</h1> in the code. Commit the change with message “JR-106: Create the home page”
git checkout -b feature/JR-106-create-home-page
touch index.html
code .
在vs code中更改内容，在source control中点击stage changes，填入massage“JR-106: Create the home page”以后点击commit。

12.	Check out master branch, add a new file ‘index.html’ with <h2>About</h2> in the code. Commit the change with message “JR-107: Create the about section”. Note this is to simulate changes made by your colleague. In your work, it’s rare that you will ever need to work in the master branch. Push the new commit to GitHub. 
git checkout main
touch index.html
code .

13.	Push the new branch feature/JR-106-create-home-page to remote and make a pull request into master on GitHub. Make sure you write meaningful pull request title.
git push origin feature/JR-106-create-home-page

14.	Use the git rebase to resolve merge conflicts and result in a fast-forward merge in the remote repository.
git checkout feature/JR-106-create-home-page
git rebase main
code .

15.	Merge the PR and delete the feature branch.
Github上打开branch直接删除远程branch。
Git branch main
git branch -d feature/JR-106-create-home-page
git branch -D feature/JR-106-create-home-page

16.	Pull the latest change in master to your local
git pull origin main

17.	Provide a graphic history of your current local Git repo. Take a screenshot of it and put it in your Git repo. Commit the change in master with message “JR-108: Add screen shot”and push it to GitHub.
git log --oneline --graph –all
截图将图片保存在下载的repo中。
git add git-history.png
git commit -m "JR-108: Add screen shot"
git push origin main
你本地的 main 分支落后于远程的 main 分支，因此无法直接推送。这通常发生在远程分支有新的提交，而你没有拉取最新更改。
但是我本地分支没有问题！并且有修改，还有图片！
所以强制执行：
git push origin main --force

18.	Add the url to your GitHub Repo in the excel spreadsheet provided.
git add Git_URL.xlsx
git commit -m "Add Excel spreadsheet with GitHub repo URL"
git push origin main

19.	Happy Coding!!!
