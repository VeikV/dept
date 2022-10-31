import clsx from 'clsx'
import { useState } from 'react'

import styles from 'components/form/Form.module.scss'
import { Typography } from 'components/typography/Typography'
import { useViewport } from 'hooks/useViewport'

export const Form = () => {
  const [emailValue, setEmailValue] = useState('')
  const [isError, setIsError] = useState(false)
  const { isTabletLandscape } = useViewport()

  const formHeadingSize = isTabletLandscape ? 's' : 'l'

  const checkEmail = (e: React.SyntheticEvent) => {
    if (emailValue.length > 0) {
      //submit logic
    } else {
      e.preventDefault()
      setIsError(true)
    }
  }

  return (
    <div className={styles.container}>
      <Typography tag="h3" variant={formHeadingSize} style={{ color: 'var(--dept-black)', textTransform: 'uppercase' }}>
        Question? We are here to help!
      </Typography>
      <form className={styles.formContainer} onSubmit={checkEmail}>
        <div className={clsx(styles.inputContainer, styles.name)}>
          <label className={styles.label}>
            <Typography
              tag="span"
              variant="xxs"
              style={{ color: 'var(--dept-default-black)', textTransform: 'uppercase' }}
            >
              Name
            </Typography>
          </label>
          <input className={styles.input} type="text" />
        </div>
        <div className={clsx(styles.inputContainer, styles.email)}>
          <label className={styles.label}>
            <Typography
              tag="span"
              variant="xxs"
              style={{ color: 'var(--dept-default-black)', textTransform: 'uppercase' }}
            >
              Email
            </Typography>
          </label>
          <input
            className={styles.input}
            type="email"
            value={emailValue}
            onChange={e => {
              e.target.value.length > 0 && setIsError(false)
              setEmailValue(e.target.value)
            }}
            onBlur={e => {
              e.target.value.length === 0 && setIsError(true)
            }}
          />
          <div className={clsx(styles.error, { [styles.visible]: isError })}>
            <Typography tag="span" variant="xxs" style={{ color: 'var(--dept-red)' }}>
              This field is required
            </Typography>
          </div>
        </div>
        <div className={clsx(styles.inputContainer, styles.message)}>
          <label className={styles.label}>
            <Typography
              tag="span"
              variant="xxs"
              style={{ color: 'var(--dept-default-black)', textTransform: 'uppercase' }}
            >
              Message
            </Typography>
          </label>
          <textarea rows={3} className={clsx(styles.input, styles.textarea)} />
        </div>
        <button className={styles.button}>
          <Typography tag="span" variant="xs" style={{ color: 'var(--dept-black)', textTransform: 'uppercase' }}>
            Send
          </Typography>
        </button>
      </form>
    </div>
  )
}
