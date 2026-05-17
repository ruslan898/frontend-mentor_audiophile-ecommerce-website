import { useId } from 'react';
import styles from './Input.module.scss';

type InputProps =
  | {
      type: 'text' | 'email' | 'tel' | 'number';
      name: string;
      placeholder: string;
      label: string;
    }
  | {
      type: 'radio';
      name: string;
      label: string;
    };

export default function Input(props: InputProps) {
  const id = useId();

  if (props.type === 'radio') {
    return (
      <label htmlFor={id} className={styles.inputRadio}>
        <input type="radio" name={props.name} id={id} />
        {props.label}
      </label>
    );
  }

  const { label, type, name, placeholder } = props;

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
