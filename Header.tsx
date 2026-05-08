
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, User, Sun, Moon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('gpkv_theme') === 'dark');
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('gpkv_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('gpkv_theme', 'light');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'PKV Games', path: '/panduan-pkvgames' },
    { name: 'IDN Play', path: '/panduan-idnplay' },
    { name: 'Slot & Togel', path: '/panduan-slot&togel' },
    { name: 'Tentang', path: '/tentang-kami' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://gamespkv51.online/GAMESPKV51.ONLINE.png" alt="PKV GAMES 51" className="h-10 w-auto" />
          <span className="hidden font-heading text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent sm:inline-block">
            PKV GAMES 51
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/favorit">
            <Button variant="ghost" size="icon" className="relative" aria-label="Favorit">
              <Heart className="h-5 w-5 text-red-500" />
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link to="/admin">
            <Button variant="outline" size="icon" aria-label="Admin">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/favorit"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Favorit Saya
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
