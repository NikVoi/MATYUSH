interface detailsType {
	id: number
	documentId: string
	title: string
	description: string
	brand: string
	slug: string
	color: string
	attributes: {
		color: string
		sizes: string[]
	}
	images: string[]
}

const fetchCatalogDetail = async (uid: string) => {
	const res = await fetch(
		`http://localhost:1337/api/product-details?id=${uid}&populate=*`
	)
	const data = await res.json()

	const item = data.data[0]
	const baseUrl = 'http://localhost:1337'
	console.log(item)

	return {
		id: item.id,
		documentId: item.documentId,
		title: item.title,
		description: item.description,
		brand: item.brand,
		slug: item.slag,
		color: item.color,
		attributes: {
			color: item.attributes.color,
			sizes: item.attributes.size,
		},
		images: item.images?.map((img: any) => baseUrl + img.url) || [],
	}
}

// useEffect(() => {
// 	if (typeof params.id === 'string') {
// 		fetchCatalogDetail(params.id).then(data => {
// 			console.log('Fetched categories:', data)
// 			setCategory(data)
// 		})
// 	}
// }, [params])
