# RR Cashew Industries Website

A professional, animated multi-page website for RR Cashew Industries - a premium cashew manufacturer and supplier in Kolhapur, Maharashtra.

## 🌟 Features

- **Modern Design**: Professional gradient-based design with smooth animations
- **Multi-Page Structure**: Separate pages for Home, About, Products, and Contact
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Animated Elements**: Smooth fade-ins, slide-ups, and hover effects
- **Image Slider**: Auto-sliding hero section with multiple slides
- **Google Maps Integration**: Interactive map showing factory location
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Built with Next.js 14 and optimized for speed

## 📁 Project Structure

```
rr-cashew-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── contact/
│   │   └── page.tsx          # Contact page with map
│   ├── products/
│   │   └── page.tsx          # Products page
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout with Header & Footer
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer component
│   └── ImageSlider.tsx       # Auto-sliding hero section
├── public/
│   └── images/               # (Add your images here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
cd rr-cashew-website
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Update Company Information

1. **Contact Details** (components/Footer.tsx & app/contact/page.tsx):
   - Phone: +91 98765 43210
   - Email: info@rrcashew.com
   - Address: Manganur, Tal. Kagal, Dist. Kolhapur

2. **Social Media Links** (components/Footer.tsx):
   - Update Facebook, Instagram, WhatsApp URLs

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#8B4513',    // Main brown
  secondary: '#D2691E',  // Chocolate
  accent: '#CD853F',     // Peru
  dark: '#2C1810',       // Dark brown
}
```

### Add Images

1. Place images in `public/images/` folder
2. Reference in code: `/images/your-image.jpg`

### Update Google Map Location

In `app/contact/page.tsx`, update the iframe src with your coordinates:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.8826!2d74.3167!3d16.5833..."
  ...
/>
```

To get your map embed code:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code

## 📄 Page Descriptions

### Home Page (`app/page.tsx`)
- Hero slider with 3 rotating slides
- Welcome section with company stats
- Why Choose Us features
- Product categories preview
- Call-to-action section

### About Page (`app/about/page.tsx`)
- Company story and history
- Core values and principles
- Processing excellence steps
- Call-to-action

### Products Page (`app/products/page.tsx`)
- Whole cashews (W150, W180, W240, W320, W450)
- Split & cut cashews
- Broken cashews & pieces
- Quality assurance badges
- Call-to-action

### Contact Page (`app/contact/page.tsx`)
- Contact information (address, phone, email)
- Business hours
- Social media links
- Google Maps integration
- Call-to-action buttons

## 🎭 Animations

The website includes several CSS animations:

- **fade-in**: Smooth opacity transition
- **slide-up**: Element slides up while fading in
- **slide-left**: Element slides from left
- **hover-lift**: Card lifts on hover with shadow

## 🔧 Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 📞 Support

For any questions or customizations needed, contact:
- Email: info@rrcashew.com
- Phone: +91 98765 43210

## 📝 License

This project is created for RR Cashew Industries.

---

**Made with ❤️ for Premium Quality Cashews**
