import { createThemeProvider, defaultGetTypographyDesc, defaultPalette } from "onyxia-ui";
import { createText } from "onyxia-ui/Text";
import { createMakeStyles } from "tss-react";
import { breakpointsValues as defaultBreakpointValues } from "onyxia-ui";


export const { ThemeProvider, useTheme: defaultUseTheme } = createThemeProvider({
	"getTypographyDesc": ({
		windowInnerWidth,
		browserFontSizeFactor,
		windowInnerHeight
	}) => {
		const typographyDesc = defaultGetTypographyDesc({
			windowInnerWidth,
			browserFontSizeFactor,
			windowInnerHeight
		});

		return {
			"fontFamily": '"Open Sans", sans-serif',
			"rootFontSizePx": typographyDesc.rootFontSizePx,
			"variants": {
				...typographyDesc.variants,
				"subtitle": {
					...typographyDesc.variants["display heading"],
					"fontFamily": "'Playfair Display', serif",
					"fontWeight": 100
				},
				"my title": {
					"htmlComponent": "h1",
					"fontWeight": "bold",
					"fontSizeRem": 2,
					"lineHeightRem": 2,
					"fontFamily": "'Cinzel Decorative', cursive"
				},
				"section heading": {
					...typographyDesc.variants["display heading"],
					"fontFamily": "'Playfair Display', serif",
					"fontWeight": 100,
					"fontSizeRem": 2,
					"lineHeightRem": 2.5
				},
				"body 1": {
					...typographyDesc.variants["body 1"],
					"lineHeightRem": windowInnerWidth < breakpointsValues.md ? 1.2 : 1.5
				}
			},
		};
	},
	"palette": {
		...defaultPalette,
		"gold": "#e1bf59"
	},
});

export function useTheme() {
	const theme = defaultUseTheme();
	return {
		...theme,
		"paddingRightLeft": theme.spacing(
			(() => {
				if (theme.windowInnerWidth >= defaultBreakpointValues["lg"]) {
					return 7;
				}

				if (theme.windowInnerWidth >= defaultBreakpointValues["sm"]) {
					return 6;
				}

				return 4;
			})(),
		),
		"customBackgroundColor": (() => {
			if (theme.isDarkModeEnabled) {
				return "linear-gradient(270deg, rgba(36,41,52,1) 0%, rgba(19,22,29,1) 68%)";


			};

			return "linear-gradient(270deg, rgba(240,240,244,1) 0%, rgba(221,219,219,1) 100%)";
		})(),

		"transparentBackground": (params: {direction: "to left" | "to right" | "to bottom" | "to top"}) => {
			const {direction} = params;
			if (theme.isDarkModeEnabled) {
				return `linear-gradient(${direction}, rgba(44,50,63,0.9), rgba(44,50,63, 1))`;
			};

			return `linear-gradient(${direction}, rgba(241,240,235,0.7), rgba(241,240,235,1))`;

		}


	}
}

export const { makeStyles } = createMakeStyles({ useTheme });

export const { Text } = createText({ useTheme });

export const breakpointsValues = defaultBreakpointValues;

