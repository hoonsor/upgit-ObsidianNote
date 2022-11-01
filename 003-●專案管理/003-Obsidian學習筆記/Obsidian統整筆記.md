---
obsidianUIMode: sourece  
parent: [[●專案管理]]
sibling: [[002-Inbox/1110731-DataView插件筆記]]
child: 
created: Friday, August 5th 2022, 1:40:01 pm
modified: Tuesday, November 1st 2022, 9:14:30 pm
---

[[●專案管理]]
# Obsidian 統整筆記 ^toc

- [[#Obsidian 統整筆記 ^toc|Obsidian 統整筆記]]
	- [[#1. 語法概述|1. 語法概述]]
		- [[#1.1. 區塊引用語法|1.1. 區塊引用語法]]
			- [[#1.1.1. 自動命名|1.1.1. 自動命名]]
			- [[#1.1.2. 手動命名|1.1.2. 手動命名]]
		- [[#1.2. 註腳語法|1.2. 註腳語法]]
	- [[#2. 插件|2. 插件]]
		- [[#2.1. Dataview|2.1. Dataview]]
		- [[#2.2. Columns|2.2. Columns]]
		- [[#2.3. Obsidian Markdown Table Editor|2.3. Obsidian Markdown Table Editor]]
		- [[#2.4. upgit（檔案、圖片快速上傳至 github 再將連結更改為 Markdown 格式後複製到剪貼簿上）|2.4. upgit（檔案、圖片快速上傳至 github 再將連結更改為 Markdown 格式後複製到剪貼簿上）]]
			- [[#2.4.1. github token 設定|2.4.1. github token 設定]]
			- [[#2.4.2. 建立專用的 github repo|2.4.2. 建立專用的 github repo]]
			- [[#2.4.3. upgit 下載及 config.toml 設定|2.4.3. upgit 下載及 config.toml 設定]]
			- [[#2.4.4. 使用 obsidian shell commands 外掛|2.4.4. 使用 obsidian shell commands 外掛]]
			- [[#2.4.5. 實做上傳 Gif 圖檔並搭配 AHK 複製連結|2.4.5. 實做上傳 Gif 圖檔並搭配 AHK 複製連結]]
			- [[#2.4.6. 相關連結|2.4.6. 相關連結]]
	- [[#3. 小技巧|3. 小技巧]]
	- [[#4. 教學介紹及分享|4. 教學介紹及分享]]
		- [[#4.1. Obsidian 概述|4.1. Obsidian 概述]]
		- [[#4.2. 文件準備|4.2. 文件準備]]
			- [[#4.2.1. 安裝 Obsidan 及有關插件|4.2.1. 安裝 Obsidan 及有關插件]]
			- [[#4.2.2. 安裝 Github，方便同步不同設備上之資料|4.2.2. 安裝 Github，方便同步不同設備上之資料]]
			- [[#4.2.3. 安裝 upgit，方便上傳圖檔並取得連結|4.2.3. 安裝 upgit，方便上傳圖檔並取得連結]]
			- [[#4.2.4. 安裝 Autohotkey，搭配 upgit 使用|4.2.4. 安裝 Autohotkey，搭配 upgit 使用]]
		- [[#4.3. 主要功能介紹|4.3. 主要功能介紹]]


## 1. 語法概述

### 1.1. 區塊引用語法
#### 1.1.1. 自動命名
- 內部連結時輸入倒 V 符號，下拉式選單便會自行跳出各個區塊，當選中後，該區塊後面會自行顯示出區塊代碼（僅編輯模式會呈現，檢視模式不會）
- 範例：[[★測試各類功能#^737aa8]]
#### 1.1.2. 手動命名
- 在想要加入命名的區塊句尾，輸入空白 + 倒 V 符號，並且輸入自訂的名稱即可，需注意命名名稱 #h/red **只可以使用數字及英文之組合，不可使用中文**
- 範例：[[★測試各類功能#^example]]

### 1.2. 註腳語法

這是第一個註腳 [^1]，今天天氣不錯。
第二段開頭，這是第二個註腳 [^2]，結尾文字。









---
[^1]: 今天天氣很好
[^2]: 註腳測試練習

## 2. 插件
### 2.1. Dataview
[[1110731-DataView插件筆記]]

### 2.2. Columns 

其中一種比較方便之語法如下，需使用閱讀模式才可看出效果
- !!!col
	- 1
		欄位內容
	- 1
		欄位內容


### 2.3. Obsidian Markdown Table Editor

選住文字（欄與欄中間以 TAB 間隔），按 ctrl+shift+D 快捷鍵，可直接呼叫創建表格之小工具

> [!INFO]+ 資訊
> [(66) [Obs＃75] 千呼萬喚始出來！視覺化表格編輯器(Obsidian Markdown Table Editor)誕生了 🎂 - YouTube](https://www.youtube.com/watch?v=rZX_ZVPOgC8)

### 2.4. upgit（檔案、圖片快速上傳至 github 再將連結更改為 Markdown 格式後複製到剪貼簿上）

- upgit 其實是一個通用的圖檔上傳工具，只要用一個命令就能把圖檔上傳到 GitHub，並且直接取得 GitHub 的圖片鏈接網址，方便在筆記或 Blog 裡引用。


#### 2.4.1. github token 設定
- 右上頭像→Setting→左下指令列「Develop Settings」→左邊指令列「Personal acess tokens」→畫面中間上方「Generate new token」→輸入密碼→輸入 Note 名稱（自訂）→指定有效期限→（授權權限）勾選 repo→「Generate token」→複製「ghp_XXXX」開頭的字串就是我們的 token→複製起來並儲存
- 注意一下，預設的分支是「main」，分支名稱會影響到底下 upgit 的設定檔文字內容設定！

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666022997.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023062.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023125.png)

#### 2.4.2. 建立專用的 github repo
記得 repo 一定要設定為 public，這樣才有辦法存取
#### 2.4.3. upgit 下載及 config.toml 設定
- 至下列網站，點擊右邊的 release，至最新版本處下載 upgit_win_amd64.exe（windows 64 位元的執行檔），並下載 Source code.zip，裡面有 config.toml 的範例檔案
- 下載下來之後將檔名改成 upgit.exe，放在 Obsidian Shell commands PATH 環境變數可以指定的到的路徑中（自訂，路徑不要有中文及空格），就可以做下一步 config.toml 的設定了，影片中的路徑是 `C:\UTIL`
- 在「branch」輸入分支名稱，在「pat」輸入 token 字串
- 在「repo」輸入儲存庫的名稱
- 在「username」輸入 github 的用戶名
- 在「markdown-simple」輸入想要輸出的自訂文字格式，在此可以輸入自訂要貼在 Obsidian 裡面的的長寬…等

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023869.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023961.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666024040.png)




[[Obsidian統整筆記#^11111010852]]

> [!INFO]+ 資訊
> [GitHub - pluveto/upgit: Another Upload Hub, support clipboard, good with Typora, Snipaste, VSCode](https://github.com/pluveto/upgit)

#### 2.4.4. 使用 obsidian shell commands 外掛
- 此指令等同於使用命令提示字元去執行 upgit.exe 並使其回傳 markdown 自訂之輸出文字，再將其複製到剪貼簿上並且貼上

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666022423.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666022448.png)


#### 2.4.5. 實做上傳 Gif 圖檔並搭配 AHK 複製連結
- 以下為搭配 AHK 之範例，當在資料夾中選到我想要上傳的檔案（此範例為 gif），按下 Alt+V 後，就會將檔案透過 upgit 自動上傳，並且將連結依照我自訂的 markdown 格式複製到剪貼簿
```AHK
;●●● 將gif檔案使用upgit上傳後並將連結以markdown的格式貼上剪貼簿
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
!v::
    Clipboard =
    Send,^c
    ClipWait
    path = %Clipboard%
    Run, "C:\upgit\upgit.exe" %path% -s 0 -o clipboard  -f markdown-simple
    Sleep, 2000
   	Show_Banner("檔案已使用upgit上傳完成！",8,500)
Return
```





#### 2.4.6. 相關連結


> [!INFO]+ 資訊
> [[Obs＃67] upgit－使用GitHub圖床：快速上傳圖檔到GitHub並插入圖片網址到Obsidian - YouTube](https://www.youtube.com/watch?v=nGII-khqm2o&t=152s)


> [!INFO]+ 資訊
> UPGIT 簡體中文說明文件
> [upgit/README.zh-CN.md at main · pluveto/upgit · GitHub](https://github.com/pluveto/upgit/blob/main/docs/README.zh-CN.md)



## 3. 小技巧

> OB_Tips:: 想要將程式碼區塊顯示成文字，只要使用四個\`（倒引號）把原本程式碼區塊包住即可顯示！

> OB_Tips:: Mgit 無法獲取建立檔案的權限時，將 repository 位置改到 emulated/0/documents/中就可以了 (r6p 只給 mgit 存取媒體檔案的權限)


## 4. 教學介紹及分享

### 4.1. Obsidian 概述
- Obsidian 是一款知識管理軟體，強大的功能及各類插件，可以讓人建立一套完整的系統，並且快速筆記及獲取想要的知識
- 與其他筆記軟體不同之處在於自由度高且具有反向連結功能，可以如同大腦般的連結各類知識及筆記

### 4.2. 文件準備
#### 4.2.1. 安裝 Obsidan 及有關插件
- Obsidian 安裝檔
- 我目前 Obsidian 資料夾中的檔案

#### 4.2.2. 安裝 Github，方便同步不同設備上之資料
- 註冊並安裝 [GitHub Desktop](https://desktop.github.com/)，作為在不同設備同步 Obsidian 及上傳各類圖檔文件使用
- 步驟請參考 [[1110806-Git及Obsidian同步至手機學習]]

#### 4.2.3. 安裝 upgit，方便上傳圖檔並取得連結
- 下載並安裝 [upgit](https://github.com/pluveto/upgit/releases)，並詳見 [[Obsidian統整筆記#2 4 upgit（檔案、圖片快速上傳至 github 再將連結更改為 Markdown 格式後複製到剪貼簿上）]]

#### 4.2.4. 安裝 Autohotkey，搭配 upgit 使用
- 下載 [1100123-●AHK+AutoGUI+QTTBar](https://drive.google.com/file/d/1MLlGT2AE2Z1d0RpDOAzDIuX-nppzi6WN/view)
- 並搭配使用單一介面及 upgit

### 4.3. 主要功能介紹
- 標題語法 ^887f66
	- 快速跳標題
	- 標題插件等
- 項目語法
- 多欄語法
- 斜體、底線、高亮
- 其他顏色標註插件
- 程式碼區塊語法
- 引用語法
- 註腳語法
- 內部連結語法
- 筆記連結圖
- 每日筆記
- 大綱
- 最近筆記
- 分頁及版面配置
- 多視窗運用（編輯及檢視頁面同時顯示）
- 同步插件 
- Callout 語法以及 Chrome TabCopy 插件、RoamHighlighter
- 表格工具