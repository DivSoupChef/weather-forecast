import logo from '@assets/logo.svg';
import { Input } from '../../common/Input/Input';
import { useEffect, useState } from 'react';
import { useWeatherStore } from '../../../store/weatherStore';

import styles from './Header.module.scss';

import SearhIcon from '@icons/search-icon.svg';

export const Header = () => {
  const [city, setCity] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const { lastCity, fetchWeather } = useWeatherStore();

  const handleSearchCity = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (city.trim()) fetchWeather(city.trim());
    setCity('');
  };

  useEffect(() => {
    if (lastCity && lastCity.trim()) {
      fetchWeather(lastCity.trim());
    } else {
      fetchWeather('Москва');
    }
  }, []);

  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logo} alt="Weather Forecast Logo" width={238} height={33} />
      </a>
      <form onSubmit={handleSearchCity} className={styles.form}>
        <Input type="text" value={city} placeholder="Введите название города" onChange={e => setCity(e.target.value)} />
        <button type="submit">
          <SearhIcon />
        </button>
      </form>
    </header>
  );
};
