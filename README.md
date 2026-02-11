# Data Engineer Portfolio Website

A sleek, modern black and white portfolio site built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Showcase your data engineering expertise and projects with a professional design.

## 🎨 Features

- **Modern Design**: Clean black and white theme with smooth animations and transitions
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic light/dark mode detection
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Project Showcase**: Highlight your featured projects with descriptions and tech stacks
- **Work Experience**: Display your professional background and achievements
- **Skills Section**: Organized skills by category (Programming, Cloud, Tools, etc.)
- **Education**: Showcase your academic qualifications
- **Social Links**: Direct links to GitHub, LinkedIn, Email, and portfolio

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navigation.tsx      # Fixed header navigation
│   ├── Hero.tsx            # Hero section with introduction
│   ├── Projects.tsx        # Featured projects showcase
│   ├── Experience.tsx      # Work experience section
│   ├── Skills.tsx          # Skills and expertise
│   ├── Education.tsx       # Education details
│   └── Footer.tsx          # Footer with social links
└── data/
    └── portfolio.ts        # All portfolio data (projects, experience, skills, education)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technologies Used

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Deployment**: Ready for Vercel

## 📝 Customization

### Update Portfolio Data

Edit [src/data/portfolio.ts](src/data/portfolio.ts) to update:
- Projects with descriptions, technologies, and GitHub links
- Work experience and achievements
- Skills organized by category
- Personal and education information

### Update Contact Information

Edit [src/components/Hero.tsx](src/components/Hero.tsx) to change email, phone, and portfolio URL.

### Modify Social Links

Update links in:
- [src/components/Hero.tsx](src/components/Hero.tsx) - Contact buttons
- [src/components/Footer.tsx](src/components/Footer.tsx) - Social media links

## 🎯 Sections

### 1. **Hero Section**
Professional introduction with call-to-action buttons and contact information.

### 2. **Projects**
Showcase featured data engineering projects with:
- Project title and timeline
- Detailed descriptions
- Key achievements/highlights
- Technology stack
- GitHub repository links

### 3. **Experience**
Display work history with:
- Job title and company
- Duration
- Key accomplishments

### 4. **Skills**
Organized skill categories including:
- Programming Languages
- Databases & Data Warehouses
- Cloud & Infrastructure
- Tools & Platforms
- Frameworks & Libraries
- Soft Skills

### 5. **Education**
Academic credentials with GPA and institution details.

### 6. **Footer**
Quick navigation links and social media connections.

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop screens (1024px and up)

## 🌙 Dark Mode

The site automatically detects and respects the user's system color scheme preference using `prefers-color-scheme` media query.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Your site will be live at a Vercel URL

### Deploy to Other Platforms

The site can be deployed to any platform that supports Node.js:
- AWS Amplify
- Netlify
- AWS EC2
- Docker containers
- Traditional servers

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for bugs and feature requests.

---

**Built with ❤️ for Data Engineers**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
