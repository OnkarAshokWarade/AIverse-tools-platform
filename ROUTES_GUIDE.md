# 🗺️ AIverse - Navigation & Routes Guide

Complete guide to all pages and routes in the AIverse application.

---

## 🧭 URL Routes

### Overview
```
Base URL: http://localhost:3000

Route Structure:
/                                    → Homepage
/categories                          → All categories
/category/[categoryId]               → Category tools
/category/[categoryId]/[subcategoryId] → Subcategory tools
/tool/[toolId]                       → Tool details
/blog                                → Blog listing
/blog/[slug]                         → Blog post
```

---

## 📄 Detailed Routes

### 1. Homepage (`/`)

**URL**: `http://localhost:3000/`

**What You See**:
- Hero section with title and CTA
- Information cards (What is AI, AI Tools, Why AI Matters)
- Category preview grid (all 6 categories)
- Statistics section
- FAQ or call-to-action section

**Key Elements**:
- Logo (clickable, returns home)
- Navigation menu
- Search bar
- Dark/Light toggle
- Featured categories

**Navigation To**:
- Click "Start Exploring" → `/categories`
- Click category card → `/category/{categoryId}`
- Click "Read Our Blog" → `/blog`
- Click logo → `/` (home)

---

### 2. Categories (`/categories`)

**URL**: `http://localhost:3000/categories`

**What You See**:
- All 6 main categories listed
- Each category shows its subcategories
- Subcategory cards with descriptions
- Click to explore each subcategory

**Categories Shown**:
1. Creative & Content Generation
2. Productivity & Automation
3. Code & Development
4. Data & Analytics
5. Education & Learning
6. Business & Marketing

**Navigation From**:
- Click "Categories" in navbar
- Click "Start Exploring" on homepage
- Click category card on homepage

**Navigation To**:
- Click subcategory → `/category/{categoryId}/{subcategoryId}`

---

### 3. Category Tools (`/category/{categoryId}`)

**URL**: `http://localhost:3000/category/creative`

**Parameters**:
- `categoryId`: creative, productivity, code-development, analytics, education, business

**What You See**:
- All tools in that category (all subcategories combined)
- Tool cards in grid layout
- Pricing filter buttons
- Tool count
- Category description

**Example URLs**:
- `/category/creative` → All creative tools
- `/category/productivity` → All productivity tools
- `/category/code-development` → All code tools

**Navigation To**:
- Click tool card → `/tool/{toolId}`
- Click price filter → Filters results
- Click back → `/categories`

---

### 4. Subcategory Tools (`/category/{categoryId}/{subcategoryId}`)

**URL**: `http://localhost:3000/category/creative/image-generation`

**Parameters**:
- `categoryId`: Main category ID
- `subcategoryId`: Specific subcategory ID

**What You See**:
- Only tools in that specific subcategory
- Filtered tool cards
- Pricing filters
- Reduced tool count (more specific)
- Subcategory name and description

**Example URLs**:
```
/category/creative/image-generation
/category/creative/video-creation
/category/creative/music-generation
/category/creative/writing
/category/productivity/note-taking
/category/code-development/code-generation
/category/education/learning-assistant
```

**Navigation To**:
- Click tool card → `/tool/{toolId}`
- Apply price filter → Updates results
- Click back link → Previous page

---

### 5. Tool Details (`/tool/{toolId}`)

**URL**: `http://localhost:3000/tool/midjourney`

**Parameters**:
- `toolId`: Unique tool identifier

**What You See**:
- Large tool image/logo
- Tool name and pricing
- Full description
- Use cases
- Key features (bulleted list)
- "Visit Tool" button (external link)
- Similar tools section (3 related tools)
- Breadcrumb navigation (category tags)

**Example URLs**:
```
/tool/midjourney
/tool/dall-e
/tool/stable-diffusion
/tool/chatgpt
/tool/github-copilot
/tool/canva
```

**Available Tool IDs** (25+ total):
- midjourney, dall-e, stable-diffusion
- runway, synthesia, elevenlabs
- jukebox, soundraw, chatgpt
- cohere, jasper, copy-ai
- github-copilot, tabnine, codeium
- grammarly, notion-ai, obsidian
- google-bard, perplexity, quillbot
- canva, and more...

**Navigation From**:
- Click tool card from any tools page
- Click related tool from blog post
- Click search result

