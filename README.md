# ConTempo Studios Website

A modern, accessible website for ConTempo Studios - an interdisciplinary arts organization focused on creating transformative live performance art in Houston.

## About ConTempo Studios

ConTempo Studios is an interdisciplinary arts organization dedicated to:
- Creating accessible, boundary-breaking performance art
- Fostering collaboration between artists of different disciplines  
- Building community through live performance experiences
- Making art available to all members of the Houston community

## Features

- **Modern Design**: Clean, minimalist aesthetic with powerful imagery
- **Fully Responsive**: Optimized for all device sizes
- **Accessibility Focus**: Designed with accessibility in mind
- **Performance Optimized**: Built with Next.js for fast loading
- **Easy to Maintain**: Well-structured codebase with clear components

## Website Structure

### Pages
- **Home**: Hero section, upcoming events, mission statement, and donation CTA
- **About**: Mission, vision, values, and team information
- **Events**: Upcoming performances and past event archives
- **Media**: Photo and video galleries from performances
- **Support**: Donation packages, testimonials, and volunteer opportunities
- **Connect**: Contact information, newsletter signup, and contact form

### Key Features
- Newsletter integration (Beehiiv ready)
- Contact forms for inquiries and collaboration
- Donation package tiers
- Event management system
- Media gallery for performances
- Responsive navigation with mobile menu

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Typography**: Inter + Playfair Display fonts
- **Icons**: Heroicons
- **Language**: TypeScript

## Supabase Database Setup

The newsletter system uses Supabase for persistent data storage:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL script from `supabase-setup.sql` in your Supabase SQL editor
3. Add your Supabase credentials to `.env.local`:

```env
# Supabase Configuration
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Admin Authentication Setup

The website includes an admin dashboard for managing newsletter signups with secure authentication:

1. Create a `.env.local` file in the project root
2. Add the following environment variables:

```env
# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here

# JWT Secret (use a long, random string in production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Supabase Configuration
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
```

3. Access the admin login at `/admin/login`
4. View newsletter signups at `/admin/newsletter` (after login)
5. Export subscriber data as CSV from the admin dashboard

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is optimized for deployment on Vercel's free tier:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

## Content Management

### Adding New Events
Update the events data in `src/app/events/page.tsx`

### Updating Team Information
Modify the team section in `src/app/about/page.tsx`

### Managing Media Galleries
Add new performance galleries in `src/app/media/page.tsx`

### Newsletter Integration
The newsletter signup is ready for Beehiiv integration. Update the form submission handlers in `src/app/connect/page.tsx` to connect with your Beehiiv account.

## Customization

### Colors
The website uses a neutral color palette centered on grays. Update the colors in `src/app/globals.css` and throughout the components as needed.

### Fonts
- Headlines: Playfair Display (serif)
- Body text: Inter (sans-serif)

### Images
Replace placeholder images throughout the site with actual performance photos and team photos.

## Performance

- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- Fast loading times
- SEO optimized

## License

This project is built for ConTempo Studios. All rights reserved.
