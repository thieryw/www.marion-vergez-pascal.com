import type { EventCardProps } from "../components/EventCard";
export type ConcertProps = Omit<EventCardProps, 
	"className" |
	"buttonLabel" |
	"link"
	>

export const concerts: {
	fr: ConcertProps;
	en?: ConcertProps;
	linkHref?: string;
}[] = [

		{
			"fr": {
				"date": "Samedi 5 novembre à 19h00",
				"title": "Concert au Stephen Vernon Studio de Dublin (Royal Irish Academy of Music)",
				"description": `Open your Eyes ; (Iain Burnside - RIAM) en coproduction avec le CNSM de Paris, la Royal Irish Academy of Music, la Guildhall School of Music and Drama of London, et le Schloss Leopoldskron of Salzburg.
Programme de mélodies et lieder (Chausson, Mahler et Schubert) 
				`

			},
			"linkHref": "https://www.riam.ie/news/iain-burnside-open-your-eyes-and-tell-me-what-you-see"
		},
		{
			"fr": {
				"date": "Samedi 7 novembre à 18h00",
				"title": "Concert au Milton Court Concert Hall (Guildhall School of Music and Drama)",
				"description": `Open your Eyes ; (Iain Burnside - RIAM) en coproduction avec le CNSM de Paris, la Royal Irish Academy of Music, la Guildhall School of Music and Drama of London, et le Schloss Leopoldskron of Salzburg.
Programme de mélodies et lieder (Chausson, Mahler et Schubert) 
				`
			},
			"linkHref": "https://www.riam.ie/news/iain-burnside-open-your-eyes-and-tell-me-what-you-see"
		},
		{
			"fr": {
				"date": "Samedi 9 novembre (heure à déterminer)",
				"title": "Concert à l’ambassade d’Irlande à Paris",
				"description": `Open your Eyes ; (Iain Burnside - RIAM) en coproduction avec le CNSM de Paris, la Royal Irish Academy of Music, la Guildhall School of Music and Drama of London, et le Schloss Leopoldskron of Salzburg.
Programme de mélodies et lieder (Chausson, Mahler et Schubert) 
				`
			},
			"linkHref": "https://www.riam.ie/news/iain-burnside-open-your-eyes-and-tell-me-what-you-see"
		},
		{
			"fr": {
				"date": "Samedi 11 novembre à 19h30",
				"title": "Concert au Schloss Leopoldskron, Salzburg",
				"description": `Open your Eyes ; (Iain Burnside - RIAM) en coproduction avec le CNSM de Paris, la Royal Irish Academy of Music, la Guildhall School of Music and Drama of London, et le Schloss Leopoldskron of Salzburg.
Programme de mélodies et lieder (Chausson, Mahler et Schubert) 
				`
			},
			"linkHref": "https://www.riam.ie/news/iain-burnside-open-your-eyes-and-tell-me-what-you-see"
		},
		{
			"fr": {
				"date": "19 novembre 2022",
				"title": "Concert autour de la vie de Rosa Bonheur",
				"description": `château de Fontainebleau

Kaëlig Boché, ténor

Thomas Tacquet Pianiste

Shanee Krön comédienne`
			},
			
		},
		{
			"fr": {
				"date": "Samedi 3. Décembre 20h30 & Dimanche 4 décembre 16h00",
				"title": "Le Messie de Haendel",
				"description": `Mezzo-soprano solo

Chœur et orchestre de St Germain en Laye

Direction Alexandre Korovitch 
				`

			},
			
		},
		{
			"fr": {
				"date": "Jeudi 8 décembre à 21 h à l'église Saint-Eustache",
				"title": "Alto solo du Requiem de Mozart",
				"description": `Avec le choeur et l’orchestre de l’académie du Palais Royal.

Direction Jean-Philippe Sarcos.
				`

			},
			
		},
		{
			"fr": {
				"date": "Dimanche 11 Décembre 2022 à 15 h à l'église Saint-François-de-Sales",
				"title": "Alto solo du Requiem de Mozart",
				"description": `Avec le choeur et l’orchestre de l’académie du Palais Royal.

Direction Jean-Philippe Sarcos.
				`

			},
			
		},
		{
			"fr": {
				"date": "Mardi 13 décembre 2022 à 20h30",
				"title": "L’isola Disabitata de Haydn, Costanza",
				"description": `Théâtre Traversière (Paris 12ème)

Lisa Chaïb, Silvia

Jordan Mouiassia, Gernando

Olivier Cesarini, Enrico

Vincent Laissy, direction musicale 

Le studi’opera
				`
			},
			
		},
		{
			"fr": {
				"date": "Vendredi 16 Décembre 2022 à 21 h à l'église de la Madeleine",
				"title": "Alto solo du Requiem de Mozart",
				"description": `Avec le choeur et l’orchestre de l’académie du Palais Royal.

Direction Jean-Philippe Sarcos.
				`

			},
			
		},
		{
			"fr": {
				"date": "Samedi 7 Janvier 2023, 20h00",
				"title": "Récital lyrique avec Margaux Poguet et Ayano Kamei au piano",
				"description": `Salle du concert des Carmes de La Rochefoucault, 
dans le cadre des concerts en diffusion de l’académie Ravel
				`

			},
			
		},
		{
			"fr": {
				"date": "7 Mars 14h30, les 8 Mars 10 Mars & 11 Mars à 20h",
				"title": "Didon et Enée de Purcell. Rôle de l’Enchanteresse",
				"description": `Direction : Leonardo Garcia Alarcón;

Mise en scène : Marc Lainé;

Orchestre du Conservatoire de Paris;

Coproduction Conservatoire National de Paris et Philarmonie de Paris 
				`

			},
			"linkHref": "https://philharmoniedeparis.fr/fr/activite/opera/23989-henry-purcell-didon-et-enee"
		},
		{
			"fr": {
				"date": "27,28 à 20h et 29 avril 2023 à 18h",
				"title": " Mezzo-soprano du Requiem de Mozart",
				"description": `Chœur et Orchestre de Pau Pays de Béarn (Oppb)
				
Armelle Khourdoïan, Soprano\n
Marion Vergez-Pascal, Alto\n
Pierre-Antoine Chaumien, Ténor\n
Matthieu Lécroart, Baryton\n
Pascale Verdier, Chœur OPPB\n
Direction : Fayçal Karoui 
				`

			},
			"linkHref": "https://www.oppb.fr/armelle-khourdoian-avril-2023/"
		},
		{
			"fr": {
				"date": "22 Juin 2023",
				"title": "Au fil de l'eau",
				"description": `Opéra de Reims

Annabelle Jarre, harpe

Thomas N’guyen, composition et direction musicale 

Collectif Io	
				`

			},
			
		},

	]