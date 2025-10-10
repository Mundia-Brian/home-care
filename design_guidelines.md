# Rohi Homecare - Design Guidelines

## Design Approach: Healthcare Trust + Modern Innovation
**Primary Direction:** Blend medical professionalism with warm, accessible design inspired by modern healthcare platforms (ZocDoc, Medtronic) while maintaining Kenyan market appeal.

## Core Design Principles
1. **Trust First:** Clinical credibility through clean layouts and professional imagery
2. **Warmth & Accessibility:** Inviting colors that reduce medical anxiety
3. **Mobile Excellence:** Kenya's smartphone-first market demands flawless mobile UX
4. **Visual Clarity:** Clear information hierarchy for families making care decisions

## Color Palette

**Primary Colors:**
- Medical Blue: 210 70% 45% (trust, professionalism)
- Caring Teal: 180 60% 50% (compassion, healing)
- Pure White: 0 0% 100% (cleanliness, clarity)

**Accent Colors:**
- WhatsApp Green: 142 70% 49% (instant contact CTA)
- Warm Orange: 25 85% 60% (energy, care)
- Success Green: 145 65% 45% (positive outcomes)

**Neutral Palette:**
- Deep Navy: 220 30% 20% (headings)
- Slate Gray: 215 15% 45% (body text)
- Light Gray: 210 20% 95% (backgrounds)

## Typography

**Font Families:**
- Headings: Inter (700, 600) - modern, trustworthy
- Body: Inter (400, 500) - excellent readability
- Accents: Inter (600) - consistency

**Scale:**
- Hero Headlines: text-5xl md:text-7xl
- Section Titles: text-3xl md:text-4xl
- Subsections: text-xl md:text-2xl
- Body: text-base md:text-lg
- Captions: text-sm

## Layout System

**Spacing Primitives:** Consistent use of p-4, p-8, p-12, p-16, p-20, gap-6, gap-8
**Container Strategy:** max-w-7xl for full sections, max-w-4xl for content, max-w-prose for text

**Grid Patterns:**
- Service Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Pricing Plans: grid-cols-1 lg:grid-cols-3
- Team Members: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Medical Supplies: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

## Component Library

### Navigation
- Sticky header with glass-blur effect on scroll
- Mobile: Hamburger with slide-in drawer
- Desktop: Horizontal nav with dropdowns
- WhatsApp floating button (bottom-right)

### Hero Sections (Home Page)
- Full-bleed background gradient (medical blue to teal)
- 3D medical cross animation (subtle rotation)
- Two-column layout: Content left, floating 3D elements right
- Dual CTAs: Primary gradient button + WhatsApp outlined button with blur background

### Cards & Containers
- **Service Cards:** Rounded-2xl, shadow-lg, hover:shadow-2xl, transform hover:scale-105
- **Pricing Cards:** 3D flip effect on hover, glassmorphism backing
- **Testimonial Cards:** Stacked 3D carousel with depth
- **Product Cards:** Border, hover lift, image at top

### Forms
- Floating labels
- Success/error states with color coding
- Progressive disclosure for complex forms
- WhatsApp quick-contact alternative

### Buttons
- Primary: Gradient (blue to teal), rounded-full, shadow
- Secondary: Outline with blur background on images
- WhatsApp: Solid green with icon
- Sizes: sm, default, lg

### Interactive Elements
- Animated counters for statistics
- Smooth scroll-triggered animations (fade-in, slide-up)
- Tab interface with slide transitions
- Accordion with smooth expand/collapse
- Timeline with progress indicators

## Page-Specific Design

### Home Page (8 Sections)
1. Hero with 3D cross + parallax
2. Animated statistics counter grid
3. Three service overview cards (3D hover)
4. Why Choose split-screen with glassmorphism
5. How It Works timeline preview
6. Testimonials carousel (3D stack)
7. Trust badges banner
8. CTA section with gradient

### Services Page
- Tabbed interface (3 tabs: Care Plans, Specialized, Supplies)
- Pricing cards with daily/monthly toggle
- Icon-rich service grid
- Product catalog with imagery
- Sticky "Book Now" sidebar on desktop

### About Page
- Animated timeline of company history
- Team grid with hover-reveal credentials
- Interactive service area map
- Certifications carousel
- Facility gallery with lightbox

### How It Works
- Vertical timeline with step animations
- FAQ accordion with search
- Video embed section
- Quick-start CTA

## Images Strategy

**Hero Image:** Large hero image showing compassionate caregiver with elderly patient in home setting (bright, warm, professional)

**Additional Images:**
- Service cards: Icon-based, no photos (clarity)
- About page: Team professional headshots, facility photos
- Testimonials: Client photos (with permission) or avatars
- How It Works: Step illustrations or authentic care moments
- Services: Product photos for medical supplies
- Background patterns: Subtle medical iconography (ECG lines, heartbeat)

**Image Treatment:**
- Rounded corners (rounded-xl to rounded-2xl)
- Subtle overlays for text readability
- Consistent aspect ratios per section
- Lazy loading for performance

## Animations (Minimal, Purposeful)

**Use sparingly:**
- 3D medical cross (hero only)
- Card hover effects (scale, shadow)
- Number counters (statistics)
- Scroll-triggered fade-ins
- Tab transitions

**Avoid:**
- Excessive parallax
- Looping background animations
- Auto-playing carousels
- Distracting particle effects

## Accessibility & Dark Mode
- WCAG AA contrast ratios
- Keyboard navigation support
- Screen reader friendly
- **No dark mode** - healthcare contexts benefit from bright, clean interfaces

## Mobile Optimization
- Touch-friendly tap targets (min 44px)
- Simplified navigation drawer
- Stacked layouts for complex grids
- WhatsApp quick-action prominent
- Reduced animation on mobile