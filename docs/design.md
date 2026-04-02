# Vogthof Landgasthof - Website Design Document

## Executive Summary

This design document outlines the comprehensive website structure, visual identity, and component architecture for the Vogthof Landgasthof website. The site serves a traditional rural German inn and restaurant located in Aalen-Röthardt, offering hotel accommodations,Swabian dining, and event hosting. The design balances traditional charm with modern usability, emphasizing warmth, hospitality, and regional authenticity.

---

## 1. Site Navigation Structure

### Primary Navigation (Main Menu)

**Tier 1 - Core Offerings:**
- [Home]
- [Hotel & Rooms]
- [Restaurant & Dining]
- [Menus]
- [Events & Celebrations]
- [Experience]
- [Contact]

### Tier 2 - Detailed Structure:

#### Hotel & Rooms
- Accommodations Overview
- Room Types (Single, Double, Family)
- Amenities & Services
- Pricing & Booking
- Virtual Tour (optional)

#### Restaurant & Dining
- Our Restaurant
- Private Dining Rooms
  - Vogtstube (up to 15 guests)
  - Braunenbergstube (up to 20 guests)
- Beer Garden (up to 50 guests)
- The Kitchen & Chefs
- Our Philosophy

#### Menus
- À la Carte Menu
- Daily Specials (Tagesessen)
- Breakfast Buffet
- Seasonal Menu
- Wine List

#### Events & Celebrations
- Private Celebrations
- Company Events
- Weddings
- Packages & Offers

#### Experience
- Activities & Nature
- Wellness & Relaxation
- Culture & Surroundings
- Local Attractions Map

#### Contact
- Find Us (Directions)
- Contact Form
- Opening Hours
- Newsletter Signup

### Footer Navigation
- Quick Links
- Contact Info
- Opening Hours Summary
- Social Links
- Legal (Impressum, Privacy)
- Language Switcher (DE/EN)

---

## 2. Page Types and Layouts

### 2.1 Home Page
**Purpose:** First impression, quick orientation, call-to-action

**Layout:**
- Full-width Hero Section with ambient inn imagery
- Brief introduction to the business
- Key CTAs: "Book Now", "View Menu", "Explore Rooms"
- Featured sections: Featured Dishes, Testimonials, Special Offers
- Location and contact summary

**Components:**
- Hero with parallax effect
- Welcome message
- Quick booking widget
- Featured content grid

### 2.2 Hotel Rooms Page
**Purpose:** Showcase accommodations, drive bookings

**Layout:**
- Room type cards in grid
- Each card: image, key amenities, price, "Book" button
- Detailed room pages with gallery and full amenities list
- Family packages section

**Components:**
- Room card grid
- Image gallery with lightbox
- Amenity icons
- Price table
- Booking calendar integration

### 2.3 Restaurant Pages
**Purpose:** Showcase dining experience, menu browsing

**Layout:**
- Multi-page approach:
  - Overview page (atmosphere, capacity)
  - Rooms page (Vogtstube, Braunenbergstube, Beer Garden)
  - Menu pages (categorized by meal type)
  - Chef/kitchen story page

**Components:**
- Room showcase with capacity indicators
- Menu categories with pricing
- Dish photography
- Chef profiles
- Reservation CTA

### 2.4 Menu Pages
**Purpose:** Display food offerings, daily specials

**Layout:**
- Categorized menu sections
- Daily specials highlighted
- Seasonal menu rotation indicator
- Downloadable PDF option

**Components:**
- Menu category accordion
- Dish cards with descriptions
- Price display
- Dietary indicators (vegetarian, gluten-free, allergens)
- "Today's Specials" ticker

### 2.5 Events Page
**Purpose:** Showcase celebration capabilities, generate inquiries

**Layout:**
- Event type sections (weddings, parties, corporate)
- Gallery of past events
- Capacity grid (restaurant, rooms, beer garden)
- Inquiry form

**Components:**
- Event card gallery
- Capacity table
- Inquiry form
- Testimonial slider for events

### 2.6 Experience/Activities Pages
**Purpose:** Highlight surrounding area, wellness offerings

**Layout:**
- Activity category grid
- Distance indicators
- Image-focused layout for scenic content
- Interactive map suggestion

