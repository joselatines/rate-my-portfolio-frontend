export  interface IPortfolio {
	current_votes?: number;
	current_rate_avg?: number;
	id?: string;
	title: string;
	description: string;
	thumbnail_path: string;
	technologies: string[];
	created_by: string;
	live: string;
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
