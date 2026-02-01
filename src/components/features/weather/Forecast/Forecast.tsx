import { useState } from 'react';
import useDateFormatter from '../../../../hooks/useDateFormatter';
import { useWheelScroll } from '../../../../hooks/useWheelScroll';
import { useWeatherStore } from '../../../../store/weatherStore';
import { Icon } from '../../../common/Icon/Icon';

import styles from './Forecast.module.scss';
import clsx from 'clsx';

type TabType = 'hourly' | 'weekly';

export const Forecast = () => {
  const [activeTab, setActiveTab] = useState<TabType>('hourly');

  const { data, loading } = useWeatherStore();
  const { formatShortDate } = useDateFormatter();

  const scrollRef = useWheelScroll<HTMLDivElement>(loading);

  return (
    <div className={styles.forecast}>
      <div className={styles.tabs}>
        <button
          className={clsx(styles.tab, activeTab === 'hourly' && styles.active)}
          onClick={() => setActiveTab('hourly')}
          type="button">
          Почасовой прогноз
        </button>
        <button
          className={clsx(styles.tab, activeTab === 'weekly' && styles.active)}
          onClick={() => setActiveTab('weekly')}
          type="button">
          Прогноз на неделю
        </button>
      </div>
      <div className={styles.cards} ref={scrollRef}>
        {activeTab === 'hourly' ? (
          <>
            {data?.hours.map((hour, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.date}>{hour.datetime}</div>
                <div className={styles.wrapp}>
                  <Icon iconName={hour.icon} />
                  <div className={styles.temp}>{hour.temp}°C</div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {data?.days.map((day, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.date}>{formatShortDate(day.datetime)}</div>
                <div className={styles.wrapp}>
                  <Icon iconName={day.icon} />
                  <div className={styles.temp}>{day.temp}°C</div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
