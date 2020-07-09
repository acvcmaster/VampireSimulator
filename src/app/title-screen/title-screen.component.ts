import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { DialogueScreenService } from '../dialogue-screen/dialogue.service';
import { AudioService } from '../audio/audio.service';

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
    private audioService: AudioService
  ) { }

  title = 'Dating with Strahd';

  ngOnInit() {
    this.audioService.play('background', 'cobble_village.mp3', 0.3, true);
  }

  navigateDialogue() {
    this.dialogueScreenService.init();
    this.navigationService.init();
    this.audioService.play('background', 'market_town.mp3', 0.3, true);
    this.router.navigate(['dialogue']);
  }
}
