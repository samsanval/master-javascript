import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import  {Project } from "../models/project";
import { Global } from "./global";

@Injectable()
export class ProjectService {
  public url: string;
  constructor( private _http: HttpClient) {
    this.url = Global.url;

  }
  testService(){
    return 'Probando el servicio de Angular';
  }
  saveProject(project: Project) : Observable<any>{
    const params = JSON.stringify(project);
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'/save-project',params, {headers: headers});
  }

  findAll(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'projects',{headers: headers})
  }
  findById(id: string): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'project/'+id, {headers:  headers});
  }
  delete(id): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'project/'+id, {headers:  headers});
  }
  update(project): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const params = JSON.stringify(project);
    return this._http.put(this.url+'/project/'+project._id, params,{headers: headers})
  }

}
