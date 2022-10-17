---
obsidianUIMode: 
parent: [[●專案管理]]
sibling: [[002-Inbox/1110731-DataView插件筆記]]
child: 
created: Friday, August 5th 2022, 1:40:01 pm
modified: Tuesday, October 18th 2022, 12:29:26 am
---

[[●專案管理]]
# Obsidian 統整筆記 ^toc

- [[#Obsidian 統整筆記 ^toc|Obsidian 統整筆記]]
	- [[#1. 語法概述|1. 語法概述]]
	- [[#2. 插件|2. 插件]]
		- [[#2.1. Dataview|2.1. Dataview]]
		- [[#2.2. Columns|2.2. Columns]]
		- [[#2.3. Obsidian Markdown Table Editor|2.3. Obsidian Markdown Table Editor]]
	- [[#3. 各項教學|3. 各項教學]]
		- [[#3.1. 使用 GitHub 圖床：快速上傳圖檔到 GitHub 並插入圖片網址到 Obsidian|3.1. 使用 GitHub 圖床：快速上傳圖檔到 GitHub 並插入圖片網址到 Obsidian]]
			- [[#3.1.1. github token 設定|3.1.1. github token 設定]]
			- [[#3.1.2. 建立專用的 github repo|3.1.2. 建立專用的 github repo]]
			- [[#3.1.3. upgit 下載及 config.toml 設定|3.1.3. upgit 下載及 config.toml 設定]]
			- [[#3.1.4. autohotkey 整合|3.1.4. autohotkey 整合]]
			- [[#3.1.5. 使用 obsidian shell commands 外掛|3.1.5. 使用 obsidian shell commands 外掛]]
			- [[#3.1.6. 相關連結|3.1.6. 相關連結]]
	- [[#4. 小技巧|4. 小技巧]]


## 1. 語法概述

## 2. 插件
### 2.1. Dataview
[[002-Inbox/1110731-DataView插件筆記]]

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

## 3. 各項教學

### 3.1. 使用 GitHub 圖床：快速上傳圖檔到 GitHub 並插入圖片網址到 Obsidian
upgit 其實是一個通用的圖檔上傳工具，只要用一個命令就能把圖檔上傳到 GitHub，並且直接取得 GitHub 的圖片鏈接網址，方便在筆記或 Blog 裡引用。

#### 3.1.1. github token 設定
- 右上頭像→Setting→左下指令列「Develop Settings」→左邊指令列「Personal acess tokens」→畫面中間上方「Generate new token」→輸入密碼→輸入 Note 名稱（自訂）→指定有效期限→（授權權限）勾選 repo→「Generate token」→複製「ghp_XXXX」開頭的字串就是我們的 token→複製起來並儲存
- 注意一下，預設的分支是「main」，分支名稱會影響到底下 upgit 的設定檔文字內容設定！

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666022997.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023062.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023125.png)

#### 3.1.2. 建立專用的 github repo
記得 repo 一定要設定為 public，這樣才有辦法存取
#### 3.1.3. upgit 下載及 config.toml 設定
- 至下列網站，點擊右邊的 release，至最新版本處下載 upgit_win_amd64.exe（windows 64 位元的執行檔），並下載 Source code.zip，裡面有 config.toml 的範例檔案
- 下載下來之後將檔名改成 upgit.exe，放在 Obsidian Shell commands PATH 環境變數可以指定的到的路徑中（自訂，路徑不要有中文及空格），就可以做下一步 config.toml 的設定了，影片中的路徑是 `C:\UTIL`
- 在「branch」輸入分支名稱，在「pat」輸入 token 字串
- 在「repo」輸入儲存庫的名稱
- 在「username」輸入 github 的用戶名
- 在「markdown-simple」輸入想要輸出的自訂文字格式，在此可以輸入自訂要貼在 Obsidian 裡面的的長寬…等

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023869.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666023961.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666024040.png)



> [!INFO]+ 資訊
> [GitHub - pluveto/upgit: Another Upload Hub, support clipboard, good with Typora, Snipaste, VSCode](https://github.com/pluveto/upgit)

#### 3.1.4. autohotkey 整合
#### 3.1.5. 使用 obsidian shell commands 外掛
- 此指令等同於使用命令提示字元去執行 upgit.exe 並使其回傳 markdown 自訂之輸出文字，再將其複製到剪貼簿上並且貼上

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666022423.png)

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/10/18/upgit_20221018_1666022448.png)


#### 3.1.6. 相關連結


> [!INFO]+ 資訊
> [[Obs＃67] upgit－使用GitHub圖床：快速上傳圖檔到GitHub並插入圖片網址到Obsidian - YouTube](https://www.youtube.com/watch?v=nGII-khqm2o&t=152s)

## 4. 小技巧

> OB_Tips:: 想要將程式碼區塊顯示成文字，只要使用四個\`（變音符號）把原本程式碼區塊包住即可顯示！