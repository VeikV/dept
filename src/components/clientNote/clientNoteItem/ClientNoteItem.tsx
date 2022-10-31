import { CustomLink } from 'components/link/Link'
import { Typography } from 'components/typography/Typography'

interface Props {
  clientName: string
  description: string
  link: string
}

export const ClientNoteItem = ({ clientName, description, link }: Props) => {
  return (
    <div>
      <Typography tag="p" variant="xxs" style={{ textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        {clientName}
      </Typography>
      <Typography tag="p" variant="xxs" style={{ marginBottom: '0.75rem' }}>
        {description}
      </Typography>
      <CustomLink withIcon text="Read more" tag="a" variant="xxs" href={link} />
    </div>
  )
}
