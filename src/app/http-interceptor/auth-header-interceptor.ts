import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    intercept( req: HttpRequest<any>, 
               next: HttpHandler 
               ): Observable<HttpEvent<any>> {

            const cloned = req.clone({
                headers: req.headers.set('Content-Type','application/json')
            });
            return next.handle(cloned);
    }
} 