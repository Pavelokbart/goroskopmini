import React, { useState, useEffect } from 'react';
import GoroskopBlock from './components/GoroskopBlock/GoroskopBlock';
import './App.css';

function App() {
  const [language, setLanguage] = useState('original');

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
    setLanguage((prevLang) => (prevLang === 'original' ? 'translated' : 'original'));
  };

  const zodiacSigns = [
    { signkey: 'aries', icon: '♈', englishSign: 'Aries', russianSign: 'Овен', period: '03-21 — 04-19' },  // Aries
    { signkey: 'taurus', icon: '♉', englishSign: 'Taurus', russianSign: 'Телец', period: '04-20 — 05-20' }, // Taurus
    { signkey: 'gemini', icon: '♊', englishSign: 'Gemini', russianSign: 'Близнецы', period: '05-21 — 06-20' }, // Gemini
    { signkey: 'cancer', icon: '♋', englishSign: 'Cancer', russianSign: 'Рак', period: '06-21 — 07-22' }, // Cancer
    { signkey: 'leo', icon: '♌', englishSign: 'Leo', russianSign: 'Лев', period: '07-23 — 08-22' }, // Leo
    { signkey: 'virgo', icon: '♍', englishSign: 'Virgo', russianSign: 'Дева', period: '08-23 — 09-22' }, // Virgo
    { signkey: 'libra', icon: '♎', englishSign: 'Libra', russianSign: 'Весы', period: '09-23 — 10-22' }, // Libra
    { signkey: 'scorpio', icon: '♏', englishSign: 'Scorpio', russianSign: 'Скорпион', period: '10-23 — 11-21' }, // Scorpio
    { signkey: 'sagittarius', icon: '♐', englishSign: 'Sagittarius', russianSign: 'Стрелец', period: '11-22 — 12-21' }, // Sagittarius
    { signkey: 'capricorn', icon: '♑', englishSign: 'Capricorn', russianSign: 'Козерог', period: '12-22 — 01-19' }, // Capricorn
    { signkey: 'aquarius', icon: '♒', englishSign: 'Aquarius', russianSign: 'Водолей', period: '01-20 — 02-18' }, // Aquarius
    { signkey: 'pisces', icon: '♓', englishSign: 'Pisces', russianSign: 'Рыбы', period: '02-19 — 03-20' }, // Pisces
  ];

  return (
    <div className="App">
      <div className='app-container'>
        <button className='switch-button' onClick={toggleLanguage}>
          {language === 'original' ? 'Switch to English' : 'Переключиться на русский'}
        </button>
        {zodiacSigns.map((zodiac, index) => (
          <GoroskopBlock
            key={index}
            sign={language === 'original' ? zodiac.russianSign : zodiac.englishSign}
            icon={zodiac.icon}
            signkey={zodiac.signkey}
            language={language}
            period={zodiac.period}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
