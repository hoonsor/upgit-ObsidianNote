---
parent: 
sibling: 
child: 
number headings: auto, first-level 2, max 6, contents ^toc, _.1.1.
aliases: 
tags: [專案筆記 , 電腦軟體]
status: 🌱
author: MdEditor
source: https://www.gushiciku.cn/pl/amr6/zh-tw
template-output: 002-Inbox
created: Saturday, August 6th 2022, 10:04:19 pm
modified: Monday, August 8th 2022, 2:24:17 pm
---
# 1110806-Git 及 Obsidian 同步至手機學習 ^toc

- [[#1110806-Git 及 Obsidian 同步至手機學習 ^toc|1110806-Git 及 Obsidian 同步至手機學習]]
	- [[#前言|前言]]
	- [[#Windows 桌面端的準備工作|Windows 桌面端的準備工作]]
		- [[#第一步：安裝 Git|第一步：安裝 Git]]
		- [[#第二步：在 Git 託管平臺中新建倉庫|第二步：在 Git 託管平臺中新建倉庫]]
		- [[#第三步：生成 SSH 金鑰|第三步：生成 SSH 金鑰]]
			- [[#方法一：自動配置|方法一：自動配置]]
			- [[#注意：|注意：]]
			- [[#方法二：手動配置|方法二：手動配置]]
		- [[#第四步：上傳 SSH 公鑰|第四步：上傳 SSH 公鑰]]
		- [[#第五步：配置本地 Obsidian 倉庫|第五步：配置本地 Obsidian 倉庫]]
		- [[#第六步：配置 Git 倉庫同步|第六步：配置 Git 倉庫同步]]
	- [[#Android 端的準備工作|Android 端的準備工作]]
	- [[#結語|結語]]
	- [[#個人心得摘要簡化步驟|個人心得摘要簡化步驟]]
		- [[#安裝 Git|安裝 Git]]
		- [[#產生密鑰、查詢及上傳至 GitHub|產生密鑰、查詢及上傳至 GitHub]]
		- [[#配置本機 Obsidian 要同步之資料庫|配置本機 Obsidian 要同步之資料庫]]
		- [[#配置 Git 倉庫並同步|配置 Git 倉庫並同步]]


## 前言

如果你使用 [Android 版 Obsidian](https://www.gushiciku.cn/jump/aHR0cHM6Ly9oZWxwLm9ic2lkaWFuLm1kL09ic2lkaWFuL0FuZHJvaWQrYXBw) ，一個必須考慮的問題就是如何與電腦端同步筆記。

對此，誠然可以選擇官方的 [Obsidian Sync](https://www.gushiciku.cn/jump/aHR0cHM6Ly9oZWxwLm9ic2lkaWFuLm1kL0xpY2Vuc2VzKyUyNithZGQtb24rc2VydmljZXMvT2JzaWRpYW4rU3luYw==) 服務，或者使用 Dropbox 等第三方同步工具，但我最推薦的還是 **使用 Git 同步** 。理由在於：

* 相比其他解決方案，Git 是開源的，不僅免費，而且安全性有保證；
* 作為最先進的分散式版本控制系統（沒有之一），用 Git 可以方便地實現版本回溯和協同編輯等功能；
* Git 支援多種作業系統（Windows、macOS、Linux、Android、iOS），可以按需託管在國內外多家平臺上（國外的 [GitHub](https://www.gushiciku.cn/jump/aHR0cHM6Ly9naXRodWIuY29tLw==) 、 [GitLab](https://www.gushiciku.cn/jump/aHR0cHM6Ly9hYm91dC5naXRsYWIuY29tLw==) ，國內的 [Gitee](https://www.gushiciku.cn/jump/aHR0cHM6Ly9naXRlZS5jb20v) 、 [CODING](https://www.gushiciku.cn/jump/aHR0cHM6Ly9jb2RpbmcubmV0L3Byb2R1Y3RzL3JlcG8=) ）。

當然， **用 Git 同步的方案也有侷限** ，包括有一定的學習成本，對純新手不友好；多裝置同時編輯容易產生衝突；以及需要另行手動備份存檔等。

但瑕不掩瑜，Git 仍然是我在 Windows 桌面端和 Android 端同步 Obsidian 的首選。本文就為大家介紹我的具體實現方案。

（ **注：** 行文簡潔起見，本文假定讀者掌握命令列環境的基本操作，對於 Git 的功能和機制有初步瞭解。如果你不瞭解 Git，那麼本文食用起來可能會比較困難，不妨先通過 [廖雪峰的 Git 教程](https://www.gushiciku.cn/jump/aHR0cHM6Ly93d3cubGlhb3h1ZWZlbmcuY29tL3dpa2kvODk2MDQzNDg4MDI5NjAw) 簡單學習後再來嘗試。）

## Windows 桌面端的準備工作

### 第一步：安裝 Git

在開始之前，請確保自己的 Windows 系統中已經安裝了 Git。如果還沒有安裝，可以參考 [廖雪峰的教程](https://www.gushiciku.cn/jump/aHR0cHM6Ly93d3cubGlhb3h1ZWZlbmcuY29tL3dpa2kvODk2MDQzNDg4MDI5NjAwLzg5NjA2NzA3NDMzODQ5Ng==) 。如果你已經安裝了，那麼可以跳過這一步。

### 第二步：在 Git 託管平臺中新建倉庫

接下來，我們在自己選用的 Git 託管平臺上新建一個筆記專用倉庫。

考慮到國內使用者的訪問便捷程度和中文支援，本文將主要使用國產服務 Gitee 演示（ [官網註冊連結](https://www.gushiciku.cn/jump/aHR0cHM6Ly9naXRlZS5jb20v) ），並簡單說明更為主流的 GitHub 平臺的對應操作。

* **如果使用 Gitee：** 在頂部導航條點選「+」>「新建倉庫」，根據提示填寫資訊即可（暫不勾選給出的初始化選項）。
* **如果使用 GitHub：** 在頂部導航條點選「+」>「New Repository」，根據提示填寫資訊即可（暫不勾選給出的初始化選項）。

![](https://mdimg.wxwenku.com/getimg/356ed03bdc643f9448b3f6485edc229b1a1a2b1e3d95df407150d760f0ab76c84a0908dacc0d610169d78f0d3e48dda5.jpg)

### 第三步：生成 SSH 金鑰

接著，我們需要生成一個 SSH 金鑰（SSH Key），用於在本地和遠端 Git 倉庫同步時驗證身份。

#### 方法一：自動配置

為方便新手使用者，我準備了一個配置指令碼，按照如下步驟執行即可完成配置：

.txt
.sh

#!/bin/bash 
splitLine="\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\="
userName=" 這裡改成你的使用者名稱 "
email=" 這裡改成你的 Email"

\# 配置 git 使用者名稱和郵箱
git config --global user.name ${userName}
git config --global user.email ${email}
git config --global --list 
echo "Enter 或者 y 鍵確認 "
ssh-keygen -t rsa -C "${email}"

\# 列印公鑰
echo " 複製儲存下面的公鑰新增到遠端倉庫 "
echo ${splitLine}
cat ~/.ssh/id\_rsa.pub
echo ${splitLine}
echo " 按任意鍵退出 "
read -n 1
echo " 繼續執行 "

#### 注意：

1. 如果你本地之前生成過 SSH，那麼指令碼會提示你是否覆蓋，此時輸入 `y` 回車即可。
2. 如果操作中途不小心關掉了指令碼視窗，不要慌，雙擊重新執行指令碼即可。
3. 執行過程中會出現如下圖所示的四次提示確認步驟，簡單起見，建議大家 **直接回車** 不設定引數（當然如果你明白這些步驟的具體含義，也可以設定需要的引數）。

![](https://mdimg.wxwenku.com/getimg/6b990ce30fa9193e296dd37902816f4b5d6f8ba7d0c57151c01de7c1c82f0ff2688491675bd6d817972d538e3b579cd0.jpg)

指令碼執行完後， **將分割線裡面的內容複製出來儲存好** 。後面會用到。

#### 方法二：手動配置

如果你希望自己動手完成配置過程，下面介紹手動配置方法，這與前述指令碼是等效的。

在空白位置點選滑鼠右鍵，選擇 **Git Bash** （或者用你習慣的其他終端模擬器，如 Windows Terminal 等訪問 Bash 亦可）：

![](https://mdimg.wxwenku.com/getimg/ccdf080c7af7e8a10e9b88444af98393647661f41abca355ea146b68ffac7b606a42392be3e70ef1b8a6f71eb187752a.jpg)

在彈出的 Bash 視窗中，輸入下面的命令 **配置使用者名稱** ：

git config --global user.name 你的使用者名稱

以及用下面的命令 **配置郵箱** ：

git config --global user.email 你的郵箱

完成前兩步後，可以用下面的命令檢查 **是否配置成功** ：

git config --global --list

如下圖所示，如果返回的結果正確顯示了你輸入的使用者名稱和郵箱，說明配置是正確的：

![](https://mdimg.wxwenku.com/getimg/6b990ce30fa9193e296dd37902816f4be9743321618550443ab33f885df1ae8c3c3476cda6aba9d638ccbff36f4f1ab2.jpg)

接著，輸入下面的命令 **生成 SSH Key** 。參考上面指令碼教程的截圖，按四個回車即可。

ssh\-keygen -t rsa -C " 你的郵箱替換中文 "

最後，用如下命令 **顯示生成的公鑰** ，將其 **複製出來備用** ：

cat ~/.ssh/id\_rsa.pub

### 第四步：上傳 SSH 公鑰

下面，我們將生成的 SSH 公鑰上傳至 Git 託管平臺。

* **對於 Gitee：** 點選導航欄右上角頭像，選擇「設定」，然後在側邊欄選單選擇「SSH 公鑰」，填入上一步儲存的公鑰內容並儲存確認。
* **對於 GitHub：** 點選導航欄右上角頭像，選擇「Settings」，然後在側邊欄選單選擇「SSH and GPG keys」，填入上一步儲存的公鑰內容並儲存確認。

![](https://mdimg.wxwenku.com/getimg/ccdf080c7af7e8a10e9b88444af98393d2f8b84546385a637d6287325e0aaa24c4abf1bd26f9fb9444f42777bc5576eb.jpg)

### 第五步：配置本地 Obsidian 倉庫

下面，我們在本地配置用於同步的 Obsidian 筆記資料夾。

從 Gitee 或 GitHub 網頁端訪問剛才新建的倉庫，由於尚未初始化，網頁上會展示下圖所示的配置指引：

![](https://mdimg.wxwenku.com/getimg/356ed03bdc643f9448b3f6485edc229b61c29f60852464d2be93d24d61a8eedf97652768cf6f54c85efa4598f5429491.jpg)

這裡，我們按其中的「建立 Git 倉庫」一節配置。

具體而言，進入你用作 Obsidian 筆記庫的資料夾，進入後在空白處點選右鍵進入 Bash，依次執行如下命令：

touch README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin " 替換為上圖中本條命令位置提示的遠端地址（形如 git@gitee.com:user/repo.git）"
git push -u origin main

### 第六步：配置 Git 倉庫同步

完成了本地倉庫的配置，接下來要解決的就是在本地和遠端之間推送和拉取筆記檔案。這裡，固然可以定期、手動通過命令列的 `git` 命令來同步，但那未免繁瑣。

筆者慣用的方式是使用 [GitKraken](https://www.gushiciku.cn/jump/aHR0cHM6Ly93d3cuZ2l0a3Jha2VuLmNvbQ==) 。這是一款免費、圖形介面的 Git 管理工具。

![](https://mdimg.wxwenku.com/getimg/6b990ce30fa9193e296dd37902816f4bd1feea3b277b434f7077a3dabe943744b40853e9e195d93f39906bc56361c47b.jpg)

安裝後，先點選左上角的資料夾圖示，選擇本地 Obsidian 筆記庫開啟。然後即可通過工具欄按鈕快捷地同步，或者在主介面中追蹤同步歷史等。

![](https://mdimg.wxwenku.com/getimg/6b990ce30fa9193e296dd37902816f4bb6ad463ae9daf15e15bafe0dc20afa7e65bb2ebc39e123029db593a359a996e0.jpg)

除了用 GitKraken 外，你也可以通過 [Obsidian Git 外掛](https://www.gushiciku.cn/jump/aHR0cHM6Ly9naXRodWIuY29tL2Rlbm9sZWhvdi9vYnNpZGlhbi1naXQ=) ，直接在 Obsidian 內部完成倉庫的同步。

Android 端的準備工作
--------------

Android 端的配置相對簡單，除了 Obsidian app，只需要另外安裝一個 Git 客戶端即可。

這裡，我推薦使用 MGit，它是筆者能找到的最符合個人需求的 app；其他的如 GitJournal 等 app 多少有些小問題。如果你有更好用的推薦，歡迎在評論區分享。

MGit 的配置步驟如下：

1. 在設定介面的「repos 的根儲存位置」擬用於存放 Android 裝置上 Obsidian 筆記的路徑：
2. 在設定頁面，點選「SSH Keys」>「+」，新建 SSH 金鑰；
3. 參考前面的方法，將生成的公鑰上傳到 Gitee 或 GitHub；
4. 從 Gitee 或 GitHub 複製 SSH Remote 地址（即上述 Windows 配置部分第五步用到的地址，也可以在倉庫主頁面點選「下載/克隆」（GitHub 點選「Code」）檢視），填入遠端地址，點選克隆。

![](https://mdimg.wxwenku.com/getimg/6b990ce30fa9193e296dd37902816f4b7c0358f18aa47d3efb6dcd0e34a8fda2e415b82a67b8300e6681bd529bd2adf0.jpg)

![](https://mdimg.wxwenku.com/getimg/356ed03bdc643f9448b3f6485edc229bb3e7d2c8dd38cf4c4d729990f48462e17375cd37bd10cd3fef341fe123f0bd3a.jpg)

成功之後，開啟 Obsidian for Android。一般來說，Obsidian 自動掃描到你克隆到手機的工作空間。如果沒有掃描到，那麼手動從 Obsidian 進入上述步驟設定的倉庫路徑，用作工作空間即可。

![](https://mdimg.wxwenku.com/getimg/356ed03bdc643f9448b3f6485edc229b9736d3720f8628242a5fbb80e02a16789b42d04780afc9a723fd0a03b1220b69.jpg)

## 結語


細心的朋友可能已經看出來了，就是 Obsidian 的工作空間在 PC 和手機上都是通用的。這方面要為 Obsidian 的開發團隊點贊。

不過，個人不建議在手機端編輯文件。因為手機端螢幕太小影響體驗和發揮，只負責查閱即可，編輯還是放到 PC 端比較好。

如果大家對本文方案有什麼更好的建議，可以在評論區提出。,



## 個人心得摘要簡化步驟

### 安裝 Git
- 軟體下載網址：[Git - Downloads](https://git-scm.com/downloads)
- 安裝完成後，打開 #h/maroon ==Git Bash==，分行輸入以下指令
	- 設定帳號：
		- git config --global user.name "hoonsor"
	- 設定信箱：
		- git config --global user.email "hoonsor@hotmail.com"

### 產生密鑰、查詢及上傳至 GitHub
- 打開 #h/maroon ==Git Bash== 輸入以下指令
	- 產生密鑰
		- ssh-keygen -t rsa -C hoonsor@hotmail.com
	- 查詢密鑰
		- cat ~/.ssh/id_rsa.pub
		- 所顯示出的一長串英數文字組合即為密鑰
- 複製後將密鑰上傳至 Git Hub
	- [[1110806-Git及Obsidian同步至手機學習#第四步：上傳 SSH 公鑰]]
### 配置本機 Obsidian 要同步之資料庫
- [[1110806-Git及Obsidian同步至手機學習#第五步：配置本地 Obsidian 倉庫]]
- 分行指令客製化替換如下：
	- touch README.md
	- git initially 
	- git add README.md
	- git commit -m "first commit"
	- git branch -M main
	- git remote add origin git@github.com:hoonsor/upgit-ObsidianNote.git
	- git push -u origin main

### 配置 Git 倉庫並同步
- [[1110806-Git及Obsidian同步至手機學習#第六步：配置 Git 倉庫同步]]
- 軟體下載網址： [GitKraken](https://www.gushiciku.cn/jump/aHR0cHM6Ly93d3cuZ2l0a3Jha2VuLmNvbQ==) 。這是一款免費、圖形介面的 Git 管理工具。
- 其他心得及注意事項：
	- Profile 名稱：hoonsor-F4KR8IP（學校電腦名稱）、hoonsor-5DM4EDT（家裡電腦名稱）
	- Brunch 意思類似分支，如 main、master，同一個資料庫可以備份很多不同分支，注意是否均使用同一個分支，或用不同分支去儲存不同資料庫，可以再思索一下