**Components:**
- Activity cards with distance
- Photo gallery
- Map integration (Google Maps)
- External link handling for attractions

### 2.7 Contact/Directions Page
**Purpose:** Enable contact, provide directions

**Layout:**
- Contact form prominently displayed
- Address and map
- Opening hours table
- Quick contact buttons (call, email)

**Components:**
- Contact form with validation
- Google Maps embed
- Opening hours card
- Accessibility information

### 2.8 Legal Pages
**Purpose:** Compliance (German TMG requirements)

**Layout:**
- Clean, readable text layout
- Proper legal formatting
- Print-friendly design
- Quick navigation within page

**Components:**
- Required German legal text
- Contact information block
- Links to related legal pages

---

## 3. Color Scheme Recommendations

### Primary Palette - Warm & Inviting

**Warm Earth Tones (Primary):**
- `#8B4513` Saddle Brown - Accents, buttons, highlights
- `#D4A574` Tan - Secondary backgrounds, transitions
- `#F5DEB3` Wheat - Light backgrounds, warmth

**Forest Green (Secondary - Regional):**
- `#2D5A27` Forest Green - Navigation, headers, trustworthiness
- `#5C8D5C` Sage Green - Subtle accents, nature sections

### Neutral Backgrounds

**Cream & Warm Whites:**
- `#FFF8F0` Floral White - Main backgrounds
- `#FDF5E6` Old Lace - Card backgrounds, sections
- `#FAEBD7` Antique White - Hero sections

**Text Colors:**
- `#2C1810` Dark Brown - Primary text (warmer than black)
- `#5C4033` Dark Tan - Secondary text
- `#8B7355` Light Brown - Metadata, captions

### Accent Colors

**Hospitality Accents:**
- `#B8860B` Dark Goldenrod - CTAs, important information
- `#DAA520` Goldenrod - Hover states, highlights
- `#CD853F` Peru - Price tags, special items

### Color Usage by Section

| Section | Primary | Secondary | Background |
|---------|---------|-----------|------------|
| Header | Forest Green `#2D5A27` | Saddle Brown `#8B4513` | Cream `#FFF8F0` |
| Hero | Warm overlay | Goldenrod `#DAA520` | Full-width image |
| Hotel | Saddle Brown `#8B4513` | Tan `#D4A574` | Antique White `#FAEBD7` |
| Restaurant | Forest Green `#2D5A27` | Wheat `#F5DEB3` | Floral White `#FFF8F0` |
| Menu | Dark Brown `#2C1810` | Sage Green `#5C8D5C` | Old Lace `#FDF5E6` |
| Events | Dark Goldenrod `#B8860B` | Peru `#CD853F` | Floral White `#FFF8F0` |
| Footer | Saddle Brown `#8B4513` | Cream `#FFF8F0` | Dark Brown `#2C1810` |

---

## 4. Typography Recommendations

### Font Family Selection

**Primary Font - Headings:**
```font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
```
- Usage: H1, H2, H3 headings
- Character: Traditional, elegant, establishing trust
- Weights: 400 (regular), 700 (bold), 400 italic

**Secondary Font - Body:**
```font-family: 'Open Sans', 'Segoe UI', Helvetica, Arial, sans-serif;
```
- Usage: Body text, paragraphs, captions
- Character: Clean, readable, modern
- Weights: 400 (regular), 600 (semi-bold), 300 (light)

**Accent Font - Special Elements:**
```font-family: 'Great Vibes', 'Dancing Script', cursive;
```
- Usage: Decorative elements, logos, special announcements
- Character: Handwritten, welcoming

### Font Sizing System

| Element | Desktop | Mobile | Line Height |
|---------|---------|--------|-------------|
| H1 | 2.5rem / 40px | 1.75rem / 28px | 1.2 |
| H2 | 2rem / 32px | 1.5rem / 24px | 1.3 |
| H3 | 1.5rem / 24px | 1.25rem / 20px | 1.4 |
| H4 | 1.25rem / 20px | 1.125rem / 18px | 1.4 |
| Body Large | 1.125rem / 18px | 1rem / 16px | 1.6 |
| Body | 1rem / 16px | 1rem / 16px | 1.6 |
| Body Small | 0.875rem / 14px | 0.875rem / 14px | 1.5 |
| Caption | 0.75rem / 12px | 0.75rem / 12px | 1.4 |

