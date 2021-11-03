/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles, Text } from "../theme";
import heroPng from "../assets/img/home/hero.png";
import { breakpointsValues } from "../theme";
import { useTranslation } from "../i18n/useTranslation";
import { news } from "../user/news";
import { GlIllustration } from "gitlanding/GlIllustration";
import { routes } from "../router";
import decorativeMp4 from "../assets/video/home/decoration.mp4";
import { Article } from "../components/Article";
import contactImageUrl from "../assets/img/home/contact.jpeg";
import bioImageUrl from "../assets/img/home/marion-nabil.jpeg";
import MuiLink from "@mui/material/Link";
import { Background } from "../components/Background";
import mediaBackgroundImageUrl from "../assets/img/home/marion-soliste.jpeg";
import { Divider } from "../components/Divider";
import { Button } from "../components/Button";
import { YouTubeIframe } from "../components/YouTubeIframe";
import { CustomLink } from "../components/CustomLink";

export const Home = memo(() => {

	const { classes, cx, theme } = useStyles();
	const { t } = useTranslation("Home");

	return <div className={classes.root}>
		<section className={classes.hero}>
			<div className={classes.titleWrapper}>
				<Text className={classes.title} typo="my title">Marion Vergez-Pascal</Text>
				<Text className={classes.subtitle} typo="subtitle">MEZZO-SOPRANO</Text>
			</div>
			<div className={classes.heroOverlay}></div>
		</section>
		<Article
			classes={{
				"image": classes.sectionImage,
			}}
			imageAltAttribute="news"
			heading={t("newsHeading")}
			title={t("newsTitle")}
			paragraphs={[t("newsParagraph")]}
			imageUrl={news.imageUrl}
			button={{
				"href": news.buttonHref ?? routes.futureEvents().link.href,
				"onClick": news.buttonHref !== undefined ? routes.futureEvents().link.onClick : undefined,
				"label": t("newsButtonLabel")
			}}
			imagePosition="right"
		/>
		<div>
			<GlIllustration type="image" url={decorativeMp4} />
		</div>
		<Article
			classes={{
				"image": classes.sectionImage,
			}}
			imageAltAttribute="biographie"
			title={t("bioTitle")}
			paragraphs={[t("bioParagraph")]}
			button={{
				...routes.biography().link,
				"label": t("bioButtonLabel")
			}}
			imageUrl={bioImageUrl}

		/>
		<section className={classes.mediaSection}>
			<Background
				isImageCovered={true}
				imageUrl={mediaBackgroundImageUrl}
				classes={{
					"imageBackground": classes.mediaImageBackground

				}}
			/>
			<div className={classes.mediaSectionInner}>
				<div className={classes.mediaTitleWrapper}>
					<Text className={classes.mediaTitle} typo="subtitle">MEDIA</Text>
					<Divider width={8} color={theme.colors.palette.gold} height={1} />
				</div>
				<YouTubeIframe
					className={classes.iframe}
					videoUrl="https://www.youtube-nocookie.com/embed/kIdTp7VaLV4"
				/>
				<Button {...routes.media().link} variant="outlined" color="secondary">{t("mediaButton")}</Button>
			</div>


		</section>
		<Article
			classes={{
				"image": cx(classes.contactImage, classes.sectionImage),
				"paragraph": classes.contactParagraph
			}}
			imageAltAttribute="contact"
			imageUrl={contactImageUrl}
			title={t("contactTitle")}
			paragraphs={[t("contactParagraph")]}
			imagePosition="right"
			customButton={<div className={classes.contactSocialMedia}>
				<CustomLink 
					link={{
						"href": "https://www.facebook.com/marion.vergezpascal.9"
					}}
					title="FACEBOOK"
				/>
				<CustomLink 
					link={{
						"href": "https://www.instagram.com/marion_vergezpascal/"
					}}
					title="INSTAGRAM"
				/>
				<MuiLink underline="none" href="mailto:email@gmail.com"><Text className={classes.email} typo="body 1">email@gmail.com</Text></MuiLink>
			</div>}

		/>
	</div>

});

const useStyles = makeStyles()(
	(theme) => ({
		"root": {
			"paddingTop": "0px !important",
			...theme.spacing.rightLeft("padding", `${theme.paddingRightLeft}px`)
		},
		"hero": {
			"height": "100vh",
			"width": theme.windowInnerWidth,
			"background": `url("${heroPng}")`,
			"backgroundSize": "cover",
			"backgroundRepeat": "no-repeat",
			"backgroundPosition": (() => {
				if (theme.windowInnerWidth >= breakpointsValues.md) {
					return "center";
				};
				return "60% center"
			})(),
			"position": "relative",
			"left": -theme.paddingRightLeft,
			"display": "flex",
			"alignItems": "center",
			...theme.spacing.rightLeft("padding", `${theme.paddingRightLeft}px`),
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"paddingBottom": theme.spacing(4)

			} : {}),
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"alignItems": "flex-end"
			} : {})
		},
		"heroOverlay": {
			"width": "100%",
			"height": "100%",
			"position": "absolute",
			"top": 0,
			"left": 0,
			"backdropFilter": theme.windowInnerWidth < breakpointsValues.md
				? "brightness(0.4)" : undefined,


		},
		"title": {
			"fontWeight": 100,
			"color": "#F7BCF7",
			"fontSize": (() => {
				if (theme.windowInnerWidth >= breakpointsValues.xl) {
					return "3rem";
				};

				if (theme.windowInnerWidth >= breakpointsValues.sm) {
					return "2rem";
				};

				return "1.5rem";

			})()

		},

		"titleWrapper": {
			"position": "relative",
			"padding": theme.spacing({
				"rightLeft": `${theme.spacing(4)}px`,
				"topBottom": `${theme.spacing(5)}px`
			}),
			"zIndex": 400
		},

		"subtitle": {
			"fontSize": "1.5rem",
			"fontWeight": 100,
			"letterSpacing": theme.spacing(2),
			"textAlign": "right",
			"color": "#F7BCF7",
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"fontSize": "1rem"
			} : {})
		},

		"sectionImage": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"maxWidth": 500,
			} : {})

		},

		"contactImage": {
			"maxWidth": 600,
		},

		"contactParagraph": {
			"maxWidth": 400

		},

		"contactSocialMedia": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "flex-end",
			"marginTop": theme.spacing(4)
		},
		"email": {
			"marginTop": theme.spacing(1),
			"color": theme.colors.useCases.typography.textSecondary,
			"transition": "color 300ms",

			":hover": {
				"color": theme.colors.palette.gold


			}
		},
		"mediaSection": {
			"position": "relative",
		},
		"mediaSectionInner": {
			"position": "relative",
			"zIndex": 1,
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			...theme.spacing.topBottom("padding", `${theme.spacing(8)}px`)

		},
		"mediaTitleWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"marginBottom": theme.spacing(8)
		},
		"mediaTitle": {
			"marginBottom": theme.spacing(4)
		},
		"iframe": {
			"marginBottom": theme.spacing(8)
		},
		"mediaImageBackground": {
			"backgroundPosition": "right"
		},

	})
)


export declare namespace Home {
	export type I18nScheme = {
		newsTitle: undefined;
		newsParagraph: undefined;
		newsHeading: undefined;
		newsButtonLabel: undefined;
		bioTitle: undefined;
		bioParagraph: undefined;
		bioButtonLabel: undefined;
		contactTitle: undefined;
		contactHeading: undefined;
		contactParagraph: undefined;
		mediaButton: undefined;
	};
}


