
# 本日筆記
<%*
function getWeek() {
var d = new Date();
var n = d.getDay();
return n;
}
let week = getWeek();
if (week == 1 || week == 3 || week == 5 || week == 0) {
%>
<%* } %>
## 1. 已完成之事項：
```tasks
	done <% tp.date.now() %>
	path includes 006-DailyNote
	hide edit button 
	hide backlink
```

## 2. 尚未完成之事項
```tasks
	not done
	no due date
	path includes 006-DailyNote/<% tp.date.now("YYYY-MM-DD_ddd") %>.md
	hide edit button 
	hide backlink
```

## 3. 其他記事

## 4. 筆記複習
### 4.1. 興趣、學習
- [ ] [[●投資理財及創業待辦事項]]
- [ ] [[1110721-MAMP教學（在電腦安裝離線版伺服器及WordPress）]]
- [ ] [[WordPress學習及筆記]]
- [ ] [[1110906-Obsidian快捷鍵]]
- [ ] [[1110911-Excel快速合併寄送郵件]]
- [ ] [[1110911-Excel VBA學習相關]]
- [ ] [[1111010-電路板維修（三用電表操作使用）新手教學]]

### 4.2. 健康知識
- [ ] [[1110717-能量運動指南]]

### 4.3. 日常生活
- [ ] 記帳(@<% tp.date.now() %> 20:40)
- [ ] [[●日常生活紀錄]]（人際關係、行程紀錄、工作紀錄等）(@<% tp.date.now() %> 20:50)
- [ ] 手機相片備份（至電腦或google雲端硬碟）及整理(@<% tp.date.now() %> 20:30)

### 4.4. 其他
- [ ] [[電腦知識]]
- [ ] 雷射除毛

## 5. 每日保健：
- [ ] 在學校使用膝蓋熱敷器 (@<% tp.date.now() %> 11:00)
- [ ] 使用呼吸訓練器 (@<% tp.date.now() %> 17:30)
- [ ] 吃維他命 (@<% tp.date.now() %> 20:00)
<%-*
if (week == 2 || week == 5) {
-%>

- [ ] 拔罐 (@<% tp.date.now() %> 20:10)<%* } %>
- [ ] 吊單槓 10 秒 (@<% tp.date.now() %> 21:03)
- [ ] 做增加骨鈣素之運動或做超慢跑 (@<% tp.date.now() %> 21:04)
- [ ] 使用生髮水 (@<% tp.date.now() %> 21:05)
- [ ] 使用瘦臉器 (@<% tp.date.now() %> 21:30)
<%-*
if (week == 1 || week == 3 || week == 5 || week == 0) {
-%>

- [ ] 使用雷射帽 (@<% tp.date.now() %> 21:35)<%* } %>
- [ ] 電療額頭 (@<% tp.date.now() %> 21:40)
- [ ] 吃一把胡桃及一匙芝麻
- [ ] 喝乳清蛋白
- [ ] 使用滾輪
- [ ] 使用面膜毛巾敷臉
- [ ] 使用敷臉機
- [ ] 使用彈力繩

<%-*
if (week == 1 || week == 3 || week == 5 || week == 0) {
-%>
<%* } %>

