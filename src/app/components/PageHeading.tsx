import {memo} from "react";
import { makeStyles, Text, breakpointsValues } from "../../theme";
import { Divider } from "../components/Divider";


export type PageHeadingProps = {
	title: string;
	subtitle: string;
	className?: string;
	classes?: {
		title?: string;
		subTitle?: string;
		divider?: string;
	}
}

export const PageHeading = memo((props: PageHeadingProps) => {

	const {subtitle, title, className, classes: classesProp} = props;

	const { classes, theme, cx } = useStyles();

	return (
		<div className={cx(classes.titleWrapper, className)}>
			<Text className={cx(classes.title, classesProp?.title)} typo="caption">{title}</Text>
			<Divider
				height={2}
				width={6}
				color={theme.colors.palette.gold}
				className={classesProp?.divider}
			/>
			<Text className={cx(classes.subTitle, classesProp?.subTitle)} typo="section heading">{subtitle}</Text>

		</div>
	)

})

const useStyles = makeStyles()(
	theme => ({

		"titleWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"zIndex": 1,
			"position": "relative",
			"gap": theme.spacing(5)
		},
		"title": {
			"color": theme.colors.useCases.typography.textSecondary
		},
		"subTitle": {
			"fontSize": "3.5rem",
			...(theme.windowInnerWidth < breakpointsValues.sm ? {
				"fontSize": "2.5rem"
			}: {})
			
		},


	})
)