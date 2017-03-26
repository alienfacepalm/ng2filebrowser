import { UUID } from 'angular2-uuid';''

export function isFilename(supportedFileExtensions: Array<string>, filename: string){
	try{
		let extension = filename.split('.').pop();
		return supportedFileExtensions.includes(extension);
	}catch(e){
		return false;
	}
}

export function generateGuid(){
	let guid = UUID.UUID();
	return guid;
}
