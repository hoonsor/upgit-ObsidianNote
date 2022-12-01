---
tags: ```js quickadd
let aInput = await this.quickAddApi.checkboxPrompt(
["子彈筆記", "日常筆記", "專案筆記", "彙總筆記", "文獻筆記"]);
const input_1 = "[" + aInput.join(", ");
return `${input_1}`;
```
source: ```js quickadd
let cInput = await this.quickAddApi.inputPrompt(
"來源", "請輸入來源" , "");
return `${cInput}`;
```
---

