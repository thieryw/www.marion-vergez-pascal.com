import {memo} from "react";
import {makeStyles} from "../theme";
import { Text } from "../theme";
import { CustomLink } from "../components/CustomLink";
import { GlArrow } from "gitlanding/utils/GlArrow";
import {breakpointsValues} from "../theme";


export type EventCardProps = {
	day: string;
	month: string;
	year: string;
	title: string;
	hour: string;
	description: string;
	eventImage?: string;
	link: {
		href: string;
		onClick?: () => void;
	};
	linkLabel: string;

}

export const EventCard = memo((props: EventCardProps) => {

	const {
		description,
		hour,
		...rest
	} = props;

	const {classes} = useStyles();

	return (
		<div className={classes.root}>
			<TopDiv
				{...rest}
			/>
			<div>
				<div>
					<div>
						<Text typo="body 2">{rest.day} {rest.month} {rest.year}</Text>
						<Text typo="body 2">{hour}</Text>
					</div>

				</div>
			</div>

		</div>
	)

})

const useStyles = makeStyles()(
	theme => ({
		"root": {
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				...theme.spacing.rightLeft("padding", `${theme.spacing(9)}px`)
			}: {
			})
		}

	})
)


const { TopDiv } = (() => {

	type TopDivProps = Omit<EventCardProps,
		"description" |
		"hour"
	>


	const TopDiv = memo((props: TopDivProps) => {

		const { day, month, title, year, link, linkLabel } = props;

		const { classes } = useStyles();



		return <div className={classes.root}>
			<div className={classes.dateWrapper}>
				<Text typo="my title">{day}</Text>
				<Text className={classes.month} typo="object heading">{month}</Text>
				<Text typo="my title">{year}</Text>
			</div>

			<Text className={classes.title} typo="object heading" >{title}</Text>

			<div className={classes.linkAndArrow}>
				<CustomLink
					link={link}
					title={linkLabel}
				/>
				<div>
					<GlArrow className={classes.arrow} direction="down" />

				</div>
			</div>

		</div>

	})


	const useStyles = makeStyles()(
		theme => ({

			"root": {
				"display": "flex",
				"justifyContent": "space-between",
				"alignItems": "center",
				...theme.spacing.topBottom("padding", `${theme.spacing(5)}px`),
				"borderBottom": `solid ${theme.colors.useCases.typography.textSecondary} 1px`,
				...(theme.windowInnerWidth < breakpointsValues.sm ? {
					"flexDirection": "column"
				}: {})
			},
			"dateWrapper": {
				"display": "flex",
				"alignItems": "flex-end",
			},
			"title": {
				"color": theme.colors.useCases.typography.textSecondary,
				...theme.spacing.rightLeft("margin", `${theme.spacing(4)}px`),
				...(theme.windowInnerWidth < breakpointsValues.sm ? {
					...theme.spacing.topBottom("margin", `${theme.spacing(3)}px`)


				}: {})


			},
			"month": {
				...theme.spacing.rightLeft("margin", `${theme.spacing(6)}px`),
				"color": theme.colors.useCases.typography.textSecondary
			},
			"linkAndArrow": {
				"display": "flex",
				"alignItems": "center",
				...(theme.windowInnerWidth < breakpointsValues.sm ? {
					"flexDirection": "column"

				}: {})

			},
			"arrow": {
				...(theme.windowInnerWidth >= breakpointsValues.sm ? {
					"marginLeft": theme.spacing(6),
				}: {
					"marginTop": theme.spacing(3)
				})
			},


		})
	)

	return { TopDiv }

})()