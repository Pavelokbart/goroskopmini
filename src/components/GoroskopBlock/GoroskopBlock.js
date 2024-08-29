import React, { useState } from 'react';
import './GoroskopBlock.css';

function GoroskopBlock({ sign, icon, signkey, language }) {
    const [horoscope, setHoroscope] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchHoroscope = async () => {
        setLoading(true);
        console.log(signkey)
        try {
            const response = await fetch('https://poker247tech.ru/get_horoscope/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sign: signkey,
                    language: language,
                    period: 'today',
                }),
            });

            const data = await response.json();
            setHoroscope(data.horoscope);
        } catch (error) {
            console.error('Error fetching horoscope:', error);
            setHoroscope(language === 'original' ? 'Ошибка загрузки предсказания.' : 'Error loading prediction.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="goroskop-block">
            <div className="goroskop-icon">{icon}</div>
            <div className="goroskop-content">
                <h3>{sign}</h3>
                {horoscope ? (
                    <p>{horoscope}</p>
                ) : (
                    <p>{language === 'original' ? 'Прочитай мой сегодняшний гороскоп!' : 'Read my horoscope for today!'}</p>
                )}
            </div>
            <div className="goroskop-footer">
                <button className="goroskop-button" onClick={fetchHoroscope} disabled={loading}>
                    {loading ? (language === 'original' ? 'Загрузка...' : 'Loading...') : (language === 'original' ? 'твой гороскоп' : 'Your Horoscope')}
                </button>
            </div>
        </div>
    );
}

export default GoroskopBlock;
