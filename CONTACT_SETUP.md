# Contact Form Setup Guide

This contact form uses Resend for email delivery. Follow these steps to set it up:

## 1. Get a Resend API Key

1. Sign up at [https://resend.com](https://resend.com)
2. Go to your dashboard and create an API key
3. Copy the API key

## 2. Set up Environment Variables

Create a `.env.local` file in your project root and add:

```env
RESEND_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with your actual Resend API key.

## 3. Update Email Configuration

In `src/app/api/contact/route.ts`, you can customize:

- **From email**: Change `onboarding@resend.dev` to your verified domain
- **To email**: Change `dhanushchinni100@gmail.com` to your preferred email
- **Email template**: Modify the HTML template in the `htmlContent` variable

## 4. Verify Your Domain (Optional)

For production use, verify your domain in Resend dashboard to send from your own domain instead of `onboarding@resend.dev`.

## 5. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the received message

## Features

- ✅ Modern, responsive design
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Beautiful email template
- ✅ Reply-to functionality
- ✅ Mobile-friendly layout

## Customization

You can customize the contact form by:

- Modifying the CSS in `src/app/contact/contact.module.css`
- Updating the form fields in `src/app/contact/page.tsx`
- Changing the email template in `src/app/api/contact/route.ts`
- Adding additional validation or features

## Troubleshooting

- Make sure your API key is correct
- Check that the `.env.local` file is in the project root
- Verify your email address in the API route
- Check the browser console and server logs for errors 