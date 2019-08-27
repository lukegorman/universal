import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { APP_CONFIG, AppConfig } from "./app-config.module";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class OAIService {
  constructor(
    //@Inject(APP_CONFIG) private appConfig: AppConfig,
    private httpClient: HttpClient
    ) {}

    requestJsonp(url, options, callback = 'callback') {
      // options.params is an HttpParams object
      let params = null;
      if (options) {
        params = options.params.toString();
      }
      // return this.httpClient.jsonp(`${url}?${params}`, callback)
      //  .pipe(map((response: Response) => response[1]));
       return this.httpClient.jsonp("http://127.0.0.1:3001/scicat/Publication", 'callback');
    }

   getPublications(options, cb) {
    //const OAIServerUri = this.appConfig.oaiProviderRoute;
   // return this.httpClient.jsonp(`${OAIServerUri}`, null);
     return this.requestJsonp("OAIServerUri", options, cb);
  }
}
