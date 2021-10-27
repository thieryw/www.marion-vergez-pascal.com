/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { makeStyles } from "../../theme";
import {Background} from "../components/Background";
import bannerImgUrl from "../../assets/img/bio/bio-banner.jpeg";
import {useTranslation} from "../i18n/useTranslation";
import portraitImg from "../../assets/img/bio/bio-portrait.jpeg";
import { Article } from "../components/Article";
import { PageHeading } from "../components/PageHeading";
import { breakpointsValues } from "../../theme";


export const Biography = memo(() => {

	const { t } = useTranslation("Biography");
	const { classes } = useStyles();

	return (
		<>
			<section className={classes.banner}>
				<Background
					className={classes.bannerBackground}
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
				paragraphs={[
					t("bioParagraph1"),
					t("bioParagraph2"),
					t("bioParagraph3"),
					t("bioParagraph4")
				]}
				classes={{
					"textAndImageWrapper": classes.mainSection,
					"paragraph": classes.text
				}}

			/>


		</>


	)

});

const useStyles = makeStyles()(
	theme => ({
		"root": {

		},
		"banner": {
			"height": "100vh",
			"position": "relative",
			"display": "flex",
			"alignItems": "flex-end",
			"justifyContent": "center"
		},
		"bannerBackground": {
			"left": 0

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
		"text": {
			"textAlign": "justify"
		},

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
