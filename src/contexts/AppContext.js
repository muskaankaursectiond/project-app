import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, cart, addToCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}