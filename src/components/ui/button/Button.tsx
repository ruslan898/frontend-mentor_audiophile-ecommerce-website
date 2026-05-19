import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps =
  | {
      type: 'button';
      children: React.ReactNode;
      variant: 'filled' | 'outline' | 'text';
      className?: string;
      onClick: React.MouseEventHandler<HTMLButtonElement>;
    }
    | {
      type: 'link';
      href: string;
      children: React.ReactNode;
      variant: 'filled' | 'outline' | 'text';
      className?: string;
    };

export default function Button(props: ButtonProps) {
  const { type, children, variant, className } = props;
  const classes = clsx(styles.btn, styles[`btn-${variant}`], className);

  if (type === 'button') {
    return (
      <button type="button" className={classes} onClick={props.onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link to={props.href} className={classes}>
      {children}
    </Link>
  );
}
