import clsx from 'clsx'
import React, { AllHTMLAttributes } from 'react'

import styles from 'components/link/Link.module.scss'
import { Typography } from 'components/typography/Typography'

interface Props {
  text: string
  withIcon: boolean
  tag: 'p' | 'span' | 'div' | 'a'
  variant: 'xxs' | 'xs' | 's' | 'm' | 'l'
  style?: React.CSSProperties
  isDark?: boolean
  isActive?: boolean
}

export const CustomLink = ({
  text,
  isDark,
  withIcon,
  tag,
  variant,
  style,
  isActive,
  ...attrs
}: Props & AllHTMLAttributes<any>) => {
  return (
    <Typography tag={tag} variant={variant} style={style} {...attrs}>
      <span className={clsx(styles.container, { [styles.dark]: isDark })}>
        {withIcon && (
          <span className={styles.circle}>
            <span className={styles.innerCircle} />
          </span>
        )}
        <span className={clsx(styles.text, { [styles.active]: isActive })}>{text}</span>
      </span>
    </Typography>
  )
}
