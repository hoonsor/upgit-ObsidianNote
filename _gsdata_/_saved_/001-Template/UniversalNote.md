---
aliases: ```js quickadd
let aInput = await this.quickAddApi.inputPrompt(
"別名", "請輸入別名" , "");
return `  ${aInput} `;
```
tags: 
```js quickadd
let aInput = await this.quickAddApi.checkboxPrompt(
["子彈筆記", "日常筆記", "專案筆記", "彙總筆記", "文獻筆記"]);
const input_1 = aInput.join(", ");
return `  ${input_1} `;
```
```js quickadd
let aInput = await this.quickAddApi.checkboxPrompt(
["日常生活", "創業", "工作", "電腦軟體", "手機軟體", "休閒娛樂", "投資理財", "興趣培養"]);
const input_2 = aInput.join(", ");
return `  ${input_2} `;
```
status: {{VALUE:🌱,☀️,🌲}}
author: ```js quickadd
let bInput = await this.quickAddApi.inputPrompt(
"作者", "請輸入作者名稱" , "");
return `  ${bInput} `;
```
source: ```js quickadd
let cInput = await this.quickAddApi.inputPrompt(
"來源", "請輸入來源" , "");
return `  ${cInput} `;
```
template-output: 002-Inbox
number headings: auto, first-level 1, max 6, contents ^toc, _.1.1.
---

