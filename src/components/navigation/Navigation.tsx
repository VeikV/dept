import clsx from 'clsx'
import { Link } from 'react-router-dom'

import { CustomLink } from 'components/link/Link'
import styles from 'components/navigation/Navigation.module.scss'
import { navigation } from 'utils/common'

interface Props {
  isOpen?: boolean
}

export const Navigation = ({ isOpen }: Props) => {
  return (
    <ul className={clsx(styles.navigation, { [styles.open]: isOpen })}>
      {navigation.map(item => (
        <li className={styles.item} key={item}>
          <Link to={`/${item.toLowerCase()}`}>
            <CustomLink text={item} tag="span" variant="xxs" withIcon={false} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
