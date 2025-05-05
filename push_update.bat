@echo off
cd /d "C:\Users\KSK\Desktop\LINE WORKSアプリ\№6計算アプリ"
echo 🔄 変更をGitに追加中...
git add .
echo 📝 コミット中...
git commit -m "自動更新"
echo 🚀 GitHubにプッシュ中...
git push origin main
echo ✅ アップロード完了！
pause