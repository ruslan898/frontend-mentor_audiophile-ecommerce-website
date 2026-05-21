import React, { useId } from 'react';
import styles from './Input.module.scss';

type InputProps =
  | {
      type: 'text' | 'email' | 'tel' | 'number';
      name: string;
      placeholder: string;
      label: string;
    }
  | ({
      type: 'radio';
      name: string;
      label: string;
      value: string;
    } & React.InputHTMLAttributes<HTMLInputElement>);

export default function Input({
  label,
  type,
  name,
  placeholder,
  ...props
}: InputProps) {
  const id = useId();

  if (type === 'radio') {
    return (
      <label htmlFor={id} className={styles.inputRadio}>
        <input
          type="radio"
          name={name}
          id={id}
          value={(props as { value: string }).value}
          {...props}
        />
        {label}
      </label>
    );
  }

  return (
    <div className={styles.inputField}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        className={styles.input}
      />
    </div>
  );
}
