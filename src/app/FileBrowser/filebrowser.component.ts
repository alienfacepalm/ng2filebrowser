import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { IFile } from './file.interface';
import { Tree } from './tree';
import { StubService } from './stub.service';

@Component({
	selector: 'file-browser',
	templateUrl: './filebrowser.component.html',
	styleUrls: ['./filebrowser.component.css']
})
export class FileBrowserComponent {

	files: any;
	supportedFileExtensions: Array<string>;
	sort: string;
	controlIndex: number;
	direction: string;
	setIcon: any;
	sortOperator: Object;

	constructor(stubService:StubService){
		console.log(`======] FILE BROWSER [======`);
		
		this.supportedFileExtensions = ['gif', 'jpg', 'mov', 'txt', 'doc', 'm4v', 'mp4', 'mp3', 'pdf'];
		this.controlIndex = 0;
		this.direction = 'desc';
		this.sortOperator = {
			'>': (a, b) => a > b,
			'<': (a, b) => a < b
		};

		stubService.getFiles().subscribe(payload => this.create(payload.files));
	}

	private isFilename(value:any){
		try{
			let extension = value.split('.').pop();
			return this.supportedFileExtensions.includes(extension);
		}catch(e){
			return false;
		}
	}

	private create(files:Object): void {
		//let top:IFile = {name: 'files', isFolder: true, modified: null, size: null};
		//let tree = new Tree(top);
		
		this.files = files;
		this.sortFiles('name');	
	}

	private sortFiles(column:string): void {
		this.sort = column;	
		let folders = this.files.filter(file => file.isFolder)
		                        .sort((a, b) => a.name > b.name ? true : false),
		    files = this.files
				.map(file => {
					file.icon = file.isFolder ? `assets/folder.png` : `assets/text.png`;
					return file;
				})
				.filter(file => !file.isFolder)
				.sort((a, b) => {
					let aProxy = a[column], 
					    bProxy = b[column];
					if(this.isFilename(a[column])){
						aProxy = a[column].toLowerCase();
						bProxy = b[column].toLowerCase();
					}
					return this.sortOperator[this.direction === 'desc' ? '>' : '<'](aProxy, bProxy) ? true : false
				});
		this.files = [...files, ...folders];
		this.direction = this.direction === 'desc' ? 'asc' : 'desc';
	}

   	//TODO: implement binary search/remove
	public removeNode(node:string): void {
		let confirm:boolean = window.confirm(`Really delete ${node}?`);
		if(confirm){
			this.files = this.files.filter(file => file.name !== node);  
		}
	}

	//TODO: implement binary search/replace for optimization
	public renameNode(node:string): void {
		let prompt:string = window.prompt("Rename the file", node);
		if(prompt){
			this.files.map(file => {
				if(file.name === node){
					if(this.isFilename(prompt) || file.isFolder){
						file.name = prompt;
					}else{
						alert("You must include a valid file extension");
					}
				}
				return file;
			});
		}
	}

	public showControls(row:number): void {
		this.controlIndex = row;
	}

}