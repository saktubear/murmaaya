# saktu

*Use the inspiration in the screenshot 

# Perspective Blog - Product Specification ## 1. Product Overview

Perspective is a modern, minimalist blog platform designed to share thoughtful insights on lifestyle, wellness, travel, and personal growth. With a focus on clean design and user experience, the blog provides visitors with a seamless reading experience across all devices. Built with Astro and Tailwind CSS for responsive styling (so make sure to use Atro components and not JSX). Perspective delivers optimal performance while maintaining a visually sophisticated aesthetic.

The blog features a content-focused layout with intuitive navigation, light/dark mode support, and richly formatted articles. Its minimalist design philosophy ensures content takes center stage while providing readers with an elegant, distraction-free experience. The platform is designed to be highly customizable while maintaining visual cohesion across different sections and page types.

## 2. Key Features & Requirements ### Homepage Layout
Requirements:

Clean, grid-based layout showcasing featured and recent articles
Prominent introduction section explaining the blog's purpose
Responsive design that adapts to mobile, tablet, and desktop viewports
Newsletter subscription component integrated into the page flow
Load more functionality for pagination
Mock Data:

Introduction Header: "Perspective is a space for exploring ideas, finding inspiration, and discovering new ways of seeing the world."
Introduction Text: "From mindful living and personal growth to travel experiences and creative pursuits, we share perspectives that enrich daily life. Join us as we explore topics that inspire curiosity and meaningful conversation."
Article Preview: "Finding Balance: How to Create a Sustainable Self-Care Routine" (March 19, 2025) - "Develop a personalized self-care practice that fits your lifestyle with these simple strategies for physical, mental, and emotional wellbeing."
Visual Requirements:

Article cards with consistent aspect ratio for featured images (4:3)
Clear visual indicators for featured or premium content
Subtle hover effects for interactive elements
Appropriate white space between content sections
### Navigation & Header
Requirements:

Sticky header on scroll for mobile devices
Expandable navigation menu on mobile with smooth transitions
Centered logo in header with appropriate sizing
Primary navigation with dropdown support for subcategories
Search functionality accessible from header
Account access and subscription buttons
Mock Data:

Primary Navigation: Wellness, Travel, Creativity, Growth
Secondary Navigation (Dropdown): About, Style Guide, Authors, Contact
User Actions: Sign in, Subscribe
Visual Requirements:

Smooth animation for mobile menu expansion/collapse
Proper contrast between navigation elements and background
Clear visual indicators for interactive elements
Consistent spacing and alignment across navigation components
### Article Cards
Requirements:

Consistent design for article previews on the homepage
Featured image with optimized loading performance
Publication date, title, and concise excerpt
Visual indicators for premium or featured content
Appropriate hover states for interactive feedback
Mock Data:

Article Examples:
"The Art of Slow Travel: Embracing Local Experiences" (March 15, 2025) - "Discover the benefits of unhurried exploration and how to create meaningful connections during your travels."
"Minimalist Living: Creating Space for What Matters Most" (March 10, 2025) - "Simplify your environment and mindset with practical approaches to minimalism that focus on value over quantity."
"Seasonal Skincare: Adapting Your Routine for Spring" (February 28, 2025) - "Refresh your skincare as the weather changes with gentle products and techniques that help your skin transition smoothly."
Visual Requirements:

Consistent image aspect ratio (4:3) for visual harmony
Text truncation for excerpts with appropriate ellipsis
Clean typography with proper hierarchy for dates, titles, and excerpts
Subtle animation on hover (scale: 1.02 or shadow change)
### Article Detail Page
Requirements:

Content-focused layout optimized for reading
Article header with title, subtitle, author info, and publication details
Full-width featured image with appropriate loading attributes
Well-formatted article content with support for headings, paragraphs, images, quotes
Social sharing functionality with copy link feature
Comments section with user authentication integration
Related articles section at the bottom of the page
Mock Data:

Article Header: "Seasonal Skincare: Adapting Your Routine for Spring"
Author Display: Author photo, name (Emma Thompson), publication date (February 28, 2025), estimated read time (5 min)
Article Content: Structured headings, paragraphs, images with captions, and styled blockquotes
Comments Section: User avatars, names, timestamps, and comment text with threading support
Visual Requirements:

Content width optimized for readability (max-width of 700px for text)
Proper spacing between paragraphs and sections (margin-bottom: 1.5rem)
Images with proper attribution and caption styling
Clear typographic hierarchy with distinct heading styles
### Dark Mode Support
Requirements:

Toggle between light and dark color schemes
Persistent preference storage in local storage
System preference detection by default
Appropriate color transitions between modes
Mock Data:

Light mode with white background (bg-white) and dark text (text-gray-900)
Dark mode with dark background (bg-gray-900) and light text (text-gray-100)
Accent colors that maintain proper contrast in both modes
Visual Requirements:

Smooth transition between modes (transition-duration: 300ms)
Appropriate contrast for all text elements (minimum 4.5:1 ratio)
Image adjustments for dark mode compatibility when needed
Consistent component styling across both modes
### Newsletter Subscription
Requirements:

Email collection form with validation
Clear value proposition for subscribing
Success and error state handling
Visually appealing background image or gradient
GDPR/privacy policy compliance
Mock Data:

Subscription Header: "Stay inspired."
Subscription Text: "Subscribe to receive our latest articles and insights directly in your inbox."
Form Field Placeholder: "Your email"
Button Text: "Subscribe"
Visual Requirements:

Background image with overlay for text legibility
Form with clean input field styling
Prominent, accessible subscribe button
Appropriate spacing and alignment of elements
### Comments System
Requirements:

Comment display with proper threading
User authentication integration
Basic text formatting capabilities
Comment count display
Moderation capabilities (for admin users)
Mock Data:

Avatar images for commenters
Username and timestamp for each comment
Varying length comments with replies
Reply forms with clear interaction patterns
Visual Requirements:

Clear visual hierarchy between comments and replies
Distinct styling for the comment author and commenters
Appropriate spacing between comment elements
Mobile-responsive layout adaptation
### Related Articles
Requirements:

Display 3 related articles at the end of each post
Similar design language to homepage article cards
Relevant suggestions based on tags or categories
Responsive grid layout that adjusts to screen width
Mock Data:

Three articles with titles, images, dates, and short descriptions
Relevant topical connections to the main article
Visual Requirements:

Clear section heading ("You might also like")
Consistent card styling with homepage articles
Proper spacing between related article cards
Responsive layout with appropriate breakpoints
## 3. Design System ### Color Palette
Primary Colors:

Brand Black: #171717 (text-neutral-900, bg-neutral-900)
Brand White: #ffffff (text-white, bg-white)
Accent Color: #3b82f6 (text-blue-500, bg-blue-500)
Neutral Colors:

Gray 100: #f3f4f6 (bg-gray-100)
Gray 200: #e5e7eb (bg-gray-200)
Gray 300: #d1d5db (bg-gray-300)
Gray 400: #9ca3af (text-gray-400)
Gray 500: #6b7280 (text-gray-500)
Gray 600: #4b5563 (text-gray-600)
Gray 700: #374151 (text-gray-700)
Gray 800: #1f2937 (text-gray-800)
Gray 900: #111827 (text-gray-900)
Status Colors:

Success: #10b981 (text-emerald-500, bg-emerald-500)
Warning: #f59e0b (text-amber-500, bg-amber-500)
Error: #ef4444 (text-red-500, bg-red-500)
Info: #06b6d4 (text-cyan-500, bg-cyan-500)
### Typography
Font Families:

Primary Sans-Serif: Inter (font-sans)
Primary Serif: Merriweather (font-serif)
Font Sizes:

Extra Small: 0.75rem (text-xs)
Small: 0.875rem (text-sm)
Base: 1rem (text-base)
Large: 1.125rem (text-lg)
Extra Large: 1.25rem (text-xl)
2XL: 1.5rem (text-2xl)
3XL: 1.875rem (text-3xl)
4XL: 2.25rem (text-4xl)
5XL: 3rem (text-5xl)
Font Weights:

Regular: 400 (font-normal)
Medium: 500 (font-medium)
Semibold: 600 (font-semibold)
Bold: 700 (font-bold)
Line Heights:

Tight: 1.25 (leading-tight)
Snug: 1.375 (leading-snug)
Normal: 1.5 (leading-normal)
Relaxed: 1.625 (leading-relaxed)
Loose: 2 (leading-loose)
Letter Spacing:

Tighter: -0.05em (tracking-tighter)
Tight: -0.025em (tracking-tight)
Normal: 0 (tracking-normal)
Wide: 0.025em (tracking-wide)
Wider: 0.05em (tracking-wider)
### Core Components
Buttons:

Primary Button: bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors
Secondary Button: border border-blue-500 text-blue-500 hover:bg-blue-50 py-2 px-4 rounded-md transition-colors
Text Button: text-blue-500 hover:underline font-medium
Icon Button: flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800
Cards:

Article Card: flex flex-col gap-y-4 group hover:transform hover:scale-[1.02] transition-transform
Featured Card: relative overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800
Author Card: flex items-center gap-x-3
Comment Card: space-y-2 border-b border-gray-200 dark:border-gray-700 pb-4 mb-4
Navigation:

Header: sticky top-0 bg-white dark:bg-gray-900 z-50
Mobile Menu: fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto
Dropdown: absolute top-full bg-white dark:bg-gray-800 shadow-md rounded-md py-2 min-w-[12rem]
Footer Links: flex flex-wrap justify-center gap-x-6 gap-y-2
Form Elements:

Input: w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent
Textarea: w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent
Checkbox: w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500
Label: block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1
Content Display:

Prose: prose prose-blue dark:prose-invert max-w-none
Heading Large: text-3xl md:text-4xl font-bold tracking-tight
Heading Medium: text-2xl font-bold tracking-tight
Heading Small: text-xl font-semibold
### Responsive Design Principles
Breakpoints:

Small (sm): 640px
Medium (md): 768px
Large (lg): 1024px
Extra Large (xl): 1280px
2XL (2xl): 1536px
Layout Containers:

Main container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Content container: max-w-prose mx-auto
Canvas (blog content): max-w-[700px] mx-auto
Canvas Wide: max-w-4xl mx-auto
Device-Specific Adaptations:

Mobile: Single column layout, collapsed navigation, stacked elements
Tablet: Two-column article grid, expanded navigation options
Desktop: Three-column article grid, full navigation display, enhanced spacing
Responsive Typography:

Base text: text-sm md:text-base
Headings: text-2xl md:text-3xl lg:text-4xl
Secondary text: text-xs md:text-sm
Aspect Ratios:

Article thumbnails: aspect-[4/3]
Featured banners: aspect-[16/9]
Author avatars: aspect-square rounded-full
### Animation & Transitions
Duration & Easing:

Fast: 150ms ease-in-out (hover states)
Medium: 300ms ease-in-out (menu animations)
Slow: 500ms ease-in-out (page transitions)
Interactive Elements:

Button hover: transition-colors duration-150
Card hover: transition-transform duration-200
Menu expansion: transition-all duration-300
Theme toggle: transition-colors duration-300
Loading States:

Spinner: Rotating animation for loading indicators
Skeleton: Pulsing animation for content placeholders
Fade In: Opacity transition for loaded content

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://saktu.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a9c663b2-5137-44a3-acb2-846023b8c659).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
