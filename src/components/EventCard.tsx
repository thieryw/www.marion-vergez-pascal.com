import {memo, useState, useRef, useEffect} from "react";
import {makeStyles} from "../theme";
import { Text } from "../theme";
import { CustomLink } from "../components/CustomLink";
import { GlArrow } from "gitlanding/utils/GlArrow";
import { breakpointsValues } from "../theme";
import { useConstCallback } from "powerhooks/useConstCallback";
import { GlIllustration } from "gitlanding/GlIllustration";
import calendarIconPng from "../assets/icons/calendar.png";
import clockIconPng from "../assets/icons/clock.png";
import venueIconPng from "../assets/icons/venue.png";
import {GlLogo} from "gitlanding/utils/GlLogo";


export type EventCardProps = {
	className?: string;
	day?: number;
	month?: string;
	year?: number;
	title: string;
	hour?: string;
	description: string;
	address?: string;
	imageUrl?: string;
	link: {
		href: string;
		onClick?: () => void;
	};
	linkLabel: string;
	additionalTextBlocks?: string[];

}

export const EventCard = memo((props: EventCardProps) => {


	const {
		description,
		hour,
		imageUrl,
		address,
		className,
		additionalTextBlocks,
		...rest
	} = props;

	const [isCardUnfolded, setIsCardUnfolded] = useState(false);

	const cardRef = useRef<HTMLDivElement>(null);
	const [cardHeight, setCardHeight] = useState(0);

	useEffect(()=>{
		if(!cardRef.current){
			return;
		};
		setCardHeight(cardRef.current.clientHeight);
	},[])

	const toggleCard = useConstCallback(() => {
		setIsCardUnfolded(!isCardUnfolded);
	})

	const { classes, cx } = useStyles({
		isCardUnfolded,
		"cardHeight": cardHeight,
		"hasImage": imageUrl !== undefined
	});

	return (
		<div className={cx(classes.root, className)}>
			{<TopDiv
				{...rest}
				onClick={toggleCard}
				isCardUnfolded={isCardUnfolded}
			/>}
			<div className={classes.card}>
				
				<div className={classes.cardInner} ref={cardRef}>

					{
						imageUrl !== undefined &&
							<GlIllustration
								className={classes.cardImage}
								type="image"
								url={imageUrl}
							/>
					}


					{<div className={classes.textWrapper}>
					
						<div className={classes.date}>
							{
								(
									rest.day !== undefined ||
									rest.month !== undefined ||
									rest.year !== undefined
								) &&
								<div className={classes.textAndIcon}>
									<Icon imageUrl={calendarIconPng} />
									<Text typo="body 2">{rest.day} {rest.month} {rest.year}</Text>
								</div>

							}

							{
								hour !== undefined &&
								<div className={classes.textAndIcon}>
									<Icon imageUrl={clockIconPng} />
									<Text typo="body 2">{hour}</Text>
								</div>

							}

						</div>

						{
							address !== undefined &&
							<div className={cx(classes.textAndIcon, classes.address)}>
								<Icon imageUrl={venueIconPng} />
								<Text typo="body 1">{address}</Text>
							</div>
						}

						<Text className={classes.description} typo="body 1">{description}</Text>

						{
							additionalTextBlocks !== undefined &&
							<div className={classes.additionalText}>
								{
									additionalTextBlocks.map(text => 
										<Text key={text} typo="body 1">{text}</Text>
									)
								}
							</div>
							}


						<CustomLink
							link={rest.link}
							title="EN SAVOIR PLUS"
							className={classes.link}
						/>

						</div>}

				</div>
			</div>

		</div>
	)

})

const useStyles = makeStyles<{ isCardUnfolded: boolean, cardHeight: number, hasImage: boolean }>()(
	(theme, { cardHeight, isCardUnfolded, hasImage }) => ({
		"root": {
			...(() => {

				return {

					...theme.spacing.rightLeft(
						"padding",
						`${theme.spacing(
							(() => {
								if (theme.windowInnerWidth >= breakpointsValues["lg+"]) {
									return hasImage ? 9 : 14;
								}

								if (theme.windowInnerWidth >= breakpointsValues.md) {
									return 9;
								}

								return 0;

							})()
						)}px`
					)

				}

			})()
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

			} : {})
		},
		"cardImage": {
			"flex": 1,
			...(theme.windowInnerWidth >= breakpointsValues.sm ? {
				"marginRight": theme.spacing(4),
				"paddingRight": theme.spacing(4),
			} : {
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
		"additionalText": {
			"marginBottom": theme.spacing(4)

		},
		"address": {
			"maxWidth": 200,
			"marginTop": theme.spacing(4),
			"marginBottom": theme.spacing(3),
		},
		"link": {
			"alignSelf": "flex-start"
		}


	})
)

const { Icon } = (() => {

	type IconProps = {
		imageUrl: string;
	}


	const Icon = memo((props: IconProps) => {

		const { imageUrl } = props;

		const { classes, theme } = useStyles();

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
		"address" |
		"className" |
		"additionalTextBlocks" 
	> & {
		onClick: () => void;
		isCardUnfolded: boolean;
	}


	const TopDiv = memo((props: TopDivProps) => {

		const { day, month, title, year, link, linkLabel, onClick, isCardUnfolded } = props;

		const { classes } = useStyles({
			isCardUnfolded,
			"hasDate": day !== undefined || month !== undefined || year !== undefined
		});



		return <div className={classes.root}>
			{
				(
					day !== undefined ||
					month !== undefined ||
					year !== undefined
				) &&
				<div className={classes.dateWrapper}>
					{
						[day, month, year].map(unit => {
							return unit !== undefined && <Text key={unit} className={unit === month ? classes.month : undefined} typo="object heading">{unit}</Text>
						})
					}
				</div>

			}

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


	const useStyles = makeStyles<{ isCardUnfolded: boolean; hasDate: boolean }>()(
		(theme, { isCardUnfolded, hasDate }) => ({

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
				...(()=>{

					const value = theme.spacing(4)

					if(hasDate){
						return {...theme.spacing.rightLeft("margin", `${value}px`)}
					};

					return {
						"marginRight": value
					};

				})(),
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