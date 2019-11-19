import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    intercept( req: HttpRequest<any>, 
               next: HttpHandler 
               ): Observable<HttpEvent<any>> {

            const accessToken = localStorage.getItem('cookie');

        if (accessToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    'Token-here' + accessToken)
            });

            console.log('Token added to HTTP request', accessToken);

            return next.handle(cloned);
        }
        else {
            //No token; proceed request without bearer token
            console.log('No token added to HTTP request');
            return next.handle(req);
        }

    }
} 