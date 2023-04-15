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
		{
			"fr": {
				"date": "15 Juillet 2023",
				"title": "Récital lyrique « Il était une fois l’opéra »",
				"description": `Avec Ayano Kamei, pianiste et Margaux Poguet, Soprano 

Festival Lyrique de Soustons / Opéra des Landes 
En partenariat avec le Festival Ravel 
				`

			},
		},
		{
			"fr": {
				"date": "29 Octobre 2023",
				"title": "Récital lyrique « Il était une fois l’opéra »",
				"description": `Avec Ayano Kamei, pianiste et Margaux Poguet, Soprano 

Concert « Au fil des Saisons »
Musique en Périgord 
En partenariat avec le Festival Ravel 
				`

			},
		},
		{
			"fr": {
				"date": "22 Decembre 2023",
				"title": "Récital Lyrique Génération Opéra",
				"description": `Avec Rodolphe Lospied, pianiste et Yara Kasti, soprano

Théâtre d’Aubagne
				`
			},
		},
		{
			"fr": {
				"title": "Masterclasses  publiques de l’Académie de l’Opéra Comique 23/24",
				"description": `27 septembre 2023 : Richard Brunel

29 septembre 2023 : Hervé Niquet

2 octobre 2023 : Véronique Gens

20 décembre 2023 : Franck Leguérinel 

6 février 2024 : Stéphane Degout

27 février 2024 : Stéphanie d’Oustrac 

7 mars 2024 : Guillaume Gallienne
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/masterclasse-de-l-academie"
		},
		{
			"fr": {
				"date": "29 septembre & 5 octobre à 22h20",
				"title": "Nocturnes du spectacle de  la Fille de Mme Argot",
				"description": `Postlude musical salle Bizet`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/nocturne-la-fille-de-madame-angot"
		},
		{
			"fr": {
				"date": "19, 20, 21 octobre à 19h00",
				"title": "L’Amour à la Française",
				"description": `Spectacle lyrique de l’Académie de l’Opéra Comique Salle Bizet 
				
Direction musicale et préparation des solistes Hervé Niquet • Mise en scène Héloïse Sérazin
Collaboration avec le Palazetto Bru Zane
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/l-amour-a-la-francaise"
		},
		{
			"fr": {
				"date": "28 & 29 novembre 2023 à 19h00 et 20h30",
				"title": "L’Amour à la française",
				"description": `Récital Lyrique hors les murs de l’académie de l’Opéra Comique 
Grande Nef du Musée d’Orsay 

Direction musicale et préparation des solistes Hervé Niquet • Mise en scène Héloïse Sérazin
Collaboration avec le Palazetto Bru Zane
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/l-amour-a-la-francaise-au-musee-d-orsay"
		},
		{
			"fr": {
				"date": "15 novembre à 19h00",
				"title": "Récital d’Automne",
				"description": `Les Saisons de l’académie Opéra Comique
				
16 novembre 2023 à 10H30 et 14H (scolaires)
Foyer Favart 
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/les-saisons-de-l-academie"
		},
		{
			"fr": {
				"date": "12 décembre 2023 à 19h00",
				"title": "Récital d’Hiver",
				"description": `Les Saisons de l’Académie. Opéra Comique. Foyer Favart 
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/les-saisons-de-l-academie"
		},
		{
			"fr": {
				"date": "Samedi 2 Mars 2024",
				"title": "Journée Mozart",
				"description": `Anne Le Bozec, pianiste 

Théâtre du Capitole de Toulouse
				`
			},
			"linkHref": "https://opera.toulouse.fr/agenda/concerts/journee-mozart/"
		},
		{
			"fr": {
				"date": "14 mars 2024 à 19h00",
				"title": "Récital de Printemps",
				"description": `Les Saisons de l’Académie. Opéra Comique. Foyer Favart
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/les-saisons-de-l-academie"
		},
		{
			"fr": {
				"date": "22 Mars 2024 à 19h30",
				"title": "Maestro !",
				"description": `Répétition ouverte du Voyage au Pays de Maurice Ravel avec Louis Langrée
				Salle Favart de l’opéra Comique.`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/maestro"
		},
		{
			"fr": {
				"date": "23 Mars 2024 à 20h00",
				"title": "Voyage au Pays de Maurice Ravel",
				"description": `Salle Favart de  Opéra Comique. 
Concert de l’Académie de l’opéra Comique. 
Louis Langrée, direction.
Orchestre de Chambre de Paris.
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/voyage-au-pays-de-maurice-ravel"
		},
		{
			"fr": {
				"date": "2, 3 et 4 mai 2024",
				"title": "La Princesse et le bouffon",
				"description": `Les Pléiades, autour de Fantasio, académie de l’Opéra Comique.
				
2 mai à 14h30, séance scolaire 
				
3 mai à 10h00, séance scolaire 
				
4 mai 2024 à 15h00 
				
Salle Bizet, Opéra Comique 
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/la-princesse-et-le-bouffon"
		},
		{
			"fr": {
				"date": "22 mai 2024 à 19h00",
				"title": "Récital d’été",
				"description": `Les Saisons de l’Académie. Opéra Comique. Foyer Favart
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/les-saisons-de-l-academie"
		},
		{
			"fr": {
				"date": "Mars / Avril 2025",
				"title": "Les contes de Perrault de Félix Fourdrain",
				"description": `Création Les Frivolités Parisiennes
				
Direction Dylan Corley & mise en scène Valérie Lesort 
				
Rôle d’Aurore (Cendrillon) 
				
Opéra Royal de Compiègne, opéra de Reims et théâtre de l’Athénée-Louis Jouvet 
				`
			},
		},
	]