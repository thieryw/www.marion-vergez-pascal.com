/* eslint-disable @typescript-eslint/no-redeclare */
import { memo, useMemo } from "react";
import { ArtGallery } from "react-art-gallery";
import { files as webpFiles } from "../generatedWebpExports";
import { files as jpegFiles } from "../generatedImgExports";
import { Background } from "../components/Background";
import { makeStyles, breakpointsValues, Text } from "../theme";
import { useTranslation } from "../i18n";
import { PageHeading } from "../components/PageHeading";
import { GlSlider } from "gitlanding/GlSlider";
import { YouTubeIframe } from "../components/YouTubeIframe";
import { Button } from "../components/Button";
import bannerJpeg from "../assets/img/media-banner.jpg"
import type { ImageSource } from "react-art-gallery/utils/ImageSource";
import { declareComponentKeys } from "i18nifty";


export const Media = memo(() => {

	const { t } = useTranslation({ Media });

	const imageSources: ImageSource[][] = useMemo(() => {

		return webpFiles.files.map(({ url }, index) => [
			{
				"srcSet": url,
				"type": "image/webp",
			},
			{
				"srcSet": jpegFiles.files[index].url,
				"type": "image/jpeg"
			}
		]
		);
	}, []);

	const { classes } = useStyles();

	return <div className={classes.root}>
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

		<section className={classes.videoSection}>


			<GlSlider
				classes={{
					"sliderWrapper": classes.slider,
					"next": classes.navSlider,
					"prev": classes.navSlider

				}}
				slides={[
					<YouTubeIframe
						videoUrl="https://www.youtube.com/embed/aNQzcmDlE0w"
					/>,
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

		<section className={classes.gallery}>
			<PageHeading
				className={classes.galleryHeading}
				title={t("galleryTitle")}
				subtitle={t("gallerySubtitle")}
			/>
			<ArtGallery
				thumbNailImageSources={imageSources}
				lightBoxImageSources={imageSources}
				thumbNailImages={jpegFiles.files}
				lightBoxImages={jpegFiles.files}
				imageAverageHeight={250}
				hideImageNames={true}
			/>
			<Text className={classes.gallerySubtext} typo="object heading"><em>{t("photoCredit")}</em></Text>
		</section>
	</div >

});

const useStyles = makeStyles()(
	theme => ({
		"root": {
			"paddingTop": 0

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
			"marginBottom": "10%"
		},
		"gallery": {
			"marginBottom": theme.spacing(9),
		},
		"gallerySubtext": {
			"textAlign": "right",
			"position": "relative",
			"top": theme.spacing(2),
			"color": theme.colors.useCases.typography.textSecondary
		},

		"galleryHeading": {
			...theme.spacing.topBottom("margin", `${theme.spacing(8)}px`)
		},
		"buttonWrapper": {
			"display": "flex",
			"justifyContent": "center",
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
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"width": theme.spacing(5),
				"height": theme.spacing(5),

			} : {

				"width": theme.spacing(7),
				"height": theme.spacing(7),
			}),
			"position": "relative",
			"left": theme.spacing(2)

		}

	})
);

export const { i18n } = declareComponentKeys<
	| "pageTitle"
	| "pageSubTitle"
	| "galleryTitle"
	| "gallerySubtitle"
	| "youtubeButton"
	| "photoCredit"
>()({
	Media
});
