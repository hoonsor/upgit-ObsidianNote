---
obsidianUIMode: sourece  
created: Friday, August 5th 2022, 1:40:01 pm
modified: Tuesday, January 10th 2023, 8:27:25 pm
---

[[●專案管理]]
[由此开始 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E7%94%B1%E6%AD%A4%E5%BC%80%E5%A7%8B)
[1120109-Obsidian教學範例資料庫](https://drive.google.com/file/d/1C0Zwy3U_DUOEMwAAKOYiJLQAXI24b1YZ/view?usp=share_link)
# Obsidian 統整筆記

## 1. 教學介紹及分享

### 1.1. Obsidian 特點及概述
- Obsidian 是一款知識管理筆記軟體，採用 Markdown 格式（資料再編輯也方便），以 html 為軟體架構核心（可嵌入筆記、動圖）
- 可安裝各種插件提供各種功能，且開發團隊亦不斷精進軟體本身功能
- 介面自由度高，可安裝各類主題以及自訂 CSS
- 特性為具有反向連結筆記之功能，且可以顯示筆記之間的連結圖且能直接以小視窗查看其內容，如同大腦的神經網路連結一般
### 1.2. 事前準備及相關軟體安裝
#### 1.2.1. 安裝 Obsidan 及有關插件
- Obsidian 安裝檔
- 我目前 Obsidian 資料夾中的檔案

#### 1.2.2. 安裝 Github，方便同步不同設備上之資料並建立雲端圖片資料庫
- 至 [GitHub](https://github.com/) 註冊一個帳號，並安裝 [GitHub Desktop](https://desktop.github.com/)，建立一個公開的資料庫，作為在不同設備同步 Obsidian 筆記及上傳各類圖檔、文件使用
##### 1.2.2.1. 使用 android 同步 Obsidan 資料庫之方法
- 步驟請參考 [[1110806-Git及Obsidian同步至手機學習]]

### 1.3. 操作介面介紹
#### 1.3.1. 左邊工具欄（含上方小按鈕）
- 可折疊
- 可使用插件自訂所需按鈕（Customsized Sidebar）
- 搜尋社群插件
- 熱鍵
- Linter
- Shell Command
- Customized Sidebar
- QuickAdd
- Templater
- 筆記檔案總管
- 常用筆記
- 日曆（每日筆記）
#### 1.3.2. 右邊工具欄（含上方小按鈕）
- 可放置數個小工具視窗
- Git 插件
- 大綱
- 連結視圖
#### 1.3.3. 左邊工具欄下方設定按鈕
- 打開其他資料庫
- 幫助
- 設定
#### 1.3.4. 中間筆記視窗
- 可透過拖曳改變筆記排序，可並列亦可上下排列，每個視窗也有許多頁籤分頁
#### 1.3.5. 下方狀態列
- 顯示筆記的路徑
- 顯示整篇文章內容的分析
- 右下角有 cMenu 插件，可顯示方便之圖示按鈕選單
### 1.4. 主要功能介紹
#### 1.4.1. 基本操作指令
- [[1110906-Obsidian快捷鍵]]
- 快速找尋筆記：Quickswitcher
- 執行命令：Open command palette
- 一些鍵盤操作的快捷鍵（搭配 code editor shortcuts ）
	- 上方加入空行
	- 下方加入空行
	- 快速移動本行
	- 快速刪除本行
	- 快速複製本行並在下行插入貼上
	- 快速往左選取單字/中文字
	- 多重指標
- 快速開啟筆記在新分頁
- 快速開啟筆記在新視窗
- 多視窗運用（編輯及檢視頁面同時顯示）

#### 1.4.2. 筆記建立
- 透過模版創建（可搭配 Templater 插件、QuickAdd 使用）
- YAML 區（方便快速查看此篇筆記相關資訊，如作者、資料來源、創建時間、修改時間、標籤…等，可將筆記增加很多不同特性，方便之後統整歸納分析及搜尋）

#### 1.4.3. 查詢筆記
- Dataview 插件

#### 1.4.4. Obsidian 語法
- 標題語法 ^887f66
	- 快捷鍵
	- 快速跳上下標題
	- 快速折疊標題
	- 標題自動編號插件
		- Number Headings
- 文章內容格式化插件（Linter）
	- YAML 區標準化
	- 文字與英文相間部分空格
- 附件語法 ![[]]
- 項目語法
	- 序列、非序列
	- 快捷鍵
- 核取方塊
	- 快捷鍵
- 斜體、底線、高亮、分隔線
- 標注程式碼區塊語法
	- 快捷鍵
- 引用語法
	- 快捷鍵
- 註腳語法
	- 快捷鍵
- 內部連結語法
	- 快捷鍵
- 筆記連結圖
	- 快捷鍵
- 分頁及版面配置
- 其他顏色標註插件
	- 插入 CSS 片段
- 資料同步插件
	- Git
- Callout 語法
	- 搭配 TabCopy 使用
- 多欄語法
- 表格工具
- 嵌入網頁語法

[^3]: 這是使用註腳插件的結果

### 1.5. 插件
#### 1.5.1. Chrome 瀏覽器搭配使用插件
##### 1.5.1.1. TabCopy
- 可將網頁網址自訂成想要的格式並複製
##### 1.5.1.2. Roamhighlighter
- 可快速在觀看網頁的同時擷取文章文字變成筆記大綱
#### 1.5.2. Obsidian 插件
##### 1.5.2.1. 字典
- 可將常用詞語自動補全
- 亦可建立成為語法輸入之快捷方式
##### 1.5.2.2. quickadd
- javascript 為基底之插件，在自行建立筆記上、執行巨集或快速插入語法上有幫助
- `JavaScripts腳本\advanced_uri.js` 檔案中的 `window.open("obsidian://advanced-uri?vault=1120109&settingid=" + choice);` 中包含資料庫路徑，如資料庫路徑變更的話記得去更改
	- 上述 #h/red **1120109** 即為本資料庫路徑
##### 1.5.2.3. templater
- 創建許多筆記的樣版，並且有些語法可使用在日常筆記上
##### 1.5.2.4. Editing toolbar 
- 可將各種功能（含巨集）圖示化，更加方便操作
##### 1.5.2.5. Emo uploader
- 可將截圖或 gif 圖檔上傳 github 並將連結放在筆記中，方便筆記分享給他人時內容不會缺失
##### 1.5.2.6. shell command 及 customizable sidebar
- 可將常用之社群插件加到左邊的工具欄並呼叫，另外注意 shell command 的執行路徑（如果資料庫名稱改變，則需要隨同修改，不然會出現錯誤）
- 範例：start obsidian://advanced-uri?vault=1120109^&settingid=obsidian-linter
	- 上述 #h/red **1120109** 即為本資料庫路徑

### 1.6. Youtube 相關教學

> [!INFO]+ 資訊
> [(92) Obsidian.md與筆記系統 - YouTube](https://www.youtube.com/playlist?list=PLWg9zacwOnwfcpVm5pAKgOHms7PntsgJS)

### 1.7. 現場演練範例
#### 1.7.1. 使用 dataview 抓出各個筆記中所建立的小技巧欄位
#### 1.7.2. 現場看一則 youtube 教學影片並製作動態 gif 圖片之筆記

### 1.8. 良好的知識管理軟體以及筆記軟體需要的功能


## 2. 插件
### 2.1. Dataview
[[1110731-DataView插件筆記]]
### 2.2. Columns 

其中一種比較方便之語法如下，需使用閱讀模式（編輯模式看不出）才可看出效果
- !!!col
	- 1
		欄位內容
	- 1
		欄位內容

### 2.3. Obsidian Markdown Table Editor

選住文字（欄與欄中間以 TAB 間隔），按 ctrl+shift+D 快捷鍵，可直接呼叫創建表格之小工具

> [!INFO]+ 資訊
> [(66) [Obs＃75] 千呼萬喚始出來！視覺化表格編輯器(Obsidian Markdown Table Editor)誕生了 🎂 - YouTube](https://www.youtube.com/watch?v=rZX_ZVPOgC8)

## 3. 語法概述

### 3.1. 外部連結語法
```obsidian
[連結文字](連結網址)
```

- 範例：[Obsidian語法文件](https://publish.obsidian.md/help-zh/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E5%B5%8C%E5%85%A5%E6%96%87%E4%BB%B6)

### 3.2. 插入（嵌入）外部圖片語法
```obsidian
![滑鼠放上圖片時之替代文字|長度像素x寬度像素](圖片網址)
![滑鼠放上圖片時之替代文字|寬度像素(長寬比不變，依照寬度像素調整自動調整長度)](圖片網址)
```

- 範例：
![圖片1|200x200](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/09/25/upgit_20220925_1664098102.png)

![圖片2|400](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/09/25/upgit_20220925_1664098102.png)

### 3.3. 嵌入圖片並將圖片連結到內部筆記或外部網站
```obsidian
外部網站：
[![滑鼠放上圖片時之替代文字|長度像素x寬度像素](圖片網址)](外部網站網址)
[![滑鼠放上圖片時之替代文字|寬度像素(長寬比不變，依照寬度像素調整自動調整長度)](圖片網址)](外部網站網址)

內部筆記：
[![滑鼠放上圖片時之替代文字|長度像素x寬度像素](圖片網址)](外部網站網址)
[![滑鼠放上圖片時之替代文字|寬度像素(長寬比不變，依照寬度像素調整自動調整長度)](圖片網址)](外部網站網址)
```

- 範例
[![01|300](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/07/29/upgit_20220729_1659101550.png)](https://www.google.com.tw)
[![01|300](https://adersaytech.com/wp-content/uploads/2021/10/mamp-to-install-wordpress.webp)](●工作待辦事項)
### 3.4. 區塊引用語法
#### 3.4.1. 自動命名
- 內部連結時輸入倒 V 符號，下拉式選單便會自行跳出各個區塊，當選中後，該區塊後面會自行顯示出區塊代碼（僅編輯模式會呈現，檢視模式不會）
- 範例：[[★測試各類功能#^737aa8]]
#### 3.4.2. 手動命名
- 在想要加入命名的區塊句尾，輸入空白 + 倒 V 符號，並且輸入自訂的名稱即可，需注意命名名稱 #h/red **只可以使用數字及英文之組合，不可使用中文**
- 範例：[[★測試各類功能#^example]]

### 3.5. 註腳語法
```
文字中插入註腳使用[^註腳名稱]，也可以搭配註腳插件讓其自動編號，註腳名稱可以使用中文，但不可有空格
文章底下則需要插入[^註腳名稱]: 註腳內容，注意冒號後方要有一個空格，然後再寫上註腳內容
```

- 注意註腳會顯示在文章的最下方，不論註腳文字輸入在文章中的任何一處，檢視時都會在頁面的最下方
- 目前使用之註腳插件，會在按下第 1 次快捷鍵後自動跳到註腳內容可以輸入；按下第 2 次時就會跳回原本文章輸入的地方，可再繼續輸入文章內容，非常方便

> 範例：
> 這是第一個註腳 [^註腳]，今天天氣不錯。
> 第二段開頭，這是第二個註腳 [^2]，結尾文字。
> 第三行，使用註腳插件 [^3]，不知結果如何？

[^註腳]: 今天天氣很好
[^2]: 註腳測試練習（註腳 3 在文章最底處）
