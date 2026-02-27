# Contact Us Page - Deployment Guide

## Overview

This is a modern, minimal, and animated Contact Us page built for **Code With Rafsun** using React 19, Tailwind CSS 4, and glassmorphism design principles. The page is fully responsive and optimized for deployment on Vercel.

## Features

- **Glassmorphism Design**: Modern frosted glass cards with neon blue accents
- **Dark Theme**: Professional blue-to-black gradient background
- **Responsive Layout**: Two-column layout on desktop, single column on mobile
- **Smooth Animations**: Fade-in, slide-in, and glow effects
- **Form Validation**: Real-time validation with error messages
- **Success Popup**: Beautiful success message after form submission
- **Social Media Integration**: Links to all major social platforms
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Optimized images and minimal dependencies

## Project Structure

```
contact-us-rafsun/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactCard.tsx      # Contact info card component
│   │   │   ├── SocialLinks.tsx      # Social media links
│   │   │   ├── SuccessPopup.tsx     # Success message popup
│   │   │   └── ui/                  # shadcn/ui components
│   │   ├── pages/
│   │   │   └── ContactUs.tsx        # Main contact page
│   │   ├── App.tsx                  # App router
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # Global styles with animations
│   └── index.html                   # HTML template with SEO meta tags
├── package.json
└── DEPLOYMENT.md                    # This file
```

## Local Development

### Prerequisites

- Node.js 18+ and pnpm
- Modern web browser

### Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   pnpm dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:3000`

### Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your project

### Option 2: GitHub Integration

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/contact-us-rafsun.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

### Option 3: Manual Upload

1. **Build for production**:
   ```bash
   pnpm build
   ```

2. **Upload the `dist` folder** to Vercel using the web interface

## Environment Variables

The project uses the following environment variables (automatically injected by Manus):

- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID
- `VITE_APP_ID` - Application ID
- `VITE_APP_TITLE` - Application title
- `VITE_APP_LOGO` - Application logo URL

No additional environment variables are required for basic functionality.

## Form Submission Integration

Currently, the form submission is simulated with a 1.5-second delay. To integrate with a real email service, you have several options:

### Option 1: EmailJS (Recommended)

1. **Sign up** at [emailjs.com](https://www.emailjs.com)

2. **Install EmailJS**:
   ```bash
   pnpm add @emailjs/browser
   ```

3. **Update ContactUs.tsx** in the `handleSubmit` function:
   ```typescript
   import emailjs from '@emailjs/browser';

   // Initialize EmailJS (add to component)
   useEffect(() => {
     emailjs.init('YOUR_PUBLIC_KEY');
   }, []);

   // Update handleSubmit
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if (!validateForm()) return;

     setIsSubmitting(true);
     try {
       await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
         to_email: 'codewithrafsun@outlook.com',
         from_name: formData.name,
         from_email: formData.email,
         phone: formData.phone,
         purpose: formData.purpose,
         message: formData.message,
       });
       setShowSuccess(true);
       setFormData({ name: '', email: '', phone: '', purpose: '', message: '' });
     } catch (error) {
       console.error('Email error:', error);
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

### Option 2: Formspree

1. **Sign up** at [formspree.io](https://formspree.io)

2. **Update the form element**:
   ```typescript
   <form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     {/* form fields */}
   </form>
   ```

### Option 3: Backend API

Upgrade to a full-stack project using `webdev_add_feature` with the `web-db-user` feature to add backend email functionality.

## Performance Optimization

- **Images**: All images are hosted on CDN with compression
- **Code Splitting**: React components are automatically code-split
- **CSS**: Tailwind CSS is purged in production
- **Minification**: All assets are minified in production build

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels on form inputs
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Focus indicators on interactive elements

## SEO

- Meta tags for title, description, and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast loading times

## Troubleshooting

### Build Fails

1. **Clear cache**:
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

2. **Check Node version**:
   ```bash
   node --version  # Should be 18+
   ```

### Form Not Submitting

1. Check browser console for errors
2. Verify email service credentials (if integrated)
3. Check form validation logic

### Styling Issues

1. Clear browser cache (Ctrl+Shift+Delete)
2. Rebuild the project: `pnpm build`
3. Check CSS in `client/src/index.css`

## Customization

### Change Colors

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: #0099FF;  /* Change neon blue */
  --background: #0f0f1e;  /* Change background */
  /* ... other colors ... */
}
```

### Change Fonts

Update the Google Fonts import in `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css`:

```css
body {
  font-family: 'YourFont', sans-serif;
}
```

### Change Contact Information

Edit `client/src/pages/ContactUs.tsx` and update the contact details in the component.

## Support

For issues or questions, please contact:

- **Email**: codewithrafsun@outlook.com
- **WhatsApp**: +8801306654467
- **GitHub**: [@codewithrafsun](https://github.com/codewithrafsun)

## License

© 2026 Code With Rafsun. All rights reserved.

---

**Built with ❤️ by Mahedi Hasan Rafsun**
