export interface IFile {
	name: string, 
	isFolder: boolean,
	modified: string, //TODO: use a datetimeformat interface
	size: number //bytes
}
