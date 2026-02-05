/**
 * IMPORTANT: Update these IDs with your EmailJS account credentials
 * This file contains placeholder values that need to be replaced
 */

// STEP 1: Get these from your EmailJS Account Dashboard
// https://dashboard.emailjs.com/

// Your EmailJS Service ID (used to identify your email service provider)
const EMAILJS_SERVICE_ID = 'service_xfv3g7b'; // UPDATE THIS

// Your Contact Form Template ID (template for project inquiries)
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_yy7y3kq'; // UPDATE THIS

// Your Newsletter Template ID (template for newsletter subscriptions)
const EMAILJS_TEMPLATE_ID_NEWSLETTER = 'template_newsletter'; // UPDATE THIS

// Public Key (already configured in index.html head section)
// const EMAILJS_PUBLIC_KEY = 'yjQhIy1Er-KAY9kgh'; // Already in index.html

/**
 * STEP 2: Create Templates in EmailJS
 * 
 * Contact Form Template (template_yy7y3kq):
 * ==========================================
 * Available variables from form:
 * - {{from_name}}          → Customer name
 * - {{from_email}}         → Customer email
 * - {{service_type}}       → Selected service
 * - {{budget_range}}       → Project budget
 * - {{project_details}}    → Project description
 * 
 * Email TO: {{to_email}} (hello@duntechsolutions.com)
 * Reply-To: {{reply_to}} (customer email)
 * 
 * 
 * Newsletter Template (template_newsletter):
 * ==========================================
 * Available variables from form:
 * - {{subscriber_email}}   → Subscriber email
 * 
 * Email TO: {{to_email}} (hello@duntechsolutions.com)
 * 
 */

// After updating above, update these values in email.js:
// Line 35: emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE', templateParams)
// Line 63: emailjs.send('YOUR_SERVICE_ID', 'YOUR_NEWSLETTER_TEMPLATE', templateParams)
