import { memo, useState } from "react";
import type {ReactNode} from "react";
import {makeStyles} from "../theme";
import {Text} from "../theme";
import {breakpointsValues} from "gitlanding/theme"
import UnfoldIcon from '@mui/icons-material/FormatLineSpacing';
import {useDomRect} from "powerhooks/useDomRect";
import {useConstCallback} from "powerhooks";
import {useClickAway} from "powerhooks";
import {GlDarkModeSwitch} from "gitlanding/utils/GlDarkModeSwitch";



export type HeaderProps = {
	links: {
		label: string;
		href: string;
		onClick?: ()=> void;
	}[];
	title?: ReactNode;
}

const useStyles = makeStyles<{
	headerHeight: number;
	isMenuUnfolded: boolean;
	linksHeight: number;
}>()(
	(theme, {headerHeight, isMenuUnfolded, linksHeight}) => ({
		"root": {
			...theme.spacing.rightLeft("padding", `${theme.paddingRightLeft}px`)
		},
		"headerInner": {
			"display": "grid",
			"gridTemplateColumns": "repeat(3, 1fr)",
			"justifyContent": "space-between",
			"alignItems": "center",
			"position": "relative"
		},

		"unfoldIcon": {
			"display": "none",
			"pointerEvents": "none",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"display": "block",
				"pointerEvents": "unset"
			}: {}),
			"margin": "auto"

		},
		"smallDeviceLinksWrapper": {
			"position": "absolute",
			"backgroundColor": theme.colors.useCases.surfaces.background,
			"width": theme.windowInnerWidth,
			"left": -theme.paddingRightLeft,
			"top": headerHeight + theme.spacing(3),
			"opacity": 0,
			"height": 0,
			"overflow": "hidden",
			"pointerEvents": "none",
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",
			"justifyContent": "center",
			"transition": "height 300ms, border-top-color 300ms",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"borderTop": "solid 1px",
				"borderTopColor": isMenuUnfolded ? theme.colors.useCases.typography.textSecondary : theme.colors.useCases.surfaces.background,
				"height": isMenuUnfolded ? linksHeight : 0,
				"opacity": 0.94,
				"pointerEvents": "unset"
			}: {})  
		},

		"smallDeviceLinksInnerWrapper": {
			...theme.spacing.topBottom("padding", `${theme.spacing(6)}px`)
		},

		"smallDeviceLinks": {
			"flexDirection": "column",
			"display": "flex",
			...(theme.windowInnerWidth < breakpointsValues.md ? {
				"opacity": 1,
				"pointerEvents": "unset"
			}: {})  
		},

		"darkModeSwitch": {
			"marginLeft": "auto"

		}
	})
)



export const Header = memo((props: HeaderProps)=>{
	const {links, title} = props;

	const [isMenuUnfolded, setIsMenuUnfolded] = useState(false);


	const {domRect: {
		height: headerHeight
	}, ref: headerRef} = useDomRect();

	const {
		domRect: {
			height: linksHeight
		},
		ref: linksRef
		

	} = useDomRect();

	const {classes} = useStyles({
		headerHeight,
		isMenuUnfolded,
		linksHeight
	});

	const { rootRef } = useClickAway(()=>{
		if(!isMenuUnfolded){
			return;
		}
		setIsMenuUnfolded(false);

	})


	const toggleMenu = useConstCallback(()=>{
		setIsMenuUnfolded(!isMenuUnfolded)
	});

	return <header className={classes.root} ref={headerRef} >
		<div  ref={rootRef} className={classes.headerInner}>
			<div>{title}</div>

			<div>
				<Links
					links={links}
				/>

				<div onClick={toggleMenu}>
					<UnfoldIcon className={classes.unfoldIcon} />
				</div>
			</div>

			<div className={classes.smallDeviceLinksWrapper}>
				<div className={classes.smallDeviceLinksInnerWrapper} ref={linksRef}>
					<Links
						links={links}
						className={classes.smallDeviceLinks}
					/>

				</div>
			</div>

			<div className={classes.darkModeSwitch}>
				<GlDarkModeSwitch />
			</div>
		</div>

	</header>
})

const { Links } = (() => {

	type LinksProps = {
		links: HeaderProps["links"];
		className?: string;
	}

	const useStyles = makeStyles()(
		theme => ({
			"links": {
				"display": "flex",
				"justifyContent": "center",
				"flex": 1,
				...(theme.windowInnerWidth < breakpointsValues.md ? {
					"display": "none",
					"pointerEvents": "none"

				} : {})
			},
			"linkWrapper": {
				"display": "flex",
				"justifyContent": "center"

			}
		})
	)


	const Links = memo((props: LinksProps) => {

		const { links, className } = props;

		const { classes, cx } = useStyles();

		return <div className={cx(classes.links, className)}>{
			links.map(({ href, label, onClick }) => <div key={label} className={classes.linkWrapper}><Link
				href={href}
				label={label}
				onClick={onClick}
			/></div>)

		}</div>


	})

	return { Links };
})();


const { Link } = (() => {

	type LinkProps = HeaderProps["links"][number];

	const useStyles = makeStyles()(

		(theme, ...[, createRef]) => {
			const underline = {
				"ref": createRef(),
				"width": 0,
				"position": "relative",
				"left": theme.windowInnerWidth >= breakpointsValues.md ? "-5%" : "25%",
				"top": theme.spacing(1),
				"height": 1,
				"backgroundColor": theme.colors.useCases.typography.textPrimary,
				"transition": "width 200ms"
			} as const;

			return {
				"root": {
					"display": "flex",
					"flexDirection": "column",
					"position": "relative",
					...theme.spacing.rightLeft("margin", `${theme.spacing(3)}px`),
					"&: hover": {
						"cursor": "pointer"
					},
					[`&:hover .${underline.ref}`]: {
						"width": "110%",
						...(theme.windowInnerWidth < breakpointsValues.md ? {
							"width": "50%",
						} : {})
					},
					...(theme.windowInnerWidth < breakpointsValues.md ? {
						...theme.spacing.topBottom("margin", `${theme.spacing(3)}px`)
					} : {

					})
				},
				underline,
				"text": {
					...theme.spacing.rightLeft("padding", `${theme.spacing(2)}px`)
				}
			}
		}
	)


	const Link = memo((props: LinkProps) => {
		const { href, label, onClick } = props;
		const { classes } = useStyles()

		return <div
			onClick={onClick ?? (() => window.location.href = href)}
			className={classes.root}
		><Text
			typo="label 1"
			className={classes.text}
		>
				{label}
			</Text>
			<div className={classes.underline}></div>
		</div>

	})

	return { Link }

})()