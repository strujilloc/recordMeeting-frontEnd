import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
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
  getTranscript() {
    return this.httpClient.get("http://127.0.0.1:8080/api/transcripts").pipe(
      map((res: Array<any>) => {
        res.find(elem => elem.userId == "user02");
      })
    );
  }
}
