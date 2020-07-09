import { Component, OnInit } from '@angular/core';
import { DialogueScreenService } from './dialogue.service';
import { DialogueScreenModel } from './dialogue-screen.model';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-dialogue-screen',
  templateUrl: './dialogue-screen.component.html',
  styleUrls: ['./dialogue-screen.component.scss']
})
export class DialogueScreenComponent implements OnInit {

  constructor(
    private dialogueScreenService: DialogueScreenService,
    private navigationService: NavigationService,
    private router: Router
  ) { }

  dialogue: DialogueScreenModel;
  badEnd: boolean;

  ngOnInit(): void {
    this.navigationService.blockNavigation();
    this.queryDialogue();
  }

  changeDialogue(next: number, badEnd: boolean) {
    this.dialogueScreenService.index = next;
    this.badEnd = badEnd;
    this.queryDialogue();
  }

  queryDialogue() {
    this.dialogueScreenService.queryDialogue().subscribe(data => {
      if (data) {
        this.dialogue = data;
      } else {
        this.navigationService.canNavigate = true;
        this.router.navigate(['end'], { queryParams: { badEnd: this.badEnd } });
      }
    });
  }
}
