import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from 'assets/logo.svg'
import styles from 'components/header/Header.module.scss'
import { Navigation } from 'components/navigation/Navigation'

export const Header = () => {
  const [isOpen, toggleOpen] = useState(false)

  return (
    <div
      className={clsx(styles.headerContainer, {
        [styles.open]: isOpen,
      })}
    >
      <header
        className={clsx(styles.header, {
          [styles.open]: isOpen,
        })}
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navigation isOpen={isOpen} />
        <button className={clsx(styles.menuToggle, styles.open)} onClick={() => toggleOpen(isOpen => !isOpen)}>
          {!isOpen ? (
            <>
              <span className={clsx(styles.dot, styles.left)} />
              <span className={clsx(styles.dot, styles.middle)} />
              <span className={clsx(styles.dot, styles.right)} />
            </>
          ) : (
            <div className={styles.crossLineContainer}>
              <span className={clsx(styles.crossLine, styles.left)} />
              <span className={clsx(styles.crossLine, styles.right)} />
            </div>
          )}
        </button>
      </header>
    </div>
  )
}
