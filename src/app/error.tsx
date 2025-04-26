'use client'

import { useEffect } from 'react'

export default function GlobalError({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<html>
			<body className='flex flex-col items-center justify-center min-h-screen text-center p-10'>
				<h2 className='text-4xl mb-4 font-bold'>Что-то пошло не так!</h2>
				<button
					className='px-6 py-3 bg-black text-white rounded-lg mt-6'
					onClick={() => reset()}
				>
					Попробовать снова
				</button>
			</body>
		</html>
	)
}
