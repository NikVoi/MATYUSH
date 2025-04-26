'use client'

const BurgerButton = ({
	menuOpen,
	toggleMenu,
}: {
	menuOpen: boolean
	toggleMenu: () => void
}) => {
	return (
		<div
			className='md:hidden flex flex-col space-y-1 cursor-pointer w-8 h-6'
			onClick={toggleMenu}
		>
			<span
				className={`block w-full h-1 bg-black transition-all duration-300 ${
					menuOpen ? 'rotate-45 translate-y-2' : ''
				}`}
			></span>
			<span
				className={`block w-full h-1 bg-black transition-all duration-300 ${
					menuOpen ? 'opacity-0' : ''
				}`}
			></span>
			<span
				className={`block w-full h-1 bg-black transition-all duration-300 ${
					menuOpen ? '-rotate-45 -translate-y-2' : ''
				}`}
			></span>
		</div>
	)
}

export default BurgerButton
