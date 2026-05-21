import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.scss';

type BaseButtonProps = {
  children: React.ReactNode;
  variant: 'filled' | 'outline' | 'text';
  className?: string;
};

type ButtonProps =
  | ({
      type: 'button' | 'submit';
    } & BaseButtonProps &
      React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      type: 'link';
      href: string;
    } & BaseButtonProps);

export default function Button({
  type,
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(styles.btn, styles[`btn-${variant}`], className);

  if (type === 'link') {
    return (
      <Link to={(props as { href: string }).href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
