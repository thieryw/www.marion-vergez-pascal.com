/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles, breakpointsValues } from "../theme";
import { Background } from "../components/Background"
import { PageHeading } from "../components/PageHeading";
import bannerJpeg from "../assets/img/concerts/concert-banner.jpeg";
import { useTranslation } from "../i18n";
import { useLang } from "../i18n";
import { concerts } from "../user/concerts";
import { EventCardVersion2 } from "../components/EventCardVersion2"
import { Text } from "../theme";
import { Divider } from "../components/Divider";
import { archives } from "../user/archives";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";



export const Concerts = memo(() => {

	const { classes, cx } = useStyles();
	const { t } = useTranslation({ Concerts });
	const { lang } = useLang();


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


			{
				[
					{
						"concerts": concerts,
						"type": "concerts" as const
					},
					{
						"concerts": archives,
						"type": "archives" as const
					}

				].map(({ concerts, type }) => {

					return <section className={classes.concerts}>
						{
							type === "archives" &&
							<div className={classes.archiveTitleWrapper}>
								<Text className={classes.archiveTitle} typo="section heading">{t("archivesTitle")}</Text>
								<Divider
									height={1}
									width={8}
									color="gold"
								/>
							</div>

						}
						{concerts.map(concert =>
							<EventCardVersion2
								className={classes.eventCard}
								classes={{
									"button": classes.button
								}}
								{
									...concert[lang]
								}
								link={{
									"href": concert.linkHref
								}}
								buttonLabel="EN SAVOIR PLUS"
								key={concert.fr.title}
							/>
						)}

					</section>


				})
			}

		</div>
	)

});


const useStyles = makeStyles()(
	theme => ({
		"root": {
			"paddingTop": 0
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

export const { i18n } = declareComponentKeys<
	| "concertsTitle"
	| "concertsSubtitle"
	| "archivesTitle"
>()({
	Concerts
})
