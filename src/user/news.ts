import newsImage from "./assets/news/news.jpeg";

type NewsProps = {
		title: string;
		paragraph: string;
};

export const news: {
	fr: NewsProps;
	en?: NewsProps;
	imageUrl: string;
	buttonHref?: string;
} = {

	"fr": {
		"title": `Titre de l'actualité`,

		"paragraph": `
			Lorem ipsum dolor sit amet, 
			consectetur adipiscing elit. Morbi non tristique libero. 
			Curabitur lobortis viverra augue, in volutpat neque mattis a. 
			Praesent quis erat aliquam nulla vestibulum 
			tempus eget nec velit. Nulla facilisi. 
			In hac habitasse platea dictumst.
		`,
	},
	"imageUrl": newsImage
}