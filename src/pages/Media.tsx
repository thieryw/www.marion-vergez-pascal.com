/* eslint-disable @typescript-eslint/no-redeclare */
import { memo, useMemo } from "react";
import { ArtGallery } from "react-art-gallery";
import { files } from "../generatedWebpExports";
import { files as imgFiles } from "../generatedImgExports";
import { Background } from "../components/Background";
import { makeStyles, breakpointsValues } from "../theme";
import { useTranslation } from "../i18n/useTranslation";
import { PageHeading } from "../components/PageHeading";
import { GlSlider } from "gitlanding";
import { YouTubeIframe } from "../components/YouTubeIframe";
import { Button } from "../components/Button";
import bannerJpeg from "../assets/img/media/10-.jpeg";
import videoBackJpeg from "../assets/img/media/12-.jpeg";
import type { ArtGalleryProps } from "react-art-gallery";



export const Media = memo(() => {
	const { classes } = useStyles();

	const { t } = useTranslation("Media");

	const imageSources: ArtGalleryProps["thumbNailImageSources"] = useMemo(() => {

		return files.files.map(({ url }, index) => {
			return [
				{
					"srcSet": url,
					"type": "image/webp"
				},
				{
					"srcSet": imgFiles.files[index].url,
					"type": "image/jpeg"
				}
			]
		})
	}, [])

	return <div>
		<section className={classes.banner}>
			<Background
				imageUrl={bannerJpeg}
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
			thumbNailImageSources={imageSources}
			lightBoxImageSources={imageSources}
			thumbNailImages={files.files}
			lightBoxImages={files.files}
			imageAverageHeight={250}
			hideImageNames={true}
		/>

		<section className={classes.videoSection}>

			{<Background
				imageUrl={videoBackJpeg}
				isImageCovered={true}
				fadeDirection="to top"
			/>}

			<PageHeading
				title={t("videoTitle")}
				subtitle={t("videoSubtitle")}
			/>
			<GlSlider
				classes={{
					"sliderWrapper": classes.slider,
					"next": classes.navSlider,
					"prev": classes.navSlider

				}}
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
	</div >

});

const useStyles = makeStyles()(
	theme => ({
		"banner": {
			"height": "70vh",
			"position": "relative",
			"display": "flex",
			"alignItems": "flex-end",
			"justifyContent": "center"
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
			"position": "relative",
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center"
		},
		"slider": {
			...(() => {
				if (
					theme.windowInnerWidth < breakpointsValues.lg &&
					theme.windowInnerWidth >= breakpointsValues.md
				) {
					return {
						"width": 800
					};
				};

				if (theme.windowInnerWidth < breakpointsValues.md) {
					return {
						"width": "100%"
					}
				}

				return {
					"width": 1100
				}

			})()
		},
		"navSlider": {
			"width": theme.spacing(7),
			"height": theme.spacing(7),
			"position": "relative",
			"left": theme.spacing(2)

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