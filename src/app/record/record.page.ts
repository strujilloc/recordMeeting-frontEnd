import { Component, OnInit } from "@angular/core";
import { Message } from "../message.model";

@Component({
  selector: "app-record",
  templateUrl: "./record.page.html",
  styleUrls: ["./record.page.scss"]
})
export class RecordPage implements OnInit {
  inputMeeting: string;
  inputUser: string;
  private data: Message = {
    meetingId: "",
    userId: ""
  };

  constructor() {}

  ngOnInit() {}

  sendData() {
    this.data = { meetingId: this.inputMeeting, userId: this.inputUser };
    console.log(this.data);
  }
}
