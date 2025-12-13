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

export const Tour = {
	id: String,

	title_pl: String,
	title_en: String,

	description_pl: String,
	description_en: String,

	distance_km: Number,
	difficulty: 'easy' | 'medium' | 'hard',

	map_image_url: String,
	map_link: String,

	route_points: [
		{
			title_pl: String,
			title_en: String,
			lat: Number,
			lng: Number
		}
	],

	images: [String],

	pdf_pl: String,
	pdf_en: String,
	gpx: String,

	price: Number,
	published: Boolean
};

