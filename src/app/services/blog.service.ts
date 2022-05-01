import {
  HttpClient,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, Observer } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private baseUrl = 'http://weefteste.local/';

  constructor(private http: HttpClient) {}

  getTodosEventos() {
    const urlEventos = `${this.baseUrl}//wp-json/wp/v2/eventos/`;
    return this.http.get(urlEventos).pipe(catchError(this.errorHandle));
  }

  getSingleEventos(id: any) {
    const urlEventos = `${this.baseUrl}wp-json/wp/v2/eventos/${id}`;
    return this.http.get(urlEventos).pipe(catchError(this.errorHandle));
  }

  //tratar os erros quando nao encontrar os posts (eventos)
  errorHandle(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    });
  }

  //Paginations
  nextUser(page: any) {
    const urlEventos = `${this.baseUrl}wp-json/wp/v2/eventos?page${page}&per_page=4`;
    return this.http
      .get(urlEventos)
      .pipe(retry(2), catchError(this.errorHandle));
  }
  previousUser(page: any) {
    const urlEventos = `${this.baseUrl}wp-json/wp/v2/eventos?page${page}&per_page=4`;
    return this.http
      .get(urlEventos)
      .pipe(retry(2), catchError(this.errorHandle));
  }
}
