/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles } from "../../theme";
import {Background} from "../components/Background";
import bannerImgUrl from "../../assets/img/bio/bio-banner.jpeg";
import {Text, breakpointsValues} from "../../theme";
import {useTranslation} from "../i18n/useTranslation";
import {GlIllustration} from "gitlanding/GlIllustration";
import portraitImg from "../../assets/img/bio/bio-portrait.jpeg";
import {Divider} from "../components/Divider";


export const Biography = memo(() => {

	const {t} = useTranslation("Biography");
	const { classes, theme } = useStyles();


	return (
		<>
			<section className={classes.banner}>
				<Background 
					className={classes.bannerBackground}
					imageUrl={bannerImgUrl}
					isImageCovered={true}
					fadeDirection="to bottom"
				/>
				<div className={classes.titleWrapper}>
					<Text className={classes.title} typo="caption">{t("bioTitle")}</Text>
					<Divider 
						height={2}
						width={6}
						color={theme.colors.palette.gold}
					/>
					<Text className={classes.subTitle} typo="section heading">{t("bioSubtitle")}</Text>
					
				</div>

			</section>
			<section className={classes.mainSection}>
				<GlIllustration hasShadow={true} className={classes.illustration} url={portraitImg} type="image"/>
				<Text className={classes.text} typo="body 1">
					<span className={classes.textFirstLetter}>{t("textFirstLetter")}</span>
					{t("bioText")}
				</Text>

			</section>

		</>


	)

});

const useStyles = makeStyles()(
	theme => ({
		"root": {

		},
		"banner": {
			"height": "100vh",
			"position": "relative",
			"display": "flex",
			"alignItems": "flex-end",
			"justifyContent": "center"
		},
		"bannerBackground": {
			"left": 0

		},
		"titleWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"zIndex": 1,
			"position": "relative",
			"marginTop": "30%",
			"marginBottom": theme.spacing(8),
			"gap": theme.spacing(5)
		},
		"title": {
			"color": theme.colors.useCases.typography.textSecondary
		},
		"subTitle": {
			"fontSize": "3.5rem",
			...(theme.windowInnerWidth < breakpointsValues.sm ? {
				"fontSize": "2.5rem"
			}: {})
			
		},
		"mainSection": {
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				...theme.spacing.rightLeft("padding", `${theme.spacing(12)}px`),
			} : {}),
			"paddingBottom": theme.spacing(8),
			"display": "flex",
			"gap": theme.spacing(7),
			"justifyContent": "center",
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"flexDirection": "column",
				"alignItems": "center"


			}: {})

		},
		"illustration": {
			"maxWidth": 600,
			"minWidth": 400,
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"minWidth": "unset"
			}: {})
		},
		"text": {
			"color": theme.colors.useCases.typography.textSecondary,
			"textAlign": "justify",
			"maxWidth": 500,
			"minWidth": 400,
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"maxWidth": 600,
				"minWidth": "unset"

			}: {})

		},
		"textFirstLetter": {
			"color": theme.colors.useCases.typography.textPrimary,
			"fontSize": "7rem",
			"float": "left",
			"lineHeight": "5rem",
			"marginRight": theme.spacing(3),
			...(theme.windowInnerWidth < breakpointsValues.xl ? {
				"lineHeight": "6.1rem"

			}: {})

		}

	})
)

export declare namespace Biography {
	export type I18nScheme = {
		bioTitle: undefined;
		bioSubtitle: undefined;
		bioText: undefined;
		textFirstLetter: undefined;
	};
};
