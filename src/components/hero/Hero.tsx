import { motion } from 'framer-motion'

import styles from 'components/hero/Hero.module.scss'
import { Typography } from 'components/typography/Typography'

export const Hero = () => {
  const textVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }

  return (
    <div className={styles.hero}>
      <motion.div initial="hidden" animate="visible" variants={textVariant} className={styles.heroText}>
        <Typography tag="p" variant="xxs" style={{ textTransform: 'uppercase', marginBottom: '2rem' }}>
          Florensis
        </Typography>
        <Typography tag="h3" variant="m">
          <>
            A selection of projects that
            <Typography tag="span" variant="m" style={{ fontWeight: 700 }}>
              &nbsp;pioneer tech&nbsp;
            </Typography>
            and
            <Typography tag="span" variant="m" style={{ fontWeight: 700 }}>
              &nbsp;marketing&nbsp;
            </Typography>
            to help brands stay ahead.
          </>
        </Typography>
      </motion.div>
    </div>
  )
}
