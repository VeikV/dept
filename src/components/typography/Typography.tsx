import clsx from 'clsx'
import React, { AllHTMLAttributes } from 'react'

import styles from 'components/typography/Typography.module.scss'

interface Props {
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' | 'a'
  variant: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  children?: JSX.Element | string
  style?: React.CSSProperties
}

export const Typography = ({ tag, variant, style, children, ...attrs }: Props & AllHTMLAttributes<any>) => {
  const Component = tag

  return (
    <Component style={{ ...style }} className={clsx(styles.typography, styles[variant])} {...attrs}>
      {children}
    </Component>
  )
}
