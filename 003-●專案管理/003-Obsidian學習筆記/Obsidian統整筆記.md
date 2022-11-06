---
obsidianUIMode: sourece  
created: Friday, August 5th 2022, 1:40:01 pm
modified: Sunday, November 6th 2022, 10:31:35 am
---

[[●專案管理]]
# Obsidian 統整筆記
## 1. 語法概述

### 1.1. 區塊引用語法
#### 1.1.1. 自動命名
- 內部連結時輸入倒 V 符號，下拉式選單便會自行跳出各個區塊，當選中後，該區塊後面會自行顯示出區塊代碼（僅編輯模式會呈現，檢視模式不會）
- 範例：[[★測試各類功能#^737aa8]]
#### 1.1.2. 手動命名
- 在想要加入命名的區塊句尾，輸入空白 + 倒 V 符號，並且輸入自訂的名稱即可，需注意命名名稱 #h/red **只可以使用數字及英文之組合，不可使用中文**
- 範例：[[★測試各類功能#^example]]

### 1.2. 註腳語法
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
- 資料再編輯非常方便（純文字格式）
- 可快速將圖片及動圖上傳至網路後再插入筆記
- 可嵌入影片

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

### 4.3. 操作介面介紹
#### 4.3.1. 左邊工具欄（含上方小按鈕）
- 可折疊
- 可使用插件自訂所需按鈕（Customsized Sidebar）
- 搜尋社群插件
- 熱鍵
- Linter
- Shell Command
- Customized Sidebar
- QuickAdd
- Templater
#### 4.3.2. 右邊工具欄（含上方小按鈕）
- 可放置數個小工具視窗
- 日曆（每日筆記）
- Git 插件
- 大綱
- 連結視圖
#### 4.3.3. 左邊工具欄下方設定按鈕
- 打開其他資料庫
- 幫助
- 設定
#### 4.3.4. 中間筆記視窗
- 可透過拖曳改變筆記排序，可並列亦可上下排列，每個視窗也有許多頁籤分頁
#### 4.3.5. 下方狀態列
- 顯示筆記的路徑
- 顯示整篇文章內容的分析
- 右下角有 cMenu 插件，可顯示方便之圖示按鈕選單
### 4.4. 主要功能介紹
#### 4.4.1. 基本操作指令
- 快速找尋筆記：Quickswitcher
- 執行命令：Open command palette
- 一些鍵盤操作的快捷鍵（搭配 code editor shortcuts ）
	- 上方加入空行
	- 下方加入空行
	- 快速移動本行
	- 快速刪除本行
	- 快速複製本行並在下行插入貼上
	- 快速往左選取單字/字
	- 多重指標
- 快速開啟筆記在新分頁
- 快速開啟筆記在新視窗
- 多視窗運用（編輯及檢視頁面同時顯示）

#### 4.4.2. 筆記建立
- 透過模版創建（可搭配 Templater 插件、QuickAdd 使用）
- YAML 區

#### 4.4.3. 查詢筆記
- Dataview 插件

#### 4.4.4. Obsidian 語法
- 標題語法 ^887f66
	- 快捷鍵
	- 快速跳上下標題
	- 快速折疊標題
	- 標題自動編號插件
- 文章內容格式化插件（Linter）
- 項目語法
	- 序列、非序列
	- 快捷鍵
- 核取方塊
	- 快捷鍵
- 斜體、底線、高亮
- 程式碼區塊語法
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
- 同步插件 
- Callout 語法
	- 搭配 TabCopy 使用
- 多欄語法
- 表格工具

[^3]: 這是使用註腳插件的結果

### 4.5. 插件
#### 4.5.1. Chrome 瀏覽器搭配使用插件
##### 4.5.1.1. TabCopy
##### 4.5.1.2. Roamhighlighter

#### 4.5.2. Obsidian 插件
##### 4.5.2.1. 字典
##### 4.5.2.2. quickadd
##### 4.5.2.3. templater
##### 4.5.2.4. cMenu


> [!INFO]+ 資訊
> [(26) [Obs＃82] 用Obsidian學會Markdown--完整Markdown教學 - YouTube](https://www.youtube.com/watch?v=lnsQsFCYhNc&t=1636s)


## 5. 目前思考可繼續增強之功能
- [ ] 嵌入 excel 工作表
- [ ] 更方便的多欄顯示語法
- [ ] 搭配 python 或可爬蟲更新特定網站資訊（例如法規檔案之最近一次修法日期）
- [ ] 每日筆記可將每篇筆記複習的次數紀錄並且顯示
- [ ] dataview 可搭配 kanban 使用，或是 dataview 可變成卡片之方式顯示
- [ ] 更強大的心智圖插件
- [ ] 快速將文件中所有標題降一級
