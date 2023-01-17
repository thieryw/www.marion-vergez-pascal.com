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
				"date": "Jeudi 2 Février 20 h 00",
				"title": "Cathédrale St Louis des Invalides",
				"description": `Concert du gouverneur militaire de Paris.

Mezzo-Soprano solo du Dixit Dominus Haendel.

Ensemble vocal de l’Ecole polytechnique.
Orchestre des Troupes de Marine (dir. Grégoire Michaud)

				`

			},
			"linkHref": "https://www.helloasso.com/associations/association-pour-le-developpement-des-uvres-d-entraide-dans-l-armee-ado/evenements/concert-du-gouverneur-militaire-de-paris-2-fevrier-2023"
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
		{
			"fr": {
				"title": `Samedi 3 Juin 2023 à 20h00 Espace St Jean de Melun.

Dimanche 18 Juin 2023 à 17h00 Collégiale  de Provins.

Samedi 24 juin à 16h30 Cathédrale  de Sens.

				`,
				"description": `Mezzo-soprano solo du Stabat Mater de Dvořák
				
Soprano : Armelle Debos.

Chœur Marc-Antoine Charpentier, la Chorale du Montois et du Provinois et l’Orchestre Symphonique en Résonnance (dir. Frédéric Baudry)
				`

			},
			"linkHref": "https://culturetvous.fr/informations-transversales/agenda/stabat-mater-danton-dvorak-4603"
		},

	]