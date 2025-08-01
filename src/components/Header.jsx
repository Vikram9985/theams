import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 shadow-md  dark:bg-gray-900 z-50">
      <div className="text-xl font-bold">MyThemeApp</div>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-2 py-1 border rounded"
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>

            </nav>
          </header>
        );
      };

export default Header;
