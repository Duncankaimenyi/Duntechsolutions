# Rating to Google Sheets Setup (FREE & SIMPLE)

## Cost: $0 forever
## Time: 5 minutes

---

## Step 1: Create Google Sheet (1 min)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank spreadsheet**
3. Name it: `Service Ratings`
4. Create columns in Row 1:
   - A1: `Timestamp`
   - B1: `Rating`
   - C1: `Name`
   - D1: `Email`
   - E1: `Comment`

5. Save it

---

## Step 2: Create Google Apps Script (2 min)

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete the default code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const params = JSON.parse(e.postData.contents);
    
    // Append data to sheet
    sheet.appendRow([
      params.timestamp || new Date().toLocaleString(),
      params.rating || 'N/A',
      params.name || 'Anonymous',
      params.email || 'N/A',
      params.comment || 'No comment'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon, top-left)
5. Name it `RatingLogger`
6. Click **Save**

---

## Step 3: Deploy as Web App (2 min)

1. Click **Deploy** button (top-right)
2. Select **New deployment**
3. Click gear icon → select **Web app**
4. Fill in:
   - **Execute as:** Your email
   - **Who has access:** Anyone
5. Click **Deploy**
6. A popup shows your deployment URL — **Copy it**
   - Format: `https://script.google.com/macros/s/ABC123XYZ/userweb`

---

## Step 4: Update Your Website (1 min)

1. Open `index.html` in your editor
2. Find line ~1090 (search: `const googleScriptUrl`)
3. Replace with your deployment URL:

```javascript
const googleScriptUrl = 'https://script.google.com/macros/s/ABC123XYZ/userweb';
```

Save the file.

---

## Step 5: Test (1 min)

1. Open your website
2. Go to **Rate Our Service** section
3. Click 5 stars
4. Enter name, email, comment
5. Click **Submit Feedback**
6. Go back to your Google Sheet → **Refresh** (F5)
7. New row appears! ✓

---

## View Your Ratings Anytime

Just open your Google Sheet and see all ratings in one place:
- When people rated
- How many stars
- Their name & email
- Their comment

---

## Summary

✅ **Free forever**  
✅ **5-minute setup**  
✅ **All data in Google Drive**  
✅ **Easy to export/analyze**  

Done! Your ratings are now automatically stored in Google Sheets.

