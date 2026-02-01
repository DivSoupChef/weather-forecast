import useDateFormatter from '../../../../hooks/useDateFormatter';
import { useWeatherStore } from '../../../../store/weatherStore';
import { Icon } from '../../../common/Icon/Icon';
import styles from './Info.module.scss';

export const Info = () => {
  const { data } = useWeatherStore();
  const { formatFullDate } = useDateFormatter();

  return (
    <>
      {data && (
        <div className={styles.info}>
          <div className={styles.head}>
            <p className={styles.city}>
              {data.current.address.charAt(0).toUpperCase() + data.current.address.slice(1)}
            </p>
            <p className={styles.date}>{formatFullDate(data.days[0].datetime)}</p>
          </div>
          <div className={styles.bottom}>
            <Icon iconName={data.current.icon} />
            <div className={styles.wrapper}>
              <span className={styles.temp}>{data.current.temp}°C</span>
              <span className={styles.conditions}>{data.current.conditions}</span>
              <span className={styles.feelslike}>Ощущается как: {data.current.feelslike}°C</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
