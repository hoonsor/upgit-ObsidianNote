---
obsidianUIMode: preview 
created: Friday, July 29th 2022, 9:29:27 pm
modified: Thursday, December 8th 2022, 4:24:22 pm
---
[[●專案管理]]
[[1110721-MAMP教學（在電腦安裝離線版伺服器及WordPress）]]
[[WordPress學習及筆記]]
# CSS 的概念及學習 ^toc

- [[#CSS 的概念及學習 ^toc|CSS 的概念及學習]]
	- [[#1. 開啟 WordPress CSS 的設定|1. 開啟 WordPress CSS 的設定]]
	- [[#2. CSS 之語法|2. CSS 之語法]]
		- [[#2.1. 一般用法|2.1. 一般用法]]
			- [[#2.1.1. 逗號分隔選擇器|2.1.1. 逗號分隔選擇器]]
			- [[#2.1.2. 空白分隔選擇器|2.1.2. 空白分隔選擇器]]
			- [[#2.1.3. `>` 符號分隔選擇器（後代選擇器）|2.1.3. `>` 符號分隔選擇器（後代選擇器）]]
		- [[#2.2. Class 及 id 額外指定格式之用法|2.2. Class 及 id 額外指定格式之用法]]
	- [[#3. CSS 設定碼生效之方法|3. CSS 設定碼生效之方法]]
		- [[#3.1. 以 `<link>` 標記引入|3.1. 以 `<link>` 標記引入]]
		- [[#3.2. 使用 `<style>` 標記|3.2. 使用 `<style>` 標記]]
		- [[#3.3. 行內設定|3.3. 行內設定]]
	- [[#4. CSS 權重|4. CSS 權重]]
		- [[#4.1. !important 語法|4.1. !important 語法]]
	- [[#5. CSS常用的單位|5. CSS常用的單位]]
	- [[#6. WordPress 中一些關於 CSS 相關注意事項|6. WordPress 中一些關於 CSS 相關注意事項]]
	- [[#7. CSS 的一些屬性紀錄|7. CSS 的一些屬性紀錄]]
	- [[#8. 練習撰寫 CSS 語法之網站|8. 練習撰寫 CSS 語法之網站]]
	- [[#9. 有關外掛|9. 有關外掛]]
		- [[#9.1. 查看顏色之瀏覽器外掛|9.1. 查看顏色之瀏覽器外掛]]



## 1. 開啟 WordPress CSS 的設定
在開始使用 CSS 之前，先來說明在網頁中指定 CSS 格式的方法。對於 WordPress 來説，如果要對於整體網頁做設定，可以在網站的控制台開啟 CSS 的編輯功能，許多佈景主題會提供相關的功能，但是有些沒有。不過，大部份的網站都會安裝 Jetpack 外掛，新版的 Jetpack 外掛本身就有一個設定可以開啟，開啟之後就可以在網站中加上自行設定的 CSS 格式，這些設定可以影響到整個網站。在啟用了 Jetpack 之後，可以在設定的地方找 到此項目，如圖所示。
![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/07/29/upgit_20220729_1659101550.png)

## 2. CSS 之語法
### 2.1. 一般用法

#### 2.1.1. 逗號分隔選擇器
除非你做的是整體網頁的設定，不然的話每一個 CSS 片段一定要依附在一個標記、id 或 class 之下，此點我們在圖 2-1 中有一個簡單的介紹。標準的的 CSS 語法格式如下：

```css
tag1, tag2, ..., tagn {
	attribute 1: value;
	attribute 2: value;
	...
	attribute n: value;
}
```

#h/red **在最前方（tag）是以要設定的標記名稱為起始（也稱為選擇器 selector）**，如果有超過一個以上的標記則使用逗號間隔依序列出，接著再以大括號來包含所有要做的設定，每一個設定列（其實所有的設定也可以放在同一列中）以要設定的屬性開始，用冒號間隔，最後再以分號做結尾。

#### 2.1.2. 空白分隔選擇器
如果我們將前個範例分隔選擇器之逗號改成空格，像是下面這個樣子：

```css
tag1 tag2 {
	attribute 1: value;
	attribute 2: value;
	...
	attribute n: value;
}
```
則 #h/red **表示 tag2 是 tag1 裡面的標記（或是選擇器 selector），然後我們要設定的屬性值是在 tag1 裡面的「所有的 tag2」 所屬的內容之格式設定，而不是同時把 tag1 以及 tag2 設定成同樣一組屬性值。**

#### 2.1.3. `>` 符號分隔選擇器（後代選擇器）
當我們把空格改成 `>` 符號時，此種紀錄方式稱為後代選擇器，需「完全符合」我們選擇器的路徑才會將設定套用，範例如下：
```CSS
div>span {
	background-color: rgb(4,170,109);
	color: white;
}

<div>
<span>旅程</span>
<span>重生</span>
<p> 最後的旅程<span>永別</span></p>
</div>

```
上述範例中，「旅程」及「重生」均會套用我們設定之格式，但「永別」的路徑為「div>span>p>span」，所以不會套用我們設定的格式；惟如果使用空白取代 `>` 符號的話，則「永別」也會套用。

### 2.2. Class 及 id 額外指定格式之用法

```CSS
#id {
	background-color: red;
}

.class{
	background-color: gray;
}

```

## 3. CSS 設定碼生效之方法

### 3.1. 以 `<link>` 標記引入

其一是以外部檔案的方式存檔，先把上述的內容以.css 的檔案名稱存在網站主機上（在此例為 my.css），然後在 HTML 檔案中使用 `<link>` 標記引入，如下所示：

```css
<link rel=stylesheet type="text/css" href="my.css">
```

此種方式一定要確定檔案 my.css 可以在網站中存取得到才行，這是適合於要設定很多 CSS 內容的時候使用，而在 WordPress 網站中，習慣上都是以 style.css 來當做是網站的整體 CSS 設定。

### 3.2. 使用 `<style>` 標記

第二種方式則是使用 `<style>` 標記，把上述的 CSS 碼直接放在 HTML 檔案中，一般而言都是放在檔案的最前面，如下所示：

```css
<style type="text/css">
	h1, h2, h3, h4, h5 ,h6, p {
		font-family:微軟正黑體;
	}
</style>
```
這是作者最常用來設定網頁中文字型的方法，把 h1~h6 以及 p 的標記的第一優先字型都設定為微軟正黑體，只要灣覽器的電腦中有此字型就會採用，讓畫面更加地美觀一些。

### 3.3. 行內設定

第三種方法則是在 HTML 的同一行中設定專門屬於單一特定 HTML 標記的格式設定（行內設定），如下所示：

```css
<p style="font-family:微軟正黑體;font-size:12pt;line-height:200%;"></p>
```

上面這一段格式的設定只有針對此設定的標記（以此例為 `<p>`）有效，出了 `</p>` 之後就沒有效果了。但是，因為它是屬於最內層的設定，因此享有較高的優先權，也就是説，如果同時有上述三種方式針對同一個標記的同一個屬性值進行設定，則以最接近（也就是行內設定）所設定的值為準。


## 4. CSS 權重
- 越特定越重要
	- 優先順序：Inline > id > class > element 
- 版本越新越重要
	- 程式碼在越後方的版本越新
- #h/red **!important** 真的很重要

### 4.1. !important 語法
- !important，注意這部分需要加入在編碼的最後，但放在「;」前，如下範例：
```css
p {
	background-color： rgb（45,142，255）!important;
	color:white;
}
```


## 5. CSS常用的單位

## 6. WordPress 中一些關於 CSS 相關注意事項
- WordPress 中較少會提供 vw 來設定寬度，相對上更多的會出現在設定文字的大小上。相較而言，設定高度時能夠免去這個問題，所以我們還是可以透過 vh 來設定高度。但實際情況下，設定的多數為最小高度：min-height，這樣及使螢幕高度少於方塊，也不會強制剪裁，會以完整顯示作為目標。


## 7. CSS 的一些屬性紀錄

- ID：「#ID 名稱」，例如#ID
- 類別：「.類別名稱」，例如.div
- border：外框粗細、顏色、線條樣式
- border-width：外框線條粗細相關
- width：寬度
- color：顏色，可使用顏色英文單字、hex、hsl、rgb、rgba 之方式設定。rgba 最後一個參數數值介於 0-1 之間，1 是不透明，數字越小透明度越高
- #h/maroon ==文字相關==
	- font-size：字體大小
	- font-weight：字體粗細，100-900，數字越大越粗
	- text-align：文字位置、置左、置中、置右
- #h/maroon ==長度寬度相關==
	- min-height：最小高度
	- min-width：最小寬度


## 8. 練習撰寫 CSS 語法之網站
- 可以線上練習撰寫 CSS
> [!INFO]+ 資訊
> [W3Schools Online Web Tutorials](https://www.w3schools.com/)

## 9. 有關外掛
### 9.1. 查看顏色之瀏覽器外掛
- ColorSnapper 2
- PickEyedropper