### Typography Principles

**Headings:**
- Uppercase for navigation and footer
- Sentence case for page titles
- Serif fonts with warm undertones

**Body Text:**
- Left-aligned (not justified)
- Generous line height for readability
- Maximum 75 characters per line

**Special Text:**
- Call-to-action buttons: Semi-bold, uppercase
- Menu items: Medium weight, clear hierarchy
- Prices: Semi-bold, accent color

**Language Considerations:**
- German text may require adjusted letter-spacing
- Umlauts (ä, ö, ü) must render properly
- German typography conventions (quotation marks: „...)

---

## 5. Component Inventory

### 5.1 Navigation Components

**Main Navigation:**
- Desktop: Horizontal menu with dropdowns
- Mobile: Hamburger menu with slide-out drawer
- Language switcher (DE/EN flag/text)
- Search icon
- Booking CTA button

**Breadcrumbs:**
- Shows current page hierarchy
- Home > Restaurant > Private Rooms

**Secondary Navigation:**
- Sidebar navigation for detailed pages
- Table of contents for long pages

### 5.2 Hero Components

**Full-Width Hero:**
- Background image/video
- Headline overlay
- Sub-headline
- Primary CTA
- Secondary CTA
- Rating/award badges

**Split Hero:**
- Text on one side, image on other
- Alternating layout per section

### 5.3 Content Display Components

**Text Block:**
- Rich text with formatting
- German/English bilingual support
- Blockquotes for quotes and testimonials

**Info Box:**
- Key information highlighting
- Warning/note styling
- Hours, prices, contact info

**Accordion:**
- Collapsible sections for FAQs
- Menu categories
- Room details

**Tab System:**
- Language switching (DE/EN)
- Menu sections
- Room comparisons

### 5.4 Card Components

**Room Card:**
- Image with hover effect
- Room name
- Capacity indicators
- Key amenities icons
- Price from/starting at
- "Book" button
- Link to detailed page

**Menu Item Card:**
- Dish name
- Description
- Price
- Dietary indicators
- Image (optional)

**Activity Card:**
- Image
- Title
- Distance from inn
- Brief description
- External link indicator

**Event Card:**
- Image gallery
- Event type
- Capacity
- Quick inquiry button

### 5.5 Gallery Components

**Image Gallery Grid:**
- Masonry layout for varied image sizes
- Lightbox for full-screen viewing
- Caption support
- Navigation arrows

**Room Gallery:**
- Main image with thumbnails
- 360° tour integration (optional)
- Image counter

**Menu Gallery:**
- Dish photography grid
- Category filters
- Lightbox with dish details

### 5.6 Form Components

**Booking Form:**
- Date picker
- Guest count
- Room selection
- Contact information
- Special requests field
- Form validation

**Contact Form:**
- Name, email, phone
- Subject selection
- Message field
- GDPR consent checkbox

**Newsletter Signup:**
- Email input
- Privacy policy link
- Submit button
- Success message

### 5.7 Display Components

**Opening Hours Table:**
- Day | Hours format
- Closed days highlighted
- Current status indicator (Open/Closed)

**Price Display:**
- "From €XX" format
- Currency symbol
- Per person/night indicators

**Capacity Grid:**
- Room name | Capacity
- Restaurant | 80
- Vogtstube | 15
- Braunenbergstube | 20
- Beer Garden | 50

**Rating/Review Display:**
- Star rating
- Review count
- Link to reviews

### 5.8 Interactive Components

**Image Carousel:**
- Room slideshows
- Restaurant ambiance
- Event highlights
- Navigation dots and arrows

**Map Integration:**
- Google Maps embed
- Custom marker for inn location
- Directions link

**Menu Filter:**
- Category tabs
- Dietary filters (V, GF, etc.)
- Search within menu

**Date Picker:**
- Restaurant reservation
- Room availability check
- Event date selection

### 5.9 Footer Components

**Contact Info Block:**
- Phone number
- Email address
- Address
- Map link

**Quick Links:**
- Navigation to key pages
- Legal links (Impressum, Datenschutz)
- Opening hours summary

**Social Links:**
- Facebook, Instagram, etc.
- Newsletter signup

**Copyright:**
- Current year
- Design credit

