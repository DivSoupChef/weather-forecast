import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WeatherStateData } from '../types/weather.type';

interface WeatherState {
  data: WeatherStateData | null;
  loading: boolean;
  error: string | null;
  lastCity: string;
  fetchWeather: (city: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    set => ({
      data: null,
      loading: false,
      error: null,
      lastCity: '',

      fetchWeather: async (city: string) => {
        set({ loading: true, error: null });

        try {
          const apiKey = import.meta.env.VITE_API_KEY;
          const apiUrl = import.meta.env.VITE_API_URL;

          const response = await fetch(
            `${apiUrl}/${encodeURIComponent(city)}?unitGroup=metric&lang=ru&contentType=json&key=${apiKey}`,
          );

          if (!response.ok) throw new Error('Город не найден');

          const json = await response.json();
          console.log(json);

          const data: WeatherStateData = {
            current: {
              temp: json.currentConditions.temp,
              feelslike: json.currentConditions.feelslike,
              conditions: json.currentConditions.conditions,
              humidity: json.currentConditions.humidity,
              windSpeed: json.currentConditions.windspeed,
              pressure: json.currentConditions.pressure,
              uvIndex: json.currentConditions.uvindex,
              sunrise: json.currentConditions.sunrise.split(':').slice(0, 2).join(':'),
              sunset: json.currentConditions.sunset.split(':').slice(0, 2).join(':'),
              moonPhase: json.currentConditions.moonphase,
              city: json.resolvedAddress,
              address: json.resolvedAddress,
              icon: json.currentConditions.icon,
            },

            hours: json.days[0].hours.slice(0, 24).map((h: any) => ({
              datetime: h.datetime.split(':').slice(0, 2).join(':'),
              temp: h.temp,
              conditions: h.conditions,
              icon: h.icon,
            })),

            days: json.days.slice(0, 7).map((d: any) => ({
              datetime: d.datetime,
              temp: d.temp,
              conditions: d.conditions,
              icon: d.icon,
            })),
          };

          set({ data, lastCity: city });
        } catch (err: any) {
          set({ error: err.message, data: null });
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: 'weather-storage',
      partialize: state => ({ lastCity: state.lastCity }),
    },
  ),
);
