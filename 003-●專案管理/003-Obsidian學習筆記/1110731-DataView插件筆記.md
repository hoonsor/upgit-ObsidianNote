---
parent: [[●專案管理]]
sibling: [[002-Inbox/001-SubItem/Obsidian概述]]
child: 
aliases:    
tags: [專案筆記, 電腦軟體, 興趣培養]
status: 🌱
author: 
source: https://www.youtube.com/watch?v=dkWA7Qd0CLA 
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
obsidianUIMode: preview 
created: Sunday, July 31st 2022, 7:06:36 pm
modified: Monday, September 5th 2022, 5:24:25 pm
---

[[●專案管理]]
# 1110731-DataView 插件筆記 ^toc

- [[#1110731-DataView 插件筆記 ^toc|1110731-DataView 插件筆記]]
	- [[#1. 概述|1. 概述]]
	- [[#2. 查詢語法|2. 查詢語法]]
		- [[#2.1. 語法說明|2.1. 語法說明]]
		- [[#2.2. 內置變數|2.2. 內置變數]]
		- [[#2.3. 參考資料|2.3. 參考資料]]
		- [[#2.4. 範例|2.4. 範例]]

## 1. 概述

> Dataview 可以讓我們動態查詢筆記的資料，製作索引非常方便

## 2. 查詢語法

````
```dataview 
TABLE|LIST|TASK \<field> [AS "Column Name"], \<field>, ..., \<field> FROM \<source> 
WHERE \<expression> 
SORT \<expression> [ASC/DESC] 
GROUP BY \<field>
FLATTEN \<field>
... other data commands 
```
````

### 2.1. 語法說明

- Table、List、Task 分別為三種不同呈現樣式，Table 為表格、List 為列表、Task 為未完成的 Todo List 項目
- \<field> 是「註釋欄位」，像是一般 YAML 區的部分各欄位、或內容的「自訂註釋」欄位，語法為 #h/maroon ==Key:: Value==；如果要在行內加入註釋欄位的話，格式為 #h/maroon ==[Key:: Value]==
- 如果不想要在 Table 顯示來源檔案檔名，可以加上 #h/maroon ==wihout id==
- From \<source>是搜尋來源，以 #h/maroon ==#tag 或 " 資料夾 " 之方式表示==，「From ""」 則表示是搜尋所有的資料夾
- Where 是設定搜尋條件，可同時設定許多組，後面接的是布林值
	- #h/maroon ==where contains(file.name, "Obsidian") 這段話代表列出檔名有 Obsidian 的筆記==
- Sort 是排序依據， #h/maroon ==ASC 是升冪排序；DESC 是降冪排序==
- Group by 是將呈現的資料依據特定註釋欄位分類，將同樣數值的部分集合在一起，如下圖
	- ![01|400](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/07/31/upgit_20220731_1659268341.png)
- Flatten 是在如果所設定的註釋欄位有多筆資料時將呈現的資料一筆一筆列出，不要集合在一起，如下圖
	- ![01|400](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/07/31/upgit_20220731_1659268396.png)



### 2.2. 內置變數

Dataview 會自動為每個頁面添加大量元數據：
- `file.name`：文件標題（字符串）。
- `file.folder`：該文件所屬文件夾的路徑。
- `file.path`：完整的文件路徑（字符串）。
- `file.ext`: 文件類型的擴展名；通常是“.md”（一個字符串）。
- `file.link`：文件的鏈接（鏈接）。
- `file.size`：文件的大小（以字節為單位）（一個數字）。
- `file.ctime`：文件的創建日期（日期 + 時間）。
- `file.cday`：文件的創建日期（只是一個日期）。
- `file.mtime`：文件最後修改的日期（日期 + 時間）。
- `file.mday`：文件最後修改的日期（只是一個日期）。
- `file.tags`：筆記中所有唯一標籤的數組。子標籤按每個級別細分，因此 `#Tag/1/A` 將存儲在數組中 `[#Tag, #Tag/1, #Tag/1/A]`。
- `file.etags`：註釋中所有顯式標籤的數組；不像 `file.tags`, 不包括子標籤。
- `file.inlinks`：指向此文件的所有傳入鏈接的數組。
- `file.outlinks`：此文件中所有傳出鏈接的數組。
- `file.aliases`：筆記的所有別名的數組。
- `file.tasks``- [ ] blah blah blah`：此文件中所有任務（即，）的數組。
- `file.lists`：文件中所有列表元素的數組（包括任務）；這些元素是有效的任務，可以在任務視圖中呈現。
- `file.frontmatter`：包含所有 frontmatter 的原始值；主要用於檢查原始 frontmatter 值或動態列出 frontmatter 鍵。

- 以下為布林值，搭配 where 使用
	如果文件在其標題（表單 `yyyy-mm-dd` 或 `yyyymmdd`）中有日期，或者有一個 `Date` 字段/內聯字段，它還具有以下屬性：
	- `file.day`：與文件關聯的明確日期。
	如果您使用 Obsidian 默認的“加星標文件”插件，還可以使用以下元數據：
	- `file.starred`：如果此文件已被“星星”黑曜石插件加註星標。

### 2.3. 參考資料

> [!INFO]+ 資訊
> [(12) [Obs＃26] Dataview外掛: 製作索引筆記利器；動態查詢筆記資料；Obsidian專屬～ (CC字幕) - YouTube](https://www.youtube.com/watch?v=dkWA7Qd0CLA&t=127s)

> [!INFO]+ 資訊
> [(12) [Obs＃30] 更多的Dataview: 動態查詢筆記資料 - YouTube](https://www.youtube.com/watch?v=QHvd17JRNbA&t=817s)

> [!INFO]+ 資訊
> [Data Annotation - Dataview](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/)

> [!INFO]+ 資訊
> [【Obsidian 使用教學】插件篇 02 — 如何在 Obsidian 中自動彙整筆記？使用 Dataview 查詢與呈現符合條件的筆記 | by 朱騏 | PM的生產力工具箱 | Medium](https://medium.com/pm%E7%9A%84%E7%94%9F%E7%94%A2%E5%8A%9B%E5%B7%A5%E5%85%B7%E7%AE%B1/obsidian-%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8-%E6%8F%92%E4%BB%B6%E7%AF%87-02-%E5%A6%82%E4%BD%95%E5%9C%A8-obsidian-%E4%B8%AD%E8%87%AA%E5%8B%95-%E5%BD%99%E6%95%B4%E7%AD%86%E8%A8%98-8d90b5e44f6a)


### 2.4. 範例

- 列出檔名包含 111072 的 table
````
```dataview
table file.ctime as 建檔時間 from ""
where contains(file.name, "111072")
sort ASC
```
````

```dataview
table file.ctime as 建檔時間 from ""
where contains(file.name, "111072")
sort ASC
```
- 列出檔名包含 1110731 的 table，並且使用 flatten 方式呈現

````
```dataview
table tags as 標籤,file.ctime as 建檔時間 from ""
where contains(file.name, "1110731")
flatten tags
```
````

```dataview
table tags as 標籤,file.ctime as 建檔時間 from ""
where contains(file.name, "1110731")
flatten tags
```
- 列出包含星號的 file List
````
```dataview
list from ""
where file.starred
```
````

```dataview
list from ""
where file.starred
```
- 列出所有筆記中的 AHK Tips 自訂欄位（且 AHK Tips 欄位不等於空值），並且使用 flatten 方式呈現
````
```dataview
table AHK_Tips from ""
where AHK_Tips!=null
flatten AHK_Tips
```
````

```dataview
table AHK_Tips from ""
where AHK_Tips!=null
flatten AHK_Tips
```
- 列出所有筆記中的 ExcelTips（且 ExcelTips 欄位不等於空值），並且使用 flatten 方式呈現
````
```dataview
	table ExcelTips from ""
	where ExcelTips!=null
	flatten ExcelTips
```
````

```dataview
	table ExcelTips from ""
	where ExcelTips!=null
	flatten ExcelTips
```
