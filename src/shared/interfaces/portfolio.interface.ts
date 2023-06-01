export interface Portfolio {
	technologies: Technology[];
	live: string;
	id: string;
	title: string;
	description: string;
	current_votes: number;
	author: Author;
	images: string[];
}

interface Technology {
	name: string;
	icon: string;
}

interface Author {
	name: string;
	social_media: SocialMedia[];
}

interface SocialMedia {
	name: string;
	url: string;
}
