import { memo} from "react";
import type { ReactNode } from "react";
import MuiLink from "@mui/material/Link";
import { GlLogo } from "gitlanding/utils/GlLogo";
import { makeStyles } from "../../theme";
import { breakpointsValues } from "../../theme";
import type { Link } from "../../tools/link";
import { scrollableDivId } from "gitlanding/GlTemplate";
import {useCallbackFactory} from "powerhooks/useCallbackFactory";



export type FooterProps = {
	title?: ReactNode;

	links?: ({
		label: string;
	} & Link)[];

	socialMediaLinks?: ({
		iconUrl: string;
	} & Link)[];

	bottomDiv?: ReactNode;
}

export const Footer = memo((props: FooterProps) => {

	const { bottomDiv, links, socialMediaLinks, title } = props;
	const { classes } = useStyles();


	const onClickFactory = useCallbackFactory( async (
		[onClick]: [(()=> void) | undefined]
	)=>{
		const element = document.getElementById(scrollableDivId);
			
		onClick !== undefined && onClick();

		await new Promise<void>(resolve => setTimeout(resolve, 1000));


		if(element === null || element === undefined){
			return;
		};

		element.style.scrollBehavior = "auto"

		element.scrollTo({
			"top": 0,
			"behavior": "auto"
		})

	});






	return <footer className={classes.root}>
		<div className={classes.upperDivWrapper}>
			<div className={classes.title}>{title}</div>
			<div>
				<div className={classes.links}>
					{
						links !== undefined &&
						links.map(({ href, label, onClick }) => <MuiLink
							onClick={onClickFactory(onClick)}
							href={href}
							className={classes.muiLink}
							key={label}
						>
							{label}
						</MuiLink>
						)
					}
				</div>
				<div className={classes.socialLinks}>
					{
						socialMediaLinks !== undefined &&
						socialMediaLinks.map(({ onClick, href, iconUrl }) =>
							<div key={href} className={classes.socialLink} onClick={onClick ?? (() => window.location.href = href)}>
								<GlLogo width={20} logoUrl={iconUrl} />
							</div>
						)
					}
				</div>
			</div>
		</div>

		<div className={classes.bottomDiv}>{bottomDiv}</div>
	</footer>

})


const useStyles = makeStyles()(
	theme => ({
		"root": {
			"background": theme.customBackgroundColor
		},
		"title": {
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"marginBottom": theme.spacing(7),

			} : {})

		},
		"links": {
			"display": "flex",
			"flexDirection": "column",
			"position": "relative",
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				"left": -theme.spacing(9)

			} : {})

		},
		"muiLink": {
			"color": theme.colors.useCases.typography.textSecondary,
			"textDecoration": "none",
			...theme.spacing.topBottom("margin", `${theme.spacing(2)}px`),
			"transition": "transform 400ms",
			":hover": {
				"transform": `translateX(${theme.spacing(2)}px)`
			}

		},
		"socialLinks": {
			"display": "flex",
			"position": "relative",
			"marginTop": theme.spacing(6),
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				"left": -theme.spacing(9),
			} : {})
		},
		"socialLink": {
			...theme.spacing.rightLeft("margin", `${theme.spacing(2)}px`),
			"cursor": "pointer",
			"& svg": {
				":hover": {
					"fill": "lightblue"
				},
				"transition": "fill 400ms"

			}

		},
		"upperDivWrapper": {
			"padding": theme.spacing({
				"rightLeft": `${theme.spacing(11)}px`,
				"topBottom": `${theme.spacing(7)}px`,
			}),
			"display": "flex",
			"justifyContent": "space-between",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"flexDirection": "column",
				...theme.spacing.rightLeft("padding", `${theme.spacing(5)}px`),
				"alignItems": "center",
			} : {})
		},
		"bottomDiv": {
			"backgroundColor": theme.colors.useCases.surfaces.background,
			...(theme.windowInnerWidth >= breakpointsValues.md ? {
				...theme.spacing.rightLeft("padding", `${theme.spacing(11)}px`),
			} : {})

		}

	})
)