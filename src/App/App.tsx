import { memo } from "react";
import { useRoute } from "router";
import { Home } from "pages/Home";
import { GlTemplate } from "gitlanding/GlTemplate";
import { ThemeProvider } from "theme";
import { AppFooter } from "./AppFooter";
import { Biography } from "pages/Biography";
import { Media } from "pages/Media";
import { Concerts } from "pages/Concerts";
import { Legal } from "pages/Legal";
import { makeStyles } from "theme";
import { AppHeader } from "./AppHeader";



export const App = memo(() => {

	const route = useRoute();

	const { classes } = useStyles();


	return (
		<ThemeProvider>
			<GlTemplate
				classes={{
					"headerWrapper": classes.headerWrapper
				}}
				footer={<AppFooter />}
				header={<AppHeader />}
				body={
					<>
						{route.name === "home" && <Home />}
						{route.name === "biography" && <Biography />}
						{route.name === "futureEvents" && <Concerts />}
						{route.name === "media" && <Media />}
						{route.name === "legal" && <Legal />}

					</>
				}
			/>

		</ThemeProvider>

	)
});

const useStyles = makeStyles()(
	() => ({
		"headerWrapper": {
			"background": "none",
		}
	})
)

