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

	files: any;

	constructor(fileStubService: FileStubService){
		console.log(`======] FILE BROWSER [======`);
		fileStubService.getFiles().subscribe(payload => this.create(payload.files));
	}

	//build tree structure with 
	create(files){

		let top:IFile = {name: 'files', isFolder: true, modified: null, size: null};
		let tree = new Tree(top);
		
		files = files.map(file => {
			let type = !!file.name.match(/(png|jpg|gif)/gi) ? 'image' : 'text';
			file.icon = file.isFolder ? `assets/folder.png` : `assets/${type}.png`;
			return file;
		});

		this.files = files.sort((a, b) => a.name > b.name ? true : false);

		console.log(`FILES`, files);
		//loop over files and create tree nodes from them to enable interaction: sort, search, add, remove

	}

}