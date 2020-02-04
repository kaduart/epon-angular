import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../security/user.service';


@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('intercepting', req)
        const newReq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json'),
            withCredentials: true
        });

        return next.handle(newReq).pipe(tap((res: HttpEvent<any>) => {
            if (res instanceof HttpResponse) {
                console.log('res', res);
                res = res.clone({
                });
            }
            return res;

        }));
    }
}
