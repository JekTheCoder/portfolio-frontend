import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of, map } from 'rxjs';

const userExistsRoute = environment.API_URI + '/profiles/';

@Injectable({
	providedIn: 'root',
})
export class UsernameService {
	constructor(private http: HttpClient) {}

	usernameExists(username: string): Observable<boolean> {
		return this.http.get<void>(userExistsRoute + username).pipe(
			map(() => true),
			catchError(() => of(false))
		);
	}
}
