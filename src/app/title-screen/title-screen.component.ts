import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { DialogueScreenService } from '../dialogue-screen/dialogue.service';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.scss']
})
export class TitleScreenComponent {

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private dialogueScreenService: DialogueScreenService
  ) { }

  title = 'Dating with Strahd';

  navigateDialogue() {
    this.dialogueScreenService.init();
    this.navigationService.init();
    this.router.navigate(['dialogue']);
  }
}
