import { FC } from 'react'
import styles from './contacts.module.scss'

interface Props {
	className?: string
}

const Contacts: FC<Props> = ({ className }) => {
	return (
		<section className={styles.contacts}>
			<div className={styles.info}>
				<div className="title">text</div>
				<div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam deleniti nisi aspernatur ipsam fugit, veritatis iste rem odit accusantium. Ex provident totam facilis tempora, suscipit dolores voluptas consequatur eius corporis!</div>
				<div className="item"></div>
				<div className="item"></div>
			</div>
			<div className={styles.form}></div>
		</section>
	)
}

export default Contacts
