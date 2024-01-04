import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  private readonly ROOT_URL = "https://api.themoviedb.org/3";
  private readonly apiKey: string = "59190ada71e7c0996a29408646f191fa"
  params: any = {};
  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({
    //   'Authorization': `api_key ${this.apiKey}`, // Use 'api_key' instead of 'Bearer'
    // });
    this.params = new HttpParams({
      fromObject: {
         api_key: this.apiKey
        }
    });
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, {params: this.params});
  }

  post(uri:string , payload:Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
  }

  put(uri:string, payload:Object){
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri:string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

}
