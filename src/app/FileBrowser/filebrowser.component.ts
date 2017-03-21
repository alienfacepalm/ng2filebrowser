import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { IFile } from './file.interface';
import { Tree } from './tree';
import { StubService} from './stub.service';

@Component({
	selector: 'file-browser',
	templateUrl: './filebrowser.component.html',
	styleUrls: ['./filebrowser.component.css']
})
export class FileBrowserComponent {

	files: any;
	sort: string;
	controlIndex: number;
	direction: string;
	setIcon: any;
	sortOperator: Object;

	constructor(stubService:StubService){
		console.log(`======] FILE BROWSER [======`);
		stubService.getFiles().subscribe(payload => this.create(payload.files));

		this.controlIndex = 0;
		this.direction = 'desc';
		this.sortOperator = {
			'>': (a, b) => a > b,
			'<': (a, b) => a < b
		};
	}

	create(files:Object): void {
		//let top:IFile = {name: 'files', isFolder: true, modified: null, size: null};
		//let tree = new Tree(top);
		
		this.files = files;
		this.sortFiles('name');	
	}

	//TODO: implement binary search and remove
	removeNode(node:string): void {
		let confirm = window.confirm(`Really delete ${node}?`);
		if(confirm){
			this.files = this.files.filter(file => file.name !== node);  
		}
	}

	//TODO: implement binary search and replace for optimization
	renameNode(node:string): void {
		let prompt:string = window.prompt("Rename", node);
		if(prompt){
			this.files.map(file => {
				if(file.name === node){
					file.name = prompt;
				}
				return file;
			});
		}
	}

	sortFiles(column:string): void {
		let filetype;
		this.sort = column;	
		let folders = this.files.filter(file => file.isFolder)
		                        .sort((a, b) => a.name > b.name ? true : false),
		    files = this.files
				.map(file => {
					file.icon = file.isFolder ? `assets/folder.png` : `assets/text.png`;
					return file;
				})
				.filter(file => !file.isFolder)
				.sort((a, b) => this.sortOperator[this.direction === 'desc' ? '<' : '>'](a[column], b[column]) ? true : false);
		this.files = [...files, ...folders];
		this.direction = this.direction === 'desc' ? 'asc' : 'desc';
	}

	showControls(row:number): void {
		this.controlIndex = row;
	}

}