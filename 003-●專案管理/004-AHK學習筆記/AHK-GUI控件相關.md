---
parent: [[●專案管理]]
sibling: [[002-Inbox/001-SubItem/AHK-概述]]
child: 
obsidianUIMode: preview
created: Wednesday, August 3rd 2022, 9:49:09 pm
modified: Monday, August 8th 2022, 1:52:56 pm
---


# AHK-GUI 控件相關

## 1. 架構

Gui, #h/maroon ==自訂 GUI 名稱==:New
Gui, #h/maroon ==自訂 GUI 名稱==:Add, Button, , OK
Gui, #h/maroon ==自訂 GUI 名稱==:Show
Return

#h/maroon ==自訂 GUI 名稱==ButtonOK:
Gui, #h/maroon ==自訂 GUI 名稱==:Destroy
Return


## 2. AHK Tips

> AHK_Tips:: GUI 控件結尾是 Show 之後加上 Return，如果沒加上 Return 的話，程式會繼續往下執行，而非點選按鈕後才跳轉至特定標籤或 g 標籤
