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
				"reviewSignature1": "Ôlyrix critique du spectacle L’affaire Clemenza à la Seine Musicale en juin 2021",
				"reviewSignature2": "Scènes Magazine critique du spectacle Deux hommes et une femme, Novembre 2021",
				"reviewSignature3": "Olyrix, critique du spectacle L'isola disabitata - Paris (Théâtre Traversière) le 13/12/2022",
				"reviewSignature4": "Première Loge Opera , à propos de Didon et Enée de Purcell au Conservatoire de Paris en mars 2023",
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
				"bioParagraph": `En Novembre 2022, Marion a remporté le premier prix de la compétition internationale Triomphe de l’Art à Bruxelles.
Elle débutera en septembre 2023 une collaboration avec l’Opéra Comique dans le cadre de l’académie Favart et participera à ce titre à de nombreux concerts, récitals, masterclasses de l’académie. 
Elle est également artiste en résidence à La Chapelle Musicale Reine Elisabeth pour la saison 23/24.
Elle enregistrera son premier CD de mélodies espagnoles avec le Label Mirare et avec le soutien du mécène Patrick Petit en septembre 2023. 
Marion est révélation lyrique de l’Adami pour la saison 23/24.

Originaire du Béarn, Marion découvre le chant à 11 ans dans une maîtrise d’enfants en Pays Basque, puis intègre le chœur d’enfants du Conservatoire de Pau sous la direction de Pascale Verdier. À 14 ans elle entre à la Maîtrise de Radio- France et chante pendant 3 ans dans diverses productions Radio-France sous la baguette de Sofi Jeannin, Kurt Masur, Daniele Gatti. Après des études de lettres (hypokhâgne/ khâgne classique), elle rentre au Département Supérieur pour Jeunes Chanteurs du CRR de Paris en 2014 où elle travaille avec Florence Guignolet. 
En juin 2023, elle passe son prix (mention TB à l’unanimité ) au Conservatoire National Supérieur Musique et de Danse de Paris (classe de Frédéric Gindraux). Elle bénéficie des conseils et de l’enseignement d’Anne Le Bozec, Olivier Reboul, Susan Manoff . Lors de Masterclasses, elle a pu bénéficier des conseils de Nelly Miriciaiu, Regina Verner, Margreet Honig ou encore Roberto Benzi.

Marion est lauréate des Frivolités Parisiennes, du programme Jeunes Talents du Palais Royal (mécénat Crédit Agricole Île de France) et réalise à ce titre une série de mini-clips vidéos autour du répertoire lyrique français au Petit Palais ( « Retrouvailles au Petit Palais » ). Elle est également lauréate de l’Académie Ravel de Saint Jean de Luz, et est mécénée par la Fondation Société Générale « C’est vous l’avenir ! » et par l’Adami. 

Elle a chanté le rôle d’Annio dans L’Affaire Clemenza (spectacle de Franck Krawszyk librement inspiré de la Clémence de Titus de Mozart) à la Seine Musicale.

Pour la saison 23/24, elle était membre de l’académie Favart de l’Opéra- Comique, et parallèlement, artiste résidente de La Chapelle Musicale Reine Elizabeth à Bruxelles.
En février 2024, elle est Zaï-Za, dans  Belboul de Massenet / Modaresifar une création à l’opéra de Reims avec les Frivolités Parisiennes (mise en scène Alexandra Lacroix).
Sa saison 24/25 compte également un récital avec l’Orchestre de Pau Pays de Béarn (direction Fayçal Karoui) dans les Nuits d’été de Berlioz, aux côtés de Karine Deshayes dans le cadre du Festival Ravel de St Jean de Luz (septembre 23). En mars 24, elle chante un récital Mozart au Capitole de Toulouse avec Anne Le Bozec.

Sensible à la transmission et l’accessibilité de l’opéra pour tous, Marion a chanté dans le cadre des mini-concerts de l’Orchestre de chambre de Paris dans des centres d’hébergements ou des hôpitaux, et a participé aux spectacles « Tchek » (rôle de Zefka dans une adaptation du Journal d’un Disparu de Janaček) et « Help ! » (Clorinde dans une adaptation du Combat de Tancrède de Monteverdi) au Théâtre des Bouffes du Nord avec la Compagnie Plein jour, dans un programme éducatif promouvant l’opéra pour tous.

Elle enregistrera en 25 /26 son premier album de mélodies espagnoles avec le label Mirare. Pour la saison 2025, elle sera Lola dans Cavalleria Rusticana, de Mascagni à l’Opéra de Saint Étienne (dir. G. Grazioli), et elle est également programmée au Festival d’Aix en Provence et pour la tournée de la création de La Petite Sirène de Régis Campo (coproduction Arcal/ Opéras d’Avignon et de Massy). Elle sera également Sesto dans la Clémence de Titus de Mozart à l’opéra de Massy sous la direction de David Stern.

Marion est soutenue par la fondation Meyer, la Société Générale, et le mécène Patrick Petit. Elle est révélation lyrique de l’ADAMI pour la saison 23/24. 
Marion est membre de la 5 G d’opéra Fuoco et est représentée par l’agence Philippe Do Opéra.

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