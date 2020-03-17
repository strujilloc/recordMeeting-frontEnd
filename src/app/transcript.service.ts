import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { NavController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TranscriptService {
  transcripts: Observable<any>;
  data: any;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {}

  getTranscripts() {
    /* this.transcripts = this.httpClient.get(
      "http://127.0.0.1:8080/api/transcripts"
    );
    this.transcripts.subscribe(data => {
      console.log("my transcript: ", data);
      return data;
    }); */

    return this.httpClient
      .get("http://127.0.0.1:8080/api/transcripts")
      .toPromise();
  }
  postTranscripts(newTranscript) {
    // tutorial https://angular.io/guide/http & https://www.joshmorony.com/building-a-review-app-with-ionic-2-mongodb-node/
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .post(
        "http://127.0.0.1:8080/api/transcripts",
        JSON.stringify(newTranscript),
        httpOptions
      )
      .toPromise();
  }
}
