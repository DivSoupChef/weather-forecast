import { useWeatherStore } from '../../../../store/weatherStore';
import styles from './AirConditions.module.scss';

export const AirConditions = () => {
  const { data } = useWeatherStore();

  return (
    <div className={styles.airConditions}>
      <h3 className={styles.title}>Состояние воздуха</h3>
      {data && (
        <div className={styles.conditions}>
          <div className={styles.condition}>
            <div className={styles.head}>
              <span>Влажность:</span>
            </div>
            <span className={styles.value}>{data.current.humidity}%</span>
          </div>
          <div className={styles.condition}>
            <div className={styles.head}>
              <span>Скорость ветра:</span>
            </div>
            <span className={styles.value}>{data.current.windSpeed} км/ч</span>
          </div>
          <div className={styles.condition}>
            <div className={styles.head}>
              <span>Атмосферное давление:</span>
            </div>
            <span className={styles.value}>{data.current.pressure} мбар</span>
          </div>
          <div className={styles.condition}>
            <div className={styles.head}>
              <span>UV индекс:</span>
            </div>
            <span className={styles.value}>{data.current.uvIndex}</span>
          </div>
        </div>
      )}
    </div>
  );
};
