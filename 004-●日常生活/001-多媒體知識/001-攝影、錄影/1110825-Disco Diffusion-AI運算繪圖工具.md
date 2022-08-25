---
parent: 
sibling: 
child: 
aliases: 
tags: [專案筆記 , 電腦軟體, 興趣培養]
status: 🌱
author: 
source: https://www.youtube.com/watch?v=lXyl5cqsTOQ
	https://www.techbang.com/posts/96034-can-you-draw-a-world-famous-painting-by-hitting-three
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
created: Thursday, August 25th 2022, 7:33:52 pm
modified: Thursday, August 25th 2022, 10:20:36 pm
---
# 1110825-Disco Diffusion-AI 運算繪圖工具 ^toc

- [[#1110825-Disco Diffusion-AI 運算繪圖工具 ^toc|1110825-Disco Diffusion-AI 運算繪圖工具]]
	- [[#1. 基礎篇：操作步驟|1. 基礎篇：操作步驟]]
		- [[#1.1. 開啟連結並儲存副本|1.1. 開啟連結並儲存副本]]
		- [[#1.2. 設置參數|1.2. 設置參數]]
		- [[#1.3. 撰寫描述詞|1.3. 撰寫描述詞]]
		- [[#1.4. 點擊執行|1.4. 點擊執行]]
	- [[#2. 進階篇：描述詞及不同畫家畫風|2. 進階篇：描述詞及不同畫家畫風]]
		- [[#2.1. 8 個小竅門|2.1. 8 個小竅門]]
			- [[#2.1.1. 英文不好沒關係，機翻可能更對機器人的口味|2.1.1. 英文不好沒關係，機翻可能更對機器人的口味]]
			- [[#2.1.2. 不建議製作生物，尤其是人類。同理，也不建議加入常畫人物的藝術家為關鍵詞。否則你會得到一堆扭曲的肉。|2.1.2. 不建議製作生物，尤其是人類。同理，也不建議加入常畫人物的藝術家為關鍵詞。否則你會得到一堆扭曲的肉。]]
			- [[#2.1.3. 酌情加入 Unreal Engine, C4D, 3dMax, Maya, V-Ray 等關鍵詞，它們都可以讓 AI 模仿主流 3D 引擎的算繪效果。|2.1.3. 酌情加入 Unreal Engine, C4D, 3dMax, Maya, V-Ray 等關鍵詞，它們都可以讓 AI 模仿主流 3D 引擎的算繪效果。]]
			- [[#2.1.4. 加入能讓畫面更高解析的關鍵詞，比如：high detailed, detailed, 8k, intricate, elaborate 等。|2.1.4. 加入能讓畫面更高解析的關鍵詞，比如：high detailed, detailed, 8k, intricate, elaborate 等。]]
			- [[#2.1.5. 加入可以幫 AI 去掉作者本人照片的關鍵詞：[human:-2](human:-2)。|2.1.5. 加入可以幫 AI 去掉作者本人照片的關鍵詞：[human:-2](human:-2)。]]
			- [[#2.1.6. 加入可以去掉煩人景深的關鍵詞：blur:-2, depth of field:-2。|2.1.6. 加入可以去掉煩人景深的關鍵詞：blur:-2, depth of field:-2。]]
			- [[#2.1.7. 給 AI 多一點提示，用上關鍵詞組合：名畫名字 + 作者名字。|2.1.7. 給 AI 多一點提示，用上關鍵詞組合：名畫名字 + 作者名字。]]
			- [[#2.1.8. 巧用一些特殊畫風關鍵詞。|2.1.8. 巧用一些特殊畫風關鍵詞。]]
		- [[#2.2. 70 位畫家畫風比較|2.2. 70 位畫家畫風比較]]
[Disco Diffusion 入門教學，打幾個關鍵字用AI畫出世界名畫 | T客邦](https://www.techbang.com/posts/96034-can-you-draw-a-world-famous-painting-by-hitting-three)

## 1. 基礎篇：操作步驟
### 1.1. 開啟連結並儲存副本
- 使用瀏覽器開啟以下連結
https://colab.research.google.com/github/alembics/disco-diffusion/blob/main/Disco_Diffusion.ipynb
- 照著下圖操作儲存一份副本

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661427489.png)


### 1.2. 設置參數
  初次使用的話，建議大部分參數保持預設，你可以等操作熟練了再繼續摸索。到這裡，你先修改下面六個參數。首先，直接滑到【3.Settings】，修改這三個基礎參數：
  
![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661427746.png)

- batch_name：資料夾的名稱，所有產生結果都在這資料夾裡。
- steps：迭代步數，一般情況下數值越大越精細，但耗時也越長，初次使用建議保持在 250，熟練之後再考慮 500，甚至 800。
- width_height：圖片的尺寸，數值必須是 64 的倍數。初次使用非常不建議設置大尺寸，不僅更耗時，還會因為記憶體不足，導致出錯。我目前用得最多的尺寸是 [1024,512]。

  然後，到【ExtraSettings】修改這個參數：
![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661427795.png)

- intermediate_saves：儲存次數，這決定產生多少張過程圖，我一般設置為 5。

  最後，到【4.Diffuse!】裡修改這兩個參數：
![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661427939.png)

- displayrate：更新頻率，用來預覽產生結果。我一般設置 25，每 25 格刷新一次進度。
- n_batches：這個數值決定了 AI 最終產生多少張圖，由於我經常用來發社群軟體九宮格，這裡設置了 9。你也可以設置大一點的數字，讓 AI 通宵加班。

  至此，六個基本參數設置完畢。接下來，就是最重要的描述詞環節了。

### 1.3. 撰寫描述詞
  描述詞（Prompts）寫對了，DiscoDiffusion 才能輸出越接近你預期的畫作。所以，撰寫描述詞這一步非常關鍵。

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661428231.png)
  
  如果你是初次使用，我建議你先在官方示例描述詞的基礎上修改，先別著急照抄網上現成的描述詞。
  舉個例子，官方示例描述詞是「A beautiful painting of a singular lighthouse, shining its light across a tumultuous sea of blood by greg rutkowski and Thomas kinkade, Trending on artstation.」, 「yellow color scheme」,「yellowcolorscheme」

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661428275.png)
  
  簡單分析一下，你會發現這段在描述一個燈塔的畫面時，還附加了很多特殊的關鍵詞：

  - 藝術家的名稱：by greg rutkowski and Thomas kinkade
  - 畫風：Trending on artstation（知名藝術社群 Artstation 上的流行畫風）
  - 顏色主題：yellow color scheme

  這些關鍵詞都會直接影響產生結果的畫風。於是，我有樣學樣地修改了一些字眼：把「燈塔」替換成「星夜」，把「動盪的血海」改成「向日葵花海」，藝術家替換成「JamesGurney」。

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661428293.png)

  「A beautiful painting of a starry night, shining its light across a sunflower sea by James Gurney, Trending on artstation.」  
  開篇提到的向日葵花海，就是由這段描述詞產生。
  關於描述詞的更多注意事項，我會在後面的進階篇細講，這裡先把流程跑通再說。

### 1.4. 點擊執行
  你已經完成了所有配置，直接執行吧！依次點擊：程式碼執行程式→全部執行

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661428335.png)


  在程式執行過程中，會詢問你是否允許存取 Google 硬碟，點擊【連接】。然後，就等著收圖吧！
  最終產生結果以及過程圖，都會存放在 Google 硬碟的【images_out】文件夾裡：

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661428357.png)


  以上，就是使用 DiscoDiffusion 的整個流程。

## 2. 進階篇：描述詞及不同畫家畫風
### 2.1. 8 個小竅門
#### 2.1.1. 英文不好沒關係，機翻可能更對機器人的口味
#### 2.1.2. 不建議製作生物，尤其是人類。同理，也不建議加入常畫人物的藝術家為關鍵詞。否則你會得到一堆扭曲的肉。
#### 2.1.3. 酌情加入 Unreal Engine, C4D, 3dMax, Maya, V-Ray 等關鍵詞，它們都可以讓 AI 模仿主流 3D 引擎的算繪效果。

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661436849.png)
▲以上述異形情境為例，加入「Unreal Engine「前，畫面有點平，像作者的手稿

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661436856.png)
▲加入「Unreal Engine「後，我能清楚地感受到輝光、景深以及金屬光澤，這讓畫面更有電影質感

#### 2.1.4. 加入能讓畫面更高解析的關鍵詞，比如：high detailed, detailed, 8k, intricate, elaborate 等。

在產生達文西手稿時做了對比測試，能感受到明顯的精細度變化。

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661436948.png)
▲ 「animal skull sketch, by Leonardo davinci journal」

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661436967.png)
▲ 「detailed animal skull sketch, by Leonardo davinci journal」

#### 2.1.5. 加入可以幫 AI 去掉作者本人照片的關鍵詞：[human:-2](human:-2)。

有時候，AI 會把藝術家本人照片當成是藝術風格之一融入到產生圖中，尤其是一些有自畫像的作者。此時，你可以在描述詞中強行把人類權重降低。還是以達文西手稿為例：

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661436994.png)
▲ 「a time machine blueprint, by Leonardo da vinci journal」

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437016.png)
▲ 「a time machine blueprint, by Leonardo da vinci journal」, 「human:-2」

#### 2.1.6. 加入可以去掉煩人景深的關鍵詞：blur:-2, depth of field:-2。
AI 為畫面加入的景深是隨機的，有時候甚至會反噬畫面，如果你不想被隨機景深影響，也可以強行把景深的權重降低，看下面這組對比：

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437040.png)
▲「Mount Fuji, Sakura, by Phil Greenwood」

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437077.png)
▲「Mount Fuji, Sakura, by Phil Greenwood」, 「depth of field:-2」

#### 2.1.7. 給 AI 多一點提示，用上關鍵詞組合：名畫名字 + 作者名字。
比如很多非英語地區的名畫，其英文譯名都是後加的，AI 並不能很好地辨識出來，不能被準確識別的關鍵詞，也就是無效的關鍵詞。

舉例，日本的《神奈川衝浪裏》的英文名是「the Great Wave」，如果你只在描述詞中寫這個英文名，AI 可能只會幫你畫一個普通的大浪，請看下面這組對比：

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437105.png)
▲「the Great Wave, rendered in high resolution by Greg Rutkowski, trending on artstation」，不加原作者，AI 就按他的理解給我畫了一個驚濤駭浪

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437118.png)
▲「the Great Wave by Hokusai, rendered in high resolution by Greg Rutkowski, trending on artstation」，加上名畫作者葛飾北齋的名字後，AI 就能精準還原原作的一些特徵了

#### 2.1.8. 巧用一些特殊畫風關鍵詞。
Disco Diffusion 能模仿的遠不止 Artstation 上的流行藝術家，它還能畫水墨畫和異形主題畫。列舉一些用特殊畫風關鍵詞：

水墨風關鍵詞：Chinese ink painting, Chinese Shanshui
![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437152.png)
▲莫比斯風格關鍵詞：moebius, mœbius, Jean Giraud（莫比斯本名）

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437178.png)
▲異形主題關鍵詞：Alien, H. R. Giger（異形之父）

![01|700](https://raw.githubusercontent.com/hoonsor/upgit-Obsidian/main/2022/08/25/upgit_20220825_1661437197.png)


### 2.2. 70 位畫家畫風比較

> [!INFO]+ 資訊
> [Disco Diffusion 70+ Artist Studies | Weird Wonderful AI Art](https://weirdwonderfulai.art/resources/disco-diffusion-70-plus-artist-studies/)