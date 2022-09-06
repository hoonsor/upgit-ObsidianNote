---
parent: 
sibling: 
child: 
aliases:    
tags: [子彈筆記, 興趣培養, 電腦軟體]
status: 🌱
author: 簡睿 
source: https://www.youtube.com/watch?v=wETtIAFFcfw 
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
obsidianUIMode: preview 
created: Wednesday, July 20th 2022, 7:01:49 pm
modified: Monday, September 5th 2022, 9:02:41 pm
---
# Obsidian 的任務管理技巧彙總 ^toc

- [[#Obsidian 的任務管理技巧彙總 ^toc|Obsidian 的任務管理技巧彙總]]
	- [[#1. Tasks 外掛|1. Tasks 外掛]]
		- [[#1.1. [查詢語法 (第三人稱)](http://jdev.tw/blog/6858#top "Back to top")|1.1. [查詢語法 (第三人稱)](http://jdev.tw/blog/6858#top "Back to top")]]
			- [[#1.1.1. 練習|1.1.1. 練習]]
	- [[#2. Reminder 外掛|2. Reminder 外掛]]


## 1. Tasks 外掛
- ctrl+alt+enter，可以對待辦事項輸入到期日及是否循環出現
- 只能指定到期日，無法指定特定時間
- 可以讓使用者針對儲存庫裡面所有的待辦事項進行一個查詢！使用上比 dataview 直覺
- 查詢語法是使用第三人稱方式，如下圖範例，要使用時要加上三個倒引號

### 1.1. [查詢語法 (第三人稱)](http://jdev.tw/blog/6858#top "Back to top")
- 完成/未完成：done 或 not done
    - 完成日期：done before/after/on 日期
- 無到期日：no due date
- 到期日過濾：due before/after/on 日期
    - 日期可使用 today, yesterday, tomorrow, next week， last Friday, in two weeks 等
- 路徑
    - 要搜尋：path includes 路徑
    - 不搜尋：path does not include 路徑
- 事項描述
    - description includes 字串
    - description does not include 字串
- 最靠近標題
    - heading includes 標題
    - heading does not include 標題
- 是否重覆：is recurring, is not recurring
- 排除某個事項：excludes 清單事項
- 限制顯示事項數目：limit to 數值 tasks
- 排序：sort by (status|due|done|path|description)
- 顯示樣式隱藏 hide
    - edit button
    - backlink
    - done date
    - due date
    - recurrence rule
    - task count
- ![01|200](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/07/20/upgit_20220720_1658315166.png)
- ![01|250](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/07/20/upgit_20220720_1658316731.png)

#### 1.1.1. 練習
- 在指定之路徑檔案中列出尚未完成之 check box，最近的標題包含「保健」
````
```tasks
not done
heading includes 保健
path includes 006-DailyNote/2022-09-04_Sun.md
```
````
```tasks
not done
heading includes 保健
path includes 006-DailyNote/2022-09-04_Sun.md
```
- 在指定路徑檔案中列出沒有指定到期日且已經完成之 check box，並且隱藏編輯按鈕及檔案路徑連結
````
```tasks
done
no due date 
path includes 006-DailyNote/2022-09-04_Sun.md
hide edit button 
hide backlink
```
````
```tasks
done
no due date 
path includes 006-DailyNote/2022-09-04_Sun.md
hide edit button 
hide backlink
```

## 2. Reminder 外掛
- 可以只能到期時間
