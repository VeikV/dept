import { useCallback } from 'react'
import { Link } from 'react-router-dom'

import logo from 'assets/logo.svg'
import styles from 'components/footer/Footer.module.scss'
import { Navigation } from 'components/navigation/Navigation'
import { Typography } from 'components/typography/Typography'

export const Footer = () => {
  const scroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.menu}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Navigation />
        </div>
        <div className={styles.info}>
          <Typography tag="p" variant="xxs" style={{ color: 'var(--dept-dark-grey)', paddingRight: '2.25rem' }}>
            Chamber of Commerce: 63464101
          </Typography>
          <Typography tag="p" variant="xxs" style={{ color: 'var(--dept-dark-grey)', paddingRight: '2.25rem' }}>
            VAT: NL 8552.47.502.B01
          </Typography>
          <Typography tag="p" variant="xxs" style={{ color: 'var(--dept-dark-grey)', paddingRight: '2.25rem' }}>
            Terms and conditions
          </Typography>
          <Typography
            tag="p"
            variant="xxs"
            style={{ color: 'var(--dept-dark-grey)', marginLeft: 'auto', paddingRight: '2.25rem' }}
          >
            © 2022 Dept Agency
          </Typography>
        </div>
      </div>
      <div className={styles.scrollTop} onClick={scroll}>
        <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.20907 0.296031C8.44528 -0.0918603 8.99288 -0.100123 9.24011 0.280473L17.8959 13.6059C18.1678 14.0245 17.8754 14.5851 17.3853 14.5851H0.614676C0.132658 14.5851 -0.161205 14.041 0.0942641 13.6215L8.20907 0.296031Z"
            fill="#5115F7"
          />
          <path
            d="M6.87176 8.28665C6.87176 7.9388 7.14652 7.6568 7.48546 7.6568H10.5539C10.8929 7.6568 11.1676 7.9388 11.1676 8.28665V35.3702C11.1676 35.718 10.8929 36 10.5539 36H7.48546C7.14652 36 6.87176 35.718 6.87176 35.3702V8.28665Z"
            fill="#5115F7"
          />
        </svg>
        <Typography
          tag="p"
          variant="xs"
          style={{ color: 'var(--dept-purple)', textTransform: 'uppercase', marginTop: '1rem' }}
        >
          Top
        </Typography>
      </div>
    </footer>
  )
}
