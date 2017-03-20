import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { IFile } from './file.interface';
import { Tree } from './tree';
import { FileStubService} from './filestub.service';

@Component({
	selector: 'file-browser',
	templateUrl: './filebrowser.component.html',
	styleUrls: ['./filebrowser.component.css']
})
export class FileBrowserComponent {

	files:any;
	direction:string;
	sortOperator:Object;

	constructor(fileStubService: FileStubService){
		console.log(`======] FILE BROWSER [======`);
		fileStubService.getFiles().subscribe(payload => this.create(payload.files));
		this.direction = 'desc';
		this.sortOperator = {
			'>': (a, b) => a > b,
			'<': (a, b) => a < b
		};
	}

	create(files){

		let top:IFile = {name: 'files', isFolder: true, modified: null, size: null};
		let tree = new Tree(top);
		
		this.files = files;
		this.sortFiles('name');

		console.log(`FILES`, files);
		//TODO: use tree structure. 
		//Loop over files and create tree nodes from them to enable interaction: rename, sort, search, add, remove

	}

	//TODO: implement tree structure
	//BUG: when b is null, it doesn't sort
	sortFiles(column){		
		this.files = this.files
			.map(file => {
				let type = !!file.name.match(/(png|jpg|gif)/gi) ? 'image' : 'text';
				file.icon = file.isFolder ? `assets/folder.png` : `assets/${type}.png`;
				return file;
			})
			.sort((a, b) => this.sortOperator[this.direction === 'desc' ? '<' : '>'](a[column], b[column]) ? true : false);
		this.direction = this.direction === 'desc' ? 'asc' : 'desc';
	}

}