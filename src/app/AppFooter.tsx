/* eslint-disable @typescript-eslint/no-redeclare */
import { memo, useMemo } from "react";
import { Footer } from "./components/Footer";
import type { FooterProps } from "./components/Footer";
import { useTranslation } from "./i18n/useTranslation";
import { routes } from "../router";
import instagramIconUrl from "../assets/svg/instagram.svg";
import facebookIconUrl from "../assets/svg/facebook.svg";
import {Text} from "../theme";
import MuiLink from "@mui/material/Link";
import { makeStyles } from "../theme";
import { breakpointsValues } from "../theme";



export const AppFooter = memo(() => {

	const { t: headerTr } = useTranslation("App");
	const { t } = useTranslation("AppFooter");


	const links = useMemo((): FooterProps["links"] => {
		return [
			{
				...routes.home().link,
				"label": headerTr("home")
			},
			{
				...routes.home().link,
				"label": headerTr("biography")
			},
			{
				...routes.home().link,
				"label": headerTr("futureEvents")
			},
			{
				...routes.home().link,
				"label": headerTr("media")
			},
		]

	}, [headerTr])

	const socialMediaLinks = useMemo((): FooterProps["socialMediaLinks"] => {
		return [
			{
				"href": "https://www.instagram.com/marion_vergezpascal/",
				"iconUrl": instagramIconUrl,
			},
			{
				"href": "https://www.facebook.com/marion.vergezpascal.9",
				"iconUrl": facebookIconUrl,
			},
		]
	}, []);

	const { classes, cx } = useStyles();

	return <Footer
		socialMediaLinks={socialMediaLinks}
		links={links}
		title={
			<div>
				<Text className={classes.title} typo="my title">Marion Vergez-Pascal</Text>
				<Text className={classes.subtitle} typo="subtitle">SOPRANO</Text>
			</div>
		}

		bottomDiv={
			<div className={classes.bottomDiv}>
				<MuiLink className={classes.legal} {...routes.legal().link}><Text className={cx(classes.legalText, classes.bottomDivElement)} typo="label 2">{t("legal")}</Text></MuiLink>
				<Text className={classes.bottomDivElement} typo="label 2">{t("copyRight")}</Text>
				<Text className={classes.bottomDivElement} typo="label 2">{t("author")}</Text>
			</div>
		}
	/>
})

export declare namespace AppFooter {
	export type I18nScheme = {
		legal: undefined,
		copyRight: undefined,
		author: undefined,
	}
}


const useStyles = makeStyles()(
	theme => ({
		"bottomDiv": {
			"display": "flex",
			...theme.spacing.topBottom("padding", `${theme.spacing(2)}px`),
			"justifyContent": "space-between",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"flexDirection": "column",
				"alignItems": "center"
			}: {})
		},
		"bottomDivElement": {
			"color": theme.colors.useCases.typography.textSecondary,
			...theme.spacing.topBottom("margin", `${theme.spacing(2)}px`)
		},
		"legal": {
			"textDecoration": "none",
		},
		"legalText": {
			"transition": "color 500ms",
			":hover": {
				"color": theme.colors.useCases.typography.textPrimary,
			}
		},
		"subtitle": {
			"fontSize": "1.4rem",
			"fontWeight": 100,
			"letterSpacing": theme.spacing(2),
			"color": theme.colors.useCases.typography.textSecondary,
			"textAlign": "right",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"fontSize": "1rem"

			}: {})
		},
		"title": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"fontSize": "1.4rem"

			}: {})

		}

	})
)