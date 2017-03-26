import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

import { Tree } from './tree';
import { StubService } from './stub.service';
import { isFilename, generateGuid } from '../lib/file.utils';

import { Document } from '../File/document';
import { IFile } from '../File/file.interface';

@Component({
	selector: 'file-browser',
	templateUrl: './filebrowser.component.html',
	styleUrls: ['./filebrowser.component.css']
})
export class FileBrowserComponent {

	@Input() title: string;
	private files: any;
	private supportedFileExtensions: Array<string>;
	private sort: string;
	private controlIndex: number = 0;;
	private direction: string = 'desc';
	private sortOperator: Object;

	constructor(stubService:StubService){
		console.log(`======] FILE BROWSER [======`);
		
		this.supportedFileExtensions = ['gif', 'jpg', 'mov', 'txt', 'doc', 'm4v', 'mp4', 'mp3', 'pdf'];
		this.sortOperator = {
			'>': (a:IFile, b:IFile) => a > b,
			'<': (a:IFile, b:IFile) => a < b
		};

		stubService.fetchFiles().subscribe(payload => this.create(payload.json().files));
	}

	private create(files:Array<Object>): void {
		let documentList:Array<Document> = [];

		files.forEach(file => {
			let f = Object(file),
			    document:Document = new Document({
			    	guid: generateGuid(),
			    	name: f.name,
			    	isFolder: f.isFolder,
			    	modified: f.modified,
			    	size: f.size
			    });

			documentList.push(document);

		});
		
		this.files = documentList;
		this.sortFiles('name');	
	}

	private sortFiles(column:string): void {
		this.sort = column;	
		let folders = this.files.filter(file => file.isFolder)
		                        .sort((a:IFile, b:IFile) => a.name > b.name ? 1 : 0),
		    files = this.files
				.map(file => {
					file.icon = file.isFolder ? `assets/folder.png` : `assets/text.png`;
					return file;
				})
				.filter(file => !file.isFolder)
				.sort((a:IFile, b:IFile) => {
					let aProxy = a[column], 
					    bProxy = b[column];
					if(isFilename(this.supportedFileExtensions, a[column])){
						aProxy = a[column].toLowerCase();
						bProxy = b[column].toLowerCase();
					}
					return this.sortOperator[this.direction === 'desc' ? '>' : '<'](aProxy, bProxy) ? 1 : 0
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
		let filename:string = window.prompt("Rename the file", node);
		if(filename){
			this.files.map(file => {
				if(file.name === node){
					if(isFilename(this.supportedFileExtensions, filename) || file.isFolder){
						file.name = filename;
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