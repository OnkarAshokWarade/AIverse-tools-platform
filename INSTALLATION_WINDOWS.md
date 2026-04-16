# 🪟 Windows Installation Guide - AIverse

Complete step-by-step guide for installing and running AIverse on Windows.

---

## 📋 Prerequisites Check

Before starting, verify you have:

### 1. Node.js Installed
**Check if installed:**
```cmd
# Open Command Prompt and type
node --version
npm --version
```

Should show versions like:
- `v16.0.0` or higher (for Node.js)
- `8.0.0` or higher (for npm)

**If NOT installed:**
1. Visit https://nodejs.org
2. Download Latest LTS version
3. Run the installer
4. Follow default installation steps
5. Restart your computer
6. Verify with commands above

### 2. Text Editor (VS Code recommended)
- Download from https://code.visualstudio.com
- Install and run
- Create folder for AIverse

---

## ⚡ Quick Installation (5 Minutes)

### Step 1: Open Command Prompt
```
Press: Windows Key + R
Type: cmd
Press: Enter
```

### Step 2: Navigate to Project
```cmd
# Change to project directory
cd "e:\CoDing Seekho\AIverse"

# Verify you're in the right folder
dir

# You should see these files:
# - package.json
# - README.md
# - src/ folder
# - public/ folder
```

### Step 3: Install Dependencies
```cmd
npm install
```
⏳ This takes 2-5 minutes  
💾 Creates `node_modules` folder  
✅ Shows "added XXX packages" when done

### Step 4: Start Development Server
```cmd
npm run dev
```
✅ Shows: "Local: http://localhost:3000"  
🌐 Browser opens automatically  
🛑 To stop: Press `Ctrl + C`

### Step 5: You're Done! 🎉
- Website opens in browser
- All features work immediately
- Dark mode toggle available
- Search fully functional

---

## 🔧 Detailed Setup Steps

### Opening Command Prompt (Multiple Ways)

**Method 1: Windows Key + R**
1. Press `Windows Key + R` together
2. Type `cmd`
3. Click OK

**Method 2: Start Menu**
1. Click Windows Start button
2. Type `Command Prompt`
3. Click "Command Prompt"

**Method 3: File Explorer**
1. Open File Explorer
2. Navigate to: `e:\CoDing Seekho\AIverse`
3. Hold `Shift` + Right-click in empty space
4. Click "Open Command Window Here"

### Navigating to Project Folder

```cmd
# View current location
cd

# Change drive to E:
e:

# Navigate to folder
cd "CoDing Seekho\AIverse"

# Verify location (should show these files)
dir

# Output should include:
# package.json
# README.md
# src
# public
```

### Installing Node.js Dependencies

```cmd
# Show npm version and location
npm -v

# Install all dependencies from package.json
npm install

# Alternative (faster sometimes)
npm ci

# Wait for completion (2-5 minutes)
# You'll see: "added 200+ packages"
```

### Starting Development Server

```cmd
# Start the dev server
npm run dev

# You should see:
# VITE v5.0.0 ready in XXX ms
# ➜ Local: http://localhost:3000

# Browser opens automatically
# If not, manually open http://localhost:3000
```

### Stopping the Server

```cmd
# Press these keys together:
Ctrl + C

# You'll see:
# Terminate batch job (Y/N)? _

# Type: Y
# Press: Enter

# Server stops, command prompt is ready for new commands
```

---

## 📂 Project File Locations

After installation, you'll have:

```
e:\CoDing Seekho\AIverse\
├── node_modules\          ← 500MB of libraries (don't modify)
├── src\
│   ├── components\        ← React UI components
│   ├── pages\            ← Website pages
│   ├── data\             ← JSON data (tools, blogs)
│   ├── styles\           ← CSS files
│   ├── App.jsx           ← Main app file
│   └── main.jsx          ← Entry point
├── public\
│   └── index.html        ← HTML template
├── package.json          ← Project config & dependencies
├── vite.config.js        ← Build configuration
├── tailwind.config.js    ← Styling configuration
└── README.md             ← Documentation
```

