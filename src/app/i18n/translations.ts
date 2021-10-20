import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";
import type { Language } from "./Language";
import { Home } from "../pages/Home";
import { App, AppHeader } from "../App"
import { AppFooter } from "../AppFooter";
import { news } from "../user/news";


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
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = {
    [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]>;
};

export const translations = id<Record<Language, Translations>>({
    "en": {
        "Home": {
            "newsParagraph": news.en.paragraph,
            "newsTitle": news.en.title,
            "newsHeading": "ACTUALITES",
            "newsButtonLabel": "Voir Plus",
            "bioTitle": "Qui suis-je ?",
            "bioParagraph": `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi non tristique libero. Curabitur lobortis viverra augue, 
                in volutpat neque mattis a. Praesent quis erat aliquam nulla 
                vestibulum tempus eget nec velit. Nulla facilisi. 
                In hac habitasse platea dictumst. Donec hendrerit aliquam nulla, 
                nec gravida nunc semper non. Aenean aliquet tortor nec felis varius, 
                semper ornare nunc ullamcorper. Aenean vel nulla nec 
                dolor pharetra congue vitae quis dui.
            `,
            "bioButtonLabel": "Biographie",
            "contactHeading": "CONTACT",
            "contactTitle": "Gardons Contact",
            "contactParagraph": `
                N'hésitez pas à m'écrire, j'ai hâte de vous lire ! 
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
            "copyRight": "Copyright © 2021 Quatuor Confluence. Tous droits réservés",
            "legal": "Mentions Légals"
        }
    },

    "fr": {
        "Home": {
            "newsParagraph": news.fr.paragraph,
            "newsTitle": news.fr.title,
            "newsHeading": "ACTUALITES",
            "newsButtonLabel": "Voir Plus",
            "bioTitle": "Qui suis-je ?",
            "bioParagraph": `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi non tristique libero. Curabitur lobortis viverra augue, 
                in volutpat neque mattis a. Praesent quis erat aliquam nulla 
                vestibulum tempus eget nec velit. Nulla facilisi. 
                In hac habitasse platea dictumst. Donec hendrerit aliquam nulla, 
                nec gravida nunc semper non. Aenean aliquet tortor nec felis varius, 
                semper ornare nunc ullamcorper. Aenean vel nulla nec 
                dolor pharetra congue vitae quis dui.
            `,
            "bioButtonLabel": "Biographie",
            "contactHeading": "CONTACT",
            "contactTitle": "Gardons Contact",
            "contactParagraph": `
                N'hésitez pas à m'écrire, j'ai hâte de vous lire ! 
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
            "copyRight": "Copyright © 2021 Quatuor Confluence. Tous droits réservés",
            "legal": "Mentions Légals"
        }

    }
});