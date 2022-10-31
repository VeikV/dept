import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import logoDark from 'assets/logo-dark.svg'
import logo from 'assets/logo.svg'
import styles from 'components/header/Header.module.scss'
import { CustomLink } from 'components/link/Link'
import { Navigation } from 'components/navigation/Navigation'
import { useViewport } from 'hooks/useViewport'

const textVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}

const MenuDots = () => (
  <motion.div initial="hidden" animate="visible" variants={textVariant}>
    <span className={clsx(styles.dot, styles.left)} />
    <span className={clsx(styles.dot, styles.middle)} />
    <span className={clsx(styles.dot, styles.right)} />
  </motion.div>
)

const MenuCross = () => (
  <motion.div className={styles.crossLineContainer} initial="hidden" animate="visible" variants={textVariant}>
    <span className={clsx(styles.crossLine, styles.left)} />
    <span className={clsx(styles.crossLine, styles.right)} />
  </motion.div>
)

export const Header = () => {
  const [isOpen, toggleOpen] = useState(false)
  const { isTabletLandscape } = useViewport()
  const { i18n } = useTranslation()

  const isCurrentLocale = (locale: string) => i18n.language === locale

  return (
    <div
      className={clsx(styles.headerContainer, {
        [styles.open]: isOpen,
      })}
    >
      {isOpen && (
        <div className={styles.language}>
          <ul className={styles.languageList}>
            <li
              className={clsx(styles.languageItem, { [styles.active]: isCurrentLocale('en') })}
              onClick={() => i18n.changeLanguage('en')}
            >
              GLOBAL
            </li>
            <li
              className={clsx(styles.languageItem, { [styles.active]: isCurrentLocale('nl') })}
              onClick={() => i18n.changeLanguage('nl')}
            >
              NEDERLAND
            </li>
            <li className={styles.languageItem} onClick={() => i18n.changeLanguage('en')}>
              UNITED STATES
            </li>
            <li className={styles.languageItem} onClick={() => i18n.changeLanguage('en')}>
              IRELAND
            </li>
            <li className={styles.languageItem} onClick={() => i18n.changeLanguage('en')}>
              UNITED KINGDOM
            </li>
            <li className={styles.languageItem} onClick={() => i18n.changeLanguage('de')}>
              DEUTSCHLAND
            </li>
            <li className={styles.languageItem} onClick={() => i18n.changeLanguage('de')}>
              DEUTSCHLAND
            </li>
          </ul>
        </div>
      )}
      <header
        className={clsx(styles.header, {
          [styles.open]: isOpen,
        })}
      >
        <Link to="/">
          <img className={styles.logo} src={isTabletLandscape && !isOpen ? logoDark : logo} alt="logo" />
        </Link>
        {!isTabletLandscape && !isOpen && <Navigation isOpen={isOpen} />}
        <button className={clsx(styles.menuToggle, styles.open)} onClick={() => toggleOpen(isOpen => !isOpen)}>
          {!isOpen ? (
            isTabletLandscape ? (
              <CustomLink
                isDark
                withIcon={false}
                text="Menu"
                tag="a"
                variant="xxs"
                style={{ color: 'var(--dept-black)', textTransform: 'uppercase' }}
              />
            ) : (
              <MenuDots />
            )
          ) : (
            <MenuCross />
          )}
        </button>
      </header>
      {isOpen && <Navigation isOpen={isOpen} setIsOpen={() => toggleOpen(open => !open)} />}
    </div>
  )
}
