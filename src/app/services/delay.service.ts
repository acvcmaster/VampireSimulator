import { Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DelayService {

    timeout(subscription: Subscription, timeout: number, action: () => void) {
        subscription.add(timer(timeout).subscribe(() => action()));
    }
}