/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles, Text } from "../../theme";
import heroJpeg from "../../assets/img/home/hero.jpeg";
import { breakpointsValues } from "../../theme";
import { useTranslation } from "../i18n/useTranslation";
import { news } from "../user/news";
import { GlIllustration } from "gitlanding/GlIllustration";
import {routes} from "../../router";
import decorativeMp4 from "../../assets/video/home/decoration.mp4";
import { Article } from "../components/Article";
import contactImageUrl from "../../assets/img/home/contact.jpeg";
import bioImageUrl from "../../assets/img/home/marion-nabil.jpeg";
import MuiLink from "@mui/material/Link";
import {Background} from "../components/Background";
import mediaBackgroundImageUrl from "../../assets/img/home/marion-soliste.jpeg";
import {Divider} from "../components/Divider";
import {Button} from "../components/Button";


export const Home = memo(() => {


	const { classes, cx, theme } = useStyles();
	const { t } = useTranslation("Home");


	return <div className={classes.root}>
		<section className={classes.hero}>
			<div className={classes.titleWrapper}>
				<Text className={classes.title} typo="my title">Marion Vergez-Pascal</Text>
				<Text className={classes.subtitle} typo="subtitle">MEZZO-SOPRANO</Text>
			</div>
		</section>
		<Article 
			classes={{
				"image": classes.sectionImage,
			}}
			heading={t("newsHeading")}
			title={t("newsTitle")}
			paragraph={t("newsParagraph")}
			imageUrl={news.imageUrl}
			button={{
				...routes.futureEvents().link,
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
			title={t("bioTitle")}
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
					<Text typo="subtitle">MEDIA</Text>
					<Divider width={8} color={theme.colors.palette.gold} height={1} />
				</div>
					<iframe className={classes.iframe} allowFullScreen src="https://www.youtube-nocookie.com/embed/kIdTp7VaLV4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
				<Button {...routes.media().link} variant="outlined" color="secondary">{t("mediaButton")}</Button>
			</div>


		</section>
		<Article
			classes={{
				"image": cx(classes.contactImage, classes.sectionImage),
				"paragraph": classes.contactParagraph
			}}
			imageUrl={contactImageUrl}
			title={t("contactTitle")}
			paragraph={t("contactParagraph")}
			imagePosition="right"
			customButton={<div className={classes.contactSocialMedia}>
				<MuiLink className={classes.instagramAndFacebookButtons} href="https://www.facebook.com/marion.vergezpascal.9" underline="none">FACEBOOK →</MuiLink>
				<MuiLink className={classes.instagramAndFacebookButtons} href="https://www.instagram.com/marion_vergezpascal/" underline="none">INSTAGRAM →</MuiLink>
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
			"background": `url("${heroJpeg}")`,
			"backgroundSize": "cover",
			"backgroundRepeat": "no-repeat",
			"backgroundPosition": "center",
			"position": "relative",
			"left": -theme.paddingRightLeft,
			"display": "flex",
			"alignItems": "center",
			...theme.spacing.rightLeft("padding", `${theme.paddingRightLeft}px`),
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"paddingBottom": theme.spacing(4)

			} : {}),
			...(theme.windowInnerWidth < breakpointsValues.sm ? {
				"alignItems": "flex-end"
			} : {})
		},

		"title": {
			"fontWeight": 100,
			"color": "#F7BCF7",
			...(theme.windowInnerWidth >= breakpointsValues.lg ? {
				"fontSize": "3rem",
			} : {
				"fontSize": "1.5rem"
			}),
		},

		"titleWrapper": {
			"position": "relative",
			"padding": theme.spacing({
				"rightLeft": `${theme.spacing(4)}px`,
				"topBottom": `${theme.spacing(5)}px`
			}),
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
			"alignItems": "end",
			"gap": theme.spacing(2),
			"marginTop": theme.spacing(4)
		},
		"instagramAndFacebookButtons": {
			"transition": "transform 500ms",
			"color": theme.colors.palette.gold,
			":hover": {
				"transform": `translateX(${theme.spacing(2)}px)`
			}

		},
		"email": {
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
				"gap": theme.spacing(8),
				"alignItems": "center",
				...theme.spacing.topBottom("padding", `${theme.spacing(8)}px`)
				
		},
		"mediaTitleWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"gap": theme.spacing(4)
		},
		"mediaImageBackground": {
			"backgroundPosition": "right"
		},
		"iframe": {
			"width": 1000,
			"height": 600,
			...(()=>{
				if(
					theme.windowInnerWidth < breakpointsValues.lg && 
					theme.windowInnerWidth >= breakpointsValues.md
				){
					return {
						"width": 700,
						"height": 450
					}
				};

				if(theme.windowInnerWidth < breakpointsValues.md){
					return {
						"width": "100%",
						"height": 300
					}
				}

			})()
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


