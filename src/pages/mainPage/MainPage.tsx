import clsx from 'clsx'

import florensis from 'assets/florensis.png'
import kempen from 'assets/kempen.png'
import museum from 'assets/museum.png'
import philips from 'assets/philips.png'
import summer from 'assets/summer.png'
import { ClientCard } from 'components/clientCard/ClientCard'
import { ClientList } from 'components/clientList/ClientList'
import { ClientNote } from 'components/clientNote/ClientNote'
import { ClientQuote } from 'components/clientQuote/ClientQuote'
import { Footer } from 'components/footer/Footer'
import { Form } from 'components/form/Form'
import { Hero } from 'components/hero/Hero'
import { CustomLink } from 'components/link/Link'
import { Typography } from 'components/typography/Typography'
import styles from 'pages/mainPage/MainPage.module.scss'
import { clientNotes1 } from 'utils/common'

export const MainPage = () => {
  return (
    <div>
      <Hero />
      <div className={styles.filters}>
        <div>
          <Typography tag="span" variant="s" style={{ color: 'var(--dept-grey)' }}>
            Show me
          </Typography>
          <CustomLink
            isDark={true}
            text="all work"
            tag="a"
            variant="s"
            withIcon={false}
            style={{ color: 'var(--dept-black)', cursor: 'pointer', paddingLeft: '.4rem' }}
          />
        </div>
        <div>
          <Typography tag="span" variant="s" style={{ color: 'var(--dept-grey)' }}>
            in
          </Typography>
          <CustomLink
            isDark={true}
            text="all industries"
            tag="a"
            variant="s"
            withIcon={false}
            style={{ color: 'var(--dept-black)', cursor: 'pointer', paddingLeft: '.4rem' }}
          />
        </div>
      </div>
      <section className={styles.sectionClientCard}>
        <ClientCard imgUrl={summer} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={kempen} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={philips} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={museum} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
      </section>
      <section className={styles.sectionClientNotes}>
        <ClientCard imgUrl={florensis} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientNote clientNotes={clientNotes1} />
      </section>
      <section className={clsx(styles.sectionClientCard, styles.noRows)}>
        <ClientCard imgUrl={summer} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={kempen} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
      </section>
      <section className={clsx(styles.sectionClientNotes, styles.reverse)}>
        <ClientNote clientNotes={clientNotes1} />
        <ClientCard imgUrl={florensis} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
      </section>
      <section className={styles.sectionClientCard}>
        <ClientCard imgUrl={summer} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={kempen} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={philips} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={museum} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
      </section>
      <ClientQuote />
      <section className={clsx(styles.sectionClientCard, styles.noRows)}>
        <ClientCard imgUrl={summer} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
        <ClientCard imgUrl={kempen} title="A Summer island in the Netherlands" client="BOL.COM" link="/" />
      </section>
      <ClientList />
      <Form />
      <Footer />
    </div>
  )
}
