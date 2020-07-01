@echo off
echo 开始更新博客。。。请稍后
set d=%date:~0,10%
set t=%time:~0,8%
echo %d% %t%
git add .
git commit -m "%d% %t%"
git push origin master


echo 博客更新完成
echo. & pause