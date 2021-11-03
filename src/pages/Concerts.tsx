/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles } from "../theme";
import { Background } from "../components/Background"
import { PageHeading } from "../components/PageHeading";
import bannerJpeg from "../assets/img/concerts/concert-banner.jpeg";
import { useTranslation } from "../i18n/useTranslation";
import { EventCard } from "../components/EventCard";
import {concerts} from "../user/concerts";



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

					{
						concerts.map(concert => <EventCard 
							{...concert.fr}
							link={{
								"href": concert.linkHref
							}}
							linkLabel="EN SAVOIR PLUS"
							key={concert.fr.title}
						/>)
					}

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
		/*cardTitle: undefined;
		cardDescription: undefined;
		cardAddress: undefined;
		cardLinkLabel: undefined;
		cardHour: undefined;
		cardMonth: undefined;*/

	};
};