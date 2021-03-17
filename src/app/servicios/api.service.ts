import { Injectable } from "@angular/core";
import { Libro } from "../modelos/libro";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ApiService {
  // private libro: Libro = { id: 0, autor: "",  id_editorial: 0,titulo:"",genero:"",numero_paginas:0,año :new Date() };
  private Url = "http://localhost:54887/api/Libro/"; // URL to web api

  constructor(private http: HttpClient) {}

  public getFrase(): Observable<Libro> {
    return this.http.get<Libro>(this.Url);
  }
  public getLibroText(text: string): Observable<Libro> {
    const path = `${this.Url}ListText/${text}`;
    return this.http.get<Libro>(path);
  }
  public getLibroAutor(text: string): Observable<Libro> {
    const path = `${this.Url}ListAutor/${text}`;
    return this.http.get<Libro>(path);
  }
  public getLibroFecha(finicial: string,ffinal: string): Observable<Libro> {
    const path = `${this.Url}ListFecha/${finicial}/${ffinal}`;
    return this.http.get<Libro>(path);
  }
}
