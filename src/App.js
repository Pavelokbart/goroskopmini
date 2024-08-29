import React, { useState, useEffect } from 'react';
import GoroskopBlock from './components/GoroskopBlock/GoroskopBlock';
import './App.css';

function App() {
  const [language, setLanguage] = useState('original'); // 'original' for Russian, 'translated' for English

  useEffect(() => {
    if (typeof window.Telegram !== 'undefined') {
      const tg = window.Telegram.WebApp;
      tg.ready();
      console.log('Telegram WebApp API is ready', tg);
    } else {
      console.error('Telegram WebApp API not found');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'original' ? 'translated' : 'original'));
  };

  const zodiacSigns = [
    { signkey: 'aries', icon: '♈', englishSign: 'Aries', russianSign: 'Овен' },  // Aries
    { signkey: 'taurus', icon: '♉', englishSign: 'Taurus', russianSign: 'Телец' }, // Taurus
    { signkey: 'gemini', icon: '♊', englishSign: 'Gemini', russianSign: 'Близнецы' }, // Gemini
    { signkey: 'cancer', icon: '♋', englishSign: 'Cancer', russianSign: 'Рак' }, // Cancer
    { signkey: 'leo', icon: '♌', englishSign: 'Leo', russianSign: 'Лев' }, // Leo
    { signkey: 'virgo', icon: '♍', englishSign: 'Virgo', russianSign: 'Дева' }, // Virgo
    { signkey: 'libra', icon: '♎', englishSign: 'Libra', russianSign: 'Весы' }, // Libra
    { signkey: 'scorpio', icon: '♏', englishSign: 'Scorpio', russianSign: 'Скорпион' }, // Scorpio
    { signkey: 'sagittarius', icon: '♐', englishSign: 'Sagittarius', russianSign: 'Стрелец' }, // Sagittarius
    { signkey: 'capricorn', icon: '♑', englishSign: 'Capricorn', russianSign: 'Козерог' }, // Capricorn
    { signkey: 'aquarius', icon: '♒', englishSign: 'Aquarius', russianSign: 'Водолей' }, // Aquarius
    { signkey: 'pisces', icon: '♓', englishSign: 'Pisces', russianSign: 'Рыбы' }, // Pisces
  ];

  return (
    <div className="App">
      <button onClick={toggleLanguage}>
        {language === 'original' ? 'Switch to English' : 'Переключиться на русский'}
      </button>
      {zodiacSigns.map((zodiac, index) => (
        <GoroskopBlock
          key={index}
          sign={language === 'original' ? zodiac.russianSign : zodiac.englishSign}
          icon={zodiac.icon}
          signkey={zodiac.signkey}
          language={language} // Передаем язык как пропс
        />
      ))}
    </div>
  );
}

export default App;
