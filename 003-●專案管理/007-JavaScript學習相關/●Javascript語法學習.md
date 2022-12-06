---
obsidianUIMode: 
created: Monday, December 5th 2022, 3:32:30 pm
modified: Tuesday, December 6th 2022, 3:06:51 pm
---
# ●Javascript 語法學習

## 1. JavaScript 語法

### 1.1. 概述
- 字串使用#h/green ==單引號==包括起來
- 每行結尾需加上#h/green **分號**
### 1.2. 運算子
- 等於 ==

### 1.3. 保留字
- 空值 null
- 未定義 undefined

### 1.4. if…else…

````js
if(typeof(a) == 'undefined') {
  console.log('a 是 undefined');
}else{
  console.log('a 不是 undefined');
}
````


### 1.5. 字串取代

replace 方法用來將 [字串](https://www.fooish.com/javascript/string/) 中的字取代為另一個字。
  - 語法：
```js
str.replace(regexp|substr, newSubStr|function)
```
取代後會返回一個新的字串。
  
- 用法：
````js
  var str = 'This is Apple.'; 
  // 輸出 'This is Banana.'
  console.log(str.replace('Apple', 'Banana'));
````

第一個參數也可以使用 [正規表示式 (Regex)](https://www.fooish.com/javascript/regexp/) ：
```` js
  var re = /apples/gi;
  var str = 'Apples are round, and apples are juicy.';
  var newstr = str.replace(re, 'oranges');
  // 輸出 'oranges are round, and oranges are juicy.'
  console.log(newstr); 
````

取代的字串中，我們可以用 $1 $2 $3... 來表示匹配的群組 (capturing group)：
````js
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
// 輸出 'Smith, John'
console.log(newstr);
````

第二個參數可以是一個函數，傳入的參數如下：
````js
replacer(match, p1, p2, p3,..., offset, string)
````
> match 表示匹配的字串
> p1, p2, p3... 表示匹配的群組
> offset 為匹配的字串在原字串中的位置，從 0 算起
> string 為要被匹配的完整字串

````js
function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].join(' - ');
}
// 輸出 'abc - 12345 - #$*%'
console.log('abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer));
````

#### 1.5.1. 範例 - 取代字串內所有文字

````js
"Dog is cute. Dog is happy.".replace("Dog", "Cat");
````
會得到 "Cat is cute. Dog is happy."。

要取代所有 pattern，就只能使用 Regular Expression(用/來開頭及結尾)，再加上全域表示符 g。像上例就必須改成：
````js
"Dog is cute. Dog is happy.".replace(/Dog/g, "Cat");
````
才會是想要的結果。

## 2. QuickAdd 插件之語法


