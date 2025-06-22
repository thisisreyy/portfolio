# Aatreyee Chatterjee - Portfolio

A modern, elegant portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Real email sending with EmailJS integration
- **Interactive Navigation**: Smooth scrolling between sections
- **Tech Stack Showcase**: Dynamic display of skills and technologies

## 📧 EmailJS Setup

To enable real email sending through the contact form, you need to set up EmailJS:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. Note down your **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**

### 5. Update the Code
In `src/components/ContactSection.tsx`, replace these placeholders:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### 6. Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. Verify the thank you modal appears

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Contact Information

- **Email**: aatreyeechatterjeee@gmail.com
- **Phone**: +44 74441 63880
- **LinkedIn**: [Aatreyee Chatterjee](https://www.linkedin.com/in/aatreyee-chatterjee/)
- **GitHub**: [thisisreyy](https://github.com/thisisreyy)

## 🎨 Design Features

- **Metallic Theme**: Sophisticated dark theme with gold accents
- **Smooth Animations**: Consistent bobbing animations and hover effects
- **Professional Typography**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Hover states and micro-interactions throughout

## 📄 License

This project is personal portfolio of Aatreyee Chatterjee. All rights reserved.