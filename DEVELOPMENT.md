# 👨‍💻 Development Guide - AIverse

Complete guide for developers working on the AIverse project.

## 🛠️ Development Setup

### Prerequisites
- Node.js 14+ (recommend 16+)
- npm or yarn
- VS Code (recommended)
- Git

### Initial Setup
```bash
# Clone the repository
git clone <repo-url>
cd AIverse

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Useful VS Code Extensions
- ES7+ React/Redux/React-Native Snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Thunder Client (API testing)

---

## 📁 Project Architecture

### Component Hierarchy
```
App (Main)
├── Navbar
│   └── Search input
├── Routes
│   ├── Home
│   │   └── CategoryCard[]
│   ├── Categories
│   │   └── { Category -> Subcategory[] }
│   ├── Tools
│   │   └── ToolCard[]
│   ├── ToolDetail
│   │   ├── ToolCard[] (similar)
│   │   └── Metadata
│   ├── Blog
│   │   └── BlogCard[]
│   ├── BlogDetail
│   │   ├── HTML content
│   │   ├── ToolCard[] (related)
│   │   └── BlogCard[] (more)
│   └── Search
│       └── ToolCard[]
└── Footer
```

### Component Responsibilities

| Component | Role | Props |
|-----------|------|-------|
| **Navbar** | Navigation, Search | isDarkMode, setIsDarkMode, onSearch |
| **Footer** | Footer links | isDarkMode |
| **ToolCard** | Display tool | tool, isDarkMode |
| **CategoryCard** | Display category | category, isDarkMode |
| **PricingBadge** | Show pricing | pricing, isDarkMode |

---

## 🎨 Styling Architecture

### Tailwind CSS Classes
- **Colors**: Use predefined Tailwind colors
- **Spacing**: 4px base unit (4, 8, 12, 16, 20, 24...)
- **Responsive**: Use md:, lg:, xl: prefixes
- **Dark Mode**: Use dark: prefix for dark mode styles

### Example Component Styling
```jsx
<div className={`
  p-6                              // Padding
  rounded-lg                       // Border radius
  border                          // Border
  transition-all duration-300     // Animation
  hover:shadow-lg hover:-translate-y-1  // Hover effects
  ${isDarkMode 
    ? 'bg-slate-800 border-slate-700' 
    : 'bg-white border-gray-200'
  }
`}>
```

### CSS Organization
- **Global styles**: `src/styles/globals.css`
- **Tailwind imports**: Included in globals.css
- **Custom CSS**: Added to globals.css with @apply
- **No CSS files** in components (all Tailwind)

---

## 🗂️ Data Management

### Static JSON Files
- `src/data/tools.json` - All tools database
- `src/data/blogs.json` - All blog posts

### Adding a Tool
1. Open `src/data/tools.json`
2. Add to `tools` array:
```json
{
  "id": "unique-key",
  "name": "Tool Name",
  "category": "creative",
  "subcategory": "image-generation",
  "image": "https://...",
  "description": "Short desc",
  "fullDescription": "Long desc",
  "useCase": "How to use",
  "features": ["Feature 1", "Feature 2"],
  "pricing": "Free",
  "website": "https://..."
}
```
3. Save and test in browser

### Adding a Blog Post
1. Open `src/data/blogs.json`
2. Add to `blogs` array:
```json
{
  "id": "unique-key",
  "title": "Blog Title",
  "slug": "blog-slug",
  "category": "education",
  "subcategory": "learning-assistant",
  "author": "Author Name",
  "publishDate": "2024-01-20",
  "readTime": 5,
  "image": "https://...",
  "excerpt": "Short preview",
  "content": "<h2>HTML Content</h2><p>Paragraph</p>",
  "relatedTools": ["tool-id-1", "tool-id-2"]
}
```

### Data Validation
- All `id` fields must be unique
- `category`, `subcategory` must exist
- URLs must be valid
- Images should be square for best display
- Read time should be 3-15 minutes

---

## 🔄 State Management

### App-Level State
```jsx
// Dark mode (persisted to localStorage)
const [isDarkMode, setIsDarkMode] = useState(() => {
  const saved = localStorage.getItem('darkMode');
  return saved ? JSON.parse(saved) : true;
});

