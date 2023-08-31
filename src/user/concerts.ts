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
				"date": "1 septembre 2023",
				"title": "Nuits d'été de Berlioz, avec Karine Deshayes",
				"description": "Festival Ravel, Orchestre OPPB direction Fayçal Karoui, théâtre de Bayonne"
			},
			"linkHref": "https://festivalravel.fr/evenements/orchestre-de-pau-pays-de-bearn-karine-deshayes-mezzo-soprano-marion-vergez-pascal-mezzo-soprano-faycal-karoui-direction/"

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
				"date": "2 décembre 2023",
				"title": "L’arrière-Pays, Opéra de Reims. Au fil de l’Eau",
				"description": `Mélodies pour mezzo soprano, harpe et dispositif électro-acoustique (dir.musicale et création Thomas Nguyen)
Annabelle Jarre, harpiste`
			},
			"linkHref": "https://www.operadereims.com/spectacle/larriere-pays/"
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
				"date": "12 décembre 2023 à 19h00",
				"title": "Récital d’Hiver",
				"description": `Les Saisons de l’Académie. Opéra Comique. Foyer Favart 
				`
			},
			"linkHref": "https://www.opera-comique.com/fr/spectacles/les-saisons-de-l-academie"
		},
		{
			"fr": {
				"date": "10 février  2024",
				"title": "Belboul, Massenet / Modaresifar, Création mondiale ",
				"description": `Opéra de Reims.
Rôle de Zaï-za (pupille d’Ali Bazar).
Les Frivolités Parisiennes, mise en scène et conception Alexandra Lacroix`
			},
			"linkHref": "https://lesfrivolitesparisiennes.com/spectacle/ladorable-belboul/"
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
				"date": "MARS 2024",
				"title": "Cover Stéphanie D’Oustrac, l’Heure Espagnole Ravel (rôle de Concepcion)",
				"description": "Opéra Comique, Louis Langrée, mise en scène Guillaume Gallienne",
			},
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
				"date": "Juin 2024",
				"title": "L’impressionnisme et musique",
				"description": `Musiques d’Emmanuel Chabrier et André Messager.
				Auditorium du Musée d’Orsay.
				Orchestre des Frivolités Parisiennes`
			},
			"linkHref": "https://lesfrivolitesparisiennes.com/spectacle/1874-impressionnisme-et-musique/"


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