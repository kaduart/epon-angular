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

    userAuthentication(user: User): Observable<User> {

        const params = JSON.stringify({ user });
        console.log(user);

        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post<User>(this.rootUrl + '/login', params, { headers });
        // const httpOptions = {
        // headers: new HttpHeaders({ 'Content-Type': 'application/json',
        //                            'Accept': 'application/json' })
        // };

        // return this.http
        //     .post(this.rootUrl + '/login', params, httpOptions);
    }
}