**Navigation To**:
- Click "Visit Tool" → External website
- Click category tag → `/category/{categoryId}`
- Click subcategory tag → `/category/{categoryId}/{subcategoryId}`
- Click similar tool → `/tool/{othertoolId}`
- Click back → Previous page

---

### 6. Blog (`/blog`)

**URL**: `http://localhost:3000/blog`

**What You See**:
- List of all blog posts
- Featured image for each
- Blog title
- Author name
- Publish date
- Read time estimate
- Brief excerpt
- Click to read full post

**Featured Blog Posts**:
1. "Top 10 AI Tools for Image Generation"
2. "Best Free AI Tools for Everyone"
3. "Best AI Tools for Students"
4. "The Future of AI Tools"

**Navigation From**:
- Click "Blog" in navbar
- Click "Read Our Blog" on homepage

**Navigation To**:
- Click blog card → `/blog/{slug}`
- Click author link (for future filtering)

---

### 7. Blog Post (`/blog/{slug}`)

**URL**: `http://localhost:3000/blog/top-10-image-generation`

**Parameters**:
- `slug`: URL-friendly blog title

**What You See**:
- Featured image at top
- Blog title (large, bold)
- Metadata (author, date, read time)
- Full HTML content
  - Headings (H2, H3)
  - Paragraphs
  - Lists
  - Internal links to tools
- Tools mentioned in post (card layout)
- "Read More" section with 2 related posts
- Comments section (if enabled)

**Featured Blog Slugs**:
```
/blog/top-10-image-generation
/blog/best-free-ai-tools
/blog/ai-tools-students
/blog/future-of-ai
```

**Content Features**:
- Internal links to tool pages
- Related tools displayed as cards
- Professional formatting
- Mobile-friendly reading experience

**Navigation From**:
- Click blog post from `/blog` page
- Search results (if blog is in search)
- Related posts section

**Navigation To**:
- Click tool card → `/tool/{toolId}`
- Click "Read More" blog → `/blog/{other-slug}`
- Click "Back" link → `/blog`
- Click navbar logo → `/`

---

## 🔍 Search Results (Dynamic Route)

**URL**: `http://localhost:3000/` (with search term)

**Trigger**:
- Type in search bar in navbar
- Instant search as you type

**What You See**:
- Search term displayed
- Results count
- Tool cards matching search
- "No results" if nothing found

**Search Across**:
- Tool name
- Tool description
- Tool fullDescription
- Tool categories

**Navigation To**:
- Click tool card → `/tool/{toolId}`
- Click back → Previous page
- Clear search → Previous page

---

## 📊 Complete Route Map

```
                            ┌──────────────┐
                            │   Homepage   │
                            │     (/)      │
                            └──────────────┘
                                   │
                  ┌────────────────┼────────────────┐
                  │                │                │
                  ▼                ▼                ▼
        ┌──────────────────┐  ┌──────────┐  ┌──────────┐
        │  Categories      │  │  Blog    │  │  Search  │
        │  (/categories)   │  │  (/blog) │  │ (Dynamic)│
        └──────────────────┘  └──────────┘  └──────────┘
                  │                │
                  ▼                ▼
        ┌──────────────────┐  ┌──────────────────────┐
        │ Subcategories    │  │ Blog Post            │
        │ (/category/:cat) │  │ (/blog/:slug)        │
        └──────────────────┘  └──────────────────────┘
                  │                │
                  │                ├──────┐
                  ▼                │      ▼
        ┌──────────────────┐       │  ┌─────────────┐
        │ Tool Details     │       │  │ Related     │
        │ (/tool/:id)      │       │  │ Tools/Blogs │
        └──────────────────┘       │  └─────────────┘
                  │                │
                  └────────────────┘
```

---

## 🔀 Navigation Paths

### Path 1: Explore Tools
```
Homepage (/) 
  → Categories (/categories)
  → Subcategory (/category/creative/image-generation)
  → Tool Detail (/tool/midjourney)
```

### Path 2: Search
```
Homepage (/)
  → Search Bar (type "midjourney")
  → Search Results (dynamic)
  → Tool Detail (/tool/midjourney)
```

### Path 3: Read Blog
```
Homepage (/)
  → Blog (/blog)
  → Blog Post (/blog/top-10-image-generation)
  → Tool Card (related)
  → Tool Detail (/tool/dall-e)
```

