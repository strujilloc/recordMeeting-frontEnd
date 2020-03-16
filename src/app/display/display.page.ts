import { Component, OnInit } from "@angular/core";
import { TranscriptService } from "../transcript.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.page.html",
  styleUrls: ["./display.page.scss"]
})
export class DisplayPage implements OnInit {
  loadedTranscripts: any = [];
  loadedMeeting: any = "";
  inputMeeting: string = "";
  inputUser: string = "";

  constructor(private transcriptService: TranscriptService) {}

  ngOnInit() {}

  getData() {
    this.transcriptService.getTranscripts().then(data => {
      console.log("to display", data);
      this.loadedTranscripts = data;
    });
  }

  getMeeting() {
    this.transcriptService.getTranscripts().then((data: Array<any>) => {
      this.loadedMeeting = data.find(elem => {
        return elem.userId == "user02";
      });
      console.log(
        data.find(elem => {
          return elem.userId == "user02";
        })
      );
    });
  }
}
