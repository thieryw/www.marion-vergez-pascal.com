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
    | typeof import ("pages/Home").i18n
    | typeof import ("pages/Biography").i18n
    | typeof import ("pages/Concerts").i18n
    | typeof import ("pages/Media").i18n
    | typeof import ("App/AppHeader").i18n
		| typeof import ("App/AppFooter").i18n
		| typeof import ("pages/FourOFour").i18n
>()(
    { languages, fallbackLanguage },
	{

		/* spell-checker: disable */
		"fr": {
			"FourOhFour": {
				"not found": "Page non trouvée !"
			},
			"Home": {
				"review1": "Chez les mezzo-sopranos, Marion Vergez-Pascal montre un timbre large et rond dans ses interprétations d’Annio et de Constance, inquiète pour son époux. Une vraie puissance se dégage même dans les ensembles, où elle tire son épingle du jeu en gardant un timbre clair et en usant de ses résonateurs.",
				"review2": "L’écrin accoustique et le décor romantique du lieu répondent tout à fait au programme qui distille airs et ensembles extraits d’opéras du XIXe siècle français . Gounod, Bizet, Offenbach mais aussi Messager (...) sont à la fête  par les voix du ténor Kévin Amiel, ardemment lancé (...), du baryton basse efficace Adrien Fournaison, et de la mezzo de bel envol Marion Vergez-Pascal.",
				"reviewSignature1": "Ôlyrix critique du spectacle L’affaire Clemenza à la Seine Musicale en juin 2021",
				"reviewSignature2": "Scènes Magazine critique du spectacle Deux hommes et une femme, Novembre 2021",
				"newsHeading": "ACTUALITÉS",
				"newsButtonLabel": "Voir Plus",
				"bioTitle": "Qui suis-je",
				"bioParagraph": `Originaire du Béarn, Marion découvre le chant à 11 ans dans une maîtrise d’enfants en Pays Basque, puis intègre le chœur d’enfants du Conservatoire de Pau sous la direction de Pascale Verdier et de Fayçal Karoui. À 14 ans elle entre à la Maîtrise de Radio-France et chante pendant 3 ans dans diverses productions Radio-France sous la baguette de Sofi Jeannin, Kurt Masur, Daniele Gatti. Après des études de lettres (hypokhâgne/khâgne classique), elle rentre au Département Supérieur pour Jeunes Chanteurs du CRR de Paris en 2014 où elle travaille avec Florence Guignolet. Au sein du Jeune Chœur, elle chante dans diverses productions prestigieuses, au Châtelet, à la Philharmonie, etc...`,
				"bioButtonLabel": "Biographie",
				"contactHeading": "CONTACT",
				"contactTitle": "Gardons-contact",
				"contactParagraph": `N'hésitez pas à m'écrire, j'ai hâte de vous lire ! 
                Soyez aussi les premiers informés de mon actualité en me 
                suivant sur les réseaux sociaux.
            `,
				"mediaButton": "Voir Plus"
			},
			"AppHeader": {
				"biography": "BIOGRAPHIE",
				"futureEvents": "CONCERTS",
				"home": "ACCUEIL",
				"media": "MEDIA"
			},
			"AppFooter": {
				"author": "Conçu et développé par StarkerDesign.",
				"copyRight": "Copyright © 2021 Marion Vergez Pascal. Tous droits réservés",
				"legal": "Mentions Légales",
				"biography": "BIOGRAPHIE",
				"futureEvents": "CONCERTS",
				"home": "ACCUEIL",
				"media": "MEDIA"
			},
			"Biography": {
				"bioTitle": "BIOGRAPHIE",
				"bioSubtitle": "MON HISTOIRE",
				"bioParagraph": `Originaire du Béarn, Marion découvre le chant à 11 ans dans une maîtrise d’enfants en Pays Basque, 
puis intègre le chœur d’enfants du **Conservatoire de Pau** sous la direction de Pascale Verdier 
et de Fayçal Karoui. À 14 ans elle entre à la **Maîtrise de Radio- France** et chante pendant 3 ans 
dans diverses productions Radio-France sous la baguette de Sofi Jeannin, Kurt Masur, Daniele Gatti. 
Après des études de lettres (**hypokhâgne/ khâgne classique**), elle rentre au **Département Supérieur 
pour Jeunes Chanteurs** du CRR de Paris en 2014 où elle travaille avec Florence Guignolet. Au sein du Jeune Chœur, 
elle chante dans diverses productions prestigieuses, au Châtelet, à la Philharmonie, etc... Elle intègre en 2017 
le Département Vocal du **Conservatoire d’Amsterdam**, dans la classe de Don Marrazo. En 2018, 
elle rentre au **Conservatoire National Supérieur Musique et de Danse de Paris** dans la classe de Frédéric Gindraux. 
Elle bénéficie des conseils d’Anne Le Bozec. Lors de Masterclasses, elle a pu bénéficier des conseils de Nelly Miriciaiu, 
Regina Verner, Margreet Honig ou encore Roberto Benzi.

En septembre 2019, elle est sélectionnée comme Jeune Talent pour la prestigieuse académie de Bel Canto 
de la **IVC Competition en Hollande à S’Hertogenbosch**. Pour l’année 2020, elle est lauréate de l’académie 
des **Frivolités Parisiennes** et en 2021, elle fait partie du programme **Jeunes Talents du Palais Royal** 
(mécénat Crédit Agricole Île de France) et réalise à ce titre une série de mini-clips vidéos autour du 
répertoire lyrique français au Petit Palais ( « **Retrouvailles au Petit Palais** » ).

En juin 2021, elle chante avec sa pianiste Cécile Sagnier pour **Jeunes Talents**, dans un programme autour des fables de La Fontaine à Château-Thierry intitulé « Fables, Contes et autres Légendes ».
Leur duo, le **duo Incarnat**, a vocation à défendre le répertoire du lied et de la mélodie, avec fougue et passion.
Elle incarne également Annio dans un spectacle de Franck Krawszyk librement inspiré de la Clémence 
de Titus de Mozart à la **Seine Musicale**. En juillet elle chante également dans une série de concerts 
dans un programme lyrique français intitulé « **Deux hommes et une femme** » avec l’orchestre du 
**Palais Royal** (direction J. P Sarcos) aux côtés de Kévin Amiel et Adrien Fournaison. 
Elle redonnera ce programme avec orchestre en novembre 2021 à Paris.

Sensible à la transmission et l’accessibilité de l’opéra pour tous, 
Marion a chanté dans le cadre des mini- concerts de **l’Orchestre de chambre de Paris** 
dans des centres d’hébergements ou des hôpitaux, et a participé aux spectacles 
« Tchek » (rôle de Zefka dans une adaptation du Journal d’un Disparu de Janaček) et 
« Help ! » (Clorinde dans une adaptation du Combat de Tancrède de Monteverdi) au 
**Théâtre des Bouffes du Nord** avec la Compagnie Plein jour, dans un programme éducatif 
promouvant l’opéra pour tous. Cet automne, Marion chantera en récital avec Simon Adda-Reyss, 
au **théâtre des Sablons de Neuilly** un programme autour de Victor Hugo. 
Elle sera Sterling dans « Là- Haut » de Maurice Yvain avec la compagnie 
des **Frivolités Parisiennes** au **théâtre de l’Athénée** en février 2022 
(dir. Nicolas Chesneau, mise en scène Pascal Neyron), et sera Nicklausse dans les 
Contes d’Hoffmann d’Offenbach dans une série de concerts Jeunes Chanteurs en collaboration avec **l’opéra de Nancy** (Nancy Opéra Passion).

Marion fait partie du **Quatuor Bonelli**, ensemble professionnel créé en 2016, 
et qui défend le répertoire a cappella. Le Quatuor Bonelli a bénéficié d’un 
programme tremplin pour jeunes ensembles vocaux à la **Cité de la Voix de Vézelay** en juillet 2021.
            `,
				"interpretation": "Airs étudiés / interprétés en concert ou auditions",
				"carmen": "Carmen de Bizet, Séguedille et Habanera",
				"ottavia": "L’Incoronazione di Poppea de Monterverdi, Ottavia (« Disprezzata Regina », « Addio Roma » )",
				"gounod": "La damnation de Faust de Gounod, rôle de Siébel (« Faites lui mes aveux »)",
				"figaro": "La Clemenza di T ito de Mozart, rôle d’ Annio & N ozze di Figaro, rôle de Chérubin (airs seuls)",
				"smeton": "Anna Bolena de Donizetti, rôle de Smeton (airs seuls)",
				"ravel": "L’heure Espagnole de Ravel, rôle de Concepcion (« Oh la pitoyable aventure »)",
				"offenbach": "La Grande duchesse de Gérolstein (« Ah que j’aime les militaires») et La Périchole (Griserie) d’Offenbach",
				"mignon": "Mignon de Thomas (“Me voici dans son boudoir” )",
				"viviane": "T oi c’est moi de Simons air de Viviane (“C’est ça la vie, C’est ça l’amour”)",
				"massenet": "Cendrillon de Massenet, rôle de Mme de La Haltière"

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
				"concertsTitle": "concerts",
				"concertsSubtitle": "PROCHAINS CONCERTS",
				"archivesTitle": "ARCHIVES"
			}

		}
		/* spell-checker: enabled */
	}
);