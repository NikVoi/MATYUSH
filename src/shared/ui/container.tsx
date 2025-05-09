import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	className?: string
}

const Container = ({ children, className = '' }: Props) => {
	return <div className={`container mx-auto ${className}`}>{children}</div>
}

export default Container
