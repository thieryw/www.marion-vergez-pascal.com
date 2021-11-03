import { EventCardProps } from "../components/EventCard";
type ConcertProps = Omit<EventCardProps, 
	"className" |
	"linkLabel" |
	"link" |
	"eventImageUrl"
>

export const concerts: {
	fr: ConcertProps;
	en?: ConcertProps;
	linkHref: string;
}[] = [


	{
		"fr": {
			"title": "Concert au chatelet",

			"description": `
				Concert offert par la Mairie de Maraussan. 
				Réservation obligatoire au 06 74 75 94 96. 
				Programme : M. Ravel - Quatuor à cordes en Fa majeur ; 
				L. V. Beethoven - Quatuor op. 59 n°3 en Do majeur.
			`,

			"address": "Salle Esprit Gare Place Marcel Barrère 34370 Maraussan",
			"day": 12,
			"month": "Janvier",
			"year": 2021,
			"hour": "20 h 30"
		},
		"linkHref": ""
	},



]