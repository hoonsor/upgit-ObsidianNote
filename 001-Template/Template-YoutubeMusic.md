---
tags: ```js quickadd
let aInput = await this.quickAddApi.checkboxPrompt(
["輕音樂大提琴","輕音樂鋼琴","輕音樂中國樂器","動漫歌曲","中文歌","英文歌","日文歌","韓文歌","男女合唱","男歌手團體","女歌手團體","輕鬆愉快","充滿活力","悲傷","節奏明顯","激發情緒","心靈平靜","電音搖滾","饒舌","個人風格","情歌甜蜜","情歌浪漫","情歌悲情","流行曲風"]);
const input_1 = "[" + aInput.join(", ") + "]";
return `${input_1}`;
```
---

```js quickadd
let cInput = await this.quickAddApi.inputPrompt(
"網址", "請輸入Youtube音樂網址" , "");
cInput_1 = cInput.replace('watch?v=', 'embed/')

// 在腳本裡，換行符號和倒引號不要在字串裡使用，改用String.fromCharCode()才不會出現解析錯誤
const nl = String.fromCharCode(10);
const lq = String.fromCharCode(60);
const rq = String.fromCharCode(62);
const tq = String.fromCharCode(34);
const eq = String.fromCharCode(61);
const sl = String.fromCharCode(47);

result = lq + "iframe width" + eq + tq + "700" + tq + " height" + eq + tq + "420" + tq + " src" + eq + tq + cInput_1 + tq + " frameborder" + eq + tq + "0" + tq + " allow" + eq + tq + "accelerometer; encrypted-media; gyroscope; picture-in-picture" + tq + " allowfullscreen" + rq + lq + sl + "iframe" + rq + nl + lq + "iframe width" + eq + tq + "700" + tq + " height" + eq + tq + "420" + tq + " src" + eq + tq + cInput + tq + " frameborder" + eq + tq + "0" + tq + " allow" + eq + tq + "accelerometer; encrypted-media; gyroscope; picture-in-picture" + tq + " allowfullscreen" + rq + lq + sl + "iframe" + rq ;
 
return result;
```
