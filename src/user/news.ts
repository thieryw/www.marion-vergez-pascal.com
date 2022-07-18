import newsImage from "./assets/news/news.jpeg";
import newsImageWebp from "./assets/webp/news.webp";
import type { Source } from "gitlanding/tools/Source";

type NewsProps = {
	title: string;
	paragraph: string;
};

export const news: {
	fr: NewsProps;
	en?: NewsProps;
	imageUrl: string;
	imageSources?: Source[];
	buttonHref?: string;
} = {

	"fr": {
		"title": `Spectacles « Deux Hommes et une femme » `,

		"paragraph": `17 et 18 Novembre à 20h30

Airs, duos et trios d'opéras de Gounod, Bizet, Massenet, Offenbach (Faust, Carmen, Les Pêcheurs de perles, La Belle Hélène...)

AVEC
Marion Vergez-Pascal, mezzo-soprano
Kévin Amiel, ténor
Adrien Fournaison, baryton-basse
Olivier Oudiou, mise en espace

Le Palais royal, orchestre sur instruments d'époque
Jean-Philippe Sarcos, direction

Salle Historique du Premier Conservatoire de Paris 

Dans ce programme, Marion Vergez-Pascal se retrouve bien souvent au milieu de l'attention des deux hommes, Kévin Amiel (ténor) et Adrien Fournaison (baryton-basse).
S'ils sont parfois alliés (dans Faust ou dans Les Pêcheurs de perles), ils sont aussi rivaux : dès que l'un d'eux a le dos tourné, l'autre en profite pour chanter son amour à la belle Marion.
Ainsi, après avoir juré son amitié à Adrien, Kévin se laisse pourtant séduire par Marion après qu'elle lui a chanté son irrésistible séguédille ("Près des remparts de Séville", Carmen). Sur leur petit nuage, les deux tourtereaux unissent leur voix pour conter leur "rêve d'amour" (La Belle Hélène d'Offenbach).
Déçu par cette trahison, Adrien noie son chagrin dans une romance (Plaisir d'amour de Martini), avant de tenter une dernière approche auprès de la belle Marion qu'il emmène à dos d'âne ("De-ci de-là" de Messager). Mais c'était sans compter sur la persévérance de Kévin : il déclare à son tour son amour inconditionnel pour Marion qui, charmée, tombe à ses genoux ("Je veux aimer toujours" de Félicien David).
Cependant, pas d'opéra-comique français sans "happy end" : les trois amis se réconcilient dans un trio final enjoué (extrait de La Périchole d'Offenbach).
Tout est bien qui finit bien ?..




		`,
	},
	"imageUrl": newsImage,
	"imageSources": [
		{
			"srcSet": newsImageWebp,
			"type": "image/webp",
			"key": newsImageWebp
		},
		{
			"srcSet": newsImage,
			"type": "image/jpeg",
			"key": newsImage
		}
	]

}