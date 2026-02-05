# Rating to WhatsApp via Make.com (FREE)

## Cost: $0 for first 100 messages/month, then $10/month

---

## Step 1: Create Make.com Account (2 min)

1. Go to [make.com](https://make.com)
2. Click **Sign up**
3. Enter email & create password
4. Verify email
5. Click **Create a new scenario**

---

## Step 2: Create the Webhook (2 min)

1. In Make scenario, click **+ Add module** on the left
2. Search for **Webhooks** 
3. Select **Webhooks → Custom webhook**
4. Click **Add**
5. Choose **POST**
6. Click **Save**
7. A blue panel appears — click **Copy address to clipboard**
   - Save this URL somewhere (you'll need it in Step 7)
   - Format: `https://hook.make.com/abcd1234...`

---

## Step 3: Add WhatsApp Module (3 min)

1. Click **+ Add module** (right of the webhook)
2. Search for **WhatsApp Business Cloud API**
3. Select it → click **Add**
4. Click **Create a connection**
   - Select **WhatsApp Business Cloud API**
   - Get your **Access Token** from Meta (see "Get Access Token" below)
   - Get your **Business Account ID** from Meta
   - Click **Save**

### Get Access Token (from Meta):
1. Go to [facebook.com/developers](https://facebook.com/developers)
2. Create app → **Business** type
3. Add **WhatsApp** product
4. Go to **Settings → API Credentials**
5. Copy **Temporary Access Token** (or create permanent one)
6. Also copy your **Business Account ID**

---

## Step 4: Configure WhatsApp Message (2 min)

1. In the WhatsApp module, set:
   - **Connection:** Your WhatsApp connection
   - **Recipient Phone Number:** `{{step1.body.phone}}` 
     - (or your hardcoded number: `+254713723639`)
   - **Message Type:** `TEXT`
   - **Text:** Copy-paste below:

```
📊 *New Service Rating*

⭐⭐⭐⭐⭐ Rating: {{step1.body.rating}}/5

👤 Name: {{step1.body.name}}
📧 Email: {{step1.body.email}}
💬 Comment: {{step1.body.comment}}

🕐 {{step1.body.timestamp}}
```

---

## Step 5: Test the Webhook (1 min)

1. In webhook module, click **Testing tab**
2. Click **Re-determine data structure**
3. A JSON panel appears — paste this:

```json
{
  "rating": "5",
  "name": "John Doe",
  "email": "john@example.com",
  "comment": "Great service!",
  "phone": "+254713723639",
  "timestamp": "2025-02-04 10:30:00"
}
```

4. Click **Save**
5. WhatsApp message should appear on your phone instantly!

---

## Step 6: Turn On Scenario (1 min)

1. Top-left, toggle **OFF** → **ON** (turns blue)
2. Scenario is now live and listening for webhooks

---

## Step 7: Get Your Webhook URL (30 sec)

1. Click on the **Webhooks** module
2. Copy the **Webhook URL** (blue box at top)
3. Example: `https://hook.make.com/abcd1234xyz...`

---

## Step 8: Update Your Website (1 min)

1. Open `index.html` in your editor
2. Find line ~1090 (search: `const googleScriptUrl`)
3. Replace the URL with your Make.com webhook:

```javascript
const googleScriptUrl = 'https://hook.make.com/YOUR_WEBHOOK_ID_HERE';
```

Example:
```javascript
const googleScriptUrl = 'https://hook.make.com/abcd1234xyz...';
```

---

## Step 9: Test Live (2 min)

1. Open your website
2. Go to **Rate Our Service** section
3. Click 5 stars
4. Enter name, email, comment
5. Click **Submit Feedback**
6. Check your WhatsApp — message arrives! ✓

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No WhatsApp message | Check Make scenario is **ON** (blue toggle) |
| "Invalid webhook" | Copy-paste the full Make webhook URL exactly |
| WhatsApp API error | Verify Access Token is not expired |
| Wrong phone number | Use format `+COUNTRY_CODE + NUMBER` |

---

## Summary

✅ Free for 100 messages/month  
✅ No coding needed  
✅ 5-minute setup  
✅ Works instantly  

**Next step:** Follow Steps 1-8 above, then test on your site!

