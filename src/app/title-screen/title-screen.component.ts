import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { DialogueScreenService } from '../dialogue-screen/dialogue.service';
import { AudioService } from '../audio/audio.service';
import { DelayService } from '../services/delay.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.scss']
})
export class TitleScreenComponent implements OnInit {

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private dialogueScreenService: DialogueScreenService,
    private audioService: AudioService,
    private delayService: DelayService
  ) { }

  title = 'Dating with Strahd';
  displayWelcome = false;
  subscriptions = new Subscription();

  ngOnInit() {
    this.audioService.play('background', 'cobble_village.mp3', 0.3, true);

    this.delayService.timeout(this.subscriptions, 3000, () => {
      this.displayWelcome = true;
      this.audioService.play('dialogue', 'strahd/strahd_welcome.wav', 0.7, false);
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  navigateDialogue() {
    this.dialogueScreenService.init();
    this.navigationService.init();
    this.audioService.play('background', 'market_town.mp3', 0.3, true);
    this.router.navigate(['dialogue']);
  }
}
