import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";
import type { Language } from "./Language";
import { Home } from "../pages/Home";
import { App, AppHeader } from "../App"
import { AppFooter } from "../AppFooter";
import { news } from "../user/news";
import { Biography } from "../pages/Biography";
import { Media } from "../pages/Media";
import { Concerts } from "../pages/Concerts";


export type Scheme = {
    [key: string]: undefined | Record<string, string>;
};

type ToTranslations<S extends Scheme> = {
    [key in keyof S]: string;
};

const reflectedI18nSchemes = {
    [symToStr({ Home })]: Reflect<Home.I18nScheme>(),
    [symToStr({ App })]: Reflect<AppHeader.I18nScheme>(),
    [symToStr({ AppFooter })]: Reflect<AppFooter.I18nScheme>(),
    [symToStr({ Biography })]: Reflect<Biography.I18nScheme>(),
    [symToStr({ Media })]: Reflect<Media.I18nScheme>(),
    [symToStr({ Concerts })]: Reflect<Concerts.I18nScheme>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = {
    [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]>;
};

export const translations = id<Record<Language, Translations>>({
    "en": {
        "Home": {
            "newsParagraph": news.en?.paragraph ?? news.fr.paragraph,
            "newsTitle": news.en?.title ?? news.fr.title,
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
        "App": {
            "biography": "BIOGRAPHIE",
            "futureEvents": "CONCERTS",
            "home": "ACCUEIL",
            "media": "MEDIA"

        },
        "AppFooter": {
            "author": "Conçu et développé par StarkerDesign.",
            "copyRight": "Copyright © 2021 Marion Vergez-Pascal. Tous droits réservés",
            "legal": "Mentions Légales"
        },
        "Biography": {
            "bioTitle": "BIOGRAPHIE",
            "bioSubtitle": "MON HISTOIRE",
            "bioParagraph": `Originaire du Béarn, Marion découvre le chant à 11 ans dans une maîtrise d’enfants en Pays Basque, puis intègre le chœur d’enfants du Conservatoire de Pau sous la direction de Pascale Verdier et de Fayçal Karoui. À 14 ans elle entre à la Maîtrise de Radio-France et chante pendant 3 ans dans diverses productions Radio-France sous la baguette de Sofi Jeannin, Kurt Masur, Daniele Gatti. Après des études de lettres (hypokhâgne/khâgne classique), elle rentre au Département Supérieur pour Jeunes Chanteurs du CRR de Paris en 2014 où elle travaille avec Florence Guignolet. Au sein du Jeune Chœur, elle chante dans diverses productions prestigieuses, au Châtelet, à la Philharmonie, etc... Elle intègre en 2017 le Département Vocal du Conservatoire d’Amsterdam, dans la classe de Don Marrazo. En 2018, elle rentre au Conservatoire National Supérieur Musique et de Danse de Paris dans la classe de Frédéric Gindraux. Elle bénéficie des conseils d’Anne Le Bozec. Lors de Masterclasses, elle a pu bénéficier des conseils de Nelly Miriciaiu, Regina Verner, Margreet Honig ou encore Roberto Benzi.

Et septembre 2019, elle est sélectionnée comme Jeune Talent pour la prestigieuse académie de Bel Canto de la IVC Competition en Hollande à S’Hertogenbosch. Pour l’année 2020, elle est lauréate de l’académie des Frivolités Parisiennes et en 2021, elle fait partie du programme Jeunes Talents du Palais Royal (mécénat Crédit Agricole Île de France) et réalise à ce titre une série de mini-clips vidéos autour du répertoire lyrique français au Petit Palais ( R etrouvailles au P etit P alais ).

En juin 2021, elle chante avec sa pianiste Cécile Sagnier pour Jeunes Talents un programme autour des fables de La Fontaine à Château-Thierry intitulé « Fables, Contes et autres Légendes ». Elle incarne également Annio dans un spectacle de Franck Krawszyk librement inspiré de la Clémence de Titus de Mozart à la Seine Musicale. En juillet elle chante également dans une série de concerts dans un programme lyrique français intitulé « Deux hommes et une femme » avec l’orchestre du Palais Royal (direction J. P Sarcos) aux côtés de Kévin Amiel et Adrien Fournaison. Elle redonnera ce programme avec orchestre en novembre 2021 à Paris.

Sensible à la transmission et l’accessibilité de l’opéra pour tous, Marion a chanté dans le cadre des mini- concerts de l’Orchestre de chambre de Paris dans des centres d’hébergements ou des hôpitaux, et a participé aux spectacles «T chek » (rôle de Zefka dans une adaptation du Journal d’un Disparu de Janaček) et «H elp !» (Clorinde dans une adaptation du Combat de T ancrède de Monteverdi) au théâtre des Bouffes du Nord avec la Compagnie Plein jour, dans un programme éducatif promouvant l’opéra pour tous.

Cet automne, Marion chantera en récital avec Simon Adda-Reyss, au théâtre des Sablons de Neuilly un programme autour de Victor Hugo. Elle sera Sterling dans « Là-H aut » de Maurice Yvain avec la compagnie des Frivolités Parisiennes au théâtre de l’Athénée en février 2022 (dir. Nicolas Chesneau, mise en scène Pascal Neyron), et sera Nicklausse dans les Contes d’H offmann d’Offenbach dans une série de concerts Jeunes Chanteurs en collaboration avec l’opéra de Nancy (Nancy Opéra Passion).
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
            "photoCredit": "Crédit photos: Crédit photos: Capucine de Chocqueuse / Nabil Belhadj"

        },
        "Concerts": {
            "concertsTitle": "concerts",
            "concertsSubtitle": "PROCHAINS CONCERTS"
        },
    },

    "fr": {
        "Home": {
            "newsParagraph": news.fr.paragraph,
            "newsTitle": news.fr.title,
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
        "App": {
            "biography": "BIOGRAPHIE",
            "futureEvents": "CONCERTS",
            "home": "ACCUEIL",
            "media": "MEDIA"
        },
        "AppFooter": {
            "author": "Conçu et développé par StarkerDesign.",
            "copyRight": "Copyright © 2021 Marion Vergez Pascal. Tous droits réservés",
            "legal": "Mentions Légales"
        },
        "Biography": {
            "bioTitle": "BIOGRAPHIE",
            "bioSubtitle": "MON HISTOIRE",
            "bioParagraph": `Originaire du Béarn, Marion découvre le chant à 11 ans dans une maîtrise d’enfants en Pays Basque, puis intègre le chœur d’enfants du Conservatoire de Pau sous la direction de Pascale Verdier et de Fayçal Karoui. À 14 ans elle entre à la Maîtrise de Radio-France et chante pendant 3 ans dans diverses productions Radio-France sous la baguette de Sofi Jeannin, Kurt Masur, Daniele Gatti. Après des études de lettres (hypokhâgne/khâgne classique), elle rentre au Département Supérieur pour Jeunes Chanteurs du CRR de Paris en 2014 où elle travaille avec Florence Guignolet. Au sein du Jeune Chœur, elle chante dans diverses productions prestigieuses, au Châtelet, à la Philharmonie, etc... Elle intègre en 2017 le Département Vocal du Conservatoire d’Amsterdam, dans la classe de Don Marrazo. En 2018, elle rentre au Conservatoire National Supérieur Musique et de Danse de Paris dans la classe de Frédéric Gindraux. Elle bénéficie des conseils d’Anne Le Bozec. Lors de Masterclasses, elle a pu bénéficier des conseils de Nelly Miriciaiu, Regina Verner, Margreet Honig ou encore Roberto Benzi.

Et septembre 2019, elle est sélectionnée comme Jeune Talent pour la prestigieuse académie de Bel Canto de la IVC Competition en Hollande à S’Hertogenbosch. Pour l’année 2020, elle est lauréate de l’académie des Frivolités Parisiennes et en 2021, elle fait partie du programme Jeunes Talents du Palais Royal (mécénat Crédit Agricole Île de France) et réalise à ce titre une série de mini-clips vidéos autour du répertoire lyrique français au Petit Palais ( R etrouvailles au P etit P alais ).

En juin 2021, elle chante avec sa pianiste Cécile Sagnier pour Jeunes Talents un programme autour des fables de La Fontaine à Château-Thierry intitulé « Fables, Contes et autres Légendes ». Elle incarne également Annio dans un spectacle de Franck Krawszyk librement inspiré de la Clémence de Titus de Mozart à la Seine Musicale. En juillet elle chante également dans une série de concerts dans un programme lyrique français intitulé « Deux hommes et une femme » avec l’orchestre du Palais Royal (direction J. P Sarcos) aux côtés de Kévin Amiel et Adrien Fournaison. Elle redonnera ce programme avec orchestre en novembre 2021 à Paris.

Sensible à la transmission et l’accessibilité de l’opéra pour tous, Marion a chanté dans le cadre des mini- concerts de l’Orchestre de chambre de Paris dans des centres d’hébergements ou des hôpitaux, et a participé aux spectacles «T chek » (rôle de Zefka dans une adaptation du Journal d’un Disparu de Janaček) et «H elp !» (Clorinde dans une adaptation du Combat de T ancrède de Monteverdi) au théâtre des Bouffes du Nord avec la Compagnie Plein jour, dans un programme éducatif promouvant l’opéra pour tous.
                
Cet automne, Marion chantera en récital avec Simon Adda-Reyss, au théâtre des Sablons de Neuilly un programme autour de Victor Hugo. Elle sera Sterling dans « Là-H aut » de Maurice Yvain avec la compagnie des Frivolités Parisiennes au théâtre de l’Athénée en février 2022 (dir. Nicolas Chesneau, mise en scène Pascal Neyron), et sera Nicklausse dans les Contes d’H offmann d’Offenbach dans une série de concerts Jeunes Chanteurs en collaboration avec l’opéra de Nancy (Nancy Opéra Passion).
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
            "concertsSubtitle": "PROCHAINS CONCERTS"
        }

    }
});