---

## 🎨 Editing Files

### Open in VS Code

**Method 1: From Command Prompt**
```cmd
# Make sure you're in the AIverse folder
# Type:
code .

# VS Code opens with the project
```

**Method 2: Drag and Drop**
1. Open File Explorer
2. Drag `AIverse` folder to VS Code icon

**Method 3: File → Open Folder**
1. Open VS Code
2. Click File → Open Folder
3. Navigate to `e:\CoDing Seekho\AIverse`
4. Click Select Folder

### Edit a File

Example: Change site name

1. Open `src\components\Navbar.jsx`
2. Find: `AIverse` (around line 15)
3. Replace with: Your desired name
4. Save: `Ctrl + S`
5. Website auto-refreshes with changes

---

## 📊 Useful Commands

### Development Commands

```cmd
# Start dev server (what you'll use most)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install a new package
npm install package-name
```

### Troubleshooting Commands

```cmd
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rmdir /s /q node_modules
npm install

# Check for errors
npm run build

# Update all packages
npm update
```

---

## 🌐 Accessing Website

### Local Development
- **URL**: http://localhost:3000
- **Available**: Only on your computer
- **Speed**: Very fast (instant refresh)

### Testing Features
- **Homepage**: Click AIverse logo
- **Categories**: Browse AI tool categories
- **Search**: Use top search bar
- **Blog**: Click Blog in navbar
- **Dark Mode**: Toggle in top-right

---

## 🐛 Troubleshooting

### Problem: "npm: command not recognized"
**Cause**: Node.js not installed or not in PATH

**Solution**:
1. Install Node.js from https://nodejs.org
2. Restart Command Prompt
3. Run `npm -v` again

### Problem: "Port 3000 already in use"
**Cause**: Another app using port 3000

**Solution Option 1**: Use different port
```cmd
# Find free port
netstat -ano | findstr :3000

# Kill process (careful!)
taskkill /PID <process-id> /F
```

**Solution Option 2**: Change port in code
1. Open `vite.config.js`
2. Change `port: 3000` to `port: 3001`
3. Save and restart `npm run dev`

### Problem: "Cannot find module"
**Cause**: Dependencies not installed

**Solution**:
```cmd
# Delete node_modules
rmdir /s /q node_modules

# Reinstall everything
npm install

# Start dev server
npm run dev
```

### Problem: Styles look broken
**Cause**: Tailwind CSS not processing

**Solution**:
```cmd
# Restart dev server
# Press Ctrl + C to stop
# Run again:
npm run dev
```

### Problem: Website doesn't load
**Cause**: Various possible causes

**Solution Checklist**:
1. Verify dev server is running
2. Check http://localhost:3000 is correct URL
3. Try different browser (Chrome, Firefox)
4. Restart dev server (`Ctrl + C`, then `npm run dev`)
5. Check Command Prompt for error messages

---

## 📦 Building for Deployment

### Create Production Build

```cmd
# From your project folder
npm run build

# Creates optimized files in "dist" folder
# About 200KB total (compressed)
```

### Deploy to Web

Upload the `dist` folder to hosting:

**Popular Free Options:**
1. **Vercel** (easiest)
   - Go to https://vercel.com
   - Import your GitHub repo
   - Auto-deploys on push

2. **Netlify**
   - Go to https://netlify.com
   - Drag and drop `dist` folder
   - Instant live website

3. **GitHub Pages**
   - Free with GitHub account
   - Setup in repository settings

4. **AWS S3**
   - Upload `dist` files
   - Configure static hosting

---

## 📚 Documentation Files

After installation, read these for more info:

