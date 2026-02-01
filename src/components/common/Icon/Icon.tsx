import CloudDrizzleIcon from '@icons/cloud-drizzle-icon.svg';
import CloudIcon from '@icons/cloud-icon.svg';
import CloudLightningIcon from '@icons/cloud-lightning-icon.svg';
import CloudMoonIcon from '@icons/cloud-moon-icon.svg';
import CloudSunnyIcon from '@icons/cloud-sunny-icon.svg';
import MoonIcon from '@icons/moon-icon.svg';
import SnowIcon from '@icons/snow-icon.svg';
import SunIcon from '@icons/sun-icon.svg';
import WindSpeedIcon from '@icons/windspeed-icon.svg';

type IconType =
  | 'snow'
  | 'cloudy'
  | 'partly-cloudy-day'
  | 'partly-cloudy-night'
  | 'clear-day'
  | 'clear-night'
  | 'rain'
  | 'fog'
  | 'wind'
  | string;

interface IconProps {
  iconName: IconType;
}
export const Icon = ({ iconName }: IconProps) => {
  switch (iconName) {
    case 'clear-day':
      return <SunIcon />;
    case 'clear-night':
      return <MoonIcon />;
    case 'wind':
      return <WindSpeedIcon />;
    case 'cloudy':
    case 'fog':
      return <CloudIcon />;
    case 'partly-cloudy-day':
      return <CloudSunnyIcon />;
    case 'partly-cloudy-night':
      return <CloudMoonIcon />;
    case 'rain':
    case 'cloud-drizzle':
      return <CloudDrizzleIcon />;
    case 'snow':
      return <SnowIcon />;
    case 'thunderstorm':
    case 'lightning':
      return <CloudLightningIcon />;
    default:
      return <CloudIcon />;
  }
};
