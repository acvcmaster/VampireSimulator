import { Component, OnInit } from '@angular/core';
import { DialogueScreenService } from './dialogue-screen.service';
import { DialogueScreenModel } from './dialogue-screen.model';

@Component({
  selector: 'app-dialogue-screen',
  templateUrl: './dialogue-screen.component.html',
  styleUrls: ['./dialogue-screen.component.scss']
})
export class DialogueScreenComponent implements OnInit {

  constructor(private dialogueScreenService: DialogueScreenService) { }

  dialogue: DialogueScreenModel;

  ngOnInit(): void {
    this.dialogueScreenService.blockNavigation();
    this.queryDialogue();
  }

  changeDialogue(next: number) {
    if (next === -1) {
      this.dialogue = null;
    } else {
      this.dialogueScreenService.index = next;
      this.queryDialogue();
    }
  }

  queryDialogue() {
    this.dialogueScreenService.queryDialogue().subscribe(data => this.dialogue = data);
  }
}
