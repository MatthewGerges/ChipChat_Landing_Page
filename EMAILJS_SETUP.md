# EmailJS Setup Instructions

This landing page uses EmailJS to send email notifications when users join the waitlist or submit the contact form.

## Setup Steps

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Create an Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email
   - Note down your Service ID

3. **Create Email Templates**
   
   **Waitlist Template:**
   - Go to "Email Templates" in EmailJS dashboard
   - Click "Create New Template"
   - Use this template:
     ```
     Subject: New Waitlist Signup - ChipChat
     
     Body:
     New waitlist signup:
     Email: {{email}}
     Date: {{date}}
     ```
   - Save and note the Template ID
   
   **Contact Form Template:**
   - Create another template:
     ```
     Subject: New Contact Form Submission - ChipChat
     
     Body:
     Name: {{from_name}}
     Email: {{from_email}}
     Message: {{message}}
     Date: {{date}}
     ```
   - Save and note the Template ID

4. **Get Your Public Key**
   - Go to "Account" → "General"
   - Copy your "Public Key"

5. **Update App.jsx**
   - Open `src/App.jsx`
   - Find the EmailJS configuration constants (around line 69-74)
   - Replace the placeholder values:
     ```javascript
     const EMAILJS_SERVICE_ID = 'your_service_id_here';
     const EMAILJS_TEMPLATE_ID_WAITLIST = 'your_waitlist_template_id_here';
     const EMAILJS_TEMPLATE_ID_CONTACT = 'your_contact_template_id_here';
     const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
     ```

6. **Test the Forms**
   - Start your development server: `npm run dev`
   - Test the waitlist form
   - Test the contact form
   - Check your email for notifications

## Alternative: Environment Variables (Recommended for Production)

For better security, use environment variables:

1. Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID_WAITLIST=your_waitlist_template_id
   VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `src/App.jsx` to use environment variables:
   ```javascript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const EMAILJS_TEMPLATE_ID_WAITLIST = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_WAITLIST;
   const EMAILJS_TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

3. Add `.env` to your `.gitignore` file to keep your keys secure

## Troubleshooting

- If emails aren't sending, check the browser console for errors
- Verify all IDs and keys are correct
- Make sure your EmailJS service is connected and active
- Check that your template variables match the ones in the code ({{email}}, {{from_name}}, etc.)

## Note

The forms will still show success messages even if EmailJS isn't configured (for development/testing). However, you won't receive email notifications until EmailJS is properly set up.

