import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Message } from "../message.model";
import { Platform } from "@ionic/angular";
import { SpeechRecognition } from "@ionic-native/speech-recognition/ngx";
import { TranscriptService } from "../transcript.service";

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
    userId: "",
    scriptMsg: ""
  };

  matches: string[];
  isRecording = false;

  constructor(
    private plt: Platform,
    private speechRecognition: SpeechRecognition,
    private changeDetectoreRef: ChangeDetectorRef,
    private transcriptService: TranscriptService
  ) {}

  ngOnInit() {}

  sendData() {
    this.data = {
      meetingId: this.inputMeeting,
      userId: this.inputUser,
      scriptMsg: this.matches.shift()
    };
    this.transcriptService.postTranscripts(this.data).then(newTranscript => {
      console.log(newTranscript);
    });

    console.log(this.data);
  }

  getPermissions() {
    /* this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    }); */
  }
  startRecording() {
    let options = {
      language: "en-US",
      matches: 1
    };
    this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    });

    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.changeDetectoreRef.detectChanges();
    });
    this.isRecording = true;
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
