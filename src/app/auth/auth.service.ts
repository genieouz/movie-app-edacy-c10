import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL="http://localhost:3001";
  constructor(private http: HttpClient) { }

  register(payload: any) {
    return this.http.post(`${this.BASE_URL}/auth/register`, payload);
  }

  getToken() {
    const session = localStorage.getItem("currentSession");
    return session ? JSON.parse(session).token : null;
  }
}
