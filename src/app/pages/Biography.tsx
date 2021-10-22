import { memo } from "react";
import { makeStyles } from "../../theme";
import {Background} from "../components/Background";
import bannerImgUrl from "../../assets/img/bio/bio-banner.jpeg";


export const Biography = memo(() => {

	const { classes } = useStyles()

	return (
		<div className={classes.root}>
			<section className={classes.banner}>
				<Background 
					className={classes.bannerBackground}
					imageUrl={bannerImgUrl}
					isImageCovered={true}
				/>
				<div>
				</div>

			</section>

		</div>


	)

});

const useStyles = makeStyles()(
	theme => ({
		"root": {

		},
		"banner": {
			"height": "70vh",
		},
		"bannerBackground": {

			"left": "unset"
		}

	})
)

/*export declare namespace Biography {
	export type I18nScheme = {


	};
};*/
