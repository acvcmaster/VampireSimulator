import { Component, OnInit, ViewChild } from '@angular/core';
import { AudioService, AudioQueryType } from './audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  constructor(private audioService: AudioService) { }

  @ViewChild('backgroundMusic', { static: false }) backgroundMusic: HTMLAudioElement;
  @ViewChild('dialogue', { static: false }) dialogue: HTMLAudioElement;

  ngOnInit() {
    this.audioService.onPlay.subscribe(data => {
      const element = this.getAudioElement(data.type);

      if (element) {
        if (!element.paused) {
          element.pause();
        }
        element.src = data.audio;
        element.volume = data.volume;
        element.loop = data.loop ? data.loop : false;
        element.play();
      }
    });

    this.audioService.onPause.subscribe(data => {
      const element = this.getAudioElement(data.type);

      if (element) {
        element.pause();
      }
    });
  }

  getAudioElement(type: AudioQueryType): HTMLAudioElement {
    switch (type) {
      case "background": {
        return this.backgroundMusic;
      }
      case "dialogue": {
        return this.dialogue;
      }
    }
  }
}
