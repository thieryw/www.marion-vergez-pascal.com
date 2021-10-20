import { memo } from "react";
import MuiButton from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "../../theme";


export const Button = memo((props: ButtonProps) => {

	const {className, ...rest} = props;

	const { classes, cx } = useStyles();
	return <MuiButton
		className={cx(classes.root, className)}
		variant="outlined"
		color="secondary"
		{...rest}
	/>

})


const useStyles = makeStyles()(
	theme => ({
		"root": {
			"borderRadius": "unset",
			...theme.spacing.rightLeft("padding", `${theme.spacing(6)}px`)
		}

	})
)



