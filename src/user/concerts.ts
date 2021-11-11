import type { EventCardPropsVersion2 } from "../components/EventCardVersion2";
type ConcertProps = Omit<EventCardPropsVersion2, 
	"className" |
	"buttonLabel" |
	"link"
	>

export const concerts: {
	fr: ConcertProps;
	en?: ConcertProps;
	linkHref: string;
}[] = [


		{
			"fr": {
				"title": "Récital avec piano",

				"description": `Théâtre des Sablons de Neuilly sur Seine

Avec Simon Adda-Reyss.
Victor Hugo, le romantisme en musique
				`,

				"date": `17 OCTOBRE 2021,

16 h 00
			`,
			},

			"linkHref": ""
		},


		{
			"fr": {
				"title": "Récital avec orgue et trompette",

				"description": `Église Notre Dame des Saints-Anges, Mitry-Mory

Avec Domenico Séverin & Alejandro Sandler. Programme baroque.
Inauguration de l’orgue Haerpfer-Herman.
				`,

				"date": `14 NOVEMBRE 2021,

16 h 00
			`,
			},
			"linkHref": "https://www.unidivers.fr/event/inauguration-de-lorgue-renove-mitry-le-neuf-eglise-notre-dame-des-saints-anges-2021-11-14/"
		},



		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",

				"description": `Salle Historique du premier Conservatoire de Paris
				
Concert Coup de foudre avec orchestre.
Avec Mathys Lagier et Adrien Fournaison Orchestre du Palais Royal, direction J.P Sarcos.

				`,
				"date": `17 NOVEMBRE 2021,

15 h 00
			`,

			},
			"linkHref": "https://le-palaisroyal.com/concert/deux-hommes-et-une-femme/"
		},



		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",
				"description": `Salle Historique du premier Conservatoire de Paris

Avec Kévin Amiel et Adrien Fournaison.
Orchestre du Palais Royal, direction J.P Sarcos.
				`,
				"date": `17 NOVEMBRE 2021,

20 h 30
			`,
			},
			"linkHref": "https://le-palaisroyal.com/concert/deux-hommes-et-une-femme/"
		},

		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",
				"description": `Concert Coup de foudre avec orchestre

Avec Mathys Lagier et Adrien Fournaison Orchestre du Palais Royal, 
direction J.P Sarcos Salle Historique du premier Conservatoire de Paris

				`,
				"date": `18 NOVEMBRE 2021,

15 h 00
			`,
			},
			"linkHref": ""
		},

		{
			"fr": {
				"title": "Récital lyrique Deux hommes et une femme",
				"description": `Salle Historique du premier Conservatoire de Paris

Avec Kévin Amiel et Adrien Fournaison.
Orchestre du Palais Royal, direction J.P Sarcos.
				`,
				"date": `18 NOVEMBRE 2021,

20 h 30
			`,
			},
			"linkHref": "https://le-palaisroyal.com/concert/deux-hommes-et-une-femme/"
		},



		{
			"fr": {
				"title": "Concert de la classe d’ensemble du CNSM",
				"description": `Salle d’art lyrique du CNSM de Paris

Concert Mozart sur la trilogie de Da Ponte Orchestre du CNSM, direction A. Altinoglu.
				`,
				"date": `3 DECEMBRE 2021,

19 h 00
			`,
			},
			"linkHref": "https://www.conservatoiredeparis.fr/fr/saison-20202021/concert-de-la-classe-de-direction-dorchestre-dalain-altinoglu-complet"
		},



		{
			"fr": {
				"title": "Concert Gastronomique",
				"description": `Théâtre de Gray

Concert autour de la gastronomie Ayaka Uenomachi & Adrienne Dubois.
				`,
				"date": `5 DECEMBRE 2021,

11 h 00
			`,
			},
			"linkHref": "https://festival-voixla.fr/programme/jeunes-talents/"
		},



		{
			"fr": {
				"title": " Récital lyrique Deux hommes et une femme",
				"description": `Théâtre de Lunéville

Avec Mathys Lagier et Adrien Fournaison Version piano avec Orlando Bass.
				`,
				"date": `8 JANVIER 2022,

20 h 30
			`,
			},
			"linkHref": "https://billetterie-theatre-luneville.tickandlive.com/reserver/deux-hommes-et-une-femme/7347"
		},


		{
			"fr": {
				"title": "L’affaire Clemenza",
				"description": `Adaptation de Franck Krawczyk de La Clémence de Titus de Mozart Rôle d’Annio.
Companie Plein Jour
				`,
				"date": `4 FEVRIER 2022,

20 h 30
			`,
			},
			"linkHref": "http://pleinjour.com/laffaire-clemenza/"
		},



		{
			"fr": {
				"title": "Récital lyrique autour de Carmen de Bizet",
				"description": `Théâtre Traversière

Adaptation par le Studiopera.
Avec Jean Goyetche (ténor) et Vincent Laissy (Piano, direction de chant).
				`,
				"date": `16 FEVRIER 2022,

18 h 30
			`,
			},
			"linkHref": "https://www.theatre-traversiere.fr/recital-lyrique?iframe=true&category=apero- spectacle"
		},



		{
			"fr": {
				"title": "Là - Haut de Maurice Yvain, opéra bouffe en 3 actes",
				"description": `Une des élues(Sterling). Orchestre des Frivolités Parisiennes

22 fev. 2022 | Théâtre Impérial – Opéra de Compiègne,
6 mars 2022 | Théâtre Raymond Devos de Tourcoing,
Du 18 au 31 mars 2022 | Théâtre de l’Athénée Louis-Jouvet
				`,
			},
			"linkHref": "https://lesfrivolitesparisiennes.com/spectacle/la-haut/",
		}

	]