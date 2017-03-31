import { IFile } from './file.interface';

export class Document {

	private _guid: string;
	private _name: string;
	private _isFolder: boolean;
	private _modified: string;
	private _size: number;
	private _icon: string;

	public constructor(properties: Object){
  	let p = Object(properties);

		this.guid = p.guid;
		this.name = p.name;
		this.isFolder = p.isFolder;
		this.modified = p.modified;
		this.size = p.size;
		this.icon = null;
	}

	public get guid(){
		return this._guid;
	}

	public set guid(guid: string){
		this._guid = guid;
	}

	public get name(){
		return this._name;
	}

	public set name(name: string){
		this._name = name;
	}

	public get isFolder(){
		return this._isFolder;
	}

	public set isFolder(isFolder: boolean){
		this._isFolder = isFolder;
	}

	public get modified(){
		return this._modified;
	}

	public set modified(modified: string){
		this._modified = modified;
	}

	public get size(){
		return this._size;
	}

	public set size(size){
		this._size = size;
	}

	public get icon(){
		return this._icon;
	}

	public set icon(icon){
		this._icon = icon;
	}

}
