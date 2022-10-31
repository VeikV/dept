import { Fragment } from 'react'

import styles from 'components/clientNote/ClientNote.module.scss'
import { ClientNoteItem } from 'components/clientNote/clientNoteItem/ClientNoteItem'

interface Props {
  clientNotes: Record<string, any>[]
}

export const ClientNote = ({ clientNotes }: Props) => {
  const showDivider = (index: number) => index !== clientNotes.length - 1

  return (
    <div className={styles.container}>
      {clientNotes.map((note, index) => (
        <Fragment key={note.clientName}>
          <ClientNoteItem clientName={note.clientName} description={note.clientDescription} link={note.link} />
          {showDivider(index) && <div className={styles.divider} />}
        </Fragment>
      ))}
    </div>
  )
}
