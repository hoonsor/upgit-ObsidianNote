---
aliases: 
tags: [專案筆記 , 工作, 電腦軟體]
status: 🌱
author: 
source: 
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
obsidianUIMode: preview 
created: Sunday, September 11th 2022, 12:12:23 pm
modified: Friday, November 25th 2022, 8:19:13 pm
---
# 1110911-Excel VBA 學習相關 ^toc

- [[#1110911-Excel VBA 學習相關 ^toc|1110911-Excel VBA 學習相關]]
	- [[#1. 基本注意事項|1. 基本注意事項]]
		- [[#1.1. 宣告變數|1.1. 宣告變數]]
		- [[#1.2. 變數類型|1.2. 變數類型]]
			- [[#1.2.1. 動態陣列（dynamic arrays）|1.2.1. 動態陣列（dynamic arrays）]]
	- [[#2. 思考邏輯|2. 思考邏輯]]
		- [[#2.1. 從大到小的思考方式，WorkSheets（Sheets）→Range、Selection→屬性|2.1. 從大到小的思考方式，WorkSheets（Sheets）→Range、Selection→屬性]]
	- [[#3. 物件類型|3. 物件類型]]
		- [[#3.1. Excel 本身之物件類型|3.1. Excel 本身之物件類型]]
			- [[#3.1.1. WorkSheets 物件（工作表集合）|3.1.1. WorkSheets 物件（工作表集合）]]
			- [[#3.1.2. WorkSheet 物件（工作表）|3.1.2. WorkSheet 物件（工作表）]]
			- [[#3.1.3. Sheets 物件（工作表集合）|3.1.3. Sheets 物件（工作表集合）]]
			- [[#3.1.4. Range 物件|3.1.4. Range 物件]]
		- [[#3.2. Outlook 應用程式|3.2. Outlook 應用程式]]
			- [[#3.2.1. Outlook 郵件|3.2.1. Outlook 郵件]]
	- [[#4. 運算子|4. 運算子]]
		- [[#4.1. Mod 運算子（回傳餘數）|4.1. Mod 運算子（回傳餘數）]]
		- [[#4.2. `\` 運算子（回傳整數商數）|4.2. `\` 運算子（回傳整數商數）]]
		- [[#4.3. `/` 運算子（回傳浮點數商數）|4.3. `/` 運算子（回傳浮點數商數）]]
	- [[#5. 語法或函式|5. 語法或函式]]
		- [[#5.1. Msgbox（提示文字視窗）|5.1. Msgbox（提示文字視窗）]]
		- [[#5.2. InputBox（變數輸入視窗）|5.2. InputBox（變數輸入視窗）]]
		- [[#5.3. Dubug.Print（Debug 語法）|5.3. Dubug.Print（Debug 語法）]]
		- [[#5.4. With（省略重複的物件名稱）|5.4. With（省略重複的物件名稱）]]
		- [[#5.5. Cells（Applacation 物件之屬性）|5.5. Cells（Applacation 物件之屬性）]]
		- [[#5.6. Selection（選擇之範圍，回傳 Range 物件）|5.6. Selection（選擇之範圍，回傳 Range 物件）]]
		- [[#5.7. OffSet（Range 之屬性）|5.7. OffSet（Range 之屬性）]]
		- [[#5.8. For（迴圈）|5.8. For（迴圈）]]
		- [[#5.9. For Each（迴圈）|5.9. For Each（迴圈）]]
		- [[#5.10. Replace（取代）|5.10. Replace（取代）]]
		- [[#5.11. End（Range 物件之屬性）|5.11. End（Range 物件之屬性）]]
		- [[#5.12. Row（Range 物件之屬性）|5.12. Row（Range 物件之屬性）]]
		- [[#5.13. If…ElseIf…Else（條件判斷式）|5.13. If…ElseIf…Else（條件判斷式）]]
		- [[#5.14. Select Case（判斷式為文字或數值皆可）|5.14. Select Case（判斷式為文字或數值皆可）]]
		- [[#5.15. Split（分割字串）|5.15. Split（分割字串）]]
		- [[#5.16. Join（串接字串）|5.16. Join（串接字串）]]
	- [[#6. 應用|6. 應用]]
		- [[#6.1. Outlook 操作相關|6.1. Outlook 操作相關]]
			- [[#6.1.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）|6.1.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）]]
			- [[#6.1.2. 定義及設定郵件物件變數（MailItem）|6.1.2. 定義及設定郵件物件變數（MailItem）]]
			- [[#6.1.3. Outlook 物件有關函式|6.1.3. Outlook 物件有關函式]]
				- [[#6.1.3.1. CreateItem(olMailItem)：建立一個郵件物件|6.1.3.1. CreateItem(olMailItem)：建立一個郵件物件]]
				- [[#6.1.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件|6.1.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件]]
			- [[#6.1.4. 郵件物件有關函式|6.1.4. 郵件物件有關函式]]
				- [[#6.1.4.1. Display：將郵件顯示出來|6.1.4.1. Display：將郵件顯示出來]]
				- [[#6.1.4.2. subject：設定主旨|6.1.4.2. subject：設定主旨]]
				- [[#6.1.4.3. to：設定收件人|6.1.4.3. to：設定收件人]]
				- [[#6.1.4.4. CC：設定副本收件人|6.1.4.4. CC：設定副本收件人]]
				- [[#6.1.4.5. Attachments.Add()：新增附件|6.1.4.5. Attachments.Add()：新增附件]]
				- [[#6.1.4.6. HTMLBody：信件內容|6.1.4.6. HTMLBody：信件內容]]
				- [[#6.1.4.7. close olsave：儲存於草稿匣|6.1.4.7. close olsave：儲存於草稿匣]]
				- [[#6.1.4.8. Send：寄送郵件|6.1.4.8. Send：寄送郵件]]
		- [[#6.2. 查詢資料庫對應值|6.2. 查詢資料庫對應值]]
		- [[#6.3. 通訊錄更新資料欄位巨集|6.3. 通訊錄更新資料欄位巨集]]
	- [[#7. 小技巧|7. 小技巧]]

## 1. 基本注意事項
- String 使用時一定要前後加上雙引號，最近一次撰寫時發現使用 Select Case 語法沒有反應，後續 Debug 才發現是因為 String 沒加上雙引號
- 注意一下運算子運算順序，舉例來說 `12 / 3 * 2 ＝ 8`，` 12 / (3 * 2) = 2`，那天在寫想記計算法定合理員額的程式時計算錯誤就是因為這樣的原因

### 1.1. 宣告變數
#h/red **宣告變數可以將不同宣告式或變數放在同一行**，如下範例：
Dim 總列數, 獎金加總 As Integer, 月份 As Worksheet

### 1.2. 變數類型
- 如果您未指定資料類型，會依預設指派 Variant 資料類型。 也可以使用 Type 陳述式來建立 使用者定義類型。
- Variant（萬用類型，預設變數類型）
- Object
- Boolean
- Byte
- Integer
- Long
- Currency
- Single
- Double
- Date
- String （適用於可變長度變數）
- String * length （適用於固定長度字串）
#### 1.2.1. 動態陣列（dynamic arrays）
動態陣列的特點就是可以動態改變陣列的大小，在空間不足時可以擴增，而空間太大時也可以縮減，以下是動態陣列的使用方式

```` VBA
' 宣告動態陣列
Dim MyDynArr() As Integer

' 調整陣列大小
ReDim MyDynArr(3)

' 這裡的 `LBound` 與 `UBound` 是用來查詢陣列索引下限與上限的函數。
MsgBox "LBound = " & LBound(MyDynArr) _
   & ", Ubound = " & UBound(MyDynArr)
MyDynArr(3) = 123

' 當動態陣列使用完畢之後，我們可以使用 `Erase` 將系統配置給動態陣列的記憶體收回
Erase MyDynArr

````

## 2. 思考邏輯
### 2.1. 從大到小的思考方式，WorkSheets（Sheets）→Range、Selection→屬性

## 3. 物件類型
### 3.1. Excel 本身之物件類型

#### 3.1.1. WorkSheets 物件（工作表集合）
%% Worksheet 之集合 %%
- 會傳回代表指定之活頁簿中所有工作表的 **[Sheets](https://learn.microsoft.com/zh-tw/office/vba/api/excel.sheets)** 集合。 唯讀的 **Sheets** 物件。
- 例如：WorkSheets("1 月 ")、WorkSheets(2)（此為往左數來第 2 個工作表，Worksheets 索引號是從 1 開始編列）
- #h/red **常會搭配 Active 屬性使用**，例如 WorkSheets(1).Activate

#### 3.1.2. WorkSheet 物件（工作表）
- 工作表物件是 **[工作表](https://learn.microsoft.com/zh-tw/office/vba/api/excel.worksheets)** 集合的成員。 **Worksheets** 集合包含活頁簿中的所有 **Worksheet** 物件。
- 工作表物件也是 **[Sheets](https://learn.microsoft.com/zh-tw/office/vba/api/excel.sheets)** 集合的成員。 **Sheets** 集合包含活頁簿中的所有工作表（圖表與工作表都包含在內）。
- 宣告範例：Dim 月份 as Worksheet

#### 3.1.3. Sheets 物件（工作表集合）

- 指定活頁簿或使用中活頁簿中所有工作表的集合。
- Sheets 集合可包含 **[Chart](https://learn.microsoft.com/zh-tw/office/vba/api/excel.chart(object))** 或 **[Worksheet](https://learn.microsoft.com/zh-tw/office/vba/api/excel.worksheet)** 物件
```` VBA
' 使用 Add 方法可建立新的工作表，並將其新增至集合。 下列範例會在現用活頁簿中新增兩張圖表，而且會將其放在活頁簿中第二張工作表之後
Sheets.Add type:=xlChart, count:=2, after:=Sheets(2)
````

#### 3.1.4. Range 物件
例如 Range("A2")、Range("A4:B5")

### 3.2. Outlook 應用程式
Dim 小信差 As Outlook.Application
#### 3.2.1. Outlook 郵件
Dim 新郵件 As MailItem

## 4. 運算子
### 4.1. Mod 運算子（回傳餘數）
%% 回傳餘數 %%
```VB
result = number1 Mod number2
```
number1 是被除數 number2 是除數，回傳餘數
例如，運算式 14 Mod 4，評估為 2

### 4.2. `\` 運算子（回傳整數商數）
%% 會傳回除法的整數商。 %%
例如，運算式 14 `\` 4 ，評估為 3

### 4.3. `/` 運算子（回傳浮點數商數）
%% 傳回完整商數，包括餘數，以浮點數表示 %%
例如，運算式 14 `/` 4 ，評估為 3.5

## 5. 語法或函式

### 5.1. Msgbox（提示文字視窗）
%% 會跳出一個提示視窗並顯示自訂之文字或數值 %%
Msgbox " 對話窗訊息。"
#h/red **可以使用「&」符號搭配前後空格去連接不同的變數、字元或字串**
例如：MsgBox 姓名 & " 三個月份之總獎金合計為 " & 獎金加總 & " 元！"
%% 姓名在此為變數名稱 %%

### 5.2. InputBox（變數輸入視窗）
%% 跳出一個可輸入變數的視窗，變數類型不限 %%
例如：
```VB
姓名 = InputBox("請輸入員工姓名")
```

### 5.3. Dubug.Print（Debug 語法）
%% Dubug.Print 空格並加上「變數名稱」後，就可以在底下的視窗監看變數數值變化情形，是很方便的 Debug 工具 %%
例如：Debug.Print x，會在底下顯示出變數 x 變化的情形
#h/red **需要搭配「檢視→即時運算視窗」（Ctrl+G）使用**

### 5.4. With（省略重複的物件名稱）
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
### 5.5. Cells（Applacation 物件之屬性）
%% 會傳回 **[Range](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range(object))** 物件，代表現用工作表上的所有儲存格。 如果使用中的檔不是工作表，則此屬性會失敗。%%
%% 先列後欄 %%
- Cells(3,2).value = 小美

> [!INFO]+ 資訊
> [(Excel 應用程式的 Cells 屬性) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.application.cells)

### 5.6. Selection（選擇之範圍，回傳 Range 物件）
例如，Selection.value = 200，會將所有滑鼠已選取起來之儲存格範圍之儲存格數值變更成 200

### 5.7. OffSet（Range 之屬性）
%% 表示位移之屬性，先列後欄，Offset(1,3) 代表將原 Range 物件之位置再往下 1 往右 3 位移 %%
例如，Range("A1").Offset(, 3).Select、Range("A1").Offset(4).Select

#h/red **常會搭配 Select 及 Selection 使用**，例如以下範例：
```VB
Cells(3, 2).Offset(4).Select
Selection.Value = 300
```

> [!INFO]+ 資訊
> [Range.Offset 屬性 (Excel) | Microsoft Learn](https://learn.microsoft.com/zh-tw/office/vba/api/excel.range.offset)

### 5.8. For（迴圈）
%% 一定要設定「等於」、「起始值」及「結束值」 %%
```VB
For 列數 = 2 to 6
	程式內容……
Next 列數
```

> [!INFO]+ 資訊
> [For .。。VBA) (Next 語句 | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/language/reference/user-interface-help/fornext-statement)

### 5.9. For Each（迴圈）
%% 可使用在工作表集合上，讓程式在每一個工作表中運行 %%
%% 特別注意！在此是宣告為 「WorkSheet」，並非 「WorkSheets」 %%
```VB
Dim 月份 As WorkSheet 
For Each 月份 in WorkSheets
	For x=3 To 月份.Range("b3").End(xlDown).Row
	...
	Next x
Next 月份
```

```VB
Sub Add10ToAllCellsInRange()
	Dim rng As Range 
	For Each rng In Range("A1:A10") 
		rng.Value = rng.Value + 10 
	Next End 
Sub
```


> [!INFO]+ 資訊
> [使用 For Each...Next 陳述式 (VBA) | Microsoft Learn](https://learn.microsoft.com/zh-tw/office/vba/language/concepts/getting-started/using-for-eachnext-statements)

### 5.10. Replace（取代）
%% 回傳值為取代運算完成後之字串，所以記得一定要設定一個變數去接收 %%
%% Replace(「搜尋範圍」,「被取代字串」,「取代字串」) %%
- 新郵件.HTMLBody = Replace(新郵件.HTMLBody, " 教師名單 ", Cells(2, 1).Value)
- Cells(2, 3).Value = Replace(Cells(2, 3).Value, " 書法 ", " 輸法 ")

> [!INFO]+ 資訊
> [Replace 方法 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.replace)

### 5.11. End（Range 物件之屬性）
%% 回傳 Range 物件 %%
- Range("B4").End(xlUp).Select
- Range("B4").End(xlDown).Select
- Range("B4").End(xlToRight).Select
- Range("B4").End(xlToLeft).Select

> [!INFO]+ 資訊
> [Range.End 屬性 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.end)

### 5.12. Row（Range 物件之屬性）
%% 會傳回範圍中第一個區域中的第一列的列號。 唯讀的 **Long**。 %%
- 總列數 = Cells(1000, 1).End(xlUp).Row

> [!INFO]+ 資訊
> [Range.Row 屬性 (Excel) | Microsoft Docs](https://docs.microsoft.com/zh-tw/office/vba/api/excel.range.row)

### 5.13. If…ElseIf…Else（條件判斷式）
%% 常見的條件判斷式 %%
If 判斷式 Then
…
ElseIf 判斷式 Then
…
Else
…
End If

### 5.14. Select Case（判斷式為文字或數值皆可）
%% 多重選擇執行對應程式碼之語法 %%

```VB
Dim 判斷式 As String
Select Case 判斷式
	Case " 星期一 "," 星期四 "
	…
	Case " 星期二 ", " 星期三 "
	…
	Case Else
	…
End Select
```

> [!INFO]+ 資訊
> [Select Case 陳述式 (VBA) | Microsoft Learn](https://learn.microsoft.com/zh-tw/office/vba/language/reference/user-interface-help/select-case-statement)

### 5.15. Split（分割字串）

- 使用 Split 分割字串後，回傳的是結果是一個一維陣列，範例如下：
```` VBA
Dim arr As Variant
Dim ub As Integer

' 使用 Split 以空白字元分割字串
arr = Split("This is a test", " ")

' 取得陣列長度
ub = UBound(arr)

' 輸出陣列內容
For i = 0 To ub
  MsgBox (i & " = " & arr(i))
Next i
````

### 5.16. Join（串接字串）

- 若要將陣列的所有元素串接成一個字串，可以使用 `Join` 函數，以下是一個接續的範例：
```` VBA
Dim str As String

' 使用 Join 將陣列內容串接為一個字串 
str = Join(arr, " ")

MsgBox (str)
````

## 6. 應用
### 6.1. Outlook 操作相關
#### 6.1.1. 定義及設定 Outlook 應用程式變數（Outlook.Application）
%% 必須先引用 Outlook 的 Library %%
Dim 小信差 As Outlook.Application
Set 小信差 = New Outlook.Application

#### 6.1.2. 定義及設定郵件物件變數（MailItem）
Dim 新郵件 As MailItem
Set 新郵件 = 小信差.CreateItem(olMailItem)

#### 6.1.3. Outlook 物件有關函式
##### 6.1.3.1. CreateItem(olMailItem)：建立一個郵件物件
- 小信差.CreateItem(olMailItem)

##### 6.1.3.2. CreateItemFromTemplate(" 範本路徑 ")：使用範本建立一個郵件物件
Set 新郵件 = 小信差.CreateItemFromTemplate(``"C:\Users\hoonsor\AppData\Roaming\Microsoft\Templates\1110911- 範本.oft"``)

#### 6.1.4. 郵件物件有關函式
##### 6.1.4.1. Display：將郵件顯示出來
- 新郵件.Display 
##### 6.1.4.2. subject：設定主旨
- 新郵件.Subject = " 課程報名成功！"
##### 6.1.4.3. to：設定收件人
- 新郵件.To = "hoonsor@hotmail.com"
##### 6.1.4.4. CC：設定副本收件人
- 新郵件.CC = "hoonsor@gmail.com"
##### 6.1.4.5. Attachments.Add()：新增附件
- 新郵件.Attachments.Add (``"D:\02- 學習\03-Obsidian\Hoonsor\003-●專案管理\006-Excel 學習相關\●練習範例檔\Excel 54\王小明.pdf"``)
- 新郵件.Attachments.Add Cells(2,5).value
##### 6.1.4.6. HTMLBody：信件內容
- 新郵件.HTMLBody = Replace(新郵件.HTMLBody, " 教師名單 ", Cells(2, 1).Value)

##### 6.1.4.7. close olsave：儲存於草稿匣
- 新郵件.close olSave

##### 6.1.4.8. Send：寄送郵件
- 新郵件.send

### 6.2. 查詢資料庫對應值

```` VBA
Sub 查詢資料庫對應值()

    Dim V_x As Long
    Dim V_y, V_z As String
    Dim V_Duplex As Boolean

    V_x = Application.ActiveCell.Column
    '將選取儲存格之欄儲存為變數
    V_y = Cells(Application.ActiveCell.Row, 1).Value
    '將選取儲存格之最上面一格數值儲存為變數
    V_Duplex = Cells(Application.ActiveCell.Row, 15).Value = "是"
    '判斷儲存格資料是否為指定數值，並儲存成布林變數
    Selection.Copy
    Sheets("●學員資料庫").Select
    
    If V_Duplex Then
        MsgBox ("資料庫有重複學員資料，請手動處理！")
    Else
        Set xF = Cells.Find(What:=V_y, After:=ActiveCell, LookIn:=xlFormulas, LookAt:= _
            xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:=False _
            , MatchByte:=False, SearchFormat:=False)
        '將xF設為一個搜尋是否找到 V_y 變數資料結果的物件變數，以避免搜尋找不到時出現錯誤視窗
        If xF Is Nothing Then
            MsgBox "資料庫無此學員資料"
        Else
            xF.Select
            V_z = ActiveCell.Offset(, V_x - 1).Value
            ActiveCell.Offset(, V_x - 1).Select
            If V_z = "" Then V_z = "資料庫該欄位無資料"
            MsgBox (V_z)
        End If
    End If
    Sheets("●新增至學員資料庫名單-參照通用表單樣式").Select
    
End Sub
````

### 6.3. 通訊錄更新資料欄位巨集

```` VBA
Sub 欄位資料更新()

Dim 比對工作表總列數, 比對工作表總欄數 As Integer
Dim 搜尋值暫存, 取代值暫存, 比對工作表名稱, 目標工作表名稱 As String
Dim 目標工作表動態陣列() As Integer

比對工作表名稱 = "更新資料使用工作表"
目標工作表名稱 = "通訊錄"
比對工作表總列數 = Worksheets(比對工作表名稱).Range("A1").End(xlDown).Row

'確定比對工作表最左側欄位是否為「姓名」之欄位，無則無法進行下一步
Sheets(比對工作表名稱).Select
If Worksheets(比對工作表名稱).Range("A1").Value <> "姓名" Then
    MsgBox "比對工作表最左側非「姓名」欄，請檢查是否有誤！"
    '直接結束程式執行
    End
End If

'確定比對工作表是否有「更新狀態」之欄位，無則自己加上去
Sheets(比對工作表名稱).Select
If Worksheets(比對工作表名稱).Range("A1").End(xlToRight).Value <> "更新狀態" Then
    Worksheets(比對工作表名稱).Range("A1").End(xlToRight).Select
    ActiveCell.Offset(, 1).Value = "更新狀態"
End If
    
'確定動態陣列元素數量
比對工作表總欄數 = Worksheets(比對工作表名稱).Range("A1").End(xlToRight).Column
ReDim 目標工作表動態陣列(比對工作表總欄數)

'確定目標工作表均有各對應欄名
For x = 1 To 比對工作表總欄數 - 1
    Sheets(比對工作表名稱).Select
    搜尋值暫存 = Cells(1, x)
    Sheets(目標工作表名稱).Select
    Set 搜尋結果 = Cells.Find(What:=搜尋值暫存, After:=ActiveCell, LookIn:=xlFormulas, LookAt:= _
        xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:=False _
        , MatchByte:=False, SearchFormat:=False)
    If 搜尋結果 Is Nothing Then
        MsgBox "目標工作表無「" & 搜尋值暫存 & "」此欄名，請確認欄名是否輸入有誤！"
        '直接結束程式執行
        End
    Else
        搜尋結果.Select
        目標工作表動態陣列(x - 1) = ActiveCell.Column
    End If
Next x

'搜尋並更新資料
For x = 2 To 比對工作表總列數
    Sheets(比對工作表名稱).Select
    搜尋值暫存 = Cells(x, 1).Value
    For y = 2 To 比對工作表總欄數 - 1
        取代值暫存 = Cells(x, y).Value
        Sheets(目標工作表名稱).Select
        Set 搜尋結果 = Cells.Find(What:=搜尋值暫存, After:=ActiveCell, LookIn:=xlFormulas, LookAt:= _
            xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:=False _
            , MatchByte:=False, SearchFormat:=False)
        If 搜尋結果 Is Nothing Then
            Sheets(比對工作表名稱).Select
            Cells(x, 比對工作表總欄數).Value = "查無姓名"
        Else
            搜尋結果.Select
            '取代值暫存為「不更新資料」的話就不更新該欄位資料
            If 取代值暫存 <> "不更新資料" Then
                ActiveCell.Offset(, 目標工作表動態陣列(y - 1) - 目標工作表動態陣列(0)).Value = 取代值暫存
                Sheets(比對工作表名稱).Select
                Cells(x, 比對工作表總欄數).Value = "已更新"
            End If
        End If
    Next y
Next x

End Sub
````

## 7. 小技巧

> ExcelTips:: Excel VBA 在執行時出現「編譯錯誤：使用者自訂型態尚未定義」，代表變數類型尚未定義，可能是沒有設定引用對應的 Library，至 (上方選單) 工具→設定引用項目→勾選對應變數的 Library 應該就可以解決了

> ExcelTips:: 物件一定要使用 Set 去賦值，不然會出現編譯錯誤

> ExcelTips:: 如果想要避免變數未宣告造成日後程式撰寫錯誤，可在「工具→選項→（勾選）要求變數宣告」此處設定即可