import { memo, useMemo } from "react";
import { useRoute, routes } from "./router";
import { Home } from "./pages/Home";
import { GlTemplate } from "gitlanding/GlTemplate";
import { Header } from "./components/Header";
import type { HeaderProps } from "./components/Header";
import { useTranslation } from "./i18n/useTranslation";
import { ThemeProvider } from "./theme";
import { AppFooter } from "./AppFooter";
import { Biography } from "./pages/Biography";
import { Media } from "./pages/Media";
import { Concerts } from "./pages/Concerts";
import { Legal } from "./pages/Legal";
import { makeStyles } from "./theme";
import { ReturnType } from "tsafe";



export const App = memo(() => {

	const route = useRoute();

	const { t } = useTranslation("App")

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
		<GlTemplate
			classes={{
				"headerWrapper": classes.headerWrapper
			}}
			ThemeProvider={ThemeProvider}
			footer={<AppFooter />}
			header={<Header classes={{
				"link": classes.link,
				"linkUnderline": classes.linkUnderline,
				"unFoldIcon": classes.unfoldIcon,
				"darkModeSwitch": classes.darkModeSwitch
			}} links={headerLinks} />}
		>
			{route.name === "home" && <Home />}
			{route.name === "biography" && <Biography />}
			{route.name === "futureEvents" && <Concerts />}
			{route.name === "media" && <Media />}
			{route.name === "legal" && <Legal />}

		</GlTemplate>
	)
});

const useStyles = makeStyles<{route: ReturnType<typeof useRoute>}>()(
	(theme, {route}) => ({
		"headerWrapper": {
			"background": "none",
		},
		"link": {
			"color": route.name === "home" ? theme.colors.palette.light.light : undefined,
		},
		"linkUnderline": {
			"backgroundColor": route.name === "home" ? theme.colors.palette.light.light : undefined,
		},
		"unfoldIcon": {
				"fill": route.name === "home" ? theme.colors.palette.light.light : undefined
		},
		"darkModeSwitch": {
			"& svg": {
				"fill": route.name === "home" ? theme.colors.palette.light.light : undefined

			}
		}

	})
)

export declare namespace AppHeader {
	export type I18nScheme = {
		home: undefined,
		media: undefined,
		futureEvents: undefined,
		biography: undefined
	}
}