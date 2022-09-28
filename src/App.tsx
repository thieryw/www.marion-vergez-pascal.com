import { memo, useMemo } from "react";
import { useRoute, routes } from "./router";
import { Home } from "./pages/Home";
import { GlTemplate } from "gitlanding/GlTemplate";
import { Header } from "./components/Header";
import type { HeaderProps } from "./components/Header";
import { useTranslation } from "./i18n";
import { ThemeProvider } from "./theme";
import { AppFooter } from "./AppFooter";
import { Biography } from "./pages/Biography";
import { Media } from "./pages/Media";
import { Concerts } from "./pages/Concerts";
import { Legal } from "./pages/Legal";
import { makeStyles } from "./theme";
import { ReturnType } from "tsafe";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";


export const App = memo(() => {

	const route = useRoute();

	const { t } = useTranslation({ App })

	const headerLinks = useMemo((): HeaderProps["links"] => {
		return [
			{
				...routes.home().link,
				"label": t("home")
			},
			{
				...routes.biography().link,
				"label": t("biography")
			},
			{
				...routes.futureEvents().link,
				"label": t("futureEvents")
			},
			{
				...routes.media().link,
				"label": t("media")
			}
		]
	}, [t]);

	const { classes } = useStyles({
		route
	});

	return (
		<ThemeProvider>
			<GlTemplate
				classes={{
					"headerWrapper": classes.headerWrapper,
				}}
				footer={<AppFooter />}
				header={<Header classes={{
					"link": classes.link,
					"linkUnderline": classes.linkUnderline,
					"unFoldIcon": classes.unfoldIcon,
					"darkModeSwitch": classes.darkModeSwitch
				}} links={headerLinks} />}
				body={<div className={classes.bodyWrapper}>
					{route.name === "home" && <Home />}
					{route.name === "biography" && <Biography />}
					{route.name === "futureEvents" && <Concerts />}
					{route.name === "media" && <Media />}
					{route.name === "legal" && <Legal />}

				</div>}
				headerOptions={{
					"position": "top of page",
					"isRetracted": false
				}}
			/>
		</ThemeProvider>
	)
});

const useStyles = makeStyles<{ route: ReturnType<typeof useRoute> }>()(
	(theme, { route }) => ({
		"headerWrapper": {
			"background": "none",
			"position": "fixed",
			"zIndex": 2,
			"width": "100%"
		},
		"link": {
			"color": route.name === "home" ? theme.colors.palette.light.light : undefined,
		},
		"linkUnderline": {
			"backgroundColor": route.name === "home" ? theme.colors.palette.light.light : undefined,
		},
		"unfoldIcon": {
			"color": route.name === "home" ? theme.colors.palette.light.light : undefined
		},
		"darkModeSwitch": {
			"& svg": {
				"fill": route.name === "home" ? theme.colors.palette.light.light : undefined

			}
		},
		"bodyWrapper": {
			...theme.spacing.rightLeft("padding", `${theme.paddingRightLeft}px`)
		}
	})
)

export const { i18n } = declareComponentKeys<
	| "home"
	| "media"
	| "futureEvents"
	| "biography"

>()({
	App
})
