import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { AudioService } from '../audio/audio.service';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private audioService: AudioService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.badEnd = params.badEnd ? params.badEnd === 'true' : false;
        this.playSound(this.badEnd);
      }
    })
  }

  badEnd = false;

  ngOnInit(): void {
    this.navigationService.blockNavigation();
  }

  playSound(badEnd: boolean) {
    if (this.badEnd) {
      this.audioService.play('background', 'death.mp3', 0.3, false);
    } else {
      this.audioService.play('background', 'fanfare.mp3', 0.3, false);
    }
  }

}
