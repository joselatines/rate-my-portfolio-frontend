export interface Portfolio {
	technologies: string[];
	live: string;
	id: string;
	title: string;
	description: string;
	current_votes: number;
	current_rate_avg: number;
	author: Author;
	thumbnail_path: string;
}

interface Image {
	name: string;
}

export interface RatePortfolio {
	feedback?: string;
	rate?: number;
}

export interface File {
	webkitRelativePath: string;
	type: string;
	size: number;
	name: string;
	lastModifiedDate: number;
}

interface Author {
	username: string;
	email: string;
}

export interface CreatePortfolio {
	technologies: string[];
	live: string;
	title: string;
	description: string;
	thumbnail_path: File;
}

export interface EditPortfolio {
	technologies?: string[];
	live?: string;
	title?: string;
	description?: string;
	thumbnail_path?: Image;
	prevImage?: string;
}
