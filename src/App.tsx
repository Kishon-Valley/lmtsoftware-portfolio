import  { useState, useEffect } from 'react';
import { Github, Code, ArrowUp, Phone } from 'lucide-react';
import { useTheme } from './ThemeContext';
import Slideshow from './components/Slideshow';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const { theme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when scrolled down 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans relative">
      <Slideshow />
      
      {/* Minimal overlay for better visibility */}
      <div className={`fixed inset-0 -z-5 ${
        theme === 'dark' 
          ? 'bg-zinc-900/25' 
          : 'bg-white/20'
      } transition-colors duration-300`} />

      <header className="fixed w-full bg-zinc-900/75 text-gray-100 backdrop-blur-[2px] z-50 transition-all duration-300 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold text-white">
              LMTsoftware
            </Link>
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400">
                Home
              </Link>
              <Link to="/services" className="text-white hover:text-cyan-400">
                Services
              </Link>
              <Link to="/projects" className="text-white hover:text-cyan-400">
                Projects
              </Link>
              <Link to="/contact" className="text-white hover:text-cyan-400">
                Contact
              </Link>
              <a
                href="https://github.com/JimmyOlsen05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400"
              >
                <Github className="w-6 h-6" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">LMTsoftware</span>
            </div>
            
            <div className="mt-6 md:mt-0">
              <a 
                href="https://github.com/JimmyOlsen05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LMTsoftware. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-4 rounded-full shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110">
              <ArrowUp className="w-6 h-6" />
            </div>
          </div>
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/233592836387"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 flex items-center gap-2 group"
        aria-label="Contact on WhatsApp"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110">
            <Phone className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-zinc-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-left flex items-center gap-2">
          <span className="text-emerald-400 font-medium whitespace-nowrap text-sm">
            Chat on WhatsApp
          </span>
          <ArrowUp className="w-4 h-4 text-emerald-400 transform rotate-90" />
        </div>
      </a>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}