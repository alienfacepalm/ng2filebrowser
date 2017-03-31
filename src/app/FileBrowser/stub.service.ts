import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class StubService {

	constructor(private http: Http){}

	fetchFiles(){
		return this.http.get('api/mock_files.json');
	}
}
