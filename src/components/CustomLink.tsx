import MuiLink from "@mui/material/Link";
import {memo} from "react";
import { makeStyles } from "../theme";


export type CustomLinkProps = {
	className?: string;
	link: {
		href: string;
		onClick?: ()=>void
	};
	title: string;
};

export const CustomLink = memo((props: CustomLinkProps) => {

	const { title, link, className } = props;

	const {classes, cx} = useStyles();


	return <MuiLink className={cx(classes.root, className)} {...link} underline="none">{title} →</MuiLink>

})

const useStyles = makeStyles()(
	theme => ({
		"root": {

			...theme.spacing.topBottom("margin", `${theme.spacing(1)}px`),
			"transition": "transform 500ms",
			"color": theme.colors.palette.gold,
			":hover": {
				"transform": `translateX(${theme.spacing(2)}px)`
			}
		}
	})
)