// Search term (global, for navbar)
const [searchTerm, setSearchTerm] = useState('');
```

### Page-Level State
Examples in Tools.jsx:
```jsx
// Pricing filter
const [pricingFilter, setPricingFilter] = useState('');

// Memoized filtered results
const filteredTools = useMemo(() => {
  // Filtering logic
}, [categoryId, subcategoryId, searchTerm, pricingFilter]);
```

### What NOT to do
❌ Use Redux (overkill for this project)
❌ Use Context API for simple state
✅ Use useState for component state
✅ Use useParams from React Router
✅ Use useMemo for expensive computations

---

## 🚀 Routing Logic

### React Router Setup
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:categoryId" element={<Tools />} />
    <Route path="/category/:categoryId/:subcategoryId" element={<Tools />} />
    <Route path="/tool/:toolId" element={<ToolDetail />} />
  </Routes>
</BrowserRouter>
```

### useParams Hook Usage
```jsx
const { categoryId, subcategoryId, toolId, slug } = useParams();

// Filter data based on params
const tools = data.tools.filter(t => t.category === categoryId);
```

### useNavigate Hook Usage
```jsx
const navigate = useNavigate();

// Navigate to page
<button onClick={() => navigate('/categories')}>
  Go to Categories
</button>
```

---

## 🎯 Common Tasks

### Change Colors
1. Edit component: Find `isDarkMode ? 'dark-color' : 'light-color'`
2. Or edit `tailwind.config.js` to change theme

### Add a New Page
1. Create file: `src/pages/NewPage.jsx`
2. Create component with `isDarkMode` prop
3. Add route to `App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage isDarkMode={isDarkMode} />} />
   ```
4. Add navbar link: Edit `src/components/Navbar.jsx`

### Add a New Component
1. Create file: `src/components/NewComponent.jsx`
2. Accept `isDarkMode` prop for theme
3. Import and use in pages

### Responsive Image Handling
```jsx
<img
  src={imageUrl}
  alt="Description"
  className="w-full h-full object-cover"
  onError={(e) => {
    e.target.style.display = 'none'; // Hide bad image
  }}
/>
```

### Format Date
```jsx
new Date(blog.publishDate).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
// Output: January 20, 2024
```

---

## 🧪 Testing Checklist

### Functionality
- [ ] All links work
- [ ] Search returns results
- [ ] Filters work correctly
- [ ] Dark mode toggles properly
- [ ] No console errors
- [ ] Back button works

### Responsive
- [ ] Mobile (375px) - 1 column
- [ ] Tablet (768px) - 2 columns
- [ ] Desktop (1024px) - 3+ columns
- [ ] Touch-friendly buttons
- [ ] No horizontal scroll

### Performance
- [ ] Page loads fast
- [ ] No lag on scroll
- [ ] Search is responsive
- [ ] Images load properly
- [ ] No memory leaks

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

---

## 🐛 Debugging Tips

### Enable React Dev Tools
1. Install React Developer Tools extension
2. Right-click → Inspect → Components tab
3. View component props and state

### Common Issues

| Issue | Solution |
|-------|----------|
| Dark mode not applying | Check localStorage, refresh browser |
| Images not showing | Check URL is valid, add onError handler |
| Search not working | Verify searchTerm is passed correctly |
| Styles look wrong | Clear Tailwind cache: Delete node_modules, reinstall |
| Routes not working | Check path names match exactly |

