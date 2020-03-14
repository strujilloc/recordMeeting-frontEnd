import { Component, OnInit } from "@angular/core";
import { TranscriptService } from "../transcript.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.page.html",
  styleUrls: ["./display.page.scss"]
})
export class DisplayPage implements OnInit {
  loadedTranscripts: any = [];

  constructor(private transcriptService: TranscriptService) {}

  ngOnInit() {}
  getData() {
    this.transcriptService.getTranscripts().then(data => {
      console.log("to display", data);
      this.loadedTranscripts = data;
    });
    /* console.log("to display:", this.transcriptService.getTranscripts());
    this.loadedTranscripts = this.transcriptService.getTranscripts();
  */
  }
}
