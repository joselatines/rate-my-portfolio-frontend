export interface IUser {
	id: string;
	username: string;
	email: string;
	profile_picture: string | null;
	provider: string | null;
}
