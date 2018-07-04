import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(data) {
    return this.http.post("http://localhost:1337/email/", data).pipe(
      map(res => {
        res;
        console.log('mail send');
      })
    );
  }

  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
}
