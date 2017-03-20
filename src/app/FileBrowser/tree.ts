import { IFile } from './file.interface';
import { Node } from './node';

export class Tree {

	root: any;
	node: any;
	data: IFile;

	constructor(data: IFile){
		this.node = new Node(data);
		this.root = this.node;
	}

	add(){
		//add a file
	}

	remove(filename){
		//remove a file
	}

	sort(column){
		//sort files
	}

	rename(filename, newFilename){
		//rename a file
	}

}
