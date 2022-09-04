module.exports = advanced_uri;

// 用window.open直接開啟advnace uri的ettingid指定的設定視窗
async function advanced_uri(params) {
  quickAddApi = params.quickAddApi;
  
  const aTexts =   [ "Hotkeys", "社群外掛", "外掛瀏覽器", "主題瀏覽器", "Shell Commands", "QuickAdd", "cMenu", "Linter","Customizable Page Header Buttons", "BreadCrumbs", "Style Settings", "Obsidian Minimal Settings","Image ToolKit","Review","Reminder"];
  const aValues = [ "hotkeys", "community-plugins", "plugin-browser", "theme-browser", "obsidian-shellcommands", "quickadd", "cmenu-plugin", "obsidian-linter" ,"customizable-page-header-buttons" , "breadcrumbs" ,"obsidian-style-settings" ,"obsidian-minimal-settings","obsidian-image-toolkit","review-obsidian","obsidian-reminder-plugin"];
  let choice = await quickAddApi.suggester(aTexts, aValues);
  //console.log("choice", choice);

  //this.quickAddApi.utility.setClipboard(choice);
  window.open("obsidian://advanced-uri?vault=Hoonsor&settingid=" + choice);

  return choice;
}