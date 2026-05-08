import React from "react"
import clsx from "clsx";
import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode;
  variant: 'filled' | 'outline' | 'text';
  className?: string
};

export default function Button({ children, variant, className, ...props }: ButtonProps) {
  const classes = clsx(styles.btn, styles[`btn-${variant}`], className)

  return <button className={classes} {...props}>{ children }</button>
}