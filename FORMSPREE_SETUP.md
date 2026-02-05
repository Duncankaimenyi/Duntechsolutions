# Formspree Integration Setup Guide

## Overview
Your contact form is now connected to Formspree - a free, simple form submission service.

## Current Setup
- **Contact Form Endpoint:** `https://formspree.io/f/mblrzdel` (UPDATE THIS)
- **Newsletter Form Endpoint:** `https://formspree.io/f/xyzxyzxyz` (UPDATE THIS)

## Setup Steps

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email (hello@duntechsolutions.com)
3. Log in to your dashboard

### Step 2: Create Contact Form
1. Click "New Form" or "Add Form"
2. Name it: `Contact Form`
3. Set email to: `hello@duntechsolutions.com`
4. Copy your Form ID (looks like: `mblrzdel`)
5. Update in `email.js` line 32:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
```
Replace `mblrzdel` with your actual Form ID

### Step 3: Create Newsletter Form
1. Click "New Form" again
2. Name it: `Newsletter`
3. Set email to: `hello@duntechsolutions.com`
4. Copy the Form ID
5. Update in `email.js` line 65:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
```
Replace `xyzxyzxyz` with your actual Form ID

### Step 4: Verify Email
- Check your email (hello@duntechsolutions.com)
- Click confirmation link for each form
- Forms will only work after email verification

## Files Changed
- ✅ Removed EmailJS script from `index.html`
- ✅ Updated `email.js` to use Formspree
- ✅ Kept popup functionality
- ✅ All form data still captured

## Features
✓ Free (unlimited submissions)
✓ No credit card needed
✓ Email notifications for each submission
✓ Simple setup
✓ Success popup after submission
✓ Mobile responsive

## Testing
1. Fill out the contact form
2. Click submit
3. See success popup
4. Check your email for the submission
5. Email will contain all form fields

## Submissions Dashboard
- Log into [formspree.io](https://formspree.io)
- See all submissions in real-time
- Download submissions as CSV
- Manage spam filters

## No Code Changes Needed
- Form structure stays the same
- Popup still works
- Validation still works
- All visible to users is unchanged

## Important Notes
- Free plan is unlimited submissions
- Emails go directly to your inbox
- No configuration needed after Form IDs are set
- Form data is simple key-value pairs
- All form field names are sent as-is
