import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import styles from 'components/clientCard/ClientCard.module.scss'
import { CustomLink } from 'components/link/Link'
import { Typography } from 'components/typography/Typography'

interface Props {
  imgUrl: string
  title: string
  client: string
  link: string
}

export const ClientCard = ({ imgUrl, title, client, link }: Props) => {
  const textVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt="client-card" />
      <div className={styles.imageGradient} />
      <motion.div ref={ref} initial="hidden" animate={control} variants={textVariant} className={styles.text}>
        <Typography tag="div" variant="xxs" style={{ textTransform: 'uppercase', marginBottom: '1rem' }}>
          {client}
        </Typography>
        <Typography tag="h3" variant="l" style={{ marginBottom: '1rem' }}>
          {title}
        </Typography>
        <CustomLink withIcon text="Read more" tag="a" variant="xxs" style={{ marginBottom: '1rem' }} href={link} />
      </motion.div>
    </div>
  )
}
