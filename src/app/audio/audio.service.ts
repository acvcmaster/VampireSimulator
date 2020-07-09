import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type AudioQueryType = 'background' | 'dialogue';
export type AudioQuery = { type: AudioQueryType, audio: string, volume: number, loop?: boolean };

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    onPlay = new Subject<AudioQuery>();
    onPause = new Subject<AudioQuery>();

    play(type: AudioQueryType, audio: string, volume: number, loop?: boolean) {
        this.onPlay.next({ type, audio, volume, loop });
    }
}