---
obsidianUIMode: preview 
created: Friday, July 29th 2022, 9:29:27 pm
modified: Friday, December 9th 2022, 12:12:48 pm
---
[[●專案管理]]
[[1110721-MAMP教學（在電腦安裝離線版伺服器及WordPress）]]
[[WordPress學習及筆記]]
# CSS 的概念及學習

## 1. 開啟 WordPress CSS 的設定
在開始使用 CSS 之前，先來說明在網頁中指定 CSS 格式的方法。對於 WordPress 來説，如果要對於整體網頁做設定，可以在網站的控制台開啟 CSS 的編輯功能，許多佈景主題會提供相關的功能，但是有些沒有。不過，大部份的網站都會安裝 Jetpack 外掛，新版的 Jetpack 外掛本身就有一個設定可以開啟，開啟之後就可以在網站中加上自行設定的 CSS 格式，這些設定可以影響到整個網站。在啟用了 Jetpack 之後，可以在設定的地方找 到此項目，如圖所示。
![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/07/29/upgit_20220729_1659101550.png)

## 2. CSS 設定碼生效之方法

### 2.1. 以 `<link>` 標記引入

其一是以外部檔案的方式存檔，先把上述的內容以.css 的檔案名稱存在網站主機上（在此例為 my.css），然後在 HTML 檔案中使用 `<link>` 標記引入，如下所示：

```css
<link rel=stylesheet type="text/css" href="my.css">
```

此種方式一定要確定檔案 my.css 可以在網站中存取得到才行，這是適合於要設定很多 CSS 內容的時候使用，而在 WordPress 網站中，習慣上都是以 style.css 來當做是網站的整體 CSS 設定。

### 2.2. 使用 `<style>` 標記

第二種方式則是使用 `<style>` 標記，把上述的 CSS 碼直接放在 HTML 檔案中，一般而言都是放在檔案的最前面，如下所示：

```css
<style type="text/css">
	h1, h2, h3, h4, h5 ,h6, p {
		font-family:微軟正黑體;
	}
</style>
```
這是作者最常用來設定網頁中文字型的方法，把 h1~h6 以及 p 的標記的第一優先字型都設定為微軟正黑體，只要灣覽器的電腦中有此字型就會採用，讓畫面更加地美觀一些。

### 2.3. 行內設定

第三種方法則是在 HTML 的同一行中設定專門屬於單一特定 HTML 標記的格式設定（行內設定），如下所示：

```css
<p style="font-family:微軟正黑體;font-size:12pt;line-height:200%;"></p>
```

上面這一段格式的設定只有針對此設定的標記（以此例為 `<p>`）有效，出了 `</p>` 之後就沒有效果了。但是，因為它是屬於最內層的設定，因此享有較高的優先權，也就是説，如果同時有上述三種方式針對同一個標記的同一個屬性值進行設定，則以最接近（也就是行內設定）所設定的值為準。





## 3. CSS 之語法
### 3.1. 一般用法

#### 3.1.1. 逗號分隔選擇器
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

#### 3.1.2. 空白分隔選擇器
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

#### 3.1.3. `>` 符號分隔選擇器（後代選擇器）
 #h/red **當我們把空格改成 `>` 符號時，此種紀錄方式稱為後代選擇器，需「完全符合」我們選擇器的路徑才會將設定套用**，範例如下：
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

### 3.2. Class 及 id 額外指定格式之用法
- 僅針對特定類別或特定 id 去設定格式之用法：
```CSS
#id {
	background-color: red;
}

.class{
	background-color: gray;
}

```

### 3.3. 註解語法
```css
<style type="text/css">  
　// 這是單行註解  
　// 這是單行註解  
 
　/*  
　這是多行註解  
　這是多行註解  
　*/  
</style>
```


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


## 5. CSS 常用的單位
### 5.1. px
像素（絕對單位）
### 5.2. em
-  #h/red **em 是一個有趣的單位，它會受到文字大小的設定而變化**。無論把它作為設定邊界大小的單位·還是當作調整文字大小，它依舊會按照文字大小而變化。
- 在 em 的習慣裡，是會找上最近的文字大小設定，來決定自身的價值，若找不到，則會去找尋 HTML 的設定，最後就會到瀏覽器的預先設定，也就是 16px。
- 所以假若每層的文字大小，都是使用 "font-size:1.2em;"，每層就會按照上一層的設定再乘以 1.2 倍·所以就會出現了漸大的效果。
-  #h/green **em 在一些情况下其實也是不錯使用的單位，特別在能夠同時支援手機、電腦、平板的網頁上，我們會稱為響應式網站（RWD）**，這確實是不錯的選擇。只需要簡單地利用 px，設定好字體在不同螢幕大小下的差别，其他部分例如邊界、圖片大小等假若撰用了 em，也就會跟隨著去變動，無需要額外再另行設定，省下了不少設定的時間。
- !!!col
	- 1
	  範例：
		```css
			<div style="font-size:1.2em;">1.2em
				<div style="font-size:1.2em;">1.2em
					<div style="font-size:1.2em;">1.2em
						<div style="font-size:1.2em;">1.2em
							<div style="font-size:1.2em;">1.2em</div>
						</div>
					</div>
				</div>
			</div>
		 ```
	- 1
	   ![01|500](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/12/08/upgit_20221208_1670489349.png)
