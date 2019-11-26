import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    readonly rootUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    registerUser(user: User) {
        const body: User = {
            username: user.username,
            password: user.password
        };

        return this.http.post(this.rootUrl + '/usuario-local', body);
    }

    userAuthentication(user: User): Observable<any> {

        const params = JSON.stringify( user );

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        return this.http.post<User>(this.rootUrl + '/login', params, { headers, observe: 'response' });
    }
}
