/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles } from "../theme";
import { Background } from "../components/Background"
import { PageHeading } from "../components/PageHeading";
import bannerJpeg from "../assets/img/concerts/concert-banner.jpeg";
import { useTranslation } from "../i18n/useTranslation";
import { EventCard } from "../components/EventCard";



export const Concerts = memo(() => {

	const { classes } = useStyles();
	const { t } = useTranslation("Concerts");

	return (
		<div>
			<section className={classes.banner}>
				<Background
					imageUrl={bannerJpeg}
					isImageCovered={true}
					fadeDirection="to bottom"
				/>

				<PageHeading
					title={t("concertsTitle")}
					subtitle={t("concertsSubtitle")}
					className={classes.pageHeading}
				/>
			</section>

			<section className={classes.concerts}>

					<EventCard 
						day="16"
						month="DECEMBRE"
						hour="20 h 30"
						year="2021"
						linkLabel="EN SAVOIR PLUS"
						link={{
							"href": ""
						}}
						title="Concert au chatelet"
						description="Concert offert par la Mairie de Maraussan. Réservation obligatoire au 06 74 75 94 96. Programme : M. Ravel - Quatuor à cordes en Fa majeur ; L. V. Beethoven - Quatuor op. 59 n°3 en Do majeur."
						address="Salle Esprit Gare Place Marcel Barrère 34370 Maraussan"
						eventImageUrl={bannerJpeg}



					/>

					<EventCard 
						day="16"
						month="DECEMBRE"
						hour="20 h 30"
						year="2021"
						linkLabel="EN SAVOIR PLUS"
						link={{
							"href": ""
						}}
						title="Concert au chatelet"
						address="Salle Esprit Gare Place Marcel Barrère 34370 Maraussan"
						description="Concert offert par la Mairie de Maraussan. Réservation obligatoire au 06 74 75 94 96. Programme : M. Ravel - Quatuor à cordes en Fa majeur ; L. V. Beethoven - Quatuor op. 59 n°3 en Do majeur."
						eventImageUrl={bannerJpeg}


					/>

					<EventCard 
						day="16"
						month="DECEMBRE"
						hour="20 h 30"
						year="2021"
						linkLabel="EN SAVOIR PLUS"
						link={{
							"href": ""
						}}
						title="Concert au chatelet"
						address="Salle Esprit Gare Place Marcel Barrère 34370 Maraussan"
						description="Concert offert par la Mairie de Maraussan. Réservation obligatoire au 06 74 75 94 96. Programme : M. Ravel - Quatuor à cordes en Fa majeur ; L. V. Beethoven - Quatuor op. 59 n°3 en Do majeur."
						eventImageUrl={bannerJpeg}


					/>

					<EventCard 
						day="16"
						month="DECEMBRE"
						hour="20 h 30"
						year="2021"
						linkLabel="EN SAVOIR PLUS"
						link={{
							"href": ""
						}}
						title="Concert au chatelet"
						address="Salle Esprit Gare Place Marcel Barrère 34370 Maraussan"
						description="Concert offert par la Mairie de Maraussan. Réservation obligatoire au 06 74 75 94 96. Programme : M. Ravel - Quatuor à cordes en Fa majeur ; L. V. Beethoven - Quatuor op. 59 n°3 en Do majeur."
						eventImageUrl={bannerJpeg}


					/>
			</section>

		</div>
	)

});


const useStyles = makeStyles()(
	theme => ({

		"banner": {
			"height": "80vh",
			"position": "relative",
			"display": "flex",
			"justifyContent": "center"

		},
		"pageHeading": {
			"alignSelf": "flex-end",
			"position": "relative",
			"top": -theme.spacing(8)
		},
		"concerts": {
			"display": "flex",
			"flexDirection": "column",
			"paddingBottom": theme.spacing(8)

		}

	})
)


export declare namespace Concerts {
	export type I18nScheme = {
		concertsTitle: undefined;
		concertsSubtitle: undefined;
	};
};