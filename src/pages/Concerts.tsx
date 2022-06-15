/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles, breakpointsValues } from "../theme";
import { Background } from "../components/Background"
import { PageHeading } from "../components/PageHeading";
import bannerJpeg from "../assets/img/concerts/concert-banner.jpeg";
import { useTranslation } from "../i18n/useTranslation";
import { concerts } from "../user/concerts";
import { EventCardVersion2 } from "../components/EventCardVersion2"
import { Text } from "../theme";
import { Divider } from "../components/Divider";



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
					concerts.filter((_concerts, index) => index > 17).map((concert, index) =>
						<EventCardVersion2
							className={classes.eventCard}
							classes={{
								"button": classes.button
							}}
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


			<section className={classes.concerts}>
				<div className={classes.archiveTitleWrapper}>
					<Text className={classes.archiveTitle} typo="section heading">{t("archivesTitle")}</Text>
					<Divider 
						height={1}
						width={8}
						color="gold"
					/>
				</div>

				{
					concerts.filter((_concert, index) => index <= 17).map((concert, index) => {
						return <EventCardVersion2
							className={classes.eventCard}
							classes={{
								"button": classes.button
							}}
							{...concert.fr}
							link={{
								"href": concert.linkHref
							}}
							buttonLabel="EN SAVOIR PLUS"
							key={index}
						/>
					}
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
		},
		"button": {
			"backgroundColor": theme.colors.palette.flamingoPink,
			"color": "black",
			":hover": {
				"color": theme.isDarkModeEnabled ? "white" : undefined
			}
		},
		"archiveTitle": {
			"fontSize": "3rem",
			"lineHeight": "3rem",
			"textAlign": "center",
			"marginBottom": theme.spacing(5)
		},
		"archiveTitleWrapper": {
			...theme.spacing.topBottom("padding", `${theme.spacing(7)}px`),
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center"
		}

	})
)


export declare namespace Concerts {
	export type I18nScheme = {
		concertsTitle: undefined;
		concertsSubtitle: undefined;
		archivesTitle: undefined
	};
};