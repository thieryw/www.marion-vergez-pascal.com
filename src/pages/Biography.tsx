/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles } from "../theme";
import {Background} from "../components/Background";
import bannerImgUrl from "../assets/img/bio/bio-banner.jpeg";
import {useTranslation} from "../i18n/useTranslation";
import portraitImg from "../assets/img/bio/bio-portrait.jpeg";
import { Article } from "../components/Article";
import { PageHeading } from "../components/PageHeading";
import { breakpointsValues } from "../theme";


export const Biography = memo(() => {

	const { t } = useTranslation("Biography");
	const { classes } = useStyles();

	return (
		<div className={classes.root}>
			<section className={classes.banner}>
				<Background
					imageUrl={bannerImgUrl}
					isImageCovered={true}
					fadeDirection="to bottom"
				/>
				<PageHeading
					title={t("bioTitle")}
					subtitle={t("bioSubtitle")}
					className={classes.titleWrapper}
				/>

			</section>

			<Article
				imageUrl={portraitImg}
				imageAltAttribute="biography page"
				paragraphs={[
					t("bioParagraph1"),
					t("bioParagraph2"),
					t("bioParagraph3"),
					t("bioParagraph4")
				]}
				classes={{
					"textAndImageWrapper": classes.mainSection,
					"paragraph": classes.paragraph,
					"text": classes.text
				}}

			/>


		</div>


	)

});

const useStyles = makeStyles()(
	theme => ({
		"root": {

		},
		"banner": {
			"height": "70vh",
			"position": "relative",
			"display": "flex",
			"alignItems": "flex-end",
			"justifyContent": "center"
		},
		"titleWrapper": {
			"marginTop": "30%",
			"marginBottom": theme.spacing(8),
		},
		"mainSection": {
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				"alignItems": "unset",
			} : {
				"flexDirection": "column"
			})
		},
		"paragraph": {
			"textAlign": "justify",
		},

		"text": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"marginBottom": 0,
				"marginTop": theme.spacing(8)
			}: {})
		}


	})
)

export declare namespace Biography {
	export type I18nScheme = {
		bioTitle: undefined;
		bioSubtitle: undefined;
		bioParagraph1: undefined;
		bioParagraph2: undefined;
		bioParagraph3: undefined;
		bioParagraph4: undefined;
	};
};
