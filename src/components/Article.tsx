import { memo } from "react";
import type { ReactNode } from "react";
import { makeStyles, breakpointsValues, Text } from "../theme"
import { Divider } from "./Divider";
import type { Link } from "../tools/link";
import { GlIllustration } from "gitlanding/GlIllustration";
import { Button } from "../components/Button";
import { ImageSource } from "gitlanding/tools/ImageSource";
import Markdown from "react-markdown";


export type ArticleProps = {
	className?: string;
	imageAltAttribute?: string
	classes?: {
		heading?: string;
		textAndImageWrapper?: string;
		image?: string;
		imageWrapper?: string;
		text?: string;
		button?: string;
		title?: string;
		paragraph?: string;
	}
	heading?: ReactNode;
	imageUrl: string;
	imageSources?: ImageSource[];
	title?: ReactNode;
	paragraph: ReactNode;
	button?: {
		label: string;
	} & Link;
	customButton?: ReactNode
	imagePosition?: "left" | "right"
};


export const Article = memo((props: ArticleProps) => {

	const {
		button,
		heading,
		imageUrl,
		paragraph,
		title,
		className,
		imagePosition,
		imageSources,
		classes: classesProp,
		customButton,
		imageAltAttribute
	} = props;

	const { classes, cx } = useStyles({
		"imagePosition": imagePosition ?? "left"
	});


	return <section className={cx(classes.root, className)}>
		{
			heading !== undefined &&

				typeof heading === "string" ?
				<div className={classes.headerWrapper}>
					<Text className={cx(classes.heading, classesProp?.heading)} typo="subtitle">{heading}</Text>
					<Divider width={9} height={1} />
				</div> :
				heading
		}
		<div className={cx(classes.textAndImageWrapper, classesProp?.textAndImageWrapper)}>
			<div className={cx(classes.imageWrapper, classesProp?.imageWrapper)}>
				<GlIllustration
					type="image"
					url={imageUrl}
					imageSources={imageSources}
					hasShadow={true}
					className={cx(classes.image, classesProp?.image)}
					alt={imageAltAttribute}
				/>
			</div>

			<div className={cx(classes.text, classesProp?.text)}>
				{
					title !== undefined &&
					<>
						{
							typeof title === "string" ?
								<Text className={classesProp?.title} typo="section heading">{title}</Text> :
								title
						}
						<Divider className={classes.textDivider} color="#e1bf59" width={6} height={2} />
					</>
				}
				{
					typeof paragraph === "string" ?
						<Markdown className={cx(classes.paragraph, classesProp?.paragraph)}>
							{paragraph}
						</Markdown> :
						<div className={cx(classes.paragraphReactNode, classesProp?.paragraph)}>
							{paragraph}
						</div>
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
			"alignItems": "center",
			"marginBottom": theme.spacing(8)
		},

		"textAndImageWrapper": {
			"display": "flex",
			"justifyContent": "center",
			"alignItems": "center",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"flexDirection": "column"
			} : {
				"flexDirection": (() => {
					switch (imagePosition) {
						case "left": return undefined;
						case "right": return "row-reverse";
					}
				})()
			}),
		},
		"imageWrapper": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"marginBottom": theme.spacing(8)
			} : {}),

		},
		"image": {
			"maxWidth": 600,
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				"minWidth": 400,
			} : {
				"maxWidth": 500,
				"minWidth": "unset",
			}),


		},
		"text": {
			"maxWidth": 500,
			"display": "flex",
			"flexDirection": "column",
			...(() => {
				if (theme.windowInnerWidth < breakpointsValues.md) {
					return;
				}
				const value = theme.spacing(8);
				if (imagePosition === "right") {
					return {
						"marginRight": value
					}
				};
				return {
					"marginLeft": value
				};
			})()
		},
		"paragraph": {
			"color": theme.colors.useCases.typography.textSecondary,
			"marginBottom": theme.spacing(5),
			...theme.typography.variants["body 1"].style
		},
		"paragraphReactNode": {
			"marginBottom": theme.spacing(5),
		},
		"textDivider": {
			...theme.spacing.topBottom("margin", `${theme.spacing(4)}px`)
		}

	})
)




