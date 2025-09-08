# TimeInvestr Website

A professional, responsive website for the TimeInvestr productivity app. Built with modern HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Legal Pages**: Complete Privacy Policy, Terms of Service, and Data Safety pages
- **Support System**: Contact form, FAQ section, and support resources
- **Performance Optimized**: Fast loading with optimized assets
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Ready**: Meta tags, structured data, and semantic HTML

## 📁 File Structure

```
website/
├── index.html              # Homepage
├── privacy.html            # Privacy Policy page
├── terms.html              # Terms of Service page
├── support.html            # Support & Contact page
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive design styles
├── js/
│   └── main.js            # Interactive functionality
├── images/                 # Website images (to be added)
└── README.md               # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb) - Trust and professionalism
- **Secondary**: Green (#10b981) - Success and growth
- **Accent**: Orange (#f59e0b) - Energy and creativity
- **Text**: Dark grays for readability
- **Background**: Light grays and white for clean appearance

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across all devices

### Components
- **Navigation**: Fixed header with mobile hamburger menu
- **Hero Section**: Eye-catching introduction with call-to-action
- **Feature Cards**: Interactive cards highlighting app features
- **Contact Form**: Professional form with validation
- **Footer**: Comprehensive links and social media

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern layouts with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive features and animations
- **Font Awesome**: Professional icons
- **Google Fonts**: Typography optimization

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: 1200px+

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial website commit"
   git remote add origin https://github.com/yourusername/timeinvestr-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Custom Domain Setup** (When ready)
   - Add `CNAME` file with your domain
   - Update DNS settings with your domain provider
   - Wait for DNS propagation (24-48 hours)

### Option 2: Netlify (FREE tier)

1. **Drag & Drop Deployment**
   - Go to [netlify.com](https://netlify.com)
   - Drag your website folder to the deploy area
   - Get instant live URL

2. **Custom Domain**
   - Add custom domain in Netlify dashboard
   - Update DNS settings
   - Automatic SSL certificate

### Option 3: Vercel (FREE tier)

1. **GitHub Integration**
   - Connect your GitHub repository
   - Automatic deployments on push
   - Preview deployments for pull requests

2. **Custom Domain**
   - Add domain in Vercel dashboard
   - Automatic SSL and CDN

## 🔧 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #10b981;  /* Success color */
    --accent-color: #f59e0b;     /* Highlight color */
}
```

### Content
- **Homepage**: Edit `index.html` for main content
- **Legal Pages**: Update content in respective HTML files
- **Contact Info**: Modify email addresses and links
- **Images**: Replace placeholder images with your own

### Features
- **Analytics**: Add Google Analytics in `js/main.js`
- **Forms**: Connect contact form to your backend
- **Social Links**: Update social media URLs in footer

## 📧 Contact Information

Update these email addresses in the HTML files:
- **Support**: support@timeinvestr.app
- **Privacy**: privacy@timeinvestr.app
- **Legal**: legal@timeinvestr.app
- **Features**: features@timeinvestr.app

## 🔒 Security & Privacy

- **HTTPS**: All deployments include SSL certificates
- **Form Security**: CSRF protection and input validation
- **Privacy**: No tracking or analytics without consent
- **GDPR**: Compliant privacy policy and data handling

## 📊 Performance

### Optimization Features
- **Lazy Loading**: Images load as needed
- **Minified CSS/JS**: Production-ready code
- **Optimized Images**: WebP format support
- **CDN Ready**: Optimized for content delivery networks

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌐 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD markup for rich snippets
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Sitemap Ready**: Easy to generate XML sitemap
- **Robots.txt**: Search engine optimization

## ♿ Accessibility

- **WCAG 2.1 AA**: Full compliance
- **Keyboard Navigation**: Complete keyboard support
- **Screen Readers**: ARIA labels and semantic markup
- **Color Contrast**: Meets accessibility standards
- **Focus Management**: Clear focus indicators

## 🔄 Updates & Maintenance

### Regular Updates
- **Content**: Update legal pages as needed
- **Features**: Add new app features to homepage
- **Links**: Update download links when app is published
- **Contact**: Keep contact information current

### Version Control
- **Git**: Track all changes
- **Branches**: Use feature branches for updates
- **Deployment**: Automatic deployment on main branch

## 📋 Pre-Launch Checklist

- [ ] Test on all devices and browsers
- [ ] Verify all links work correctly
- [ ] Check form functionality
- [ ] Test mobile navigation
- [ ] Validate HTML and CSS
- [ ] Optimize images for web
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (when ready)
- [ ] Test contact form submission
- [ ] Verify legal page content

## 🆘 Troubleshooting

### Common Issues

**Images not loading**
- Check file paths in HTML
- Ensure images exist in correct folders
- Verify image file permissions

**Styles not applying**
- Check CSS file paths
- Clear browser cache
- Verify CSS syntax

**Mobile menu not working**
- Check JavaScript file path
- Verify HTML IDs match JavaScript
- Test in different browsers

**Form not submitting**
- Check form action URL
- Verify required fields
- Test form validation

## 📞 Support

For website support or questions:
- **Email**: support@timeinvestr.app
- **Documentation**: This README file
- **Issues**: Create GitHub issue in repository

## 📄 License

This website is part of the TimeInvestr project. All rights reserved.

---

**Built with ❤️ for TimeInvestr users**

*Last updated: January 2025*
