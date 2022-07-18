import { memo } from "react";
import { routes, useRoute } from "router";
import { declareComponentKeys, useTranslation } from "i18n";
import { Header } from "components/Header";
import { makeStyles } from "theme"

export const AppHeader = memo(() => {

	const { t } = useTranslation({ AppHeader });

	const route = useRoute();

	const { classes } = useStyles({ route })

	return <Header
		classes={{
			"link": classes.link,
			"linkUnderline": classes.linkUnderline,
			"unFoldIcon": classes.unfoldIcon,
			"darkModeSwitch": classes.darkModeSwitch
		}}
		links={[
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

		]}
	/>


})

export const { i18n } = declareComponentKeys<
	| "home"
	| "media"
	| "futureEvents"
	| "biography"

>()({ AppHeader })

const useStyles = makeStyles<{ route: ReturnType<typeof useRoute> }>()(
	(theme, { route }) => ({
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