### 5.3. rem
- 和 em 相比，多了個 r 字，r 在這裡又有著 root 的意思， #h/red **root 可以理解成 rem 的想法，是較 em 為根深蒂固，不容易受到其他設定所影響。也因為這樣的特性，這個單位和 em 不同，就只會受到 HTML 部份的設定影響。**
- 在以往經常使用 rem，這是由於在那時候的瀏覽器，只能夠透過調整瀏覽器的文字大小設定，來做到改變，現在這個部分，還能夠調整，以 Google Chrome 為例，位置會設定頁面裡的外觀→字形大小。
- 而由於 rem 是會先參考瀏覽器的設定，再決定自身該有的大小。所以 rem 也就成了當時最好的單位。 #h/green **但隨著時代的改變，瀏覽器已經可以透過簡單的縮放，來調節大小，而舊瀏覽器，也隨著時間而幾乎完全替代，所以 rem 也就沒太大使用的必要了。**
- !!!col
	- 1
	  範例：
		```css
			<div style="font-size:1.2rem;">1.2rem
				<div style="font-size:1.2rem;">1.2rem
					<div style=" font-size:1.2rem;">1.2rem
						<diVstyle="font-siZe:1.2rem;">1.2rem
							<div style="font-size:1.2rem；">1.2rem</div>
						</div >
					</div>
				</div>
			</div>
		```
	- 1
	  ![01|500](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/12/08/upgit_20221208_1670489979.png)
### 5.4. %
-  #h/red **% 則是另一個常出現的單位，它較為簡單，就只會跟從上一個的大小，而去改變。** 例如上一個的 div 為 100px 寬，身為 40% 的它，就會佔上當中的 40%，所以也就會是 40px。
- 假若上一個並沒有設定任何大小，假設後者設定了 50%，那它也會跟隨著設定為 50%，直到找到實際數值， #h/red **當來到最外圍的時候，由於 % 再沒有任何依靠，它會按照螢幕來判斷大小，例如設定了 50%，就會為螢幕的 50%。**
-  #h/red **假若是字體大小呢？那就會和 em 有著相同的計算方法，例如現在是 200%，也就會是 32px。**換句話説，假若每層都使用% 的話，我們也會呈現出相同的效果。
- 來自於開發者工具的計算樣式，在這裡我們可以簡單地，查看到目前想查看的目標，大小、邊界等資訊，中間的部份就是目標的大小。

- !!!col
	- 1
	  ```css
			<div clasS="myDiv">
				<div>
					<p>This is Some text in a div element.</p>
				</div>
			</div>
			
			div {
			width：50%；
			}
		```
	- 1
	  ![01|500](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/12/08/upgit_20221208_1670490673.png)

### 5.5. vw 和 vh
-  #h/red **這兩個和% 極為相似，但差别在於 vw 和 vh，只會按照螢幕來判斷大小，而不會受上一個項目影響，但注意的是還是會受限於上一個方格的大小決定是否顯示出超出方格部分之內容。**
- 例如上一個 div 為 50%，這裡設定了寬度為 70w，我們會看到這裡預設狀況不會受到方格的限制，仍然能夠讓寬度調整為 70%，這是因為在 CSS 裡，有一個設定名為 overflow，預設的是 visible：代表會見到超出方格的部分，但假若我們在第一個 div 裡加入了編碼 overflow：hidden；則會隱藏掉超出的部分。
-  #h/red **vw 和 vh 同樣地合適放在文字上，而它的大小同樣地會按照螢幕大小而改變，設定為 20vw，文字大小就會為畫面寬度的 20%，設定為 vh 則會按照畫面高度來改變。**
- 除了適用於文字外， #h/green **vw 和也有著另一個特點，也就是它會將螢幕滑動下方或旁邊部分列入計算，所以實際上來説，vw 和 vh 會較% 的大一點。假若希望取消這樣的設定，可以透過 max-width：100%；來讓大小改變成和% 的一樣。**
-  #h/white ==另外 vh 比較常搭配 min-height 使用，以避免方塊被強制剪裁==

- !!!col
	- 1
		```CSS
			<div class="div1">
				<h2>div1</h2>
					<div class="div 2"
						<h2>div2</h2>
					</div>
			</div>
			
			.div1 {
				border: 2px outset black;
				width: 50%;
				text-align: center;
				overflow: hidden;
			}
			
			.div2 {
				border: outset black;
				border-width: 2px 2px 1px 0px;
				text-align: center;
				width: 80vw
			}
			
		```
	- 1
	  ![01|500](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/12/08/upgit_20221208_1670491973.png)





