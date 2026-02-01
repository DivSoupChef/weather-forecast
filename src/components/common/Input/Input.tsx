import type { ChangeEvent } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return <input className={styles.input} type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};
