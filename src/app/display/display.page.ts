import { Component, OnInit } from "@angular/core";
import { TranscriptService } from "../transcript.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.page.html",
  styleUrls: ["./display.page.scss"]
})
export class DisplayPage implements OnInit {
  loadedTranscripts: any = [];
  loadedDataMsg: any = "";
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

  getByMeeting() {
    this.transcriptService.getTranscripts().then((data: Array<any>) => {
      this.loadedDataMsg = data.find(elem => {
        return elem.meetingId == this.inputMeeting;
      });
      if (this.loadedDataMsg == null) {
        this.loadedDataMsg = "data not found";
      }
    });
  }
  getByUser() {
    this.transcriptService.getTranscripts().then((data: Array<any>) => {
      this.loadedDataMsg = data.find(elem => {
        return elem.userId == this.inputUser;
      });
      if (this.loadedDataMsg == null) {
        this.loadedDataMsg = "data not found";
      }
    });
  }
}
