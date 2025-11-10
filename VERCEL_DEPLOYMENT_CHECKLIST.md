# Vercel Deployment Checklist for Contact Form

## ✅ Pre-Deployment Checks

### 1. **Resend API Key Setup**
- [ ] You have a Resend account at [https://resend.com](https://resend.com)
- [ ] You have created an API key in your Resend dashboard
- [ ] The API key is active and has sending permissions
- [ ] You've copied the API key (starts with `re_...`)

### 2. **Vercel Environment Variables** ⚠️ **CRITICAL**
- [ ] Go to your Vercel project dashboard
- [ ] Navigate to **Settings** → **Environment Variables**
- [ ] Add the following environment variable:
  - **Key**: `RESEND_API_KEY`
  - **Value**: Your Resend API key (e.g., `re_1234567890abcdef...`)
  - **Environment**: Select all environments (Production, Preview, Development)
- [ ] Click **Save**
- [ ] **Redeploy your application** after adding the environment variable

### 3. **Email Configuration**
- [ ] Verify the recipient email is correct in `src/app/api/contact/route.ts`:
  - Currently set to: `website.wearehub@gmail.com`
- [ ] Verify the sender email (from address):
  - Currently set to: `onboarding@resend.dev` (Resend's default)
  - ⚠️ **Note**: For production, consider verifying your own domain in Resend

## 🚀 Deployment Steps

### 1. **Deploy to Vercel**
- [ ] Push your code to GitHub/GitLab/Bitbucket
- [ ] Vercel will automatically deploy (if auto-deploy is enabled)
- [ ] Or manually trigger a deployment from Vercel dashboard

### 2. **After Deployment**
- [ ] Wait for deployment to complete
- [ ] Check deployment logs for any errors
- [ ] Verify the deployment is successful (green status)

## 🧪 Testing the Contact Form

### 1. **Test on Production URL**
- [ ] Navigate to: `https://your-domain.vercel.app/contact`
- [ ] Fill out the contact form with test data:
  - Name: Test User
  - Email: your-test-email@example.com
  - Subject: Test Message
  - Message: This is a test message
- [ ] Click "Send Message"
- [ ] Check for success message: "Thank you! Your message has been sent successfully."
- [ ] Check your email inbox: `website.wearehub@gmail.com`
- [ ] Verify you received the email

### 2. **Test Error Handling**
- [ ] Try submitting with empty fields (should show validation error)
- [ ] Try submitting with invalid email format (should show validation error)

## 🔍 Troubleshooting

### If the form shows an error:

1. **Check Vercel Function Logs**
   - Go to Vercel Dashboard → Your Project → **Functions** tab
   - Click on the `/api/contact` function
   - Check the logs for error messages
   - Look for:
     - `RESEND_API_KEY is not set` → Environment variable not configured
     - `Resend error:` → API key issue or Resend service error
     - `API error:` → General error in the code

2. **Verify Environment Variables**
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Confirm `RESEND_API_KEY` exists and is correct
   - Make sure it's enabled for the correct environment (Production/Preview/Development)
   - **Important**: After adding/changing environment variables, you MUST redeploy

3. **Check Resend Dashboard**
   - Go to [https://resend.com/emails](https://resend.com/emails)
   - Check if emails are being sent
   - Check for any error messages or rate limits
   - Verify your API key is active

4. **Test API Endpoint Directly**
   - You can test the API endpoint using curl or Postman:
   ```bash
   curl -X POST https://your-domain.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "subject": "Test",
       "message": "Test message"
     }'
   ```

### Common Issues:

**Issue**: "Email service is not configured"
- **Solution**: Add `RESEND_API_KEY` to Vercel environment variables and redeploy

**Issue**: "Failed to send email"
- **Solution**: 
  - Check Resend API key is valid
  - Check Resend dashboard for errors
  - Verify recipient email is correct
  - Check Vercel function logs for detailed error

**Issue**: Form works locally but not on Vercel
- **Solution**: 
  - Environment variables are NOT automatically synced from `.env.local`
  - You MUST add them in Vercel dashboard
  - Redeploy after adding environment variables

## 📋 Quick Checklist Summary

- [ ] Resend API key created
- [ ] `RESEND_API_KEY` added to Vercel environment variables
- [ ] Environment variable enabled for all environments
- [ ] Application redeployed after adding environment variable
- [ ] Contact form tested on production URL
- [ ] Email received at `website.wearehub@gmail.com`
- [ ] Checked Vercel function logs (if any errors)

## 🔗 Useful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Resend Dashboard: https://resend.com/emails
- Resend API Keys: https://resend.com/api-keys
- Vercel Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables

---

**Important Reminder**: After adding or modifying environment variables in Vercel, you must redeploy your application for the changes to take effect!

