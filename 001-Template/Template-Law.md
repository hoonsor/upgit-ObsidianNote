
[[●高中以下人事法規彙整]]

```js quickadd
let cInput = await this.quickAddApi.inputPrompt(
"法規網址", "請輸入法規網址" , "");
cInput_1 = cInput.replace('watch?v=', 'embed/')

// 在腳本裡，換行符號和倒引號不要在字串裡使用，改用String.fromCharCode()才不會出現解析錯誤
const nl = String.fromCharCode(10);
const lq = String.fromCharCode(60);
const rq = String.fromCharCode(62);
const tq = String.fromCharCode(34);
const eq = String.fromCharCode(61);
const sl = String.fromCharCode(47);

result = lq + "iframe width" + eq + tq + "700" + tq + " height" + eq + tq + "420" + tq + " src" + eq + tq + cInput_1 + tq + " frameborder" + eq + tq + "0" + tq + " allow" + eq + tq + "accelerometer; encrypted-media; gyroscope; picture-in-picture" + tq + " allowfullscreen" + rq + lq + sl + "iframe" + rq;
 
return result;
```