### Path 4: Category Browsing
```
Homepage (/)
  → Category Card
  → Category Tools (/category/creative)
  → Tool Detail (/tool/stable-diffusion)
```

---

## 🎯 Navigation Elements

### Navbar (Always Visible)
- **Logo**: Always returns to `/`
- **Home**: Link to `/`
- **Categories**: Link to `/categories`
- **Blog**: Link to `/blog`
- **Search**: Real-time search (dynamic results)
- **Dark Mode**: Toggle (no route change)

### Category Card
- Clickable card on homepage
- Links to `/category/{categoryId}`

### Subcategory Card
- On categories page
- Links to `/category/{categoryId}/{subcategoryId}`

### Tool Card
- Displayed on multiple pages
- Links to `/tool/{toolId}`

### Blog Card
- On blog listing page
- Links to `/blog/{slug}`

### Filters
- Pricing buttons (Free, Freemium, Paid)
- No URL change (updates page results)

### Back Links
- Each detail page has back navigation
- Returns to previous page

---

## 🌐 URL Patterns

### Main Routes
```
/                                      Homepage
/categories                            All categories
```

### Category Routes
```
/category/{categoryId}                 Category main
/category/{categoryId}/subcategoryId}   Specific subcategory
```

### Content Routes
```
/tool/{toolId}                         Tool details
/blog                                  Blog listing
/blog/{slug}                           Single blog post
```

### Dynamic
Search results shown on `/` with search term

---

## 📱 Mobile Navigation

### Mobile Menu (< 768px)
- Hamburger icon shows menu
- Menu items: Home, Categories, Blog
- Search bar in mobile menu
- Click item → Navigate
- Menu closes after navigation

### Touch Navigation
- All clickable areas 44px+ height
- Large touch targets
- Smooth scrolling
- Back gestures supported

---

## ⌨️ Keyboard Navigation

### Shortcuts
- **Tab**: Navigate form elements
- **Enter**: Submit forms, follow links
- **Esc**: Close menus
- **Home**: Scroll to top
- **End**: Scroll to bottom

### Accessible Navigation
- All links keyboard accessible
- Focus indicators visible
- Semantic HTML structure
- ARIA labels where needed

---

## 🔗 URL Reference Table

| Page | URL | Parameters |
|------|-----|-----------|
| Homepage | `/` | None |
| Categories | `/categories` | None |
| Category | `/category/{id}` | categoryId |
| Subcategory | `/category/{cat}/{sub}` | categoryId, subcategoryId |
| Tool | `/tool/{id}` | toolId |
| Blog | `/blog` | None |
| Blog Post | `/blog/{slug}` | slug |
| Search | `/` | query (in navbar) |

---

## 🚀 Future Route Ideas

Potential future additions:

```
/profile                    User profile
/profile/bookmarks          Saved tools
/tool/{id}/reviews          Tool reviews
/compare                    Tool comparison
/search                     Advanced search
/admin                      Admin panel
/settings                   User settings
/about                      About page
/contact                    Contact page
/sitemap                    XML sitemap
```

---

## 🎓 Learning Routes

To learn the application:

1. **Start at Home** (`/`)
   - See overview
   - Browse categories

2. **Explore Categories** (`/categories`)
   - See all options
   - Choose one

3. **View Category** (`/category/creative`)
   - See many tools
   - Apply filters

4. **View Subcategory** (`/category/creative/image-generation`)
   - See specific tools
   - Compare similar tools

5. **View Tool** (`/tool/midjourney`)
   - Learn details
   - See similar tools

6. **Read Blog** (`/blog`)
   - Learn tips
   - Discover tools

7. **Use Search** (navbar)
   - Find specific tool
   - Quick navigation

---

## ✅ Route Testing Checklist

Test all routes work:

- [ ] `/` loads correctly
- [ ] `/categories` shows all categories
- [ ] `/category/creative` shows creative tools
- [ ] `/category/creative/image-generation` shows only image tools
- [ ] `/tool/midjourney` displays tool details
- [ ] `/blog` shows all blog posts
- [ ] `/blog/top-10-image-generation` displays blog content
- [ ] Search bar returns results
- [ ] Navigation breadcrumbs work
- [ ] Back buttons work
- [ ] All external links open in new tabs

---

**Total Routes**: 6 main + dynamic variants  
**Total Pages**: 7  
**Navigation Options**: 9+

All routes are fully functional and ready to use!

---

**Happy navigating! 🗺️**
