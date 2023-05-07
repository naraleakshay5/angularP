import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/auth/login';
  private tokenSubject = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((res: any) => {
        const token = res.token;
        localStorage.setItem('token', token);
        this.tokenSubject.next(token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next('');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    console.log(token);

    return !!token;
  }
  getToken(): string {
    //return localStorage.getItem('token');
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
