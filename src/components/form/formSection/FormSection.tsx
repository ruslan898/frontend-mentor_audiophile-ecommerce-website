import { type ReactNode } from 'react';
import styles from './FormSection.module.scss';

type FormSectionProps = {
  title: string;
  children: ReactNode;
};

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <fieldset className={styles.formSection}>
      <legend>{title}</legend>
      <div className={styles.content}>{children}</div>
    </fieldset>
  );
}
