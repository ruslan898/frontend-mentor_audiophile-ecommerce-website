import type { ReactNode } from 'react';
import Title from '../title/Title';
import styles from './CategoriesSubheader.module.scss';

type CategoriesSubheaderProps = {
  children: ReactNode;
};

export default function CategoriesSubheader({
  children,
}: CategoriesSubheaderProps) {
  return (
    <div className={styles.categoriesSubheader}>
      <Title level={1} variant="lg" className={styles.subheaderTitle}>
        {children}
      </Title>
    </div>
  );
}
