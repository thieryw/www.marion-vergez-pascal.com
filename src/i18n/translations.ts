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
            "copyRight": "Copyright © 2021 Marion Vergez-Pascal. Tous droits réservés",
            "legal": "Mentions Légals"
        },
        "Biography": {
            "bioTitle": "BIOGRAPHIE",
            "bioSubtitle": "MON HISTOIRE",
            "bioParagraph1": `
                Lorem hac habitasse platea dictumst. Donec vulputate vestibulum iaculis. Cras consequat lobortis enim nec efficitur. Sed volutpat enim id lacus tincidunt, eu dictum neque porttitor. Mauris cursus ligula efficitur eros egestas pharetra. Vestibulum augue dolor, pellentesque at cursus vitae, volutpat et tellus. Ut vel augue id orci interdum commodo. Morbi pharetra iaculis leo ac pellentesque. Pellentesque tincidunt semper efficitur. Quisque venenatis lectus dui, sit amet egestas purus pellentesque sed. Duis id congue erat. Etiam hendrerit mi turpis, id luctus lacus tempor venenatis. Proin imperdiet faucibus tellus. Nam finibus nibh non tincidunt rutrum. Donec pharetra ante erat, sed congue libero molestie vel. Sed eget urna et neque vulputate sollicitudin.
            `,
            "bioParagraph2": `
                Nam ultricies mauris nec pellentesque dapibus. Ut id magna consectetur, vestibulum est et, scelerisque sem. Ut nec risus at diam semper bibendum. Sed aliquet erat ligula, et blandit ipsum dictum sit amet. Praesent a massa id leo condimentum viverra. In placerat ex sit amet ipsum dapibus feugiat. Maecenas vitae mauris aliquet, lacinia urna nec, finibus arcu. Nam euismod suscipit purus, et dignissim eros. Fusce bibendum, urna at suscipit euismod, ligula magna lobortis dolor, vitae venenatis felis ipsum in diam. Quisque hendrerit nec nulla non euismod. Proin faucibus mi quis malesuada congue. Praesent pulvinar aliquam molestie.
            `,
            "bioParagraph3": `
                Curabitur a posuere erat, sit amet congue lorem. Proin quam tortor, aliquet id blandit ac, eleifend ut mi. Nam non enim interdum, porta dolor ut, mattis massa. Etiam tincidunt, ante vitae cursus scelerisque, lectus lectus commodo purus, ac aliquam dolor odio id nibh. Maecenas tempor urna nec nisi elementum, non blandit lacus eleifend. Proin egestas imperdiet mauris, at maximus diam bibendum in. Proin lectus lectus, scelerisque vitae sodales tempor, laoreet sit amet felis. Phasellus eget venenatis odio, eget pretium magna.
            `,
            "bioParagraph4": `
                Proin posuere, nulla id tincidunt congue, purus enim faucibus metus, in cursus lectus metus id lectus. Nunc at luctus elit, pulvinar cursus lorem. Pellentesque a finibus tortor. Nulla erat purus, maximus et mattis et, sagittis in lectus. In tincidunt purus vel velit congue, vel lacinia turpis dictum. Donec posuere eros magna, nec pharetra orci ullamcorper non. Nam dignissim in nunc bibendum dignissim. Aenean auctor, lacus nec pretium malesuada, elit mi dapibus risus, sed tristique nulla purus nec purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a mi egestas sapien condimentum molestie suscipit eget urna. Praesent lacus erat, aliquam rutrum pellentesque eget, vestibulum at mauris. Curabitur consequat mi ut arcu lobortis ornare a vel massa. Sed blandit posuere dolor vitae laoreet. Nullam consequat vitae libero vel vehicula.
            `,

        },
        "Media": {
            "pageTitle": "MEDIA",
            "pageSubTitle": "MES IMAGES",
            "videoTitle": "RECENTES",
            "videoSubtitle": "VIDEOS",
            "youtubeButton": "ma chaine youtube"

        },
        "Concerts": {
            "concertsTitle": "concerts",
            "concertsSubtitle": "PROCHAIN CONCERTS"
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
            "legal": "Mentions Légals"
        },
        "Biography": {
            "bioTitle": "BIOGRAPHIE",
            "bioSubtitle": "MON HISTOIRE",
            "bioParagraph1": `
                Lorem hac habitasse platea dictumst. Donec vulputate vestibulum iaculis. Cras consequat lobortis enim nec efficitur. Sed volutpat enim id lacus tincidunt, eu dictum neque porttitor. Mauris cursus ligula efficitur eros egestas pharetra. Vestibulum augue dolor, pellentesque at cursus vitae, volutpat et tellus. Ut vel augue id orci interdum commodo. Morbi pharetra iaculis leo ac pellentesque. Pellentesque tincidunt semper efficitur. Quisque venenatis lectus dui, sit amet egestas purus pellentesque sed. Duis id congue erat. Etiam hendrerit mi turpis, id luctus lacus tempor venenatis. Proin imperdiet faucibus tellus. Nam finibus nibh non tincidunt rutrum. Donec pharetra ante erat, sed congue libero molestie vel. Sed eget urna et neque vulputate sollicitudin.
            `,
            "bioParagraph2": `
                Nam ultricies mauris nec pellentesque dapibus. Ut id magna consectetur, vestibulum est et, scelerisque sem. Ut nec risus at diam semper bibendum. Sed aliquet erat ligula, et blandit ipsum dictum sit amet. Praesent a massa id leo condimentum viverra. In placerat ex sit amet ipsum dapibus feugiat. Maecenas vitae mauris aliquet, lacinia urna nec, finibus arcu. Nam euismod suscipit purus, et dignissim eros. Fusce bibendum, urna at suscipit euismod, ligula magna lobortis dolor, vitae venenatis felis ipsum in diam. Quisque hendrerit nec nulla non euismod. Proin faucibus mi quis malesuada congue. Praesent pulvinar aliquam molestie.
            `,
            "bioParagraph3": `
                Curabitur a posuere erat, sit amet congue lorem. Proin quam tortor, aliquet id blandit ac, eleifend ut mi. Nam non enim interdum, porta dolor ut, mattis massa. Etiam tincidunt, ante vitae cursus scelerisque, lectus lectus commodo purus, ac aliquam dolor odio id nibh. Maecenas tempor urna nec nisi elementum, non blandit lacus eleifend. Proin egestas imperdiet mauris, at maximus diam bibendum in. Proin lectus lectus, scelerisque vitae sodales tempor, laoreet sit amet felis. Phasellus eget venenatis odio, eget pretium magna.
            `,
            "bioParagraph4": `
                Proin posuere, nulla id tincidunt congue, purus enim faucibus metus, in cursus lectus metus id lectus. Nunc at luctus elit, pulvinar cursus lorem. Pellentesque a finibus tortor. Nulla erat purus, maximus et mattis et, sagittis in lectus. In tincidunt purus vel velit congue, vel lacinia turpis dictum. Donec posuere eros magna, nec pharetra orci ullamcorper non. Nam dignissim in nunc bibendum dignissim. Aenean auctor, lacus nec pretium malesuada, elit mi dapibus risus, sed tristique nulla purus nec purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a mi egestas sapien condimentum molestie suscipit eget urna. Praesent lacus erat, aliquam rutrum pellentesque eget, vestibulum at mauris. Curabitur consequat mi ut arcu lobortis ornare a vel massa. Sed blandit posuere dolor vitae laoreet. Nullam consequat vitae libero vel vehicula.
            `,

        },
        "Media": {
            "pageTitle": "MEDIA",
            "pageSubTitle": "MES IMAGES",
            "videoTitle": "RECENTES",
            "videoSubtitle": "VIDEOS",
            "youtubeButton": "ma chaine youtube"

        },
        "Concerts": {
            "concertsTitle": "concerts",
            "concertsSubtitle": "PROCHAIN CONCERTS"
        }

    }
});