### Browser Console Debugging
```javascript
// Check localStorage
console.log(localStorage.getItem('darkMode'));

// Check data structure
import data from './data/tools.json';
console.log(data);

// Test data filtering
const filtered = data.tools.filter(t => t.category === 'creative');
console.log(filtered);
```

---

## ✅ Code Standards

### File Naming
- Components: PascalCase (ToolCard.jsx)
- Pages: PascalCase (Home.jsx)
- Data files: snake_case (tools.json)
- CSS: globals.css

### Component Structure
```jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ComponentName = ({ isDarkMode, otherProp }) => {
  // Hooks
  const { id } = useParams();
  const [state, setState] = useState('');

  // Computed values
  const filtered = data.filter(/* ... */);

  // Render
  return (
    <div className={`...`}>
      {/* Content */}
    </div>
  );
};

export default ComponentName;
```

### Styling Pattern
```jsx
className={`
  base-styles
  ${isDarkMode 
    ? 'dark-specific-styles' 
    : 'light-specific-styles'
  }
`}
```

### Comments
```jsx
// Use comments sparingly
// For complex logic, explain "why" not "what"

// Good: Handle array filtering by category
const filtered = items.filter(i => i.category === selectedCategory);

// Bad: This filters the array
const filtered = items.filter(i => i.category === selectedCategory);
```

---

## 🚀 Performance Optimization

### Already Implemented
- ✅ Static data (no API calls)
- ✅ useMemo for filtering
- ✅ Lazy image loading with error handling
- ✅ CSS-in-JS via Tailwind

### Can Be Improved
- 🔄 Code splitting by route
- 🔄 Image optimization
- 🔄 Service Worker for offline
- 🔄 Lazy load images

### Optimization Example
```jsx
// Memoize expensive filter
const filteredTools = useMemo(() => {
  return data.tools.filter(tool => 
    tool.category === categoryId &&
    tool.pricing === pricingFilter
  );
}, [categoryId, pricingFilter]);

// Only recompute when dependencies change
```

---

## 📦 Build & Deployment

### Build Process
```bash
npm run build
# Outputs to /dist folder
# Minified, optimized, production-ready
```

### Deployment Steps
1. Run `npm run build`
2. Upload `dist` folder to hosting
3. Set up routing (all routes point to index.html)
4. Test production build locally first

### Recommended Hosts
- **Vercel** (easiest, free tier)
- **Netlify** (great support)
- **GitHub Pages** (free, simple)
- **AWS S3** (scalable)

---

## 📚 Useful Resources

### Documentation
- React: https://react.dev
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com
- MDN Web Docs: https://developer.mozilla.org

### Tools
- VS Code: https://code.visualstudio.com
- Vite: https://vitejs.dev
- React Icons: https://react-icons.github.io/react-icons
- Tailwind UI: https://tailwindui.com

### Learning
- React Tutorial: https://react.dev/learn
- Tailwind Docs: https://tailwindcss.com/docs
- Web Accessibility: https://www.w3.org/WAI

---

## 🤝 Contributing

### Pull Request Process
1. Create feature branch: `git checkout -b feature/name`
2. Make changes and test thoroughly
3. Commit with clear messages: `git commit -m "Add feature X"`
4. Push branch: `git push origin feature/name`
5. Create pull request with description

### Commit Message Format
```
Type: Description

feat: Add new feature
fix: Fix a bug
docs: Update documentation
refactor: Refactor code
style: Change styling
test: Add tests
```

---

## 🎯 Next Steps for Development

### Phase 1 (Current)
- ✅ Basic structure
- ✅ Pages and routing
- ✅ Dark mode
- ✅ Search functionality

### Phase 2 (Future)
- [ ] User accounts
- [ ] Tool ratings
- [ ] Comments system
- [ ] Bookmarks feature

### Phase 3 (Advanced)
- [ ] Backend API
- [ ] Database
- [ ] Admin panel
- [ ] Analytics

---

**Happy coding! 🚀**

For questions or issues, check the main README.md or create an issue.