| File | Purpose |
|------|---------|
| `README.md` | Complete project guide |
| `QUICK_START.md` | Quick setup guide |
| `FEATURES.md` | Detailed feature list |
| `DEVELOPMENT.md` | Developer guide |
| `PROJECT_SUMMARY.md` | Project overview |

**Read in order:**
1. `QUICK_START.md` ← Start here
2. `README.md` ← Full details
3. `FEATURES.md` ← What's available
4. `DEVELOPMENT.md` ← If you want to modify

---

## VS Code Helpful Extensions

Make development easier:

1. **ES7+ React/Redux/React-Native Snippets**
   - By dsznajder.es7-react-js-snippets
   - Fast code snippets

2. **Tailwind CSS IntelliSense**
   - By bradlc.vscode-tailwindcss
   - CSS class autocomplete

3. **Prettier Code Formatter**
   - By esbenp.prettier-vscode
   - Auto-format your code

**Install Extensions:**
1. Open VS Code
2. Click Extensions icon (left sidebar)
3. Search for extension name
4. Click Install

---

## 🔐 Important: Do NOT Modify

❌ **Don't Touch:**
- `node_modules` folder
- `package-lock.json`
- `dist` folder (generated)

✅ **Safe to Edit:**
- Files in `src` folder
- Files in `public` folder
- `tailwind.config.js`
- `vite.config.js`

---

## ✅ Verification Checklist

After installation, verify everything works:

- [ ] npm install completed without errors
- [ ] npm run dev starts without errors
- [ ] Browser opens to http://localhost:3000
- [ ] Homepage loads with categories
- [ ] Dark mode toggle works
- [ ] Search bar is functional
- [ ] Navigation links work
- [ ] No error messages in console

---

## 📞 Getting Help

### If Something Goes Wrong

1. **Check Command Prompt** for error messages
2. **Read error carefully** (it usually tells you what's wrong)
3. **Try restarting** dev server (`Ctrl + C`, then `npm run dev`)
4. **Reinstall dependencies** (see troubleshooting)
5. **Check GitHub issues** if it's a known problem
6. **Post in forums** with error message

### Common Error Messages

| Error | Meaning | Fix |
|-------|---------|-----|
| `EACCES permission denied` | No permission | Run as Admin |
| `Module not found` | Package missing | Run `npm install` |
| `Port already in use` | Port 3000 busy | Change port or kill process |
| `command not found: npm` | Node not installed | Install Node.js |

---

## 🚀 First Run Experience

When you run `npm run dev`, you should see:

```
VITE v5.0.0  ready in 230 ms

➜  Local:   http://localhost:3000/
➜  press h to show help

[timestamp] VITE Client ready
```

Then:
1. Browser automatically opens
2. Website loads
3. You see the homepage
4. All features work
5. You're ready to customize!

---

## 💡 Tips for Success

1. **Keep Command Prompt open** while developing
2. **Save files often** (`Ctrl + S`)
3. **Refresh browser** if changes don't show (`F5`)
4. **Check console errors** (F12 → Console tab)
5. **Read error messages** carefully (they help!)
6. **Backup data files** before major changes
7. **Test on mobile** using DevTools

---

## 🎓 Learning Resources

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com
- **VS Code**: https://code.visualstudio.com
- **MDN Web**: https://developer.mozilla.org

---

## 🎉 You're All Set!

Your AIverse installation is complete. You can now:

✅ Run the website locally  
✅ Browse tools and blogs  
✅ Test all features  
✅ Customize colors and content  
✅ Add new tools and blog posts  
✅ Deploy to production  

---

## 📝 Next Steps

1. **Explore** the website in browser
2. **Customize** colors in `tailwind.config.js`
3. **Add tools** by editing `src/data/tools.json`
4. **Add blogs** by editing `src/data/blogs.json`
5. **Deploy** when ready with `npm run build`

---

**Congratulations! AIverse is ready to use! 🚀**

**Questions? Check README.md or DEVELOPMENT.md**
