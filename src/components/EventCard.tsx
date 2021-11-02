import {memo, useState} from "react";
import {makeStyles} from "../theme";
import { Text } from "../theme";
import { CustomLink } from "../components/CustomLink";
import { GlArrow } from "gitlanding/utils/GlArrow";
import { breakpointsValues } from "../theme";
import { useDomRect } from "powerhooks/useDomRect";
import { useConstCallback } from "powerhooks/useConstCallback";
import { GlIllustration } from "gitlanding/GlIllustration";
import calendarIconPng from "../assets/icons/calendar.png";
import clockIconPng from "../assets/icons/clock.png";
import venueIconPng from "../assets/icons/venue.png";
import {GlLogo} from "gitlanding/utils/GlLogo";


export type EventCardProps = {
	day: string;
	month: string;
	year: string;
	title: string;
	hour: string;
	description: string;
	address: string;
	eventImageUrl: string;
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
		eventImageUrl,
		address,
		...rest
	} = props;

	const [isCardUnfolded, setIsCardUnfolded] = useState(false);


	const {
		ref,
		domRect
	} = useDomRect();

	const toggleCard = useConstCallback(() => {
		setIsCardUnfolded(!isCardUnfolded);
	})

	const { classes, cx } = useStyles({
		isCardUnfolded,
		"cardHeight": domRect.height
	});

	return (
		<div className={classes.root}>
			<TopDiv
				{...rest}
				onClick={toggleCard}
				isCardUnfolded={isCardUnfolded}
			/>
			<div className={classes.card}>
				<div className={classes.cardInner} ref={ref}>

					<GlIllustration
						className={classes.cardImage}
						type="image"
						url={eventImageUrl}
					/>

					<div className={classes.textWrapper}>
						<div className={classes.date}>
							<div className={classes.textAndIcon}>
								<Icon imageUrl={calendarIconPng}/>
								<Text typo="body 2">{rest.day} {rest.month} {rest.year}</Text>
							</div>
							<div className={classes.textAndIcon}>
								<Icon imageUrl={clockIconPng} />
								<Text typo="body 2">{hour}</Text>
							</div>

						</div>

						<div className={cx(classes.textAndIcon, classes.address)}>
							<Icon imageUrl={venueIconPng} />
							<Text typo="body 1">{address}</Text>
						</div>

						<Text className={classes.description} typo="body 1">{description}</Text>


						<CustomLink 
							link={rest.link}
							title="EN SAVOIR PLUS"
						/>

					</div>

				</div>
			</div>

		</div>
	)

})

const useStyles = makeStyles<{ isCardUnfolded: boolean, cardHeight: number }>()(
	(theme, { cardHeight, isCardUnfolded }) => ({
		"root": {
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				...theme.spacing.rightLeft("padding", `${theme.spacing(9)}px`)
			} : {
			})
		},

		"card": {
			"transition": "height 400ms",
			"height": isCardUnfolded ? cardHeight : 0,
			"overflow": "hidden",
			"pointerEvents": isCardUnfolded ? undefined : "none",
		},
		"cardInner": {
			"position": "relative",
			"display": "flex",
			"padding": theme.spacing(6),
			"alignItems": "center",
			...(theme.windowInnerWidth < breakpointsValues.sm ? {
				"flexDirection": "column",

			}: {})
		},
		"cardImage": {
			"flex": 1,
			...(theme.windowInnerWidth >= breakpointsValues.sm ? {
				"marginRight": theme.spacing(4),
				"paddingRight": theme.spacing(4),
			}: {
				"marginBottom": theme.spacing(4)
			}),
			"position": "relative",
			"& > img": {
				"width": "100%"

			}
		},
		"textWrapper": {
			"flex": "1",
			"display": "flex",
			"flexDirection": "column",
			"justifyContent": "space-between"


		},
		"date": {
			"display": "flex",
			"justifyContent": "space-between"

		},
		"textAndIcon": {
			"display": "flex",
			"alignItems": "center"
		},

		"description": {
			"marginTop": theme.spacing(3),
			"marginBottom": theme.spacing(4),

		},
		"address": {
			"maxWidth": 200,
			"marginTop": theme.spacing(4),
			"marginBottom": theme.spacing(3),
		}


	})
)

const {Icon} = (()=>{

	type IconProps = {
		imageUrl: string;
	}


	const Icon = memo((props: IconProps) => {

		const {imageUrl} = props;

		const {classes, theme} = useStyles();

		return <GlLogo
			logoUrl={imageUrl}
			width={theme.spacing(4)}
			height={theme.spacing(4)}
			className={classes.root}
		/>

	})

	const useStyles = makeStyles()(
		theme => ({
			"root": {
				"marginRight": theme.spacing(3)

			}
		})
	)

	return { Icon }

})()

const { TopDiv } = (() => {

	type TopDivProps = Omit<EventCardProps,
		"description" |
		"hour" |
		"eventImageUrl" |
		"address"
	> & {
		onClick: () => void;
		isCardUnfolded: boolean;
	}


	const TopDiv = memo((props: TopDivProps) => {

		const { day, month, title, year, link, linkLabel, onClick, isCardUnfolded } = props;

		const { classes } = useStyles({
			isCardUnfolded
		});



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
				<div onClick={onClick}>
					<GlArrow className={classes.arrow} direction="down" />

				</div>
			</div>

		</div>

	})


	const useStyles = makeStyles<{ isCardUnfolded: boolean }>()(
		(theme, { isCardUnfolded }) => ({

			"root": {
				"display": "flex",
				"justifyContent": "space-between",
				"alignItems": "center",
				...theme.spacing.topBottom("padding", `${theme.spacing(5)}px`),
				"borderBottom": `solid ${theme.colors.useCases.typography.textSecondary} 1px`,
				...(theme.windowInnerWidth < breakpointsValues.sm ? {
					"flexDirection": "column"
				} : {})
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


				} : {})


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

				} : {})

			},
			"arrow": {
				"transition": "transform 400ms",
				"transform": isCardUnfolded ? "rotate(180deg)" : undefined,
				...(theme.windowInnerWidth >= breakpointsValues.sm ? {
					"marginLeft": theme.spacing(6),
				} : {
					"marginTop": theme.spacing(3)
				})
			},


		})
	)

	return { TopDiv }

})()