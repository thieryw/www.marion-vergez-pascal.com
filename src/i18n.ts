import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["fr"] as const;

//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "fr";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const {
	useTranslation,
	resolveLocalizedString,
	useLang,
	$lang,
	useResolveLocalizedString,
	/** For use outside of React */
	getTranslation
} = createI18nApi<
	| typeof import("pages/Biography").i18n
	| typeof import("pages/Concerts").i18n
	| typeof import("pages/Home").i18n
	| typeof import("pages/Media").i18n
	| typeof import("App").i18n
	| typeof import("AppFooter").i18n
>()(
	{ languages, fallbackLanguage },
	{

		/* spell-checker: disable */
		"fr": {
			"Home": {
				"review1": "Chez les mezzo-sopranos, Marion Vergez-Pascal montre un timbre large et rond dans ses interprétations d’Annio et de Constance, inquiète pour son époux. Une vraie puissance se dégage même dans les ensembles, où elle tire son épingle du jeu en gardant un timbre clair et en usant de ses résonateurs.",
				"review2": "L’écrin accoustique et le décor romantique du lieu répondent tout à fait au programme qui distille airs et ensembles extraits d’opéras du XIXe siècle français . Gounod, Bizet, Offenbach mais aussi Messager (...) sont à la fête  par les voix du ténor Kévin Amiel, ardemment lancé (...), du baryton basse efficace Adrien Fournaison, et de la mezzo de bel envol Marion Vergez-Pascal.",
				"review3": " Sur scène enfin, les solistes rivalisent d'enthousiasme et constituent de belles découvertes : la plénitude vocale de Marion Vergez-Pascal s'accorde parfaitement au timbre clair et à l'expressivité du ténor Jordan Mouaïssia […]. Encore mal connue, L'isola disabitata ainsi servie n'a pas manqué de convaincre !",
				"review4": "(…) Le tableau des sorcières à l’acte II était particulièrement réussi et on oubliait facilement leur grotte tant le désir de nuire de ces Sœurs du Destin, deux grands échalas au costume d’alguazil, était perceptible dans l’ombre du dortoir. La grande réussite de cette production, c’est son plateau vocal et sa distribution, l’énergie ou l’émotion que García Alarcón insuffle à cet ensemble, aussi bien dans le Prologue que dans l’opéra, et l’engagement total de ces jeunes acteurs issus des classes du CNSM. Je ne puis les citer tous mais je distinguerai Marion Vergez-Pascal, mezzo-soprano, Éole et Enchanteresse (…)",
				"review5": "Marion Vergez-Pascal, que nous n’avions personnellement jamais entendue, est une révélation : la voix, chaude, veloutée, possède de très belles couleurs, notamment dans le médium. Le style est très soigné et l’interprétation habitée. Nous l’avons trouvée particulièrement émouvante dans l’air de Berlioz (« Premiers transports… ») et surtout dans l’air final du Romeo de Bellini, chanté dans son intégralité (avec le long et beau récitatif qui le précède), avec une grande sensibilité. » Première loge Opéra, à prooos de ROMEO ET JULIETTE, une tragédie en musique dans le Grand Amphithéâtre de La Sorbonne",
				"review6": "Le rôle de Lola échoie à Marion Vergez-Pascal dont la voix saine et claire mais aussi le jeu scénique pétillant apportent une appréciable fraîcheur au spectacle",
				"review7": "La mezzo-soprano Marion Vergez-Pascal séduit en Lola par un jeu coquet et raffiné ainsi qu’une voix lyrique et colorée.",
				"review8": "Sans omettre, la Lola, lumineuse, insouciante de MARION VERGEZ-PASCAL (l’antithèse absolue de Santuzza).",
				"review9": "La légèreté naïvement inconséquente de Lola est finement portée par Marion Vergez-Pascal et un « fior di giagioli » tout en clartés.",
				"review10": "Son ami Sesto, pourtant infidèle, est interprété avec constance par Marion Vergez-Pascal. Pour ce personnage tiraillé entre son amour pour Vitellia et son amitié pour Titus, sa voix se fait caressante avec une projection constante et agile. Son timbre rond sert une présence pleine d’intentions expressives, allant de la résolution à l’amour en passant par la bravoure.",
				"review11": "La performance de Marion Vergez-Pascal en Sesto, vrai ressort d’émotion de la partition, est la grande réussite du spectacle. Puissance vocale et douceur sont les deux ressorts d’une interprétation en parfait accord avec la terrible situation à laquelle est confronté le personnage, qui doit choisir entre trahir Titus pour l’amour de Vitellia, ou bien renoncer à elle et rester fidèle à son ami",
				"review12": "Marion Vergez-Pascal (Sesto) offre une prestation d’une grande beauté et d’une grande musicalité. Sesto, souvent tiraillé entre le devoir et l’émotion, trouve en Marion Vergez-Pascal une interprète qui maîtrise non seulement les exigences vocales du rôle, mais aussi la complexité émotionnelle qu’il suppose. Sa voix claire et lumineuse, associée à une interprétation sensible et poignante, donne à Sesto une profondeur rare. Elle réussit à rendre parfaitement l’humanité de ce personnage, victime de ses propres dilemmes moraux et de son amour pour Vitellia",
				"reviewSignature1": "Ôlyrix critique du spectacle L’affaire Clemenza à la Seine Musicale en juin 2021",
				"reviewSignature2": "Scènes Magazine critique du spectacle Deux hommes et une femme, Novembre 2021",
				"reviewSignature3": "Olyrix, critique du spectacle L'isola disabitata - Paris (Théâtre Traversière) le 13/12/2022",
				"reviewSignature4": "Première Loge Opera , à propos de Didon et Enée de Purcell au Conservatoire de Paris en mars 2023",
				"reviewSignature5": "Première Loge Opéra, à propos de Lola dans Cavalleria Rusticana, Opéra de Saint-Etienne, mars 2025",
				"reviewSignature6": "ÔLyrix, à propos de Lola dans Cavalleria Rusticana, Opéra de Saint-Etienne, mars 2025",
				"reviewSignature7": "Classique News, à propos de Lola dans Cavalleria Rusticana, Opéra de Saint-Etienne, mars 2025",
				"reviewSignature8": "Résonances lyriques, à propos de Lola dans Cavalleria Rusticana, Opéra de Saint-Etienne, mars 2025",
				"reviewSignature9": "ÔLyrix, à propos de Sesto /Clémence de Titus/ Opéra de Massy / avril 2025",
				"reviewSignature10": "Classykeo, à propos de Sesto /Clémence de Titus/ Opéra de Massy / avril 2025",
				"reviewSignature11": "Classiquenews, , à propos de Sesto /Clémence de Titus/ Opéra de Massy / avril 2025",
				"newsHeading": "ACTUALITÉS",
				"newsButtonLabel": "Voir Plus",
				"bioTitle": "Qui suis-je",
				"bioParagraph": `Originaire du Béarn, Marion découvre le chant à 11 ans dans une maîtrise d’enfants en Pays Basque, puis intègre le chœur d’enfants du **Conservatoire de Pau** sous la direction de Pascale Verdier et de Fayçal Karoui. À 14 ans elle entre à la **Maîtrise de Radio-France** et chante pendant 3 ans dans diverses productions Radio-France sous la baguette de Sofi Jeannin, Kurt Masur, Daniele Gatti. Après des études de lettres (**hypokhâgne/khâgne classique**), elle rentre au **Département Supérieur pour Jeunes Chanteurs du CRR de Paris** en 2014 où elle travaille avec Florence Guignolet. Au sein du Jeune Chœur, elle chante dans diverses productions prestigieuses, au Châtelet, à la Philharmonie, etc...`,
				"bioButtonLabel": "Biographie",
				"contactHeading": "CONTACT",
				"contactTitle": "Gardons-contact",
				"contactParagraph": `N'hésitez pas à m'écrire, j'ai hâte de vous lire ! 
                Soyez aussi les premiers informés de mon actualité en me 
                suivant sur les réseaux sociaux.
            `,
				"mediaButton": "Voir Plus"


			},
			"App": {
				"biography": "BIOGRAPHIE",
				"futureEvents": "CONCERTS",
				"home": "ACCUEIL",
				"media": "MEDIA"

			},
			"AppFooter": {
				"author": "Conçu et développé par StarkerDesign.",
				"copyRight": "Copyright © 2021 Marion Vergez-Pascal. Tous droits réservés",
				"legal": "Mentions Légales",
				"biography": "BIOGRAPHIE",
				"futureEvents": "CONCERTS",
				"home": "ACCUEIL",
				"media": "MEDIA"
			},
			"Biography": {
				"bioTitle": "BIOGRAPHIE",
				"bioSubtitle": "MON HISTOIRE",
				"bioParagraph": `Nommée révélation lyrique de l’ADAMI en 2023, Marion est actuellement artiste en résidence à La Chapelle Musicale Reine Elisabeth où elle bénéficie des conseils de Sophie Koch. Elle sortira en 2026 son premier CD de mélodies espagnoles avec le Label Mirare et avec le soutien du mécène Patrick Petit. Marion est actuellement membre de la 5 G d’opéra Fuoco et est représentée par l’agence Philippe Do Opéra.

Originaire du Béarn, Marion découvre le chant à 11 ans dans une maîtrise d’enfants en Pays Basque, puis intègre le chœur d’enfants du Conservatoire de Pau sous la direction de Pascale Verdier. À 14 ans elle entre à la Maîtrise de Radio- France et chante pendant 3 ans dans diverses productions Radio-France.

Après des études de lettres (hypokhâgne/ khâgne classique), elle rentre au Département Supérieur pour Jeunes Chanteurs du CRR de Paris en 2014 où elle travaille avec Florence Guignolet. En juin 2023, elle passe son prix (mention TB à l’unanimité ) au Conservatoire National Supérieur de Musique et de Danse de Paris (classe de Frédéric Gindraux). Elle bénéficie des conseils et de l’enseignement d’Annick Massis, Sophie Koch, Anne Le Bozec, Olivier Reboul, Susan Manoff, Antoine Palloc. Lors de Masterclasses, elle a pu bénéficier des conseils de Maryse Castets, Nelly Miriciaiu, Regina Verner, Margreet Honig ou encore Roberto Benzi, Robert Massard.

Marion a fait partie de l’académie de l’Opéra Comique en 2023, et a été lauréate des Frivolités Parisiennes, du programme Jeunes Talents du Palais Royal (mécénat Crédit Agricole Île de France). Elle a également été lauréate de l’Académie Ravel de Saint Jean de Luz, et est mécénée par la Fondation Société Générale « C’est vous l’avenir ! » et par l’Adami.

Sensible à la transmission et l’accessibilité de l’opéra pour tous, Marion a chanté dans le cadre des mini-concerts de l’Orchestre de chambre de Paris dans des centres d’hébergements ou des hôpitaux, ou encore au théâtre des Bouffes du Nord avec la compagnie de Franck Krawszyk dans le programme « l’opéra c’est vous! »

Marion est soutenue par la fondation Meyer, la Société Générale, et le mécène Patrick Petit.

            `,

				"interpretation": "Airs étudiés / interprétés en concert ou auditions",





			},
			"Media": {
				"pageTitle": "RÉCENTES",
				"pageSubTitle": "VIDÉOS",
				"galleryTitle": "MES",
				"gallerySubtitle": "IMAGES",
				"youtubeButton": "ma chaine youtube",
				"photoCredit": "Crédit photos: Capucine de Chocqueuse / Nabil Belhadj"

			},
			"Concerts": {
				"concertsTitle": "CONCERTS",
				"concertsSubtitle": "PROCHAINS CONCERTS",
				"archivesTitle": "ARCHIVES"
			},
		}
		/* spell-checker: enable */
	}
);