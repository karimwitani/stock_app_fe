import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { map, tap, pluck } from 'rxjs/operators';
import data from '../../assets/aapl.json'

@Injectable({
	providedIn: 'root'
})
export class PriceDataService {
	jsonDataResult: any;
	constructor(private http: HttpClient) {

	}

	fetchData(): Observable<any> {
		return this.http.get('../assets/aapl.json')
		// .pipe(
		// 	pluck('historical'),
		// 	tap(res => {
		// 		console.log('tap', res)
		// 	})
		// )
		// .subscribe(
		// 	(res) => {
		// 		this.jsonDataResult = JSON.stringify(res);
		// 		// this.jsonDataResult = res;
		// 		//console.log('result:: ', this.jsonDataResult);
		// 		//console.log(this.jsonDataResult);
		// 		return this.jsonDataResult;
		// 	}
		// );
	}

	readData(): any {
		console.log('data: ', data['historical']);
		return data['historical'];
	}
}
