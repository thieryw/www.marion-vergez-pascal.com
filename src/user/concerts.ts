import { EventCardProps } from "../components/EventCard";
type ConcertProps = Omit<EventCardProps, 
	"className" |
	"linkLabel" |
	"link" |
	"eventImageUrl"
>

export const concerts: {
	fr: ConcertProps;
	en?: ConcertProps;
	linkHref: string;
}[] = [

	{
		"fr": {
			"title": "Récital avec orgue et trompette",

			"description": `
				Programme baroque. Avec Domenico Séverin & Alejandro Sandler
			`,

			"address": "Collégiale Notre-Dame & Saint Loup de Montereau",
			"day": 3,
			"month": "Octobre",
			"year": 2021,
			"hour": "16 h 00"
		},
		"linkHref": ""
	},

	{
		"fr": {
				"title": "Récital avec piano",

				"description": `
					Avec Simon Adda-Reyss.
					Victor Hugo, le romantisme en musique
				`,

				"address": "Théâtre des Sablons de Neuilly sur Seine",
				"day": 17,
				"month": "Octobre",
				"year": 2021,
				"hour": "16 h 00"
			},
			"linkHref": ""
		},

		{
			"fr": {
				"title": "Récital avec orgue et trompette",

				"description": `
					Avec Domenico Séverin & Alejandro Sandler. Programme baroque.
					Inauguration de l’orgue Haerpfer-Herman.
				`,

				"address": "Église Notre Dame des Saints-Anges, Mitry-Mory",
				"day": 14,
				"month": "Novembre",
				"year": 2021,
				"hour": "16 h 00"
			},
			"linkHref": ""
		},

		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",

				"description": `
					Concert Coup de foudre avec orchestre.
					Avec Mathys Lagier et Adrien Fournaison Orchestre du Palais Royal, direction J.P Sarcos.

				`,

				"address": "Salle Historique du premier Conservatoire de Paris",
				"day": 17,
				"month": "Novembre",
				"year": 2021,
				"hour": "15 h 00"
			},
			"linkHref": ""
		},

		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",
				"description": `
					Avec Kévin Amiel et Adrien Fournaison.
					Orchestre du Palais Royal, direction J.P Sarcos.
				`,
				"address": "Salle Historique du premier Conservatoire de Paris",
				"day": 17,
				"month": "Novembre",
				"year": 2021,
				"hour": "20 h 30"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",
				"description": `
					Concert Coup de foudre avec orchestre.
					Avec Mathys Lagier et Adrien Fournaison Orchestre du Palais Royal, direction J.P Sarcos.
				`,
				"address": "Salle Historique du premier Conservatoire de Paris",
				"day": 18,
				"month": "Novembre",
				"year": 2021,
				"hour": "15 h 00"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",
				"description": `
					Avec Kévin Amiel et Adrien Fournaison.
					Orchestre du Palais Royal, direction J.P Sarcos.
				`,
				"address": "Salle Historique du premier Conservatoire de Paris",
				"day": 18,
				"month": "Novembre",
				"year": 2021,
				"hour": "20 h 30"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"title": "Concert de la classe d’ensemble du CNSM",
				"description": `
					Concert Mozart sur la trilogie de Da Ponte Orchestre du CNSM, direction A. Altinoglu.
				`,
				"address": "Salle d’art lyrique du CNSM de Paris",
				"day": 3,
				"month": "Décembre",
				"year": 2021,
				"hour": "19 h 00"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"title": "Concert Gastronomique",
				"description": `
					Concert autour de la gastronomie Ayaka Uenomachi & Adrienne Dubois.
				`,
				"address": "Théâtre de Gray",
				"day": 5,
				"month": "Décembre",
				"year": 2021,
				"hour": "11 h 00"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"title": " Récital lyrique Deux hommes et une femme",
				"description": `
					Avec Mathys Lagier et Adrien Fournaison Version piano avec Orlando Bass.
				`,
				"address": "Théâtre de Lunéville",
				"day": 8,
				"month": "Janvier",
				"year": 2022,
				"hour": "20 h 30"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"title": "L’affaire Clemenza",
				"description": `
					Adaptation de Franck Krawczyk de La Clémence de Titus de Mozart Rôle d’Annio.
					Companie Plein Jour
				`,
				"day": 4,
				"month": "Février",
				"year": 2022,
				"hour": "20 h 30"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"title": "Récital lyrique autour de Carmen de Bizet",
				"description": `
					Adaptation par le Studiopera.
					Avec Jean Goyetche (ténor) et Vincent Laissy (Piano, direction de chant).
				`,
				"address": "Théâtre Traversière",
				"day": 16,
				"month": "Février",
				"year": 2022,
				"hour": "18 h 30"
			},
			"linkHref": ""
		},

		{
			"fr": {
				"title": "Là - Haut de Maurice Yvain, opéra bouffe en 3 actes",
				"description": `
					Une des élues(Sterling). Orchestre des Frivolités Parisiennes
				`,

				"additionalTextBlocks": [
					"22 fev. 2022 | Théâtre Impérial – Opéra de Compiègne",
					"6 mars 2022 | Théâtre Raymond Devos de Tourcoing",
					"Du 18 au 31 mars 2022 | Théâtre de l’Athénée Louis-Jouvet"
				]
			},
			"linkHref": "",
		}

	]