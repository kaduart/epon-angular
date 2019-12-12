import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { FormDataService } from './sign-up/data/form-data.service';




import { SIG_EPON_API } from '../app.api'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    

    constructor(private http: HttpClient) { }
    registerUser(user: User) {
        const body: User = {
            username: user.username,
            password: user.password
        };
    }

    login(username: string, password: string): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Set-Cookie');
        // headers.append('SET-COOKIE', 'Cookie');
        return this.http.post(`${SIG_EPON_API}/login`, {username: username, password: password}, { headers, observe: 'response'})
    }

    testeGroup(): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get(`${SIG_EPON_API}/grupo`)
    }

}
