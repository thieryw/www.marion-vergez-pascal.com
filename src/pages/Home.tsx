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
import { motion } from "framer-motion";
import heroSmallPng from "../assets/img/home/hero-small.png";


export const Home = memo(() => {

	const { classes, cx, theme } = useStyles();
	const { t } = useTranslation("Home");

	return <div className={classes.root}>
		<section className={classes.heroSection}>
			<div className={classes.hero}>
				<div className={classes.heroTitleLarge}>
					<HeroTitle />
				</div>
			</div>
			<div className={classes.heroTitleSmall}>
				<HeroTitle />
			</div>
		</section>

		<Article
			classes={{
				"image": classes.sectionImage,
			}}
			imageAltAttribute="news"
			heading={<div className={classes.newsHeaderWrapper}>
				<Text className={classes.newsHeading} typo="subtitle">{t("newsHeading")}<span>...</span></Text>
				<Divider width={9} height={1} />
			</div>}
			title={t("newsTitle")}
			paragraph={t("newsParagraph")}
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
			title={<Text className={classes.bioTitle} typo="section heading">{t("bioTitle")}<span> ?</span></Text>}
			paragraph={t("bioParagraph")}
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
				"paragraph": classes.contactParagraph,
				"textAndImageWrapper": classes.contact,
				"text": classes.contactText,
				"imageWrapper": classes.contactImageWrapper
			}}
			imageAltAttribute="contact"
			imageUrl={contactImageUrl}
			title={<Text className={classes.bioTitle} typo="section heading">{t("contactTitle")}<span> !</span></Text>}
			paragraph={t("contactParagraph")}
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
				<MuiLink underline="none" href="mailto:marionvergezpascal@yahoo.fr"><Text className={classes.email} typo="body 1">marionvergezpascal@yahoo.fr</Text></MuiLink>
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
		"heroSection": {
			"position": "relative",
			"width": theme.windowInnerWidth,
			"height": "100vh",
			"left": -theme.paddingRightLeft,
			"display": "flex",
			"flexDirection": "column",
			"backgroundColor": "#030224"


		},
		"hero": {
			"height": theme.windowInnerWidth >= breakpointsValues.sm ? "100vh" : "60vh",
			"width": "100%",
			"background": `url("${theme.windowInnerWidth >= breakpointsValues.sm ? heroPng : heroSmallPng}")`,
			"backgroundSize": "cover",
			"backgroundRepeat": "no-repeat",
			"backgroundPosition": (() => {
				if (theme.windowInnerWidth >= breakpointsValues.lg) {
					return "center";
				};
				return "60% center";
			})(),
			"position": "relative",
			"display": "flex",
			"alignItems": "center",
			...theme.spacing.rightLeft("padding", `${theme.paddingRightLeft}px`),
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"paddingBottom": theme.spacing(4)

			} : {}),
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"alignItems": "flex-end"
			} : {}),
			"justifyContent": theme.windowInnerWidth > breakpointsValues.md ? undefined : "center"
		},
		"heroTitleLarge": {
			"display": theme.windowInnerWidth >= breakpointsValues.sm ? undefined : "none"

		},
		"heroTitleSmall": {
			"display": theme.windowInnerWidth >= breakpointsValues.sm ? "none" : "flex",
			"paddingTop": theme.spacing(7),
			"width": "100%",
			"position": "relative",
			"top": -60,
			"background": "linear-gradient(0deg, rgba(3,2,36,1) 81%, rgba(28,83,212,0) 100%)",
			"flex": 1,
			"alignItems": "center",
			"justifyContent": "center"

		},

		"newsHeaderWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"marginBottom": theme.spacing(8),
			"& span": {
				"color": theme.colors.palette.flamingoPink

			}
		},

		"newsHeading": {
			"marginBottom": theme.spacing(5)

		},

		"bioTitle": {
			"& span": {
				"color": theme.colors.palette.flamingoPink

			}
		},

		"sectionImage": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"maxWidth": 500,
			} : {})

		},

		"contact": {
			"flexDirection": theme.windowInnerWidth < breakpointsValues.md ? "column-reverse" : undefined
		},

		"contactImage": {
			"maxWidth": 600,
		},

		"contactParagraph": {
			"maxWidth": 400,

		},

		"contactImageWrapper": {
			"marginBottom": 0
		},

		"contactText": {
			"marginBottom": theme.windowInnerWidth < breakpointsValues.md ? theme.spacing(8) : undefined


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
);

const { HeroTitle } = (() => {

	const HeroTitle = memo(() => {
		const { classes } = useStyles();
		return <motion.div
			className={classes.root}
			initial={{
				"opacity": 0
			}}
			animate={{
				"opacity": 1
			}}
			transition={{
				"duration": 1,
				"ease": "easeOut",
				"delay": 1
			}}
		>
			<Text className={classes.title} typo="my title">Marion Vergez-Pascal</Text>
			<Text className={classes.subtitle} typo="subtitle">MEZZO-SOPRANO</Text>
		</motion.div>
	});

	const useStyles = makeStyles()(
		theme => ({
			"root": {
				"position": "relative",
				"padding": theme.spacing({
					"rightLeft": `${theme.spacing(4)}px`,
					"topBottom": `${theme.spacing(5)}px`
				}),
				"zIndex": 400

			},
			"title": {
				"fontWeight": 100,
				"color": theme.colors.palette.flamingoPink,
				"textAlign": "center",
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

			"subtitle": {
				"fontSize": "1.5rem",
				"fontWeight": 100,
				"letterSpacing": theme.spacing(2),
				"textAlign": "center",
				"color": "#F7BCF7",
				...(theme.windowInnerWidth < breakpointsValues.lg ? {
					"fontSize": "1rem"
				} : {})
			},

		})
	)

	return { HeroTitle }
})()


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


