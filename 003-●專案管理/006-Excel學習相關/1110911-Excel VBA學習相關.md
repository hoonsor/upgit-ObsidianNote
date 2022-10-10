---
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
obsidianUIMode: preview 
created: Sunday, September 11th 2022, 12:12:23 pm
modified: Saturday, October 8th 2022, 10:17:43 am
---
# 1110911-Excel VBA 學習相關 ^toc

- [[#1110911-Excel VBA 學習相關 ^toc|1110911-Excel VBA 學習相關]]
	- [[#1. 基本注意事項|1. 基本注意事項]]
	- [[#2. 思考邏輯|2. 思考邏輯]]
		- [[#2.1. 從大到小的思考方式，WorkSheet→Range、Selection→屬性|2.1. 從大到小的思考方式，WorkSheet→Range、Selection→屬性]]
	- [[#3. 物件類型|3. 物件類型]]
		- [[#3.1. Outlook 應用程式|3.1. Outlook 應用程式]]
			- [[#3.1.1. Outlook 郵件|3.1.1. Outlook 郵件]]
	- [[#4. 運算子|4. 運算子]]
		- [[#4.1. Mod 運算子|4.1. Mod 運算子]]
		- [[#4.2. `\` 運算子（回傳整數商數）|4.2. `\` 運算子（回傳整數商數）]]
		- [[#4.3. `/` 運算子（回傳浮點數商數）|4.3. `/` 運算子（回傳浮點數商數）]]
	- [[#5. 通用語法或函式|5. 通用語法或函式]]
		- [[#5.1. With（省略重複的物件名稱）|5.1. With（省略重複的物件名稱）]]
		- [[#5.2. Cells（Applacation 物件之屬性）|5.2. Cells（Applacation 物件之屬性）]]
		- [[#5.3. For（迴圈）|5.3. For（迴圈）]]
		- [[#5.4. For Each（迴圈）|5.4. For Each（迴圈）]]
		- [[#5.5. Replace（取代）|5.5. Replace（取代）]]
		- [[#5.6. End（Range 物件之屬性）|5.6. End（Range 物件之屬性）]]
		- [[#5.7. Row（Range 物件之屬性）|5.7. Row（Range 物件之屬性）]]
		- [[#5.8. Msgbox（提示文字視窗）|5.8. Msgbox（提示文字視窗）]]
		- [[#5.9. Select Case（判斷式為文字或數值皆可）|5.9. Select Case（判斷式為文字或數值皆可）]]
	- [[#6. Outlook 操作相關|6. Outlook 操作相關]]
		- [[#6.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）|6.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）]]
		- [[#6.2. 定義及設定郵件物件變數（MailItem）|6.2. 定義及設定郵件物件變數（MailItem）]]
		- [[#6.3. Outlook 物件有關函式|6.3. Outlook 物件有關函式]]
			- [[#6.3.1. CreateItem(olMailItem)：建立一個郵件物件|6.3.1. CreateItem(olMailItem)：建立一個郵件物件]]
			- [[#6.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件|6.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件]]
		- [[#6.4. 郵件物件有關函式|6.4. 郵件物件有關函式]]
			- [[#6.4.1. Display：將郵件顯示出來|6.4.1. Display：將郵件顯示出來]]
			- [[#6.4.2. subject：設定主旨|6.4.2. subject：設定主旨]]
			- [[#6.4.3. to：設定收件人|6.4.3. to：設定收件人]]
			- [[#6.4.4. CC：設定副本收件人|6.4.4. CC：設定副本收件人]]
			- [[#6.4.5. Attachments.Add()：新增附件|6.4.5. Attachments.Add()：新增附件]]
			- [[#6.4.6. HTMLBody：信件內容|6.4.6. HTMLBody：信件內容]]
			- [[#6.4.7. close olsave：儲存於草稿匣|6.4.7. close olsave：儲存於草稿匣]]
			- [[#6.4.8. Send：寄送郵件|6.4.8. Send：寄送郵件]]
	- [[#7. 小技巧|7. 小技巧]]

## 1. 基本注意事項
- String 使用時一定要前後加上雙引號，最近一次撰寫時發現使用 Select Case 語法沒有反應，後續 Debug 才發現是因為 String 沒加上雙引號
- 注意一下運算子運算順序，舉例來說 `12 / 3 * 2 ＝ 8`，`( 12 / 3 ) * 2 = 6`，那天在寫想記計算法定合理員額的程式時計算錯誤就是因為這樣的原因

## 2. 思考邏輯
### 2.1. 從大到小的思考方式，WorkSheet→Range、Selection→屬性

## 3. 物件類型
### 3.1. Outlook 應用程式
Dim 小信差 As Outlook.Application
#### 3.1.1. Outlook 郵件
Dim 新郵件 As MailItem

## 4. 運算子
### 4.1. Mod 運算子
%% 回傳餘數 %%
```
result = number1 Mod number2
```
number1 是被除數 number2 是除數，回傳餘數
例如，運算式 14 Mod 4，評估為 2

### 4.2. `\` 運算子（回傳整數商數）
%% 會傳回除法的整數商。 %%
例如，運算式 14 \ 4 ，評估為 3

### 4.3. `/` 運算子（回傳浮點數商數）
%% 傳回完整商數，包括餘數，以浮點數表示 %%
例如，運算式 14 / 4 ，評估為 3.5

## 5. 通用語法或函式
### 5.1. With（省略重複的物件名稱）
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
### 5.2. Cells（Applacation 物件之屬性）
%% 會傳回 **[Range](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range(object))** 物件，代表現用工作表上的所有儲存格。 如果使用中的檔不是工作表，則此屬性會失敗。%%
%% 先列後欄 %%
- Cells(3,2).value = 小美

> [!INFO]+ 資訊
> [(Excel 應用程式的 Cells 屬性) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.application.cells)

### 5.3. For（迴圈）
%% 一定要設定「等於」、「起始值」及「結束值」 %%
For 列數 = 2 to 6
	程式內容……
Next 列數

> [!INFO]+ 資訊
> [For .。。VBA) (Next 語句 | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/language/reference/user-interface-help/fornext-statement)

### 5.4. For Each（迴圈）
%% 可使用在工作表上 %%
Dim 月份 As WorkSheet

For Each 月份 in WorkSheets
	For x=3 To 月份.Range("b3").End(xlDown).Row
	...
	Next x
Next 月份

### 5.5. Replace（取代）
%% 回傳值為取代運算完成後之字串，所以記得一定要設定一個變數去接收 %%
%% Replace(「搜尋範圍」,「被取代字串」,「取代字串」) %%
- 新郵件.HTMLBody = Replace(新郵件.HTMLBody, " 教師名單 ", Cells(2, 1).Value)
- Cells(2, 3).Value = Replace(Cells(2, 3).Value, " 書法 ", " 輸法 ")

> [!INFO]+ 資訊
> [Replace 方法 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.replace)

### 5.6. End（Range 物件之屬性）
%% 回傳 Range 物件 %%
- Range("B4").End(xlUp).Select
- Range("B4").End(xlDown).Select
- Range("B4").End(xlToRight).Select
- Range("B4").End(xlToLeft).Select

> [!INFO]+ 資訊
> [Range.End 屬性 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.end)

### 5.7. Row（Range 物件之屬性）
%% 會傳回範圍中第一個區域中的第一列的列號。 唯讀的 **Long**。 %%
- 總列數 = Cells(1000, 1).End(xlUp).Row

> [!INFO]+ 資訊
> [Range.Row 屬性 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.row)

### 5.8. Msgbox（提示文字視窗）
%% 會跳出一個提示視窗並顯示自訂之文字或數值 %%
Msgbox " 對話窗訊息。"


### 5.9. Select Case（判斷式為文字或數值皆可）
%% 多重選擇執行對應程式碼之語法 %%
Dim 判斷式 As String
Select Case 判斷式
	Case " 星期一 "," 星期四 "
	…
	Case " 星期二 ", " 星期三 "
	…
	Case Else
	…
End Select

> [!INFO]+ 資訊
> [Select Case 陳述式 (VBA) | Microsoft Learn](https://learn.microsoft.com/zh-tw/office/vba/language/reference/user-interface-help/select-case-statement)

## 6. Outlook 操作相關
### 6.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）
%% 必須先引用 Outlook 的 Library %%
Dim 小信差 As Outlook.Application
Set 小信差 = New Outlook.Application

### 6.2. 定義及設定郵件物件變數（MailItem）
Dim 新郵件 As MailItem
Set 新郵件 = 小信差.CreateItem(olMailItem)

### 6.3. Outlook 物件有關函式
#### 6.3.1. CreateItem(olMailItem)：建立一個郵件物件
- 小信差.CreateItem(olMailItem)

#### 6.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件
Set 新郵件 = 小信差.CreateItemFromTemplate(``"C:\Users\hoonsor\AppData\Roaming\Microsoft\Templates\1110911- 範本.oft"``)

### 6.4. 郵件物件有關函式
#### 6.4.1. Display：將郵件顯示出來
- 新郵件.Display 
#### 6.4.2. subject：設定主旨
- 新郵件.Subject = " 課程報名成功！"
#### 6.4.3. to：設定收件人
- 新郵件.To = "hoonsor@hotmail.com"
#### 6.4.4. CC：設定副本收件人
- 新郵件.CC = "hoonsor@gmail.com"
#### 6.4.5. Attachments.Add()：新增附件
- 新郵件.Attachments.Add (``"D:\02- 學習\03-Obsidian\Hoonsor\003-●專案管理\006-Excel 學習相關\●練習範例檔\Excel 54\王小明.pdf"``)
- 新郵件.Attachments.Add Cells(2,5).value
#### 6.4.6. HTMLBody：信件內容
- 新郵件.HTMLBody = Replace(新郵件.HTMLBody, " 教師名單 ", Cells(2, 1).Value)

#### 6.4.7. close olsave：儲存於草稿匣
- 新郵件.close olSave

#### 6.4.8. Send：寄送郵件
- 新郵件.send


## 7. 小技巧

> ExcelTips:: Excel VBA 在執行時出現「編譯錯誤：使用者自訂型態尚未定義」，代表變數類型尚未定義，可能是沒有設定引用對應的 Library，至 (上方選單) 工具→設定引用項目→勾選對應變數的 Library 應該就可以解決了

> ExcelTips:: 物件一定要使用 Set 去賦值，不然會出現編譯錯誤