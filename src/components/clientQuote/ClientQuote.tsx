import styles from 'components/clientQuote/ClientQuote.module.scss'
import { Typography } from 'components/typography/Typography'

export const ClientQuote = () => {
  return (
    <div className={styles.container}>
      <Typography tag="p" variant="s" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        “Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60%
        growth in online bookings in just one month””
      </Typography>
      <Typography tag="p" variant="xs" style={{ textAlign: 'center' }}>
        MATTIJS TEN DRINK - CEO, TRANSAVIA
      </Typography>
    </div>
  )
}
