import React, { useState, useEffect } from 'react';
import './App.css';
import Screen2 from './components/Screen2';
import Screen5 from './components/Screen5';

/**
 * PUBLIC_INTERFACE
 * App
 * Root component for the Snack Ordering Frontend.
 * Adds a theme toggle and renders initial Figma-derived screens (2 and 5).
 * Future navigation can swap between <Screen2 /> and <Screen5 />.
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [activeScreen, setActiveScreen] = useState('screen2'); // 'screen2' | 'screen5'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', background: 'transparent' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{ zIndex: 10 }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        {/* Simple temporary switcher to preview the two screens */}
        <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, display: 'flex', gap: 8 }}>
          <button
            onClick={() => setActiveScreen('screen2')}
            style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--border-color)', cursor: 'pointer' }}
            aria-label="Show screen 2"
          >
            Screen 2
          </button>
          <button
            onClick={() => setActiveScreen('screen5')}
            style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--border-color)', cursor: 'pointer' }}
            aria-label="Show screen 5"
          >
            Screen 5
          </button>
        </div>
      </header>

      {/* Center the 390x844 screen container in viewport */}
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', paddingTop: 60 }}>
        {activeScreen === 'screen2' ? <Screen2 /> : <Screen5 />}
      </div>
    </div>
  );
}

export default App;
