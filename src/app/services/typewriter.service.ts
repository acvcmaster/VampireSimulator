import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TypewriterService {
    constructor() { }

    getTypewriter(input: string, timings?: number[]): Observable<string> {
        let words: string[] = [];
        if (input && input.length) {
            words = [...input.split(' ')];
            timings = timings && timings.length ? timings : this.defaultTimings(words);
            if (timings.length < words.length - 1) {
                timings.fill(0, timings.length - 1, words.length - 2);
            }
        }

        return from(words).pipe(concatMap((word, index) => of(word).pipe(delay([0, ...timings][index]))));
    }

    private defaultTimings(words: string[]): number[] {
        // length: words.length - 1
        const result: number[] = [];
        for (let i = 0; i < words.length - 1; i++) {
            const large = words[i].endsWith('.') || words[i].endsWith('?') || words[i].endsWith('!') || words[i].endsWith(',');
            result.push(large ? 800 : 300);
        }
        return result;
    }
}