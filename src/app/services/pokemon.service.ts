import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from "@angular/http";
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class PokemonService {

    private apiUrl = environment.apiUrl;

    constructor(private http: Http) { }

    getListPokemon() {
        let res = this.http.get(this.apiUrl + `pokemon`)
            .pipe(map((response: Response) => {
                return response.json();
            }));
        return res;
    }

    getDetailPokemon(id) {
        let res = this.http.get(this.apiUrl + `pokemon/${id}`)
        .pipe(map((response: Response) => {
            return response.json();
        }));
    return res;
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
