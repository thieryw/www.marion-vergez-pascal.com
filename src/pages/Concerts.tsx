/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles, breakpointsValues } from "../theme";
import { Background } from "../components/Background"
import { PageHeading } from "../components/PageHeading";
import bannerJpeg from "../assets/img/concerts/concert-banner.jpeg";
import { useTranslation } from "../i18n/useTranslation";
import { concerts } from "../user/concerts";
import { EventCardVersion2 } from "../components/EventCardVersion2"



export const Concerts = memo(() => {

	const { classes, cx } = useStyles();
	const { t } = useTranslation("Concerts");


	return (
		<div className={classes.root}>
			<section className={classes.banner}>
				<Background
					imageUrl={bannerJpeg}
					isImageCovered={true}
					fadeDirection="to bottom"
				/>

				<div className={cx(classes.bannerTitleLarge, classes.pageHeading)}>
					<PageHeading
						title={t("concertsTitle")}
						subtitle={t("concertsSubtitle")}
					/>
				</div>
			</section>
			<div className={cx(classes.bannerTitleSmall, classes.pageHeading)}>
				<PageHeading
					title={t("concertsTitle")}
					subtitle={t("concertsSubtitle")}
				/>
			</div>

			<section className={classes.concerts}>

				{
					concerts.map((concert, index) =>
						<EventCardVersion2
							className={classes.eventCard}
							{...concert.fr}
							link={{
								"href": concert.linkHref
							}}
							buttonLabel="EN SAVOIR PLUS"
							key={index}
						/>
					)
				}

			</section>

		</div>
	)

});


const useStyles = makeStyles()(
	theme => ({
		"root": {
			"paddingTop": "0px !important"
		},

		"banner": {
			"height": theme.windowInnerWidth < breakpointsValues.sm ? "50vh" : "80vh",
			"position": "relative",
			"display": "flex",
			"justifyContent": "center"
		},
		"pageHeading": {
			"position": "relative",
			"alignSelf": "flex-end",
			"top": -theme.spacing(8)
		},
		"concerts": {
			"display": "flex",
			"flexDirection": "column",
			"paddingBottom": theme.spacing(8),
			...theme.spacing.rightLeft("padding", `${theme.spacing(8)}px`)
		},
		"eventCard": {
			"borderBottom": `solid ${theme.colors.useCases.typography.textSecondary} 1px`

		},
		"bannerTitleLarge": {
			"display": theme.windowInnerWidth >= breakpointsValues.sm ? undefined : "none",
		},
		"bannerTitleSmall": {
			"display": theme.windowInnerWidth >= breakpointsValues.sm ? "none" : undefined,
		}
	})
)


export declare namespace Concerts {
	export type I18nScheme = {
		concertsTitle: undefined;
		concertsSubtitle: undefined;
	};
};