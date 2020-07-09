import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public canNavigate = false;

    init() {
        this.canNavigate = true;
    }

    blockNavigation() {
        this.canNavigate = false;
    }
}