
export async function scrollToTopOnLinkClick(params: {
	scrollableDivId: string;
	onClick?: ()=>void;
}) {

	const { scrollableDivId, onClick } = params;


	const element = document.getElementById(scrollableDivId);

	onClick !== undefined && onClick();

	await new Promise<void>(resolve => setTimeout(resolve, 100));


	if (element === null || element === undefined) {
		return;
	};

	element.scrollTo({
		"top": 0,
	});

};