---

## 6. Image Placement Strategy

### 6.1 Image Categories

**Atmospheric Photography:**
- Inn exterior and surroundings
- Seasonal variations (spring/summer/autumn/winter)
- Regional landscape
- Outdoor spaces (beer garden, terraces)

**Food & Beverage:**
- Signature dishes (high-quality, styled photography)
- Daily specials
- Wine and drinks
- Restaurant ambiance (tables set, lighting)
- Kitchen/culinary process

**Interior & Rooms:**
- Room types (each room style)
- Bathroom details
- View from rooms
- Common areas
- Restaurant interior

**Events & Celebrations:**
- Past events (with permission)
- Table settings
- Wedding details
- Corporate gatherings

**People & Team:**
- Chefs (Reiner Ilg, Johannes Hänle)
- Service staff
- Family/owners (Bernadette Ilg)

**Regional Attractions:**
- Nearby points of interest (Limesmuseum, etc.)
- Nature and hiking areas
- Wellness facilities

### 6.2 Image Placement by Page

**Home Page:**
- Hero: Full-width exterior or dining scene
- Featured: Room image, dish image, beer garden
- CTA background: Atmospheric restaurant shot

**Hotel Page:**
- Hero: Room interior
- Grid: Room type images (4:3 or 1:1 ratio)
- Detail pages: Gallery (8-12 images)
- Amenity icons: SVG illustrations

**Restaurant Pages:**
- Hero: Restaurant interior with warm lighting
- Private Rooms: Each room gallery (6-8 images)
- Beer Garden: Outdoor dining, seasonal variation
- Kitchen: Chefs at work (3-5 images)

**Menu Pages:**
- Hero: Signature dish
- Category headers: Thematic food images
- Item images: Only high-quality, representative dishes
- Gallery: 12-20 dish images rotating

**Events Page:**
- Hero: Celebratory gathering
- Gallery: Past event images (6-8 per event type)
- Detail pages: Room setup examples

**Experience Pages:**
- Hero: Relevant landscape/activity
- Activity cards: Representative images
- Regional map with image pins

**Contact/Directions Page:**
- Hero: Building exterior
- Map: Static or interactive
- Additional: Surrounding area shots

### 6.3 Image Technical Requirements

**Resolution & Quality:**
- Hero images: 1920x1080px minimum, 2x for retina
- Cards: 800x600px minimum
- Gallery detail: 1200x800px minimum
- Format: WebP with JPEG fallback

**Aspect Ratios:**
- Hero: 16:9 or 21:9
- Cards: 4:3 or 1:1
- Full-width sections: 21:9 or full
- Thumbnails: 1:1

**File Sizes:**
- Optimized hero: Under 200KB
- Cards: Under 100KB
- Gallery items: Under 150KB
- Use lazy loading for below-fold images

**Alt Text Strategy:**
- Descriptive, keyword-rich alt text
- German and English variants
- Decorative images: Empty alt ("")

### 6.4 Image Sourcing Recommendations

**Photography Priorities:**
1. Commission professional food photography
2. Stage professional interior shots
3. Capture seasonal variations
4. Document events with permission
5. Source regional attraction images (licensed or public domain)

**Stock Photo Guidelines:**
- Use for generic placeholders only
- Source authentic German/European imagery
- Avoid overly polished/corporate looking images
- Prioritize warmth and authenticity

**Image Editing:**
- Consistent color grading (warm tones)
- Slight desaturation for vintage feel (optional)
- High-quality sharpening for food images
- Maintain authenticity - avoid heavy filters

---

## 7. Implementation Notes

### 7.1 Responsive Design Strategy

**Breakpoints:**
- Mobile: Up to 480px
- Tablet Portrait: 481px - 768px
- Tablet Landscape: 769px - 1024px
- Desktop: 1025px - 1440px
- Large Desktop: 1441px+

**Mobile Considerations:**
- Touch-friendly navigation (44px minimum tap targets)
- Swipe gestures for galleries
- Simplified forms
- Accelerated Mobile Pages (AMP) for content pages

### 7.2 Performance Targets

**Core Web Vitals:**
- LCP: Under 2.5 seconds
- FID: Under 100ms
- CLS: Under 0.1

