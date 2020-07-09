import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DialogueScreenModel } from './dialogue-screen.model';
import { HttpClient } from '@angular/common/http/';

@Injectable({
    providedIn: 'root'
})
export class DialogueScreenService {
    constructor(private http: HttpClient) { }

    index = 0;

    init() {
        this.index = 0;
    }

    queryDialogue(): Observable<DialogueScreenModel> {
        if (this.index === -1) {
            return of(null);
        }
        return this.http.get<DialogueScreenModel>(`assets/dialogue/${this.index}.json`);
    }
}
