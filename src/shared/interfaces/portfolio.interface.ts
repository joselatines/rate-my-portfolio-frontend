export interface Portfolio {
	technologies: Technology[];
	live: string;
	id: string;
	title: string;
	description: string;
	current_votes: number;
	author: Author;
	thumbnail_path: string;
}

interface Image {
	name: string;
}

export interface File {
	webkitRelativePath: string;
	type: string;
	size: number;
	name: string;
	lastModifiedDate: number;
}

interface Technology {
	name: string;
	icon: string;
}

interface Author {
	name: string;
}

export interface CreatePortfolio {
	technologies: string[];
	live: string;
	title: string;
	description: string;
	thumbnail_path: File;
}

export interface EditPortfolio {
	technologies?: Technology[];
	live?: string;
	title?: string;
	description?: string;
	thumbnail_path?: Image;
	prevImage?: string;
}
