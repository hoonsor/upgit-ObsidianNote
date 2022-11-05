---
obsidianUIMode: 
created: Saturday, October 29th 2022, 9:45:59 am
modified: Saturday, October 29th 2022, 9:47:23 am
---
# AHK 雜程式碼暫存


## 1. 嘗試將自訂右鍵選單以陣列方式撰寫

```AutoHotKey
;注意！AHK的陣列是從1開始計數！

;   外層序號陣列
aSerial_Outer := ["1","2","3","4"]
;   外層項目陣列
aItem_Outer := ["筆記","常用","Obsi","WordP"]

;============================================
;   內層序號陣列
aSerial_Inner_1:= ["1","2","3"]
;   內層項目陣列
aItem_Inner_1 := ["發芽","生長","長青"]
;   內層項目對應指令
aCommand_1 := ["Send 🌱","Send ☀️","Send 🌲"]
;============================================

;============================================
;   內層序號陣列
aSerial_Inner_2 := ["1","2","3","4","5","6","7","8","9","0"]
;   內層項目陣列
aItem_Inner_2 := ["●日常","●興趣","●投資","●工具","●Think","●Obsidian","●AHK","●VBA","●寫作","●各類"]
;   內層項目對應指令
aCommand_2 := ["Run P:\001-日常生活相關\●心智圖集合\●日常生活.xmind","Run P:\001-日常生活相關\●心智圖集合\●興趣、自我成長相關.xmind","Run P:\001-日常生活相關\●心智圖集合\●投資理財相關.xmind","Run P:\001-日常生活相關\●心智圖集合\●常用工具軟體.xmind","Run P:\001-日常生活相關\●心智圖集合\●Thinkorswim軟體設定.xmind","Run P:\001-日常生活相關\●心智圖集合\●Obsidian.xmind","Run P:\001-日常生活相關\●心智圖集合\●AHK心智圖.xmind","Run P:\001-日常生活相關\●心智圖集合\●VBA心智圖.xmind","Run P:\001-日常生活相關\●心智圖集合\●寫作原理.xmind","Run P:\001-日常生活相關\●心智圖集合\●各類終身會員、資源相關.xmind"]
;============================================

;============================================
;   內層序號陣列
aSerial_Inner_3 := ["1","2","3","4"]
;   內層項目陣列
aItem_Inner_3 := ["Obsidian","advanced","子彈筆記","專案管理"]
;   內層項目對應指令
aCommand_3 := ["run D:\02-學習\03-Obsidian\Hoonsor", "run C:\Program Files\Notepad++\notepad++.exe D:\02-學習\03-Obsidian\Hoonsor\JavaScripts腳本\advanced_uri.js", "run obsidian://advanced-uri?filepath=●子彈筆記", "run obsidian://advanced-uri?filepath=●專案管理"]
;============================================

;============================================
;   內層序號陣列
aSerial_Inner_4 := ["1"]
;   內層項目陣列
aItem_Inner_4 := ["WordPress"]
;   內層項目對應指令
aCommand_4 := ["run http://localhost/hoonsor_offline/wp-admin/"]
;============================================
/*
;============================================
;   內層序號陣列
aSerial_Inner_5 := ["1","2","3"]
;   內層項目陣列
aItem_Inner_5 := ["測試期","今天期","明天期"]
;   內層項目對應指令
aCommand_5 := ["Send 🌱","Send ☀️","Send 🌲"]
;============================================

*/



;   LabelSave文字檔路徑
vLabelSave := "C:\Users\hoonsor\Desktop\LabelSave.txt"
vWordTemp := "C:\Users\hoonsor\Desktop\WordTemp.txt"



;   將內層Label指令寫入文字檔，之後再複製到程式碼下方




vTempNum := 1
Loop,% aSerial_Outer.Length(){

    vSerialInner := % "aSerial_Inner_" vTempNum
    vItemInner := % "aItem_Inner_" vTempNum
    vCommand := % "aCommand_" vTempNum

;    msgbox % %vSerialInner%.Length()    ; OK!!!


    Loop,% %vSerialInner%.Length(){
        vLabel := % %vSerialInner%[A_Index] "_" %vItemInner%[A_Index]
        FileAppend, % vLabel ":" Chr(10) Chr(9) %vCommand%[A_Index] Chr(10) "return" Chr(10), %vLabelSave% , UTF-16
    }
    vTempNum := vTempNum + 1
}





;   打開Label指令文字檔
;run %vLabelSave%


FileAppend, % "Loop,1{" Chr(10) Chr(10) "CoordMode, Menu, Screen" Chr(10) "CoordMode, Mouse, Screen" Chr(10)  Chr(10) "Loop,% aSerial_Outer.Length(){" Chr(10) Chr(9) "Menu,MyMenu_1,Add, % aSerial_Outer[A_Index]" Chr(32) Chr(34) Chr(32) Chr(34) Chr(32) "aItem_Outer[A_Index], % aSerial_Outer[A_Index]" Chr(32) Chr(34) Chr(95) Chr(34) Chr(32) "aItem_Outer[A_Index]" Chr(10) "}" Chr(10) "MouseGetPos,MX,MY" Chr(10) "Menu,MyMenu_1,Show,% MX,% MY" Chr(10) "Menu,MyMenu_1,DeleteAll" Chr(10) "return" Chr(10) Chr(10), %vWordTemp% , UTF-16

Loop,% aSerial_Outer.Length(){
    FileAppend, % aSerial_Outer[A_index] "_" aItem_Outer[A_index] ":" Chr(10) Chr(10), %vWordTemp% , UTF-16
    FileAppend, % Chr(9) "Loop,1{" Chr(10) Chr(10)  Chr(9) "CoordMode, Menu, Screen" Chr(10)  Chr(9) "CoordMode, Mouse, Screen" Chr(10)  Chr(10) "Loop,% aSerial_Inner_" A_index ".Length(){" Chr(10) Chr(9) "Menu,MyMenu_1_" Chr(10) A_index ",Add" , %vWordTemp% , UTF-16

    Loop, 
    FileAppend, % aSerial_Outer[A_index] "_" aItem_Outer[A_index] ":" Chr(10) Chr(10), %vWordTemp% , UTF-16
}

run %vWordTemp%

/*

Loop,1{
CoordMode, Menu, Screen
CoordMode, Mouse, Screen

Loop,% aSerial_Outer.Length(){
    Menu,MyMenu_1,Add, % aSerial_Outer[A_Index] " " aItem_Outer[A_Index], % aSerial_Outer[A_Index] "_" aItem_Outer[A_Index]
}

MouseGetPos,MX,MY
Menu,MyMenu_1,Show,% MX,% MY
Menu,MyMenu_1,DeleteAll
return


;   ↓↓↓ 外層Label放置處 ↓↓↓
1_筆記:
;   ↑↑↑ 外層Label放置處 ↑↑↑
    Loop,1{
    CoordMode, Menu, Screen
    CoordMode, Mouse, Screen

;   注意！本部分程式碼還是需要手動更改，aSerial_Inner 下一層的索引為本層數字加1！例如本層aSerial_Inner[1]，下一層就是aSerial_Inner[2]
    Loop,% aSerial_Inner.Length(){
        Menu,% "MyMenu_1" "_" aSerial_Inner[1],Add, % aSerial_Inner[A_Index] " " aItem_Inner[A_Index], % aSerial_Inner[A_Index] "_" aItem_Inner[A_Index]
    }
    
    MouseGetPos,MX,MY
    Menu,MyMenu_1_1,Show,% MX,% MY
    Menu,MyMenu_1_1,DeleteAll
    return

;   ↓↓↓ 內層Label及指令放置處 ↓↓↓
    1_測試期:
        Send 🌱
    return
    2_今天期:
        Send ☀️
    return
    3_明天期:
        Send 🌲
    return
;   ↑↑↑ 內層Label及指令放置處 ↑↑↑

    }
return



}

*/
return
```
