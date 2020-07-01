import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DialogueScreenModel } from './dialogue-screen.model';
import { HttpClient } from '@angular/common/http/';

@Injectable({
    providedIn: 'root'
})
export class DialogueScreenService {
    constructor(private http: HttpClient) { }

    public canNavigate = false;
    index = 0;

    init() {
        this.canNavigate = true;
        this.index = 0;
    }

    blockNavigation() {
        this.canNavigate = false;
    }

    queryDialogue(): Observable<DialogueScreenModel> {
        if (this.index === -1) {
            return of(null);
        }
        return this.http.get<DialogueScreenModel>(`assets/dialogue/${this.index}.json`);
    }
}
