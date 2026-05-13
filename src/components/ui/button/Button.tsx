import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant: 'filled' | 'outline' | 'text';
  className?: string;
  type?: 'link' | 'button';
};

export default function Button({
  href,
  children,
  variant,
  className,
  type,
  ...props
}: ButtonProps) {
  const classes = clsx(styles.btn, styles[`btn-${variant}`], className);

  if (type === 'button') {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }

  if (!href) {
    throw new Error('Please add a "href" property to the Link component')
  }

  return (
    <Link to={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
