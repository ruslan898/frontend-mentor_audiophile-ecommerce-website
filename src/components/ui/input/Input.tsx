import React, { useId } from 'react';
import { useField } from 'formik';
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

  const [field, meta] = useField({ name, type, ...props });

  if (type === 'radio') {
    const radioValue = (props as { value: string }).value;

    return (
      <label htmlFor={id} className={styles.inputRadio}>
        <input
          {...props}
          {...field}
          type="radio"
          name={name}
          id={id}
          value={radioValue}
        />
        {label}
      </label>
    );
  }

  return (
    <>
      <div className={styles.inputField}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          {...props}
          {...field}
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          className={styles.input}
        />
        {meta.touched && meta.error && (
          <div className={styles.error}>{meta.error}</div>
        )}
      </div>
    </>
  );
}
