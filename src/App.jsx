import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Tools from './pages/Tools';
import Search from './pages/Search';
import ToolDetail from './pages/ToolDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const AppLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = window.localStorage.getItem('aiverse-dark-mode');
    if (saved !== null) {
      return saved === 'true';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = searchParams.get('q') ?? '';

  useEffect(() => {
    window.localStorage.setItem('aiverse-dark-mode', String(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleSearch = (value) => {
    const cleaned = value.trim();

    if (cleaned) {
      setSearchParams({ q: value }, { replace: true });
      if (location.pathname !== '/search') {
        navigate('/search');
      }
      return;
    }

    setSearchParams({}, { replace: true });
    if (location.pathname === '/search') {
      navigate('/');
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'} min-h-screen`}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />

      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/categories" element={<Categories isDarkMode={isDarkMode} />} />
        <Route path="/category/:categoryId" element={<Tools isDarkMode={isDarkMode} />} />
        <Route path="/category/:categoryId/:subcategoryId" element={<Tools isDarkMode={isDarkMode} />} />
        <Route path="/search" element={<Search isDarkMode={isDarkMode} searchTerm={searchTerm} />} />
        <Route path="/tool/:toolId" element={<ToolDetail isDarkMode={isDarkMode} />} />
        <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
        <Route path="/blog/:slug" element={<BlogDetail isDarkMode={isDarkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
