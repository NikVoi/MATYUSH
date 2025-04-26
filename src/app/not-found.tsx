import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen text-center p-10'>
			<h2 className='text-5xl font-bold mb-4'>Страница не найдена</h2>
			<p className='mb-6 text-lg'>
				Возможно, страница была удалена или перемещена.
			</p>
			<Link href='/' className='px-6 py-3 bg-main text-white rounded-lg'>
				Вернуться на главную
			</Link>
		</div>
	)
}
