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
		},

		{
			"fr": {
				"date": "VENDREDI 11 & SAMEDI 12 MARS, 20h30",
				"title": "Mezzo solo du Requiem de Mozart ",
				"description": `Avec Clémence Danvy, Mathys Lagier, et Adrien Fournaison
Chœur et orchestre en formation philharmonique du COGE (Choeur et orchestre des Grandes Écoles)
Direction :  Alizė Léhon
				`,
			},
			"linkHref": "https://mgecoge.org/la-saison",
		},
		{
			"fr": {
				"date": "MERCREDI 13, JEUDI 14 et VENDREDI 15 AVRIL",
				"title": "Le Parlement des Reines",
				"description": `Spectacle de Emmanuelle Cordoliani.
Atelier lyrique du CNSM de Paris.
Direction musicale : Yann Molénat.
Salle Fleuret du Conservatoire National Supérieur de Paris.
				`,
			},
			"linkHref": ""
		},
		{
			"fr": {
				"date": "SAMEDI 14 & DIMANCHE 15 MAI, 16 H & 17 H",
				"title": "Concert récital pour les tout-petits et leurs parents",
				"description": `Dans le cadre des concerts pour mélomanes en culottes courtes du Palais Royal.

Lycée Buffon
				`,
			},
			"linkHref": "https://le-palaisroyal.com/concert/melomanes-en-culotte-courte",
		},
		{
			"fr": {
				"date": "VENDREDI 3 JUIN, 19 H",
				"title": "Pas si bête",
				"description": `D'après Le souriceau stupide, op.56 de Dmitri Chostakovitch.

Projet pédagogique 

Choeurs et oeuvres de musique russe Dramaturgie, conception et mise en scène Plein jour.
Direction musicale Franck Krawczyk.
Théâtre des Bouffes du Nord.
				`,
			},
			"linkHref": "https://www.bouffesdunord.com/fr/la-saison/pas-si-bete",
		},
		{
			"fr": {
				"date": "JEUDI 9 JUIN, 19 H",
				"title": "Au fil de l'eau",
				"description": `Création sonore de Thomas N’guyen pour mezzo-soprano, 
				harpe, et casques.`,
			},
			"linkHref": "https://www.unidivers.fr/event/au-fil-de-leau-abbeville-somme-2022-06-09/amp/"
		},
		{
			"fr": {
				"date": "JEUDI 11 JUIN, 20 H 30",
				"title": "Mezzo-solo de la Missa Solemnis K.139 (messe de l'orphelinat) de Mozart ",
				"description": `Orchestre symphonique kimbanguiste de Kinshasa.
Choeur de l'Orchestre de Paris.
Choeur de jeunes de l'Orchestre de Paris.
Armand Diangienda W., direction.
Grande salle Pierre Boulez de la Philharmonie.
				`

			},
			"linkHref": "https://philharmoniedeparis.fr/fr/activite/concert-symphonique/22808-orchestre-symphonique-kimbanguiste-de-kinshasa"
		},
		{
			"fr": {
				"date": "Samedi 18 Juin à 20h",
				"title": "Requiem de Mozart ( Temple de L’Oratoire du Louvre )",
				"description": `Mezzo-soprano solo; 
Choeur et orchestre de l’Oratoire du Louvre ;
Alexandre Korovitch, direction.
				`,
			},
			"linkHref": "https://www.fnacspectacles.com/place-spectacle/ticket-evenement/musique-sacree-requiem-de-mozart-man31590-lt.htm"
		},
		{
			"fr": {
				"date": "Dimanche 19 Juin à 17h",
				"title": "Concert à Notre Dame de Bethune",
				"description": `Maitrise de Notre-Dame de Paris;
Direction Henri Chalet
				`,
			},
			"linkHref": ""
		},
		{
			"fr": {
				"date": "Lundi 20 Juin à 20h",
				"title": "Récital de mélodies françaises",
				"description": `Temple de Neuilly-sur-Seine.
Simon Adda Reyss, piano.
				`,
			},
			"linkHref": ""
		},
		{
			"fr": {
				"date": "Lundi 23 Juin à 21h",
				"title": "Château Rosa Bonheur, Thomery",
				"description": `Récital  « Rosa Bonheur, dame nature »Soirée d'ouverture du festival Emmenez-moi (en partenariat avec l'ONF).
Bastien Rimondi, ténor.
Thomas Taquet, pianiste.
				`,
			},
			"linkHref": "https://www.seineetmarnevivreengrand.fr/actualites/festival-emmenez-moi-du-24-juin-au-10-juillet-2022/"
		},
		{
			"fr": {
				"date": "18, 20 & 25 JUIN, 16 H 00",
				"title": "Mini-concerts autour des Fables de Lafontaine",
				"description": `Saint-Saëns, Aboulker, Offenbach, et bien d’autres ... 
Avec les musiciens de l’Orchestre de Chambre de Paris

				`,
			},
			"linkHref": "https://www.orchestredechambredeparis.com/action/mini-concerts-dans-les-centres-dhebergement-durgence/"
		},
		{
			"fr": {
				"title": "Festival des Chapelles",
				"date": "26 à Sabran et 27 juillet à Goudargues 21h",
				"description": `« Mignonne allons voir si la rose » 
Programme a capella avec le Quatuor Bonelli 

Fanny Soyer, Soprano

Marco Van Baaren, ténor

Adrien Fournaison, baryton
				`

			},
			"linkHref": "https://festivaldeschapelles.com/programme-2022/"
		},
		{
			"fr": {
				"date": "27 AU 31 JUILLET",
				"title": "Au fil de l'eau",
				"description": `Création sonore de Thomas N’guyen pour mezzo-soprano, 
				harpe, et casques. Dans le cadre du Grand Est’ival (Meuse).
				`
			},
			"linkHref": "https://grandestival.fr/"
		},
		{
			"fr": {
				"date": "27 août au 10 Septembre",
				"title": "Académie Ravel de St-Jean de Luz",
				"description": "Masterclasses publiques quotidiennes avec Karine Deshayes, Jean-Philippe Lafont et Sabien Vatin"
			},
			"linkHref": ""
		},
		{
			"fr": {
				"date": "31 août 2022 à 21h",
				"title": "Festival Paséo",
				"description": "Église St Esprit de Bayonne"
			},
			"linkHref": "https://festivalravel.fr/academie/"
		},
		{
			"fr": {
				"date": "2 septembre 2022 à 21h",
				"title": "centre social Sagardian de St Jean de Luz",
				"description": ""
			},
			"linkHref": "https://festivalravel.fr/academie/"
		},
		{
			"fr": {
				"date": "3 septembre 2022 à 12h",
				"title": "Gymnase Urdazuri",
				"description": ""
			},
			"linkHref": "https://festivalravel.fr/academie/"
		},
		{
			"fr": {
				"date": "4 septembre 2022, à 12h, 15h & 18h",
				"title": "Villa Arnagz d’Arcangues",
				"description": ""
			},
			"linkHref": "https://festivalravel.fr/academie/"
		},
		{
			"fr": {
				"date": "5 septembre 2022 à 21h",
				"title": "Église St Esprit du Festival Paséo de Biarritz",
				"description": ""
			},
			"linkHref": "https://festivalravel.fr/academie/"
		},
		{
			"fr": {
				"date": "7 septembre 2022 à 21h",
				"title": "Église St Esprit",
				"description": "Festival du Paséo de Biarritz"
			},
			"linkHref": "https://festivalravel.fr/academie/"
		},
		{
			"fr": {
				"date": "10 septembre de 14h à 17h",
				"title": "Concert et remise des prix",
				"description": "Chapiteau Hariet Baita de St Jean de Luz"
			},
			"linkHref": "https://festivalravel.fr/academie/"
		},
		{
			"fr": {
				"date": "16 AU 18 SEPTEMBRE",
				"title": "Au fil de l'eau",
				"description": `Création sonore de Thomas N’guyen pour mezzo-soprano, harpe, et casques à Obernai`
			},
			"linkHref": ""
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
			"linkHref": ""
		},
		{
			"fr": {
				"date": "Samedi 3. Décembre 20h30 & Dimanche 4 décembre 16h00",
				"title": "Le Messie de Haendel",
				"description": `Mezzo-soprano solo

Chœur et orchestre de St Germain en Laye

Direction Marc Korovitch 
				`

			},
			"linkHref": ""
		},
		{
			"fr": {
				"date": "Mardi 13 décembre 20h30",
				"title": "L’isola Disabitata de Haydn, Costanza",
				"description": `Théâtre Traversière (Paris 12ème)

Lisa Chaïb, Silvia

Jordan Mouiassia, Gernando

Olivier Cesarini, Enrico

Vincent Laissy, direction musicale 

Le studi’opera
				`
			},
			"linkHref": ""
		},
		{
			"fr": {
				"date": "7 Mars 14h30, les 8 Mars 10 Mars & 11 Mars à 20h",
				"title": "Didon et Enée de Purcell. Rôle de l’Echanteress",
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
				"date": "22 Juin 2022",
				"title": "Au fil de l'eau",
				"description": `Opéra de Reims

Annabelle Jarre, harpe

Thomas N’guyen, composition et direction musicale 

Collectif Io	
				`

			},
			"linkHref": ""
		}

	]