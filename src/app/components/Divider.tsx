import { memo } from "react";
import { makeStyles } from "../../theme";

export type DividerProps = {
	width: number;
	height: number;
	color?: string;
};


export const Divider = memo((props: DividerProps) => {
	const { width, height, color } = props;
	const {classes} = useStyles({width, height, color})

	return <div className={classes.root}></div>

});

const useStyles = makeStyles<{width: number; height: number; color: string | undefined}>()(
	(theme, {width, height, color}) => ({
		"root": {
			"width": theme.spacing(width),
			"height": height,
			"backgroundColor": color ?? theme.colors.useCases.typography.textSecondary
		}
	})
)
