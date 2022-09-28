/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles, breakpointsValues, Text } from "../theme";
import {Background} from "../components/Background";
import bannerImgUrl from "../assets/img/bio/bio-banner.jpeg";
import { PageHeading } from "../components/PageHeading";
import { Divider } from "../components/Divider";
import ReactMarkdown from "react-markdown";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "../i18n";


export const Biography = memo(() => {

	const { t } = useTranslation({ Biography });
	const { classes, theme } = useStyles();


	return (
		<div className={classes.root}>
			<section className={classes.banner}>
				<Background
					imageUrl={bannerImgUrl}
					isImageCovered={true}
					fadeDirection="to bottom"

				/>
				<PageHeading
					title={t("bioTitle")}
					subtitle={t("bioSubtitle")}
					className={classes.titleWrapper}
				/>

			</section>

			<div className={classes.sectionWrapper}>
				<section className={classes.interpretationsAndBio}>
					<ReactMarkdown className={classes.paragraph}>
						{
							t("bioParagraph")
						}
					</ReactMarkdown>
				</section>

				<section className={classes.interpretationsAndBio}>
					<Text typo="section heading">
						{t("interpretation")}
					</Text>
					<Divider
						className={classes.interpretationDivider}
						height={1}
						width={8}
						color={theme.colors.palette.gold}
					/>

					<ul className={classes.listWrapper}>
						{
							[
								t("carmen"),
								t("ottavia"),
								t("gounod"),
								t("figaro"),
								t("smeton"),
								t("ravel"),
								t("offenbach"),
								t("mignon"),
								t("viviane"),
								t("massenet")
							].map(text => <li key={text} className={classes.listElement}>
								<span className={classes.dot} >.</span>
								<Text className={classes.interpretationText} typo="body 2">
									{text}
								</Text>
							</li>)
						}
					</ul>
				</section>

			</div>



		</div>


	)

});

const useStyles = makeStyles()(
	theme => ({
		"root": {
			"paddingTop": 0
		},
		"banner": {
			"height": theme.windowInnerWidth >= breakpointsValues["lg+"] ? "90vh" : "70vh",
			"position": "relative",
			"display": "flex",
			"alignItems": "flex-end",
			"justifyContent": "center"
		},

		"titleWrapper": {
			"marginTop": "30%",
			"marginBottom": theme.spacing(8),
		},
		"paragraph": {
			"textAlign": "justify",
			...theme.typography.variants["body 1"].style,
			"color": theme.colors.useCases.typography.textSecondary,
			"marginBottom": theme.spacing(8),
			"& strong": {
				"color": theme.colors.useCases.typography.textPrimary
			}
		},

		"interpretationsAndBio": {
			...(() => {
				if (theme.windowInnerWidth >= breakpointsValues.lg) {
					return {
						"width": 1150
					};
				};

				if (theme.windowInnerWidth >= breakpointsValues.md) {
					return {
						"width": "100%"
					};
				}

				return {
					"width": undefined,
					"maxWidth": 500
				}


			})()
		},
		"interpretationDivider": {
			"marginTop": theme.spacing(3),
			"marginBottom": theme.spacing(5)


		},
		"sectionWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"marginBottom": theme.spacing(8)

		},
		"interpretationText": {
			"color": theme.colors.useCases.typography.textSecondary

		},

		"listWrapper": {
			"listStyle": "none",
			"paddingInlineStart": 0
		},
		"listElement": {
			...theme.spacing.topBottom("margin", `${theme.spacing(3)}px`),
			"display": "flex",
			"alignItems": "center",

		},
		"dot": {
			"marginRight": theme.spacing(3),
			"position": "relative",
			"top": -10,
			"fontSize": "2rem",
			"color": theme.colors.palette.gold
		}




	})
)

export const { i18n } = declareComponentKeys<
	| "bioTitle"
	| "bioSubtitle"
	| "bioParagraph"
	| "interpretation"
	| "carmen"
	| "ottavia"
	| "gounod"
	| "figaro"
	| "smeton"
	| "ravel"
	| "offenbach"
	| "mignon"
	| "viviane"
	| "massenet"
>()({
	Biography
})

