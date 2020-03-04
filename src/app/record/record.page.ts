import { Component, OnInit } from "@angular/core";
import { Message } from "../message.model";
import { Platform } from "@ionic/angular";
import { SpeechRecognition } from "@ionic-native/speech-recognition/ngx";

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

  matches: String[];
  isRecording = false;

  constructor(
    private plt: Platform,
    private speechRecognition: SpeechRecognition
  ) {}

  ngOnInit() {}

  sendData() {
    this.data = { meetingId: this.inputMeeting, userId: this.inputUser };
    console.log(this.data);
  }

  getPermissions() {
    this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    });
    this.isRecording = true;
  }
  startRecording() {
    let options = {
      language: "en-US"
    };
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
    });
  }
  stopRecording() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }
  isIos() {
    return this.plt.is("ios");
  }
}
