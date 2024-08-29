
import './App.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    if (typeof window.Telegram !== 'undefined') {
      const tg = window.Telegram.WebApp;
      tg.ready();
      console.log('Telegram WebApp API is ready', tg);
    } else {
      console.error('Telegram WebApp API not found');
    }
  }, []);
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
