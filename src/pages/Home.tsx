import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setProducts(res.data));
  }, []);

  const isSidebar = theme === 'theme2';
  const isCardGrid = theme === 'theme3';

  return (
    <div className={`pt-24 px-6 ${isSidebar ? 'flex' : ''}`}>
      {/* Sidebar for Theme 2 */}
      {/* {isSidebar && (
        <aside className="w-1/4 p-4 bg-gray-800 text-white min-h-screen fixed left-0 top-16">
          <h2 className="text-lg font-bold mb-4">Sidebar</h2>
          <ul className="space-y-2">
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </aside>
      )} */}

      <main className={`${isSidebar ? 'ml-1/4 w-3/4 pl-8' : 'w-full'}`}>
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p className="mb-4">Welcome to the multi-theme switcher app.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>

        {/* Product display */}
        <div className={`mt-6 ${isCardGrid ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4' : 'space-y-4'}`}>
          {products.map((item: any) => (
            <div
              key={item.id}
              className={`p-4 border rounded shadow transition duration-300 ${
                isCardGrid ? 'bg-yellow-100 hover:scale-105' : 'bg-white'
              }`}
            >
              <img src={item.image} alt={item.title} className="h-32 object-contain mx-auto" />
              <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
