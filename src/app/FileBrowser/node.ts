import { IFile } from './file.interface';

export class Node {
	data: IFile;
	parent: IFile;
	children: Array<IFile>;

	constructor(data: any){
		this.data = data;
		this.parent = null;
		this.children = [];
	}
}
