---
aliases: port
tags: [文獻筆記, 日常生活]
status: 🌲
author: 維基百科 
source: https://zh.m.wikipedia.org/zh-tw/%E9%80%9A%E8%A8%8A%E5%9F%A0 
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
created: Thursday, July 14th 2022, 9:44:53 pm
modified: Sunday, July 31st 2022, 8:36:51 pm
---
# Port（通訊埠） ^toc

- [[#Port（通訊埠） ^toc|Port（通訊埠）]]
	- [[#1. 技術細節|1. 技術細節]]
		- [[#1.1. 儲存檔案|1.1. 儲存檔案]]
		- [[#1.2. C 語言|1.2. C 語言]]
	- [[#2. 用途|2. 用途]]
	- [[#3. 參見|3. 參見]]

  通訊埠（英語：port），又稱為連接埠、埠、協定埠（protocolport）在 [電腦網路](https://zh.m.wikipedia.org/wiki/%E9%9B%BB%E8%85%A6%E7%B6%B2%E8%B7%AF)中是一種經由軟體建立的服務，在一個電腦[作業系統](https://zh.m.wikipedia.org/wiki/%E4%BD%9C%E6%A5%AD%E7%B3%BB%E7%B5%B1)中扮演通訊的端點（endpoint）。每個通訊埠都會與主機的[IP位址](https://zh.m.wikipedia.org/wiki/IP%E4%BD%8D%E5%9D%80)及通訊協定關聯。通訊埠以16[位元](https://zh.m.wikipedia.org/wiki/%E4%BD%8D%E5%85%83) 數字來表示，這被稱為通訊埠編號（portnumber）。
  位於 [傳輸層](https://zh.m.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E5%B1%82)的通訊協定通常需要指定埠號，例如在[TCP/IP協定族](https://zh.m.wikipedia.org/wiki/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F)之下的[TCP](https://zh.m.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE)與[UDP](https://zh.m.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE)協定。在[應用層](https://zh.m.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E5%B1%82)中，使用[主從式架構](https://zh.m.wikipedia.org/wiki/%E4%B8%BB%E5%BE%9E%E5%BC%8F%E6%9E%B6%E6%A7%8B)的通訊協定，在每個通訊埠上提供[多路複用](https://zh.m.wikipedia.org/wiki/%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8)服務（multiplexingservice）。經由公認通訊埠號（well-knownportnumbers），通常可以辨認出這個連線使用的通訊協定，其中具代表性的是最基礎的1024個公認通訊埠號（well-knownportnumbers），例如[Telnet](https://zh.m.wikipedia.org/wiki/Telnet)協定預設使用23埠來連線，[SecureShell](https://zh.m.wikipedia.org/zh-tw/Secure_Shell)協定預設使用22埠，[HTTP](https://zh.m.wikipedia.org/wiki/HTTP)協定預設使用80埠，[HTTPS](https://zh.m.wikipedia.org/wiki/HTTPS) 協定預設使用 443 埠。
  
## 1. 技術細節

  傳輸層協定，如 [傳輸控制協定](https://zh.m.wikipedia.org/wiki/%E5%82%B3%E8%BC%B8%E6%8E%A7%E5%88%B6%E5%8D%94%E8%AD%B0)（TCP）與[使用者資料包協定](https://zh.m.wikipedia.org/wiki/%E4%BD%BF%E7%94%A8%E8%80%85%E8%B3%87%E6%96%99%E5%8C%85%E5%8D%94%E5%AE%9A)（UDP），在封包表頭中，定義了來源埠號與目的埠號。一個通訊埠號使用 16 位元無符號整數（unsignedinteger）來表示，其範圍介於 0 與 65535 之間。在 TCP 協定中，埠號 0 是被保留的，不可使用。1--1023 系統保留，只能由 root 使用者使用。1024---4999 由客戶端程式自由分配。5000---65535 由伺服器端程式自由分配。在 UDP 協定中，來源埠號是可以選擇要不要填上，如果設為 0，則代表沒有來源埠號。
  在作業系統中，一個 [行程](https://zh.m.wikipedia.org/wiki/%E8%A1%8C%E7%A8%8B)可以通過[網路通訊端](https://zh.m.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%A5%97%E6%8E%A5%E5%AD%97) 將它的輸入與輸出與一個特定的傳輸協定、一個通訊埠、一個 IP 位址關聯起來。這個關聯動作，稱為綁紮（binding），在這之後，就可以通過網路送出與接收資料。
  在作業系統上運行的網路軟體，可以透過作業系統，利用各個不同的通訊埠，將資料傳送到網路上；作業系統也可以根據資料封包的 IP 位址以及埠號，將這些資料封包轉送到符合的行程去。
  雖然使用同樣傳輸協定，但是特定的 IP 位址以及通訊埠的組合，只會被綁紮到單一的特定行程上。當使用同樣協定的多個程式，嘗試著綁紮在同一個 IP 位址下的相同通訊埠，就會產生一個常見的應用程式錯誤，這個錯誤有時候被稱為通訊埠衝突（portconflicts）。

### 1.1. 儲存檔案

  在 Linux 的 `/etc/services` 檔案，Windows 的 `C:\Windows\system32\drivers\etc\services` 檔案，記錄了網路服務名、埠號、協定、別名。

### 1.2. C 語言

  應用程式可以不直接使用埠號，通過函式 `getservbyname("server","tcp")` 取得埠號。如果服務想更改埠號只要更改 `/etc/services` 中的埠號就可以了，應用程式不需要做任何更改。可以通過函式 `getservbyport（htons（50），“tcp”）` 取得對應埠和規約上的服務名。

## 2. 用途
  埠號有兩種用途：

  - 標識伺服器上提供特定網路服務的行程。客戶機可以按照伺服器 IP 與埠號與相應的伺服器行程建立網路連接，獲得相應的網路服務。例如，通常使用 80 埠號提供 http 服務，使用 23 埠號 telnet 服務。伺服器的這種功能叫做 listening。客戶機通常使用動態指定的埠號與伺服器建立連接。
  - 由本機位址、本機埠號、目標機位址、目標機埠號、通訊協定組成的五元組，用於唯一確定正在使用的網路連結。因此，對於不同的協定、不同的目標機位址，本機的不同位址（如果本機使用多個網卡）等多種情形，同一個埠號可以復用。因此對於 1 對 1 通訊，且本機與目標機之間只能建立一個通訊連接，則不需要使用埠號。

  網路防火牆或者閘道器還可提供通訊埠轉發（portforwarding），即 [NAT](https://zh.m.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2)。

## 3. 參見
[TCP/UDP埠列表](https://zh.m.wikipedia.org/wiki/TCP/UDP%E7%AB%AF%E5%8F%A3%E5%88%97%E8%A1%A8)

