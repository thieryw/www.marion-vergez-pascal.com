/* eslint-disable @typescript-eslint/no-redeclare */
import { memo, useMemo } from "react";
import { makeStyles, Text } from "../theme";
import heroPng from "../assets/img/home/hero.png";
import { breakpointsValues } from "../theme";
import { useTranslation } from "../i18n";
import { news } from "../user/news";
import { GlVideo } from "gitlanding/utils/GlVideo";
import { routes } from "../router";
import decorativeMp4 from "../assets/video/home/decoration.mp4";
import { Article } from "../components/Article";
import MuiLink from "@mui/material/Link";
import { Background } from "../components/Background";
import mediaBackgroundImageUrl from "../assets/img/home/marion-soliste.jpeg";
import { Divider } from "../components/Divider";
import { Button } from "../components/Button";
import { YouTubeIframe } from "../components/YouTubeIframe";
import { CustomLink } from "../components/CustomLink";
import { motion } from "framer-motion";
import heroSmallPng from "../assets/img/home/hero-small.png";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import contactImageUrl from "../assets/img/home/contact.jpeg";
import bioImageUrl from "../assets/img/home/marion-nabil.jpeg";
import contactImageWebp from "../assets/webp/home/contact.webp"
import bioImageWebp from "../assets/webp/home/marion-nabil.webp"
import type { ImageSource } from "../tools/ImageSource";
//import { GlSlider, GlReviewSlide } from "gitlanding";
import { GlSlider } from "gitlanding/GlSlider";
import { GlReviewSlide } from "gitlanding/GlReviewSlide";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import { useStateRef } from "powerhooks/useStateRef";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";



export const Home = memo(() => {

	const { t } = useTranslation({ Home });

	const ref = useStateRef(null);

	const scrollableParent = useMemo(() => {
		if (!ref.current) {
			return;
		}

		return getScrollableParent({
			"doReturnElementIfScrollable": true,
			"element": ref.current
		})

	}, [ref])

	const onClickFactory = useCallbackFactory((
		[onClick]: [() => void | undefined]
	) => {

		if (scrollableParent === undefined) {
			return;
		}

		onClick();

		scrollableParent.scrollTo({
			"top": 0,
			"behavior": "auto"
		})

	})

	const imageSources: ImageSource[][] = useMemo(() => {
		return [[bioImageWebp, bioImageUrl], [contactImageWebp, contactImageUrl]].map(sources => [
			{
				"srcSet": sources[0],
				"type": "image/webp",
				"key": sources[0]
			},
			{
				"srcSet": sources[1],
				"type": "image/jpeg",
				"key": sources[1]
			}
		])
	}, [])

	const { classes, cx, theme, css } = useStyles();

	return <div ref={ref} className={classes.root}>
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
				"button": classes.button
			}}
			imageAltAttribute="news"
			/*heading={<div className={classes.newsHeaderWrapper}>
				<Text className={classes.newsHeading} typo="subtitle">{t("newsHeading")}<span>...</span></Text>
				<Divider width={9} height={1} />
			</div>}*/
			heading={`${t("newsHeading")}`}
			//title={t("newsTitle")}
			//paragraph={t("newsParagraph")}
			paragraph={
				<GlSlider
					autoPlayTimeInterval={4}
					classes={{
						"root": css({
							"paddingLeft": 0,
							"paddingRight": 0
						})
					}}
					slides={[
						<GlReviewSlide descriptionMd={t("review1")} signature={t("reviewSignature1")} />,
						<GlReviewSlide descriptionMd={t("review2")} signature={t("reviewSignature2")} />,
						<GlReviewSlide descriptionMd={t("review3")} signature={t("reviewSignature3")} />
					]}
				/>
			}
			imageUrl={news.imageUrl}
			imageSources={news.imageSources}
			imagePosition="right"
		/>
		<div style={{"position": "relative"}}>
			<GlVideo className={css({"width": "100%"})} sources={[
				{
					"src": decorativeMp4
				}
			]} />
		</div>
		<Article
			classes={{
				"image": classes.sectionImage,
				"button": classes.button
			}}
			imageAltAttribute="biographie"
			title={<Text className={classes.bioTitle} typo="section heading">{t("bioTitle")}<span> ?</span></Text>}
			paragraph={t("bioParagraph")}
			button={{
				"label": t("bioButtonLabel"),
				"href": routes.biography().link.href,
				"onClick": onClickFactory(routes.biography().link.onClick)
			}}
			imageUrl={bioImageUrl}
			imageSources={imageSources[0]}

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
				<Button
					className={classes.button}
					variant="outlined"
					color="secondary"
					href={routes.media().link.href}
					onClick={onClickFactory(routes.media().link.onClick)}
				>
					{t("mediaButton")}
				</Button>
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
			imageSources={imageSources[1]}
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
			"paddingTop": 0,
		},
		"heroSection": {
			"position": "relative",
			"width": theme.windowInnerWidth,
			"height": "100vh",
			"left": -theme.paddingRightLeft,
			"display": "flex",
			"flexDirection": "column",
			"backgroundColor": "#030224",


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
			"justifyContent": theme.windowInnerWidth >= breakpointsValues.lg ? undefined : "center"
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

		"pinkDots": {
			"color": theme.colors.palette.flamingoPink
		},


		"bioTitle": {
			"& span": {
				"color": theme.colors.palette.flamingoPink

			}
		},

		"sectionImage": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"maxWidth": 500
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
		"button": {
			"backgroundColor": theme.colors.palette.flamingoPink,
			"color": "black",
			":hover": {
				"color": theme.isDarkModeEnabled ? "white" : undefined
			}
		}

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
				"color": theme.colors.palette.flamingoPink,
				...(theme.windowInnerWidth < breakpointsValues.lg ? {
					"fontSize": "1rem"
				} : {})
			},

		})
	)

	return { HeroTitle }
})()


export const { i18n } = declareComponentKeys<
	| "newsHeading"
	| "newsButtonLabel"
	| "bioTitle"
	| "bioParagraph"
	| "bioButtonLabel"
	| "contactTitle"
	| "contactHeading"
	| "contactParagraph"
	| "mediaButton"
	| "review1"
	| "review2"
	| "review3"
	| "reviewSignature1"
	| "reviewSignature2"
	| "reviewSignature3"
>()({
	Home
})




