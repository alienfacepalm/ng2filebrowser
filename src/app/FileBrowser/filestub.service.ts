import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FileStubService {
	constructor(private http: Http){}

	getFiles(){
		return this.http.get('api/mock_files.json').map((response:Response) => response.json());
	}
}