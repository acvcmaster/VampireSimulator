import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueScreenService } from '../dialogue-screen/dialogue-screen.service';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.scss']
})
export class TitleScreenComponent {

  constructor(
    private router: Router,
    private dialogueScreenService: DialogueScreenService
  ) { }

  title = 'Dating with Strahd';

  navigateDialogue() {
    this.dialogueScreenService.init();
    this.router.navigate(['dialogue']);
  }
}
