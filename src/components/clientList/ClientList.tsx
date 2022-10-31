import styles from 'components/clientList/ClientList.module.scss'
import { Typography } from 'components/typography/Typography'
import { clients } from 'utils/common'

export const ClientList = () => {
  return (
    <div className={styles.container}>
      <Typography tag="h3" variant="m" style={{ marginBottom: '2rem' }}>
        Clients
      </Typography>
      <Typography tag="p" variant="xs" style={{ marginBottom: '4rem' }}>
        We value a great working relationship with our clients above all else. It’s why they often come to our parties.
        It’s also why we’re able to challenge and inspire them to reach for the stars.
      </Typography>
      <div className={styles.clients}>
        {clients.map(clientLogo => (
          <img key={clientLogo} className={styles.clientLogo} src={clientLogo} alt="client-logo" />
        ))}
      </div>
    </div>
  )
}
