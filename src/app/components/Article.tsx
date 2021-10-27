import { memo } from "react";
import type { ReactNode } from "react";
import { makeStyles, breakpointsValues, Text } from "../../theme"
import { Divider } from "./Divider";
import type { Link } from "../../tools/link";
import { GlIllustration } from "gitlanding/GlIllustration";
import { Button } from "../components/Button";


export type ArticleProps = {
	className?: string;
	classes?: {
		heading?: string;
		textAndImageWrapper?: string;
		image?: string;
		text?: string;
		button?: string;
		title?: string;
		paragraph?: string;
	}
	heading?: string;
	imageUrl: string;
	title?: string;
	paragraphs: string[];
	button?: {
		label: string;
	} & Link;
	customButton?: ReactNode
	imagePosition?: "left" | "right"
};


export const Article = memo((props: ArticleProps) => {

	const { button, heading, imageUrl, paragraphs, title, className, imagePosition, classes: classesProp, customButton } = props;

	const { classes, cx } = useStyles({
		"imagePosition": imagePosition ?? "left"
	});


	return <section className={cx(classes.root, className)}>
		{
			heading !== undefined &&
			<div className={classes.headerWrapper}>
				<Text className={cx(classes.heading, classesProp?.heading)} typo="subtitle">{heading}</Text>
				<Divider width={9} height={1} />
			</div>
		}
		<div className={cx(classes.textAndImageWrapper, classesProp?.textAndImageWrapper)}>
			<GlIllustration
				type="image"
				url={imageUrl}
				hasShadow={true}
				className={cx(classes.image, classesProp?.image)}
			/>
			<div className={cx(classes.text, classesProp?.text)}>
				{
					title !== undefined &&
					<>
						<Text className={classesProp?.title} typo="section heading">{title}</Text>
						<Divider color="#e1bf59" width={6} height={2} />
					</>
				}
				{
					paragraphs.map(paragraph => 
						<Text className={cx(classes.paragraph, classesProp?.paragraph)} typo="body 1">
							{paragraph}
						</Text>
					)
				}
				{
					button !== undefined &&
					<div>
						<Button
							className={classesProp?.button}
							color="secondary"
							variant="outlined"
							href={button.href}
							onClick={button.onClick}
							classes={{
							}}
						>
							{button.label}
						</Button>

					</div>
				}
				{
					customButton !== undefined &&
					customButton

				}
			</div>
		</div>

	</section>

});

const useStyles = makeStyles<{ imagePosition: "left" | "right" }>()(
	(theme, { imagePosition }) => ({

		"root": {
			"display": "flex",
			"flexDirection": "column",
			"gap": theme.spacing(8),
			"alignItems": "center",
			...theme.spacing.topBottom("padding", `${theme.spacing(8)}px`)

		},
		"heading": {
			"fontWeight": 100,
			"marginBottom": theme.spacing(5)
		},
		"headerWrapper": {
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center"
		},

		"textAndImageWrapper": {
			"display": "flex",
			"gap": theme.spacing(8),
			"justifyContent": "center",
			"alignItems": "center",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"flexDirection": "column-reverse"
			} : {
				"flexDirection": (() => {
					switch (imagePosition) {
						case "left": return undefined;
						case "right": return "row-reverse";
					}
				})()
			}),
		},
		"image": {
			"maxWidth": 600,
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				"minWidth": 400,
			} : {
				"maxWidth": 500,
				"minWidth": "unset",
			})

		},
		"text": {
			"maxWidth": 500,
			"display": "flex",
			"flexDirection": "column",
			"gap": theme.spacing(4)
		},
		"paragraph": {
			"color": theme.colors.useCases.typography.textSecondary

		},

	})
)




