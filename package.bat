@echo off
echo 开始更新博客。。。请稍后
xcopy /y /c /h /r /e "D:\workspace\webstorm\wjzhang\vuepress\vuepress\public\*.*" "D:\workspace\webstorm\wjzhang\vuepress-static\vuepress-static\"
echo 博客更新完成
echo. & pause