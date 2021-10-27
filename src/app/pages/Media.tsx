/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { ArtGallery } from "react-art-gallery";
import { files } from "../../generatedData";
import { Background } from "../components/Background";
import {makeStyles} from "../../theme";
import {useTranslation} from "../i18n/useTranslation";
import {PageHeading} from "../components/PageHeading";



export const Media = memo(() => {
	const { classes } = useStyles();

	const {t} = useTranslation("Media");

	return <>
		<section className={classes.banner}>
			<Background
				className={classes.bannerBackground}
				imageUrl={files.files[6].url}
				isImageCovered={true}
				fadeDirection="to bottom"
			/>

			<PageHeading 
				title={t("pageTitle")}
				subtitle={t("pageSubTitle")}
				className={classes.titleWrapper}
			/>


		</section>
		<ArtGallery
			className={classes.gallery}
			thumbNailImages={files.files}
			lightBoxImages={files.files}
			imageAverageHeight={300}
			hideImageNames={true}
		/>
	</>

});

const useStyles = makeStyles()(
	theme => ({
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
			"marginBottom": "10%"
		},
		"gallery": {
			"marginBottom": theme.spacing(9)


		}
	})
)

export declare namespace Media {
	export type I18nScheme = {
		pageTitle: undefined;
		pageSubTitle: undefined;
	}
}