**Optimization Strategies:**
- Image optimization (WebP, responsive images)
- Lazy loading for below-fold content
- Minified CSS/JS
- Efficient caching strategy
- CDN for static assets

### 7.3 Accessibility Considerations

**WCAG 2.1 AA Compliance:**
- Contrast ratios meeting 4.5:1 minimum
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators visible
- ARIA labels where needed

**German Accessibility:**
- Proper handling of umlauts in text
- Clear, accessible language
- Machine-readable content structure

### 7.4 SEO Considerations

**On-Page SEO:**
- Proper heading hierarchy (H1 > H2 > H3)
- Meta descriptions for all pages
- Schema.org markup for:
  - Restaurant
  - Hotel
  - LocalBusiness
  - Event
  - FoodEstablishment
- XML sitemap generation
- robots.txt configuration

**Local SEO:**
- Google Business Profile integration
- Consistent NAP (Name, Address, Phone) across site
- Location-specific content
- Structured data for local business

**Content SEO:**
- German/English bilingual content properly marked
- Regular content updates (daily specials, events)
- Internal linking strategy
- Image alt text optimization

---

## 8. Design System Summary

### Color Palette Summary

| Purpose | Primary | Secondary | Accent |
|---------|---------|-----------|--------|
| Headers/Nav | `#2D5A27` Forest Green | - | - |
| Body Text | `#2C1810` Dark Brown | `#5C4033` Dark Tan | - |
| Backgrounds | `#FFF8F0` Floral White | `#FDF5E6` Old Lace | `#FAEBD7` Antique White |
| Buttons | `#8B4513` Saddle Brown | `#B8860B` Dark Goldenrod | `#DAA520` Goldenrod |
| Links | `#2D5A27` Forest Green | `#CD853F` Peru | - |

### Typography Summary

| Element | Font Family | Size (Desktop) | Weight |
|---------|-------------|----------------|--------|
| Page H1 | Playfair Display | 2.5rem | 700 |
| Section H2 | Playfair Display | 2rem | 400 |
| H3-H4 | Playfair Display | 1.5rem/1.25rem | 400/700 |
| Body | Open Sans | 1rem | 400 |
| Navigation | Open Sans | 0.875rem | 600 |
| Special | Great Vibes | 1.5rem | 400 |

### Spacing System

| Scale | Value | Usage |
|-------|-------|-------|
| XS | 0.5rem / 8px | Padding within cards |
| SM | 1rem / 16px | Card internal spacing |
| MD | 1.5rem / 24px | Section padding |
| LG | 2rem / 32px | Section spacing |
| XL | 3rem / 48px | Page section separation |
| XXL | 4rem / 64px | Page top/bottom |

### Border Radius

| Component | Radius |
|-----------|--------|
| Buttons | 4px |
| Cards | 8px |
| Images | 4px |
| Form inputs | 4px |
| Modals | 12px |

---

## 9. Content Migration Notes

### Content Structure from Existing Site

**Bilingual Content:**
- German (DE) is primary content
- English (EN) translations provided
- Maintain language toggle consistently

**Common Content Across Pages:**
- Opening hours repeated on most pages
- Contact information repeated
- Consider component-based approach for reusable content

**Content Gaps Identified:**
- Limited food photography in source material
- No dedicated testimonials/reviews section
- Seasonal content needs development

### Recommended Content Additions

1. Professional photography commission
2. Video content for atmosphere
3. Guest testimonials collection
4. Seasonal/menu update workflow documentation
5. Event portfolio with case studies

---

## 10. Timeline & Milestones

### Phase 1: Foundation (Week 1-2)
- Design system implementation
- Component library development
- Core templates creation

### Phase 2: Core Pages (Week 3-4)
- Home page implementation
- Hotel pages
- Restaurant pages
- Menu system

### Phase 3: Secondary Pages (Week 5-6)
- Events pages
- Experience pages
- Contact/directions
- Legal pages

### Phase 4: Polish (Week 7-8)
- Animations and interactions
- Performance optimization
- Accessibility audit
- Cross-browser testing
- Content migration and review

### Phase 5: Launch (Week 9)
- Final QA
- SEO implementation
- Analytics setup
- Launch and monitoring

---

*Document Version: 1.0*  
*Created: April 2026*  
*For: Vogthof Landgasthof Website Redesign*