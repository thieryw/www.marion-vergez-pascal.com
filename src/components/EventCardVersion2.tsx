import { memo } from "react";
import { makeStyles, breakpointsValues } from "../theme";
import ReactMarkdown from "react-markdown";
import { Button } from "../components/Button";

export type EventCardPropsVersion2 = {
	className?: string;
	date?: string;
	title: string;
	description: string;
	buttonLabel: string;
	link: {
		href: string;
		onClick?: () => void;
	}

};

export const EventCardVersion2 = memo((props: EventCardPropsVersion2) => {

	const { buttonLabel, date, link, description, title, className } = props;


	const {classes, cx} = useStyles({
		"hasDate": date !== undefined
	});


	return <div className={cx(classes.root, className)}>
		{
			date !== undefined &&
			<div className={classes.dateWrapper}>
				<ReactMarkdown className={classes.date}>
					{date}
				</ReactMarkdown>

			</div>

		}
		<div className={classes.textWrapper}>
			<ReactMarkdown className={classes.title}>{title}</ReactMarkdown>
			<ReactMarkdown className={classes.description}>{description}</ReactMarkdown>
		</div>

		<Button className={classes.button} {...link}>{buttonLabel}</Button>


	</div>

});

const useStyles = makeStyles<{hasDate: boolean}>()(
	(theme, {hasDate}) => ({
		"root": {
			"display": "flex",
			"justifyContent": "space-between",
			"position": "relative",
			...theme.spacing.topBottom("padding", `${theme.spacing(6)}px`),
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"flexDirection": "column",
				"alignItems": "center"

			}: {})
		},
		"dateWrapper": {
			"padding": theme.spacing(3),
			"width": 300,
			...(theme.windowInnerWidth < breakpointsValues.lg ? {
				"width": 200

			}: {}),
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"width": 500
			}: {}),
			...(theme.windowInnerWidth < breakpointsValues.sm ? {
				"width": 300

			}: {}),
			"backgroundColor": theme.colors.useCases.surfaces.surface2,
			"display": "flex",
			"justifyContent": "center",
			"alignItems": "center"

		},
		"date": {
			...theme.typography.variants.subtitle.style,
			"fontSize": "1.5rem",
			"textAlign": "center"

		},
		"textWrapper": {
			"alignSelf": "center",
			...(() => {

				const value = theme.spacing(3)
				if(hasDate){
					return { 
						...theme.spacing.rightLeft("margin", `${value}px`),
						"width": 600,
						...(theme.windowInnerWidth < breakpointsValues["lg+"] ? {
							"width": 350

						}: {})
					}
				}

				return {
					"marginRight": value,
					"marginLeft": 0,
					"width": 800,
					...(theme.windowInnerWidth < breakpointsValues["lg+"] ? {
						"width": 600
					}: {})
				}

			})(),

			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"width": 500,
				"textAlign": "center",
				...(()=>{

					const value = theme.spacing(4);
					return {
						"marginTop": hasDate ? value : undefined,
						"marginBottom": value,

					}

				})()


			}: {

			}),

			...(theme.windowInnerWidth < breakpointsValues.sm ? {
				"width": 300

			}: {

			})


		},
		"title": {
			...theme.typography.variants["object heading"].style

		},
		"description": {
			"color": theme.colors.useCases.typography.textSecondary
		},
		"button": {
			"alignSelf": "center",
			"backgroundColor": theme.colors.palette.flamingoPink,
			"color": "black",
			":hover": {
				"color": theme.isDarkModeEnabled ? "white" : undefined
			}

		}

	})
);