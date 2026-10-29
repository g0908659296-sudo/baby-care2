# Baby Care 新生兒衛教智慧問答平台介紹網站

這份網站使用 HTML、CSS、JavaScript 製作，採用先前選定的 Baby Care 配色：藍色為主色、金色用於重點標題與細節、紫色作為點綴，搭配米白底色；版面包含上方導覽、摘要與分段內容。文字可以自行修改。

- `index.html`：修改標題、摘要、研究動機、系統流程、成果及成員。
- `style.css`：修改顏色、版面與手機版樣式。
- `script.js`：修改實際問答系統網址。

## 設定問答系統網址
在 `script.js` 將 `const SYSTEM_URL = "";` 改成目前實際可用的網址。GitHub Pages / Netlify 只託管介紹網站，不會執行 Python、Ollama、LangChain 或 Chroma 後端。

## 部署目錄
若 Netlify 發布 Repository 根目錄，請讓這三個檔案直接位於根目錄。若檔案放在 `baby-care-github-pages/`，Publish directory 就要設為該資料夾。

簡報中的 77%、99%、100% 是固定 10 題測試的回答依據支持率，不能解讀為所有醫療問題的準確率。未來規劃項目仍以未來規劃呈現。
