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

	constructor(fileStubService: FileStubService){
		console.log(`======] FILE BROWSER [======`);
		fileStubService.getFiles().subscribe(payload => this.create(payload.files));
	}

	//build tree structure with 
	create(files){
		let top:IFile = {name: 'files', isFolder: true, modified: null, size: null};
		let tree = new Tree(top);
		
		console.log(`FILES`, files);

	}

}