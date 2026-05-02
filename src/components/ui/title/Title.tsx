import clsx from 'clsx';
import styles from './Title.module.scss'

import type { ElementType, ReactNode } from "react"

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  variant: 'xl' | 'lg' | 'md' | 'sm'
  children: ReactNode;
};

export default function Title({ level, children, className, variant, ...props }: TitleProps) {
  const classes = clsx(styles.title, styles[`title-${variant}`], className);
  const Tag = `h${level}` as ElementType;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}