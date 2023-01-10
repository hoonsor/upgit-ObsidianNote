---
aliases:    
tags: [專案筆記, 創業]
status: 🌱
author: 阿德 
source: https://adersaytech.com/wordpress-teach/mamp-wordpress-tutorial.html 
template-output: 002-Inbox
obsidianUIMode: preview
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
created: Thursday, July 21st 2022, 7:31:28 pm
modified: Tuesday, January 10th 2023, 9:52:00 pm
---

[[WordPress學習及筆記]]
[[CSS的概念及學習]]
# 1110721-MAMP 教學（在電腦安裝離線版伺服器及 WordPress）


![](https://adersaytech.com/wp-content/uploads/2021/10/what-is-mamp-1024x333.webp)

[MAMP](https://www.mamp.info/) 是「**M**acOS + **A**pache + **M**ySQL + **P**HP」的縮寫，就是一套給 Mac 上開發者快速架設伺服器與網頁的免費軟體，不用複雜的設定，只要簡單的幾個步驟就可以搞定，深受很多人的喜愛。

原先 MAMP 是專門給 Mac 的用戶使用，但是後來可能是因為有太多 Windows 用戶也需要用到，所以官方才有推出 Windows 可以使用的版本，並把 MAMP 的 M 重新定義成「My」，並非一開始的 MacOS。

所以簡單來說，MAMP 就是一套免費的快速本機架站軟體，同時支援 MacOS 與 Windows，且步驟簡單就可以輕鬆把 WordPress 架設在自己的電腦上，讓網頁開發者或是一般站長可以透過該軟體，在自己電腦上實現離線架設、練習與測試的目的。

## 1. 如何安裝 MAMP 與 WordPress？


![](https://adersaytech.com/wp-content/uploads/2021/10/mamp-to-install-wordpress.webp)

在自己的電腦 (本機) 上安裝 WordPress 其實一點都不難，我們只要先安裝好 MAMP 並且設定正確後，就可以輕鬆把 WordPress 安裝完成，順利的進行自己的測試或是修改。

教學會以 MacOS 的版本當作範例，Windows 版本介面大同小異 (概念也是)，跟著我的教學一定能順利的安裝架設好自己的 WordPress，讓我們開始吧！

**預估時間：** 3 minutes

### 1.1. STEP 1：下載 MAMP


![](https://adersaytech.com/wp-content/uploads/2021/10/download-mamp.webp)

[點我](https://www.mamp.info/en/downloads/) 前往 MAMP 下載頁面，根據自己電腦的作業系統選擇下載，我自己是使用 M1 版本的 MacOS，所以選擇右上方下載。

### 1.2. STEP 2：安裝 MAMP

![](https://adersaytech.com/wp-content/uploads/2021/10/install-mamp.webp)

下載完成後就可以開始安裝 MAMP，這邊我跳過安裝流程，基本上只要一直按下一步就可以安裝完成。

### 1.3. STEP 3：開啟 MAMP

![](https://adersaytech.com/wp-content/uploads/2021/10/open-mamp.webp)

MAMP 安裝完成後會有兩個，我們開啟「MAMP」，不是「MAMP PRO」喔。

### 1.4. STEP 4：設定端口 (Port)

![](https://adersaytech.com/wp-content/uploads/2021/10/open-mamp-setting.webp)

接下來我們前往左上角的「Preferences」設定，開啟之後並選擇「Ports」，這邊可以自己設定端口，保持預設也可以，看自己的需求。

教學範例是使用預設的端口，並沒有做更改，如下圖。  
![](https://adersaytech.com/wp-content/uploads/2021/10/mamp-ports-setting.webp)

### 1.5. STEP 5：啟用伺服器並開啟後台

![](https://adersaytech.com/wp-content/uploads/2021/10/mamp-start-server.webp)

設定完成端口之後，回到 MAMP 主頁面，並按下右上方的「Start」按鈕啟用伺服器。

啟用之後，按一下「WebStart」開啟 MAMP 後台管理頁面，如下圖。  
![](https://adersaytech.com/wp-content/uploads/2021/10/mamp-webstart.webp)

### 1.6. STEP 6：前往 phpMyAdmin

![](https://adersaytech.com/wp-content/uploads/2021/10/MAMP-PhpMyAdmin.webp)

在開啟 MAMP 後台頁面後，左上角選擇「Tools→phpMyAdmin」選項，就可以進入資料庫設定頁面。

### 1.7. STEP 7：更改資料庫語言

![](https://adersaytech.com/wp-content/uploads/2021/10/MAMP-change-language.webp)

如果進入資料庫後台發現不是繁體中文，可以在外觀設定下把語言改成「中文 – Chinese traditional」，這樣會比較方便操作，畢竟是自己熟悉的語言。

### 1.8. STEP 8：建立資料庫

![](https://adersaytech.com/wp-content/uploads/2021/10/mamp-create-database.webp)

接下來我們必須要建立一個給 WordPress 所使用的資料庫，名稱可以自取，以英文為主，方便自己辨識就可以了。

### 1.9. STEP 9：建立使用者帳號

![](https://adersaytech.com/wp-content/uploads/2021/10/MAMP-create-account.webp)

再來就是必須要建立一個使用者帳戶，專門來管理與使用剛剛所建立的 WordPress 資料庫，概念就大概類似於你去 [Bluehost](https://adersaytech.com/hosting/bluehost-tutorial.html) 或 [Cloudways](https://adersaytech.com/hosting/cloudways-host-guide.html) 租用主機一樣，都要先建立一個登入管理後台的帳號。

帳號、密碼都自己設定，記得中間的主機名稱要選「Localhost」，如下圖。  
![](https://adersaytech.com/wp-content/uploads/2021/10/MAMP-create-account-step2.webp)

在最下方的「全域權限」，把全部的選項都打勾，這樣該帳號才有最高的權限，沒問題就按下「執行」按鈕，就會開始建立囉。  
![](https://adersaytech.com/wp-content/uploads/2021/10/MAMP-create-account-step3.webp)

### 1.10. STEP 10：下載 WordPress 安裝檔

![](https://adersaytech.com/wp-content/uploads/2021/10/download-wordpress.webp)

到這邊 MAMP 的設定就大致完成了，接下來我們必須下載 WordPress 的安裝檔，[點我](https://tw.wordpress.org/download/) 前往 WordPress 下載頁面，並下載最新版本即可。

下載回電腦後，把它解壓縮出來成資料夾，自己再重新命名資料夾，這個資料夾名稱請以 **英文命名**，方便自己辨識即可，會等於你的網址名稱。

像是我自己就取名為「ader\_offline」，這樣在安裝完成後，我的 WordPress 後台網址會像是以下：

http://localhost:8888/**ader\_offline**/wp-admin/

在資料夾命名完成後，把他複製放到 MAMP 資料庫的路徑 (htdocs)，路徑在主程式介面有顯示，如下圖 (中間的 Document root)。  
![](https://adersaytech.com/wp-content/uploads/2021/10/MAMP-document-path.webp)

下圖是我複製過去後的範例。  
![](https://adersaytech.com/wp-content/uploads/2021/10/copy-wordpress-to-mamp.webp)

### 1.11. STEP 11：在本機安裝 WordPress

![](https://adersaytech.com/wp-content/uploads/2021/10/wordpress-installation-step01.webp)

把 WordPress 安裝檔案資料夾複製到指定路徑後，打開你的瀏覽器，並前往「http://localhost:8888/**ader\_offline**」，最後的名稱是根據你剛剛所命名的資料夾名稱。

這邊需要注意一下，如果你有修改過端口 (ports)，那這邊的「8888」是預設的，要把它改成自己修改過後的數字，不然會連不上喔！

連上之後，就會跳出 WordPress 的安裝畫面，點擊「開始安裝吧！」按鈕開始安裝設定。

### 1.12. STEP 12：連接資料庫

![](https://adersaytech.com/wp-content/uploads/2021/10/wordpress-installation-step02.webp)

這邊的資料庫名稱、使用者名稱與密碼，都是先前我們所建立的，輸入相對應的資料庫名稱與帳號密碼，其餘保持預設，按下「傳送」按鈕。

### 1.13. STEP 13：執行安裝程式

![](https://adersaytech.com/wp-content/uploads/2021/10/wordpress-installation-step03.webp)

如果上一個步驟所輸入的資料庫名稱、帳號密碼無誤，就可以順利連接上，接下來請按下「執行安裝程式」的按鈕。

### 1.14. STEP 14：創建 WordPress 後台帳號

![](https://adersaytech.com/wp-content/uploads/2021/10/wordpress-installation-step04.webp)

再來需要創建一組登入「[WordPress 後台](https://adersaytech.com/wordpress-teach/wordpress-common-function.html)」的帳號密碼，也可以順便幫網站取個名字，之後就可以點擊「安裝 WordPress」按鈕開始正式安裝流程。

安裝完成後，就可以登入你剛剛所建立的 WordPress 後台帳號密碼。  
![](https://adersaytech.com/wp-content/uploads/2021/10/wordpress-installation-step05.webp)

登入之後，就正式的建立完成囉，可以開始使用 WordPress 的功能了！

**供應者:**

* MAMP+WordPress

**使用工具:**

* MAMP



## 2. 使用心得

- 安裝 MAMP
	- 安裝在 F:＼MAMP＼
- 開啟 MAMP（非 PRO）
- 至 Preference 設定 Port 端口、介面語言
	- Apache Port：80
	- Nginx Port：80
	- MySQL Port：3306
- 開啟離線伺服器
- Open Web Start Page
	- Tools＼phpmyadmin＼
- 建立資料庫（英文名稱）：
	- 自訂資料庫名稱：hoonsor
- 設定資料庫後台使用者帳密及權限
	- 帳號：hoonsor001
	- 密碼：dmuharwf
- 下載 WordPress
- 將資料夾解壓縮後放至 htdoc 資料夾
	- 資料夾名稱更改為之後離線版網址之名稱（可自訂），在此我命名為 hoonsor_offline
- 安裝 WordPress
- 連結資料庫（輸入資料庫名稱、帳密）
- 建立 WordPress 使用者帳密
	- 帳號：hoonsor002
	- 密碼：dmuharwf
- WordPress 後台網址（網址跟放在 htdoc 裡面的資料夾名稱有關連）
	- [http://localhost:80/hoonsor_offline/wp-admin/](http://localhost:80/hoonsor_offline/wp-admin/)