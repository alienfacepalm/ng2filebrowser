export interface IFile {
	guid: string,
	name: string, 
	isFolder: boolean,
	modified: string, //TODO: use a datetimeformat interface
	size: number, 
	icon: string
}
