
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
- [ ] [[003-●專案管理/005-投資理財相關/●投資理財及創業待辦事項]](@<% tp.date.now() %> 20:30)
- [ ] [[003-●專案管理/005-投資理財相關/1110814-Thinkorswim軟體學習心得]](@<% tp.date.now() %> 20:33)
- [ ] [[003-●專案管理/003-Obsidian學習筆記/1110731-DataView插件筆記]](@<% tp.date.now() %> 20:35)
- [ ] [[Obsidian的任務管理技巧彙總]](@<% tp.date.now() %> 20:38)
- [ ] [[1110904-Excel比對找尋資料]](@<% tp.date.now() %> 20:40)
- [ ] [[003-●專案管理/004-AHK學習筆記/AHK-GUI控件相關]](@<% tp.date.now() %> 20:42)
- [ ] [[004-●日常生活/001-多媒體知識/001-攝影、錄影/1110821-手機錄影技巧]](@<% tp.date.now() %> 20:45)
- [ ] [[004-●日常生活/001-多媒體知識/001-攝影、錄影/1110825-Disco Diffusion-AI運算繪圖工具]](@<% tp.date.now() %> 20:47)
- [ ] [[1110906-Obsidian快捷鍵]](@<% tp.date.now() %> 20:48)
- [ ] [[1110911-Excel快速合併寄送郵件]](@<% tp.date.now() %> 20:50)
- [ ] [[1110911-Excel VBA學習相關]](@<% tp.date.now() %> 20:52)

### 4.2. 健康知識
- [ ] [[004-●日常生活/005-健康知識/1110717-能量運動指南]](@<% tp.date.now() %> 20:55)
- [ ] [[004-●日常生活/005-健康知識/1110716-甲狀腺失調調理及預防指南]](@<% tp.date.now() %> 21:00)
- [ ] [[004-●日常生活/005-健康知識/1110717-告別讓人困擾的失眠問題]](@<% tp.date.now() %> 21:05)

## 5. 每日保健：
- [ ] 在學校使用膝蓋熱敷器 (@<% tp.date.now() %> 11:00)
- [ ] 使用呼吸訓練器 (@<% tp.date.now() %> 17:30)
- [ ] 吃維他命 (@<% tp.date.now() %> 20:00)
<%-*
if (week == 2 || week == 5) {
-%>

- [ ] 拔罐 (@<% tp.date.now() %> 20:10)<%* } %>
- [ ] 吊單槓 10 秒 (@<% tp.date.now() %> 21:03)
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
- [ ] 使用敷臉機
- [ ] 使用彈力繩

<%-*
if (week == 1 || week == 3 || week == 5 || week == 0) {
-%>
<%* } %>
