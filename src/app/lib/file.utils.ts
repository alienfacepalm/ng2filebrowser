export function isFilename(supportedFileExtensions: Array<string>, filename:string){
	try{
		let extension = filename.split('.').pop();
		return supportedFileExtensions.includes(extension);
	}catch(e){
		return false;
	}
}
