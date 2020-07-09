import { Component, OnInit } from '@angular/core';
import { DialogueScreenService } from './dialogue.service';
import { DialogueScreenModel } from './dialogue-screen.model';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { TypewriterService } from '../services/typewriter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialogue-screen',
  templateUrl: './dialogue-screen.component.html',
  styleUrls: ['./dialogue-screen.component.scss']
})
export class DialogueScreenComponent implements OnInit {

  constructor(
    private dialogueScreenService: DialogueScreenService,
    private navigationService: NavigationService,
    private router: Router,
    private typewriterService: TypewriterService
  ) { }

  dialogue: DialogueScreenModel;
  dialogueMessage: string;
  badEnd: boolean;
  dialogueSubscription: Subscription;

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
    if (this.dialogueSubscription) {
      this.dialogueSubscription.unsubscribe();
    }

    this.dialogueSubscription = new Subscription();
    this.dialogueMessage = '';

    this.dialogueScreenService.queryDialogue().subscribe(data => {
      if (data) {
        this.dialogue = data;
        this.dialogueSubscription.add(this.typewriterService.getTypewriter(data.message, data.timings).subscribe(word => {
          console.log(word);
          this.dialogueMessage += `${word} `;
        }));
      } else {
        this.navigationService.canNavigate = true;
        this.router.navigate(['end'], { queryParams: { badEnd: this.badEnd } });
      }
    });
  }
}
