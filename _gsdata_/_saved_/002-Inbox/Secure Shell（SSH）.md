---
aliases:   SSH 
tags: 
  文獻筆記 
  日常生活 
status: 🌲
author:   維基百科 
source:   Secure Shell 
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
created: Thursday, July 14th 2022, 9:56:15 pm
modified: Thursday, July 14th 2022, 10:03:14 pm
---
# Secure Shell（SSH） ^toc

- [[#Secure Shell（SSH） ^toc|Secure Shell（SSH）]]
	- [[#1. 概述|1. 概述]]
	- [[#2. 金鑰管理|2. 金鑰管理]]
	- [[#3. 應用|3. 應用]]
	- [[#4. 歷史|4. 歷史]]
		- [[#4.1. 1.x 版本|4.1. 1.x 版本]]
		- [[#4.2. OpenSSH 和 OSSH|4.2. OpenSSH 和 OSSH]]
		- [[#4.3. 2.x 版本|4.3. 2.x 版本]]
		- [[#4.4. 1.99 版|4.4. 1.99 版]]
	- [[#5. 基本架構|5. 基本架構]]
	- [[#6. SSH 的安全驗證|6. SSH 的安全驗證]]
	- [[#7. SSH 協定的可延伸性|7. SSH 協定的可延伸性]]

  SecureShell（安全外殼協定，簡稱 SSH）是一種加密的 [網路傳輸協定](https://zh.m.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)，可在不安全的網路中為網路服務提供安全的傳輸環境[(1)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-rfc4251-1)。SSH通過在網路中建立[安全隧道](https://zh.m.wikipedia.org/w/index.php?title=%E5%AE%89%E5%85%A8%E9%9A%A7%E9%81%93&action=edit&redlink=1)（英語：securechannel）來實現SSH客戶端與伺服器之間的連接[(2)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-rfc4252-2)。SSH最常見的用途是遠端登入系統，人們通常利用SSH來傳輸[命令列介面](https://zh.m.wikipedia.org/wiki/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2)和遠端執行命令。SSH使用頻率最高的場合是[類Unix系統](https://zh.m.wikipedia.org/wiki/%E7%B1%BBUnix%E7%B3%BB%E7%BB%9F)，但是[Windows](https://zh.m.wikipedia.org/wiki/Windows)作業系統也能有限度地使用SSH。2015年，微軟宣布將在未來的作業系統中提供原生SSH協定支援[(3)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-3)，[Windows](https://zh.m.wikipedia.org/wiki/Windows)101803版本已提供[OpenSSH](https://zh.m.wikipedia.org/wiki/OpenSSH)工具[(4)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-4)。
  在設計上，SSH 是 [Telnet](https://zh.m.wikipedia.org/wiki/Telnet)和非安全[shell](https://zh.m.wikipedia.org/wiki/Unix_shell)的替代品。Telnet和Berkeley[rlogin](https://zh.m.wikipedia.org/w/index.php?title=Rlogin&action=edit&redlink=1)（英語：rlogin）、[rsh](https://zh.m.wikipedia.org/wiki/%E8%BF%9C%E7%A8%8B%E5%A4%96%E5%A3%B3)、[rexec](https://zh.m.wikipedia.org/w/index.php?title=Rexec&action=edit&redlink=1)（英語：RemoteProcessExecution）等協定採用[明文](https://zh.m.wikipedia.org/wiki/%E6%98%8E%E6%96%87)傳輸，使用不可靠的密碼，容易遭到監聽、[嗅探](https://zh.m.wikipedia.org/wiki/%E6%95%B8%E6%93%9A%E5%8C%85%E5%88%86%E6%9E%90%E5%99%A8)和[中間人攻擊](https://zh.m.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)[(5)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-5)。SSH旨在保證非安全網路環境（例如[網際網路](https://zh.m.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91)）中資訊加密完整可靠。
  不過，SSH 也被指出有被嗅探甚至解密的漏洞。早在 2011 年，[中國的網際網路審查機構](https://zh.m.wikipedia.org/wiki/%E4%B8%AD%E8%8F%AF%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9C%8B%E7%B6%B2%E7%B5%A1%E5%AF%A9%E6%9F%A5)已經有能力針對SSH連線的刺探及干擾。[(6)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-6)[(7)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-7)而後[愛德華·史諾登](https://zh.m.wikipedia.org/wiki/%E7%88%B1%E5%BE%B7%E5%8D%8E%C2%B7%E6%96%AF%E8%AF%BA%E7%99%BB)泄露的檔案也指出，[美國國家安全局](https://zh.m.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E5%B1%80)有時能夠把SSH協定傳輸的資訊解密出來，從而讀出SSH對談的傳輸內容[(8)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-Spiegel2014-8)。2017年7月6日，非營利組織[維基解密](https://zh.m.wikipedia.org/wiki/%E7%B6%AD%E5%9F%BA%E8%A7%A3%E5%AF%86)確認[美國中央情報局](https://zh.m.wikipedia.org/wiki/%E7%BE%8E%E5%9B%BD%E4%B8%AD%E5%A4%AE%E6%83%85%E6%8A%A5%E5%B1%80)已經開發出能夠在[Windows](https://zh.m.wikipedia.org/wiki/Microsoft_Windows)或[Linux](https://zh.m.wikipedia.org/wiki/Linux)作業系統中竊取SSH對談的工具。[(9)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-9)
  
## 1. 概述

  SSH 以 [非對稱加密](https://zh.m.wikipedia.org/wiki/%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86)實現[身分驗證](https://zh.m.wikipedia.org/wiki/%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81)[(2)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-rfc4252-2)。身分驗證有多種途徑，例如其中一種方法是使用自動生成的公鑰 - 私鑰對來簡單地加密網路連接，隨後使用密碼認證進行登入；另一種方法是人工生成一對公鑰和私鑰，通過生成的金鑰進行認證，這樣就可以在不輸入密碼的情況下登入。任何人都可以自行生成金鑰。公鑰需要放在待存取的電腦之中，而對應的私鑰需要由使用者自行保管。認證過程基於生成出來的私鑰，但整個認證過程中私鑰本身不會傳輸到網路中。
  SSH 協定有兩個主要版本，分別是 SSH-1 和 SSH-2。無論是哪個版本，核實未知金鑰來源都是重要的事情，因為 SSH 只驗證提供使用者是否擁有與公鑰相匹配的私鑰，只要接受公鑰而且金鑰匹配伺服器就會授予許可。這樣的話，一旦接受了惡意攻擊者的公鑰，那麼系統也會把攻擊者視為合法使用者。

## 2. 金鑰管理

  在 [類Unix系統](https://zh.m.wikipedia.org/wiki/%E7%B1%BBUnix%E7%B3%BB%E7%BB%9F)中，已許可登入的公鑰通常儲存在使用者/home目錄的~/.ssh/authorized_keys檔案中[(10)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-10)，該檔案只由 SSH 使用。當遠端機器持有公鑰，而本地持有對應私鑰時，登入過程不再需要手動輸入密碼。另外為了額外的安全性，私鑰本身也能用密碼保護。
  私鑰會儲存在固定位置，也可以通過命令列參數指定（例如 ssh 命令的「-i」選項）。[ssh-keygen](https://zh.m.wikipedia.org/wiki/Ssh-keygen) 是生成金鑰的工具之一。
  SSH 也支援基於密碼的身分驗證，此時金鑰是自動生成的。若客戶端和伺服器端從未進行過身分驗證，SSH 未記錄伺服器端所使用的金鑰，那麼攻擊者可以模仿伺服器端請求並取得密碼，即 [中間人攻擊](https://zh.m.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)。但是密碼認證可以禁用，而且 SSH 客戶端在發現新金鑰或未知伺服器時會向使用者發出警告。

## 3. 應用

  SSH 的經典用途是 [登入](https://zh.m.wikipedia.org/wiki/%E7%99%BB%E5%85%A5)到遠端電腦中執行命令。除此之外，SSH也支援[隧道協定](https://zh.m.wikipedia.org/wiki/%E9%9A%A7%E9%81%93%E5%8D%8F%E8%AE%AE)、[埠對映](https://zh.m.wikipedia.org/wiki/%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84)和[X11](https://zh.m.wikipedia.org/wiki/X_Window%E7%B3%BB%E7%B5%B1)連接。藉助[SFTP](https://zh.m.wikipedia.org/wiki/SSH%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)或[SCP](https://zh.m.wikipedia.org/wiki/%E5%AE%89%E5%85%A8%E5%A4%8D%E5%88%B6)協定，SSH還可以傳輸檔案[(2)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-rfc4252-2)。
  SSH 使用 [客戶端-伺服器](https://zh.m.wikipedia.org/wiki/%E4%B8%BB%E5%BE%9E%E5%BC%8F%E6%9E%B6%E6%A7%8B)模型，[標準埠](https://zh.m.wikipedia.org/wiki/TCP/UDP%E7%AB%AF%E5%8F%A3%E5%88%97%E8%A1%A8)為22[(11)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-11)。伺服器端需要開啟SSH[守護行程](https://zh.m.wikipedia.org/wiki/%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B) 以便接受遠端的連接，而使用者需要使用 SSH 客戶端與其建立連接。
  大多數現代作業系統（包括 [macOS](https://zh.m.wikipedia.org/wiki/MacOS)、大部分[Linux](https://zh.m.wikipedia.org/wiki/Linux)、[OpenBSD](https://zh.m.wikipedia.org/wiki/OpenBSD)、[FreeBSD](https://zh.m.wikipedia.org/wiki/FreeBSD)、[Solaris](https://zh.m.wikipedia.org/wiki/Solaris)等系統）都提供了SSH，包括Windows系統也提供SSH程式（在Windows101809版本之後）。在軟體層次，許多關於SSH的[專有軟體](https://zh.m.wikipedia.org/wiki/%E4%B8%93%E6%9C%89%E8%BD%AF%E4%BB%B6)、[免費軟體](https://zh.m.wikipedia.org/wiki/%E5%85%8D%E8%B2%BB%E8%BB%9F%E9%AB%94)和[開源軟體](https://zh.m.wikipedia.org/wiki/%E5%BC%80%E6%BA%90%E8%BD%AF%E4%BB%B6) 被研發出來，如：

  檔案管理軟體（同步、複製、刪除等）。如：[PuTTY](https://zh.m.wikipedia.org/wiki/PuTTY)和Windows下的[WinSCP](https://zh.m.wikipedia.org/wiki/WinSCP)、類Unix系統下的Konqueror等。[SSH客戶端](https://zh.m.wikipedia.org/wiki/SSH%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%AF%94%E8%BE%83)。

  從 [雲端運算](https://zh.m.wikipedia.org/wiki/%E4%BA%91%E8%AE%A1%E7%AE%97)的角度上講，SSH能夠阻止一些因直接暴露在網際網路而產生的安全問題，在解決連接問題上發揮了重要作用。SSH隧道可以在網際網路、[防火牆](https://zh.m.wikipedia.org/wiki/%E9%98%B2%E7%81%AB%E5%A2%99)和[虛擬機器](https://zh.m.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E6%9C%BA)之間提供一個安全的通道[(12)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-12)。

## 4. 歷史

### 4.1. 1.x 版本

  芬蘭 [赫爾辛基理工大學](https://zh.m.wikipedia.org/wiki/%E8%B5%AB%E5%B0%94%E8%BE%9B%E5%9F%BA%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6)的[塔圖·于勒寧](https://zh.m.wikipedia.org/wiki/%E5%A1%94%E5%9B%BE%C2%B7%E4%BA%8E%E5%8B%92%E5%AE%81)發現自己學校存在嗅探密碼的網路攻擊，便於1995年編寫了一套保護資訊傳輸的程式，並稱其為「secureshell」，簡稱SSH[(13)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-13)，設計目標是取代先前的[rlogin](https://zh.m.wikipedia.org/w/index.php?title=Rlogin&action=edit&redlink=1)（英語：rlogin）、[Telnet](https://zh.m.wikipedia.org/wiki/Telnet)、[FTP](https://zh.m.wikipedia.org/wiki/FTP)[(14)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-14)和[rsh](https://zh.m.wikipedia.org/wiki/%E8%BF%9C%E7%A8%8B%E5%A4%96%E5%A3%B3)等安全性不足的協定。1995年7月，于勒寧以[免費軟體](https://zh.m.wikipedia.org/wiki/%E5%85%8D%E8%B2%BB%E8%BB%9F%E9%AB%94) 的形式將其發布。程式很快流行起來，截至 1995 年底，SSH 的使用者數已經達到兩萬，遍布五十個國家。
  1995 年 12 月，于勒寧創立了 SSH 通信安全公司來繼續開發和銷售 SSH。SSH 的早期版本用到了很多 [自由軟體](https://zh.m.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6)，例如[GNUlibgmp](https://zh.m.wikipedia.org/wiki/GNU%E5%A4%9A%E9%87%8D%E7%B2%BE%E5%BA%A6%E8%BF%90%E7%AE%97%E5%BA%93)，但後來由SSH公司發布的版本逐漸變成了[專有軟體](https://zh.m.wikipedia.org/wiki/%E4%B8%93%E6%9C%89%E8%BD%AF%E4%BB%B6)。
  截至 2000 年，已經有兩百萬使用者使用 SSH。[(15)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-Nicholas_Rosasco_and_David_Larochelle-15)

### 4.2. OpenSSH 和 OSSH

  1999 年，開發者們希望使用自由版本的 SSH，於是重新使用較舊的 1.2.12 版本，這也是最後一個採用 [開放原始碼](https://zh.m.wikipedia.org/wiki/%E5%BC%80%E6%94%BE%E6%BA%90%E4%BB%A3%E7%A0%81)許可的版本。隨後瑞典程式設計師BjörnGrönvall基於這個版本開發了OSSH。不久之後，[OpenBSD](https://zh.m.wikipedia.org/wiki/OpenBSD)的開發者又在Grönvall版本的基礎上進行了大量修改，形成了[OpenSSH](https://zh.m.wikipedia.org/wiki/OpenSSH)，並於OpenBSD2.6一起發行。從該版本開始，OpenSSH又逐漸移植到了其他作業系統上面。[(16)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-16)
  截至 2005 年，OpenSSH 是唯一一種最流行的 SSH 實現，而且成為了大量作業系統的預設組件，而 OSSH 已經過時 [(17)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-17)。OpenSSH 仍在維護，而且已經支援 SSH-2 協定。從 7.6 版開始，OpenSSH 不再支援 SSH-1 協定。

### 4.3. 2.x 版本

  2006 年，SSH-2 協定成為了新的標準。與 SSH-1 相比，SSH-2 進行了一系列功能改進並增強了安全性，例如基於 [迪菲-赫爾曼密鑰交換](https://zh.m.wikipedia.org/wiki/%E8%BF%AA%E8%8F%B2-%E8%B5%AB%E7%88%BE%E6%9B%BC%E5%AF%86%E9%91%B0%E4%BA%A4%E6%8F%9B)的加密和基於[訊息鑑別碼](https://zh.m.wikipedia.org/wiki/%E8%A8%8A%E6%81%AF%E9%91%91%E5%88%A5%E7%A2%BC)的完整性檢查。SSH-2還支援通過單個SSH連接任意數量的shell對談。SSH-2協定與SSH-1不相容，由於更加流行，一些實現（例如[lsh](https://zh.m.wikipedia.org/wiki/Lsh)和[Dropbear](https://zh.m.wikipedia.org/wiki/Dropbear)）只支援 SSH-2 協定。

### 4.4. 1.99 版

  RFC4253 規定支援 2.0 及以前版本 SSH 的 SSH 伺服器應將其原始版本標為「1.99」[(18)](https://zh.m.wikipedia.org/zh-tw/Secure_Shell#cite_note-18)。「1.99」並不是實際的軟體版本號，而是為了表示[向下相容](https://zh.m.wikipedia.org/wiki/%E5%90%91%E4%B8%8B%E5%85%BC%E5%AE%B9)。

## 5. 基本架構

  SSH 協定框架中最主要的部分是三個協定：

  傳輸層協定（TheTransportLayerProtocol）：傳輸層協定提供 [伺服器](https://zh.m.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8) 認證，資料機密性，資訊完整性等的支援。
  使用者認證協定（TheUserAuthenticationProtocol）：使用者認證協定為伺服器提供客戶端的身分鑑別。
  連接協定

  同時還有為許多高層的網路安全應用協定提供擴充的支援。
  各種高層應用協定可以相對地獨立於 SSH 基本體系之外，並依靠這個基本框架，通過連接協定使用 SSH 的安全機制。

## 6. SSH 的安全驗證

  在客戶端來看，SSH 提供兩種級別的安全驗證。

  第一種級別（基於密碼的安全驗證），知道帳號和密碼，就可以登入到遠端主機，並且所有傳輸的資料都會被 SSH 傳輸層協定加密。但是，可能會有別的伺服器在冒充真正的伺服器，但只要客戶端校驗主機公鑰，在伺服器私鑰不泄露的前提下就能避免被「中間人」攻擊。
  第二種級別（基於 [金鑰](https://zh.m.wikipedia.org/wiki/%E5%85%AC%E5%BC%80%E5%AF%86%E9%92%A5%E5%8A%A0%E5%AF%86) 的安全驗證），需要依靠金鑰，也就是你必須為自己建立一對金鑰，並把公鑰放在需要存取的伺服器上。客戶端軟體會向伺服器發出請求，請求用你的私鑰進行安全驗證並行送使用私鑰對對談 ID 等資訊的簽章。伺服器收到請求之後，先在你在該伺服器的使用者根目錄下尋找你的公鑰，然後把它和你傳送過來的公鑰進行比較，並用公鑰檢驗簽章是否正確。如果兩個金鑰一致，且簽章正確，伺服器就認為使用者登入成功。

  在伺服器端來看，SSH 也提供安全驗證。

  伺服器將自己的公鑰分發給相關的客戶端，並將金鑰交換過程中的公開資訊與協商金鑰的雜湊值的簽章傳送給客戶端，客戶端將取得的伺服器公鑰計算指紋並與其他安全信道獲得的公鑰指紋相比對並驗證主機簽章。
  存在一個金鑰認證中心，所有提供服務的主機都將自己的公鑰提交給認證中心，公鑰認證中心給伺服器端頒發憑證，而任何作為客戶端的主機則只要儲存一份認證中心的公鑰就可以了。在這種模式下，伺服器會傳送認證中心提供給主機的憑證與主機對金鑰交換過程中公開資訊的簽章。客戶端只需要驗證憑證的有效性並驗證簽章。

## 7. SSH 協定的可延伸性

  SSH 協定框架中設計了大量可延伸項，比如使用者自訂演算法、客戶自訂金鑰規則、高層擴充功能性應用協定。這些擴充大多遵循 [IANA](https://zh.m.wikipedia.org/wiki/IANA) 的有關規定，特別是在重要的部分，像命名規則和訊息編碼方面。