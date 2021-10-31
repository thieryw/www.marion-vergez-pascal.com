import {memo, useMemo} from "react";
import {useRoute, routes } from "./router"
import {Home} from "./pages/Home";
import {GlTemplate} from "gitlanding";
import {Header} from "./components/Header";
import type {HeaderProps} from "./components/Header"
import {useTranslation} from "./i18n/useTranslation";
import { ThemeProvider } from "./theme";
import {AppFooter} from "./AppFooter";
import {Biography} from "./pages/Biography";
import {Media} from "./pages/Media";


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





	return (
		<GlTemplate 
			ThemeProvider={ThemeProvider} 
			footer={<AppFooter />} 
			header={<Header links={headerLinks} />}
			headerOptions={{
				"position": "fixed",
				"isRetracted": "smart"
			}}
		>
			{route.name === "home" && <Home />}
			{route.name === "biography" && <Biography />}
			{route.name === "futureEvents" && <p>{route.name}</p>}
			{route.name === "media" && <Media />}
		</GlTemplate>
	)
});

export declare namespace AppHeader {
	export type I18nScheme = {
		home: undefined,
		media: undefined,
		futureEvents: undefined,
		biography: undefined
	}
}