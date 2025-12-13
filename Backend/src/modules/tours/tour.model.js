export function createTour(data) {
	return {
		id: crypto.randomUUID(),
		title_pl: data.title_pl,
		title_en: data.title_en,
		description_pl: data.description_pl,
		description_en: data.description_en,
		distance_km: data.distance_km,
		difficulty: data.difficulty, // easy / medium / hard
		mapImage: data.mapImage,
		mapLink: data.mapLink,
		points: data.points || [],
		images: data.images || [],
		pdf_pl: data.pdf_pl,
		pdf_en: data.pdf_en,
		gpx: data.gpx,
		price: data.price,
		published: data.published ?? false,
		createdAt: new Date().toISOString()
	};
}
