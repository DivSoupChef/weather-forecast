import { useWeatherStore } from '../../../../store/weatherStore';
import { Header } from '../../Header/Header';
import { AirConditions } from '../AirConditions/AirConditions';
import { Forecast } from '../Forecast/Forecast';
import { Info } from '../Info/Info';

import styles from './WeatherContent.module.scss';

export const WeatherContent = () => {
  const { loading, data } = useWeatherStore();
  return (
    <div className={styles.wrapp}>
      <Header />
      {loading ? (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <div className={styles.loaderText}>Загрузка</div>
        </div>
      ) : (
        <>
          {data ? (
            <>
              <div className={styles.content}>
                <Info />
                <AirConditions />
              </div>
              <Forecast />
            </>
          ) : (
            <div>Город не найден</div>
          )}
        </>
      )}
    </div>
  );
};
