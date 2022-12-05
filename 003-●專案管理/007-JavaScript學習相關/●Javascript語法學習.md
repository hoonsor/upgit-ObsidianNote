---
obsidianUIMode: 
created: Monday, December 5th 2022, 3:32:30 pm
modified: Monday, December 5th 2022, 3:32:56 pm
---
# ●Javascript 語法學習

-   [String replace() 字串取代 - JavaScript (JS) 教學 Tutorial](https://www.fooish.com/javascript/string/replace.html) #[[Roam-Highlights]]

  replace 方法用來將  [字串](https://www.fooish.com/javascript/string/)  中的字取代為另一個字。
  - 語法：
```js
str.replace(regexp|substr, newSubStr|function)
```

-   取代後會返回一個新的字串。
-   用法：
-   var` str = `'This is Apple.'`; `
-   // 輸出 'This is Banana.'
-   console`.log(str.replace(`'Apple'`, `'Banana'`)); `
-   第一個參數也可以使用
-   [正規表示式 (Regex)](https://www.fooish.com/javascript/regexp/)
-   ：
-   var` re = `
-   /apples/gi`; `
-   var` str = `'Apples are round, and apples are juicy.'`; `
-   var` newstr = str.replace(re, `'oranges'`); `
-   // 輸出 'oranges are round, and oranges are juicy.'
-   console`.log(newstr); `
-   取代的字串中，我們可以用 $1 $2 $3... 來表示匹配的群組 (capturing group)：
-   var` re = `
-   /(\w+)\s(\w+)/`; `
-   var` str = `'John Smith'`; `
-   var` newstr = str.replace(re, `'$2, $1'`); `
-   // 輸出 'Smith, John'
-   console`.log(newstr); `
-   第二個參數可以是一個函數，傳入的參數如下：
-   `replacer(match, p1, p2, p3,..., offset, `
-   string`) `

-   match 表示匹配的字串
-   p1, p2, p3... 表示匹配的群組
-   offset 為匹配的字串在原字串中的位置，從 0 算起
-   string 為要被匹配的完整字串

-   function
-   replacer
-   (
-   match, p1, p2, p3, offset, string
-   ) `{ `
-   return` [p1, p2, p3].join(`' - '`); } `
-   // 輸出 'abc - 12345 - `#`$*%'
-   console`.log(`'abc12345`#`$*%'`.replace(`
-   /([^\d]*)(\d*)([^\w]*)/`, replacer));`
## 1. JavaScript語法

### 1.1. 字串取代



## 2. QuickAdd插件之語法


