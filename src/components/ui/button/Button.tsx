import React from "react"
import clsx from "clsx";
import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'alternative';
};

export default function Button({ children, variant, ...props }: ButtonProps) {
  const classes = clsx(styles.btn, styles[`btn-${variant}`])

  return <button className={classes} {...props}>{ children }</button>
}