## 6. 瀏覽器協助工具
### 6.1. 開啟瀏覽器中開發者工具的計算樣式

-  #h/red **在瀏覽器中按下 F12，然後頁面標籤選擇最左邊的「元素」，接下來在下方視窗選擇頁面標籤「計算樣式」，有關資訊就會呈現在底下頁面中**，例如選擇文字，你還能夠查看，文字大小、字體、文字顏色等。
- ![01|1000](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/12/08/upgit_20221208_1670491353.png)

### 6.2. 插件或外掛
#### 6.2.1. Whatfont 插件
- WhatFont 是一個在 Chrome 瀏覽器和 Safari 瀏覽器中，都能夠安装的外掛，我們能夠透過這個外掛，無須透過開發者工具，也能簡單地查看網頁使用的字體等資料。
- 下載後，開啟它，然後只需要讓滑鼠移動到文字上，就會顯示那個文字使用了的字體，這對於網頁製作及要參考別人使用的字體來説極為方便。
- 輕按一下，左鍵也能查看更多資料，例如 family：字體、stye：需不需要斜體等、weight：字體粗細、size：字體大小、line height：行與行之間的距離、color：顏色。

![01|300](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/12/08/upgit_20221208_1670506737.png)

#### 6.2.2. ColorSnapper 2 插件
- 查看並複製網站使用的顏色編碼
#### 6.2.3. PickEyedropper 插件
- 查看並複製網站使用的顏色編碼

## 7. WordPress 中一些關於 CSS 相關注意事項
- WordPress 中較少會提供 vw 來設定寬度，相對上更多的會出現在設定文字的大小上。相較而言，設定高度時能夠免去這個問題，所以我們還是可以透過 vh 來設定高度。但實際情況下，設定的多數為最小高度：min-height，這樣及使螢幕高度少於方塊，也不會強制剪裁，會以完整顯示作為目標。


## 8. CSS 的一些屬性紀錄

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

### 8.1. 語法區分
#### 8.1.1. div
##### 8.1.1.1. 框體相關
###### 8.1.1.1.1. overflow
- `overflow: visible;`， #h/red **預設，內容超出框體仍會顯示**
- `overflow: hidden;`，內容超出框體部分隱藏不顯示
### 8.2. 功能區分
#### 8.2.1. 文字相關
##### 8.2.1.1. 文字字型
- `font-family: "Sofia", sans-serif;`， #h/red **前者為指定字體，後者為取締字體（請選擇電腦本身就有的字體）**，前者代表如果有安裝此種字體優先顯示，如未安裝前者字體則顯示後者作為替代。
##### 8.2.1.2. 文字顏色
- `color: blue`，文字顏色， #h/red **可使用英文單字、rgb、rgba、hex…等，放在 body、div 中使用**
- `color: rgb(100,200,100);`
- `color: rgba(255,99,71,1);`，最後一碼為透明度，1 是不透明、0 是完全透明，數字越接近 0 越透明
- `color: hex#000000;`
##### 8.2.1.3. 文字大小
- `font-size: 20px`，字體大小
##### 8.2.1.4. 文字粗細
- `font-weight: 500`，字體粗細，100-900， #h/red **400 會是正常的粗細程度**，數字越大越粗
###### 8.2.1.4.1. bolder 與 lighter
- !!!col
	- 1
	  - bolder 與 lighter 的比較，並不是按照文字本身正常的粗細作比較，而是和上一層使用的文字粗細度作比較，而他們會使用的粗細設定，實際上也就只有 100、400、700、900 這四個。
	- 1
	  ![01|600](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/12/08/upgit_20221208_1670507596.png)
	- 1
	  ```css
		#parent { font-weight: 500; }
		//第一層的粗細度設定為500
		#parent > .bolder { font-weight: bolder; }
		//按照上述表格，bolder的設定就會是700，lighter的設定就會是100
		#parent > .1ighter { font-weight: lighter; }
		```

##### 8.2.1.5. 文字位置
- `text-align: left`，文字位置、置左、置中、置右


## 9. 練習撰寫 CSS 語法之網站
- 可以線上練習撰寫 CSS
> [!INFO]+ 資訊
> [W3Schools Online Web Tutorials](https://www.w3schools.com/)
## 10. 心得或技巧

> CSS_Tips:: 如果想要在螢幕尺寸小於方塊時仍不會出現強制剪裁，則可以設定該方塊的最小高度，並且搭配 vh 來設定，這樣即使螢幕高度少於方塊，也不會出現強制剪裁情形

> CSS_Tips:: 如果想要讓字體隨著使用者的畫面大小去變更，可以將字體的單位設定成 vw 或 vh，因為這兩個單位會隨著畫面的大小改變，但必須注意 vw 或 vh 會將捲軸寬度或高度一併列入計算

