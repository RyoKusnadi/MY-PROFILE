# Ryo Kusnadi | Portfolio Website

A modern, animated personal portfolio website showcasing work experience, skills, projects, and case studies. Built with Next.js 15, React 19, TypeScript, and Framer Motion.

## 🚀 Features

### Sections
- **Hero**: Animated introduction with call-to-action buttons
- **About**: 
  - Personal introduction
  - Work experience (Shopee, Sat Nusapersada) with expandable details
  - Education background
- **Skills & Expertise**: Categorized technical skills with animations
- **My Works**:
  - **Featured Projects**: Auto-fetched GitHub repositories (sorted by stars and update date)
  - **Recent Writing**: Latest articles from Medium feed
- **Case Studies**: Detailed technical case studies with impact metrics
- **Contact**: Social links and resume download
- **Footer**: Site footer with navigation

### Technical Features
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- 🎨 Modern UI with CSS Modules and Tailwind CSS
- ⚡ Server-side rendering with Next.js App Router
- 🔄 Dynamic data fetching (GitHub API, Medium RSS)
- 📄 Resume PDF download functionality
- 🎯 SEO-friendly with proper metadata

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.9](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS 4.1.8](https://tailwindcss.com/)
  - CSS Modules
- **Animations**: [Framer Motion 12.16.0](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Smooth Scrolling**: [Lenis](https://lenis.studio/)

## 📁 Project Structure

```
my-profile/
├── public/
│   ├── me.jpg                    # Profile image
│   ├── Resume.pdf                # Resume file
│   ├── shopee-logo.png           # Company logos
│   └── ...
├── src/
│   └── app/
│       ├── components/
│       │   ├── About.tsx         # Work experience & education
│       │   ├── CaseStudies.tsx   # Technical case studies
│       │   ├── Contact.tsx       # Contact section
│       │   ├── Footer.tsx        # Site footer
│       │   ├── Header.tsx        # Navigation header
│       │   ├── Hero.tsx          # Hero section
│       │   ├── MyWorks.tsx       # Server component (fetches data)
│       │   ├── MyWorks.client.tsx # Client component (renders projects)
│       │   ├── Skills.tsx        # Skills section
│       │   └── *.module.css      # Component styles
│       ├── globals.css            # Global styles
│       ├── layout.tsx            # Root layout
│       └── page.tsx               # Home page
├── package.json
├── next.config.ts
└── tsconfig.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RyoKusnadi/MY-PROFILE.git
   cd my-profile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Your Information

1. **Profile Image**: Replace `public/me.jpg` with your photo
2. **Resume**: Replace `public/Resume.pdf` with your resume
3. **About Section**: Edit `src/app/components/About.tsx`
   - Update work experience entries
   - Modify education details
   - Adjust company logos in `public/`
4. **Skills**: Edit `src/app/components/Skills.tsx`
5. **Case Studies**: Edit `src/app/components/CaseStudies.tsx`
6. **Contact Links**: Edit `src/app/components/Contact.tsx`
7. **Hero Section**: Edit `src/app/components/Hero.tsx`

### GitHub Integration

The site automatically fetches your GitHub repositories. Update the GitHub username in:
- `src/app/components/MyWorks.tsx` (line 24): Change `RyoKusnadi` to your username

### Medium Integration

The site fetches your Medium articles. Update the Medium username in:
- `src/app/components/MyWorks.tsx` (line 50): Change `@ryo.kusnadi` to your Medium handle

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure settings
4. Deploy!

The site is optimized for Vercel's platform with:
- Automatic HTTPS
- Edge Network
- Serverless Functions
- Image Optimization

### Environment Variables

No environment variables required for basic functionality. GitHub and Medium APIs are public.

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Ryo Kusnadi**
- GitHub: [@RyoKusnadi](https://github.com/RyoKusnadi)
- Medium: [@ryo.kusnadi](https://medium.com/@ryo.kusnadi)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ If you find this project helpful, please consider giving it a star!
