import { memo } from "react";
import { makeStyles } from "../../theme";


export type BackgroundProps = {
	className?: string;
	imageUrl?: string;
	isImageCovered?: boolean;
	classes?: {
		imageBackground?: string;
		imageCover?: string;
	}
};



export const Background = memo((props: BackgroundProps) => {
	const { imageUrl, isImageCovered, className, classes: classesProp } = props;
	const {classes, cx} = useStyles({
		"backgroundImageUrl": imageUrl
	});
	return <div className={cx(classes.root, className)}>
		{
			imageUrl !== undefined &&
			<div className={cx(classes.background, classes.imageBackground, classesProp?.imageBackground)}></div>
		}
		{
			isImageCovered !== undefined && isImageCovered &&
			<div className={cx(classes.background, classes.backgroundCover, classesProp?.imageCover)}></div>
		}

	</div>
});

const useStyles = makeStyles<{ backgroundImageUrl: string | undefined }>()(
	(theme, {backgroundImageUrl}) => ({
		"root": {
			"width": theme.windowInnerWidth,
			"height": "100%",
			"position": "absolute",
			"top": 0,
			"left": -theme.paddingRightLeft
		},
		"background": {
			"width": "100%",
			"height": "100%",
		},

		"imageBackground": {
			"backgroundImage": `url("${backgroundImageUrl}")`,
			"backgroundRepeat": "no-repeat",
			"backgroundSize": "cover",
			"zIndex": -1,
		},
		"backgroundCover": {
			"position": "absolute",
			"top": "0",
			"left": "0",
			"background": theme.transparentBackground,
			"zIndex": 0



		}

	})
)

