---
obsidianUIMode: 
parent: 
sibling: 
child: 
aliases: 
tags: [專案筆記 , 工作, 電腦軟體]
status: 🌱
author: 
source: 
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
created: Sunday, September 11th 2022, 12:12:23 pm
modified: Tuesday, October 4th 2022, 9:09:04 pm
---
# 1110911-Excel VBA 學習相關 ^toc

- [[#1110911-Excel VBA 學習相關 ^toc|1110911-Excel VBA 學習相關]]
	- [[#1. 基本注意事項|1. 基本注意事項]]
	- [[#2. 思考邏輯|2. 思考邏輯]]
		- [[#2.1. 從大到小的思考方式，WorkSheet→Range、Selection→屬性|2.1. 從大到小的思考方式，WorkSheet→Range、Selection→屬性]]
	- [[#3. 物件類型|3. 物件類型]]
		- [[#3.1. Outlook 應用程式|3.1. Outlook 應用程式]]
			- [[#3.1.1. Outlook 郵件|3.1.1. Outlook 郵件]]
	- [[#4. 通用語法或函式|4. 通用語法或函式]]
		- [[#4.1. With（省略重複的物件名稱）|4.1. With（省略重複的物件名稱）]]
		- [[#4.2. Cells（Applacation 物件之屬性）|4.2. Cells（Applacation 物件之屬性）]]
		- [[#4.3. For（迴圈）|4.3. For（迴圈）]]
		- [[#4.4. For Each（迴圈）|4.4. For Each（迴圈）]]
		- [[#4.5. Replace（取代）|4.5. Replace（取代）]]
		- [[#4.6. End（Range 物件之屬性）|4.6. End（Range 物件之屬性）]]
		- [[#4.7. Row（Range 物件之屬性）|4.7. Row（Range 物件之屬性）]]
		- [[#4.8. Msgbox（提示文字視窗）|4.8. Msgbox（提示文字視窗）]]
	- [[#5. Outlook 操作相關|5. Outlook 操作相關]]
		- [[#5.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）|5.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）]]
		- [[#5.2. 定義及設定郵件物件變數（MailItem）|5.2. 定義及設定郵件物件變數（MailItem）]]
		- [[#5.3. Outlook 物件有關函式|5.3. Outlook 物件有關函式]]
			- [[#5.3.1. CreateItem(olMailItem)：建立一個郵件物件|5.3.1. CreateItem(olMailItem)：建立一個郵件物件]]
			- [[#5.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件|5.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件]]
		- [[#5.4. 郵件物件有關函式|5.4. 郵件物件有關函式]]
			- [[#5.4.1. Display：將郵件顯示出來|5.4.1. Display：將郵件顯示出來]]
			- [[#5.4.2. subject：設定主旨|5.4.2. subject：設定主旨]]
			- [[#5.4.3. to：設定收件人|5.4.3. to：設定收件人]]
			- [[#5.4.4. CC：設定副本收件人|5.4.4. CC：設定副本收件人]]
			- [[#5.4.5. Attachments.Add()：新增附件|5.4.5. Attachments.Add()：新增附件]]
			- [[#5.4.6. HTMLBody：信件內容|5.4.6. HTMLBody：信件內容]]
			- [[#5.4.7. close olsave：儲存於草稿匣|5.4.7. close olsave：儲存於草稿匣]]
			- [[#5.4.8. Send：寄送郵件|5.4.8. Send：寄送郵件]]
	- [[#6. 小技巧|6. 小技巧]]

## 1. 基本注意事項
- String 使用時一定要前後加上雙引號

## 2. 思考邏輯
### 2.1. 從大到小的思考方式，WorkSheet→Range、Selection→屬性

## 3. 物件類型
### 3.1. Outlook 應用程式
Dim 小信差 As Outlook.Application
#### 3.1.1. Outlook 郵件
Dim 新郵件 As MailItem

## 4. 通用語法或函式
### 4.1. With（省略重複的物件名稱）
- !!!col
	- 1
		#### 加上 With 前
		新郵件.To = "hoonsor@hotmail.com"
		新郵件.CC = "hoonsor@gmail.com"
		新郵件.Subject = " 課程報名成功！"
		新郵件.Display
	- 1
		#### 加上 With 後
		With 新郵件
			.To = "hoonsor@hotmail.com"
			.CC = "hoonsor@gmail.com"
			.Subject = " 課程報名成功！"
			.Display
		End With
	- 5
### 4.2. Cells（Applacation 物件之屬性）
%% 會傳回 **[Range](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range(object))** 物件，代表現用工作表上的所有儲存格。 如果使用中的檔不是工作表，則此屬性會失敗。%%
%% 先列後欄 %%
- Cells(3,2).value = 小美

> [!INFO]+ 資訊
> [(Excel 應用程式的 Cells 屬性) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.application.cells)

### 4.3. For（迴圈）
%% 一定要設定「等於」、「起始值」及「結束值」 %%
For 列數 = 2 to 6
	程式內容……
Next 列數

> [!INFO]+ 資訊
> [For .。。VBA) (Next 語句 | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/language/reference/user-interface-help/fornext-statement)

### 4.4. For Each（迴圈）
%% 可使用在工作表上 %%
Dim 月份 As WorkSheet

For Each 月份 in WorkSheets
	For x=3 To 月份.Range("b3").End(xlDown).Row
	...
	Next x
Next 月份

### 4.5. Replace（取代）
%% 回傳值為取代運算完成後之字串，所以記得一定要設定一個變數去接收 %%
%% Replace(「搜尋範圍」,「被取代字串」,「取代字串」) %%
- 新郵件.HTMLBody = Replace(新郵件.HTMLBody, " 教師名單 ", Cells(2, 1).Value)
- Cells(2, 3).Value = Replace(Cells(2, 3).Value, " 書法 ", " 輸法 ")

> [!INFO]+ 資訊
> [Replace 方法 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.replace)

### 4.6. End（Range 物件之屬性）
%% 回傳 Range 物件 %%
- Range("B4").End(xlUp).Select
- Range("B4").End(xlDown).Select
- Range("B4").End(xlToRight).Select
- Range("B4").End(xlToLeft).Select

> [!INFO]+ 資訊
> [Range.End 屬性 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.end)

### 4.7. Row（Range 物件之屬性）
%% 會傳回範圍中第一個區域中的第一列的列號。 唯讀的 **Long**。 %%
- 總列數 = Cells(1000, 1).End(xlUp).Row

> [!INFO]+ 資訊
> [Range.Row 屬性 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.row)

### 4.8. Msgbox（提示文字視窗）
%% 會跳出一個提示視窗並顯示自訂之文字或數值 %%
Msgbox " 對話窗訊息。"


## 5. Outlook 操作相關
### 5.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）
%% 必須先引用 Outlook 的 Library %%
Dim 小信差 As Outlook.Application
Set 小信差 = New Outlook.Application

### 5.2. 定義及設定郵件物件變數（MailItem）
Dim 新郵件 As MailItem
Set 新郵件 = 小信差.CreateItem(olMailItem)

### 5.3. Outlook 物件有關函式
#### 5.3.1. CreateItem(olMailItem)：建立一個郵件物件
- 小信差.CreateItem(olMailItem)

#### 5.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件
Set 新郵件 = 小信差.CreateItemFromTemplate(``"C:\Users\hoonsor\AppData\Roaming\Microsoft\Templates\1110911- 範本.oft"``)

### 5.4. 郵件物件有關函式
#### 5.4.1. Display：將郵件顯示出來
- 新郵件.Display 
#### 5.4.2. subject：設定主旨
- 新郵件.Subject = " 課程報名成功！"
#### 5.4.3. to：設定收件人
- 新郵件.To = "hoonsor@hotmail.com"
#### 5.4.4. CC：設定副本收件人
- 新郵件.CC = "hoonsor@gmail.com"
#### 5.4.5. Attachments.Add()：新增附件
- 新郵件.Attachments.Add (``"D:\02- 學習\03-Obsidian\Hoonsor\003-●專案管理\006-Excel 學習相關\●練習範例檔\Excel 54\王小明.pdf"``)
- 新郵件.Attachments.Add Cells(2,5).value
#### 5.4.6. HTMLBody：信件內容
- 新郵件.HTMLBody = Replace(新郵件.HTMLBody, " 教師名單 ", Cells(2, 1).Value)

#### 5.4.7. close olsave：儲存於草稿匣
- 新郵件.close olSave

#### 5.4.8. Send：寄送郵件
- 新郵件.send


## 6. 小技巧

> ExcelTips:: Excel VBA 在執行時出現「編譯錯誤：使用者自訂型態尚未定義」，代表變數類型尚未定義，可能是沒有設定引用對應的 Library，至 (上方選單) 工具→設定引用項目→勾選對應變數的 Library 應該就可以解決了

> ExcelTips:: 物件一定要使用 Set 去賦值，不然會出現編譯錯誤