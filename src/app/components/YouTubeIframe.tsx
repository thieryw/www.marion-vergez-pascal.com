import {memo} from "react";
import {makeStyles, breakpointsValues} from "../../theme";


export type YouTubeIframeProps = {
	videoUrl: string;
	className?: string;
}

export const YouTubeIframe = memo((props: YouTubeIframeProps)=>{

	const {videoUrl, className} = props;
	const {classes, cx} = useStyle();

	return (
		<iframe className={cx(classes.root, className)} allowFullScreen src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
	)

});

const useStyle = makeStyles()(
	theme => ({
		"root": {
			"width": 1000,
			"height": 600,
			"border": "none",
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
		}

	})
)