import { Component, OnInit } from '@angular/core';
import { DialogueScreenService } from '../dialogue-screen/dialogue-screen.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  constructor(
    private dialogueScreenService: DialogueScreenService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.badEnd = params.badEnd ? params.badEnd === 'true' : false;
      }
    })
  }

  badEnd = false;

  ngOnInit(): void {
    this.dialogueScreenService.blockNavigation();
  }

}
