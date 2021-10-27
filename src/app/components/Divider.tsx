import { memo } from "react";
import { makeStyles } from "../../theme";

export type DividerProps = {
	className?: string;
	width: number;
	height: number;
	color?: string;
};


export const Divider = memo((props: DividerProps) => {
	const { width, height, color, className } = props;
	const {classes, cx} = useStyles({width, height, color})

	return <div className={cx(classes.root, className)}></div>

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
