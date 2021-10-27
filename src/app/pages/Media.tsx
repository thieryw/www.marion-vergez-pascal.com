/* eslint-disable @typescript-eslint/no-redeclare */
import { memo } from "react";
import { ArtGallery } from "react-art-gallery";
import { files } from "../../generatedData";
import { Background } from "../components/Background";
import { makeStyles } from "../../theme";
import { useTranslation } from "../i18n/useTranslation";
import { PageHeading } from "../components/PageHeading";
import { GlSlider } from "gitlanding";
import { YouTubeIframe } from "../components/YouTubeIframe";
import { Button } from "../components/Button";



export const Media = memo(() => {
	const { classes } = useStyles();

	const { t } = useTranslation("Media");

	return <>
		<section className={classes.banner}>
			<Background
				className={classes.bannerBackground}
				imageUrl={files.files[11].url}
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
			imageAverageHeight={220}
			hideImageNames={true}
		/>

		<section className={classes.videoSection}>

			{<Background 
				imageUrl={files.files[13].url}
				isImageCovered={true}
				fadeDirection="to top"
			/>}

			<PageHeading
				title={t("videoTitle")}
				subtitle={t("videoSubtitle")}
			/>
			<GlSlider
				slides={[
					<YouTubeIframe
						videoUrl="https://www.youtube.com/embed/FMqCz3IqdyE"
					/>,
					<YouTubeIframe
						videoUrl="https://www.youtube.com/embed/_GXIUNEIC0Y"
					/>,
					<YouTubeIframe
						videoUrl="https://www.youtube.com/embed/kIdTp7VaLV4"
					/>,
					<YouTubeIframe
						videoUrl="https://www.youtube.com/embed/QQ6RwSVenSY"
					/>

				]}
			/>
			<div className={classes.buttonWrapper}>
				<Button href="https://www.youtube.com/channel/UC7FvEzh4S_F1W6JHcr2Ssqw">{t("youtubeButton")}</Button>
			</div>
		</section>
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
			"marginBottom": theme.spacing(9),
		},
		"buttonWrapper": {
			"display": "flex",
			"justifyContent": "center",
			"paddingBottom": theme.spacing(8)
		},
		"videoSection": {
			"position": "relative"
		}
	})
)

export declare namespace Media {
	export type I18nScheme = {
		pageTitle: undefined;
		pageSubTitle: undefined;
		videoTitle: undefined;
		videoSubtitle: undefined;
		youtubeButton: undefined;
	}
}