import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';

@Injectable({
  providedIn: 'root'
})
export class GithubLinkService {

  protected readonly ROUTE_PATH = environment.API_URI + '/social-media/github';

  constructor(private http: AuthHttpClient) { }

  linkAccountWithGithub(code: string): Observable<void> {
    return this.http.post<void>(this.ROUTE_PATH, { code });
  }
}
