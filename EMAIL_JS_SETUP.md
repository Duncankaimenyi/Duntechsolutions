# Email.js Integration Setup Guide

## Overview
The contact form on the Duntech Solutions website is now connected to EmailJS for automatic email delivery.

## Files Modified
1. **email.js** (NEW) - Handles form submissions and EmailJS integration
2. **index.html** - Added script reference to email.js
3. **style.css** - Added styles for form success/error messages

## Configuration Required

### Step 1: Update EmailJS Service & Template IDs
In the `email.js` file, update these lines with your actual EmailJS credentials:

```javascript
// Line in handleQuickOrderForm function:
emailjs.send('service_xfv3g7b', 'template_yy7y3kq', templateParams)
// Line in handleNewsletterForm function:
emailjs.send('service_xfv3g7b', 'template_newsletter', templateParams)
```

Replace:
- `'service_xfv3g7b'` with your EmailJS Service ID
- `'template_yy7y3kq'` with your EmailJS Template ID for contact form
- `'template_newsletter'` with your EmailJS Template ID for newsletter

### Step 2: Create EmailJS Templates

#### Template 1: Contact Form (template_yy7y3kq)
Email template variables available:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{service_type}}` - Selected service
- `{{budget_range}}` - Project budget
- `{{project_details}}` - Project message

Send to: `{{to_email}}` (set to hello@duntechsolutions.com)
Reply-to: `{{reply_to}}` (customer's email)

#### Template 2: Newsletter (template_newsletter)
Email template variables available:
- `{{subscriber_email}}` - Subscriber's email

Send to: `{{to_email}}` (set to hello@duntechsolutions.com)

### Step 3: Verify Public Key
The public key in index.html is already set:
```javascript
emailjs.init({
  publicKey: "yjQhIy1Er-KAY9kgh",
});
```
Make sure this matches your EmailJS account public key.

## Features Implemented

### Contact Form Features
✓ Full form validation (all fields required)
✓ Service type mapping (Graphics, Website, Security, Package)
✓ Budget range selection
✓ Project details textarea
✓ Automatic email to business (hello@duntechsolutions.com)
✓ Auto-reply email address set to customer email
✓ Success/error messages display
✓ Form auto-reset on success
✓ Console logging for debugging

### Newsletter Features
✓ Email subscription form
✓ Status message display
✓ Success/error feedback
✓ Auto-clear status after 5 seconds

## Form Fields

### Quick Order Form (ID: quickOrderForm)
1. **Name** (text input, required)
2. **Email** (email input, required)
3. **Service** (select dropdown, required)
   - Graphics & Logo Design
   - Website Development
   - Online Cyber Services
   - Complete Package
4. **Budget** (select dropdown, required)
   - ksh 500 - ksh 1,000
   - $1,000 - $3,000
   - $3,000 - $5,000
   - $5,000+
5. **Project Details** (textarea, required)

## Styling
Form messages are styled with:
- Success messages: Green background with checkmark
- Error messages: Red background with X mark
- Smooth slide-in animation
- Auto-hide after 5 seconds

## Testing Steps
1. Go to index.html and scroll to the "Contact Us" section
2. Fill in the form with test data
3. Click "Submit Project Request"
4. Verify:
   - Success message appears
   - Form resets
   - Email is sent to hello@duntechsolutions.com
   - Newsletter form also works with subscriber emails

## Troubleshooting

### Email not sending?
- Check console for error messages (F12 → Console)
- Verify Service ID and Template ID are correct
- Verify EmailJS public key matches your account
- Check email limits on your EmailJS plan

### Form not validating?
- Check browser console for JavaScript errors
- Verify email.js file is loaded (check Network tab)
- Ensure form IDs match (quickOrderForm, newsletterForm)

### Messages not showing?
- Check if CSS is loaded properly
- Verify .form-message styles are in style.css
- Check if form-message div is being created

## Security Notes
- The public key is visible in the frontend (that's normal)
- Keep sensitive email addresses only in EmailJS templates
- All form validation happens on the client side - add server-side validation if needed
