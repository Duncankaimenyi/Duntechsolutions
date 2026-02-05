# Rating → WhatsApp Auto-Forward Setup

## Overview
The rating widget now silently sends all feedback to Google Apps Script, which forwards the data to your WhatsApp without the user knowing.

## Setup Steps

### 1. Create a New Google Apps Script Project
1. Go to [script.google.com](https://script.google.com)
2. Create a new project: **Ratings to WhatsApp**
3. Replace the default code with the script below

### 2. Install the Apps Script Code

**Copy and paste this into your Apps Script editor:**

```javascript
// Configuration
const WHATSAPP_PHONE = '+254713723639'; // Your WhatsApp number (include country code)
const WHATSAPP_API_KEY = 'YOUR_WHATSAPP_API_KEY'; // Get from Twilio or your WhatsApp provider
const GOOGLE_SHEET_ID = 'YOUR_SHEET_ID'; // Optional: store ratings in Google Sheet

// Handle POST requests from the website
function doPost(e) {
  try {
    const params = e.parameter;
    
    // Extract rating data
    const type = params.type || 'unknown';
    const rating = params.rating || 'N/A';
    const name = params.name || 'Anonymous';
    const email = params.email || 'N/A';
    const comment = params.comment || 'No comment';
    const timestamp = params.timestamp || new Date().toLocaleString();
    
    // Log to Google Sheet (optional)
    if (GOOGLE_SHEET_ID) {
      logToSheet(type, rating, name, email, comment, timestamp);
    }
    
    // Send to WhatsApp if it's a rating
    if (type === 'rating') {
      const whatsappMessage = formatRatingMessage(rating, name, email, comment, timestamp);
      sendToWhatsApp(whatsappMessage);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error:', error);
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Format the rating message for WhatsApp
function formatRatingMessage(rating, name, email, comment, timestamp) {
  const stars = '⭐'.repeat(parseInt(rating));
  return `
📊 *New Rating Received*

${stars}
Rating: ${rating}/5

👤 Name: ${name}
📧 Email: ${email}
💬 Comment: ${comment}

🕐 Time: ${timestamp}
  `.trim();
}

// Send message to WhatsApp via Twilio (replace with your provider)
function sendToWhatsApp(message) {
  // Option 1: Using Twilio (requires Twilio account)
  const twilio_url = 'https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json';
  const payload = {
    From: 'whatsapp:+14155552671', // Twilio sandbox number
    To: 'whatsapp:' + WHATSAPP_PHONE,
    Body: message
  };
  
  const options = {
    method: 'post',
    headers: {
      'Authorization': 'Basic ' + Utilities.base64Encode('YOUR_ACCOUNT_SID:YOUR_AUTH_TOKEN')
    },
    payload: payload,
    muteHttpExceptions: true
  };
  
  try {
    const response = UrlFetchApp.fetch(twilio_url, options);
    console.log('WhatsApp message sent:', response.getContentText());
  } catch (error) {
    console.error('Failed to send WhatsApp:', error);
  }
}

// Log ratings to Google Sheet
function logToSheet(type, rating, name, email, comment, timestamp) {
  try {
    const sheet = SpreadsheetApp.openById(GOOGLE_SHEET_ID).getSheetByName('Ratings');
    sheet.appendRow([timestamp, type, rating, name, email, comment]);
  } catch (error) {
    console.error('Sheet logging error:', error);
  }
}
```

### 3. Configuration

#### Option A: Twilio (Recommended - Most Reliable)
1. Sign up at [twilio.com](https://www.twilio.com)
2. Get your Account SID and Auth Token
3. Set up WhatsApp sandbox or business account
4. Replace in the script:
   - `YOUR_ACCOUNT_SID`
   - `YOUR_AUTH_TOKEN`
   - `WHATSAPP_PHONE` with your number

#### Option B: WhatsApp Business API
1. If you have WhatsApp Business API access, replace `sendToWhatsApp()` function with your API endpoint
2. Use your API credentials instead

#### Option C: Webhook Service (Make/Zapier)
1. Create a Make.com scenario or Zapier automation
2. Trigger on incoming POST request
3. Action: Send WhatsApp message
4. Update `sendToWhatsApp()` to POST to your webhook URL

### 4. Deploy as Web App

1. In Apps Script editor, click **Deploy** → **New Deployment**
2. Select **Type** → **Web app**
3. Set **Execute as** → Your account
4. Set **Who has access** → **Anyone**
5. Click **Deploy**
6. Copy the deployment URL

### 5. Update Your Website

Replace the placeholder Apps Script URL in `index.html` line ~1090:

```javascript
const googleScriptUrl = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/userweb';
```

### 6. Test

1. Go to your website
2. Fill out the rating form
3. Submit
4. Check your WhatsApp — you should receive the message automatically!

---

## Alternative: Simple Google Sheet Logging (No WhatsApp)

If you only want to store ratings in Google Sheets without WhatsApp:

1. Replace `sendToWhatsApp()` with just `return;`
2. The data will be logged to your Sheet automatically

---

## Troubleshooting

- **WhatsApp message not received?** Check Twilio logs and auth credentials
- **Apps Script errors?** Check the Execution log in the Script Editor
- **No data in Sheet?** Ensure the Sheet exists and has the name "Ratings"

---

## Files Included
- `index.html` - Updated with silent rating submission
- This setup guide

Deploy and test now!
