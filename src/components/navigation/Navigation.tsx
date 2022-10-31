import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import { CustomLink } from 'components/link/Link'
import styles from 'components/navigation/Navigation.module.scss'
import { navigation } from 'utils/common'

import { useViewport } from '../../hooks/useViewport'
import { Typography } from '../typography/Typography'

interface Props {
  isOpen?: boolean
  isGridRow?: boolean
  setIsOpen?: () => void
}

export const Navigation = ({ isOpen, isGridRow, setIsOpen }: Props) => {
  const { isTabletLandscape } = useViewport()
  const location = useLocation()
  const { t } = useTranslation()

  const linkSize = isGridRow ? 'xs' : 'xxs'
  const openTextSize = isTabletLandscape ? 'm' : 'xl'

  const textVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }

  const isActiveLink = (item: string) => `/${item.toLowerCase()}` === location.pathname

  return (
    <ul className={clsx(styles.navigation, { [styles.row]: isOpen || isGridRow, [styles.open]: isOpen })}>
      {isOpen && (
        <motion.li
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className={clsx(styles.item, { [styles.active]: isActiveLink('') })}
        >
          <Link to="/" onClick={setIsOpen}>
            <>
              <Typography
                tag="span"
                variant={openTextSize}
                style={{ borderBottom: '1px solid var(--dept-grey)', display: 'block' }}
              >
                <span className={styles.itemText}>{t('navigation.home')}</span>
              </Typography>
            </>
          </Link>
        </motion.li>
      )}
      {navigation.map(item => (
        <motion.li
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className={clsx(styles.item, { [styles.active]: isActiveLink(item) })}
          key={item}
        >
          <Link to={`/${item.toLowerCase()}`} onClick={setIsOpen}>
            {isOpen ? (
              <>
                <Typography
                  tag="span"
                  variant={openTextSize}
                  style={{ borderBottom: '1px solid var(--dept-grey)', display: 'block' }}
                >
                  <span className={styles.itemText}>{t(`navigation.${item}`)}</span>
                </Typography>
              </>
            ) : (
              <CustomLink isActive={isActiveLink(item)} text={item} tag="span" variant={linkSize} withIcon={false} />
            )}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
