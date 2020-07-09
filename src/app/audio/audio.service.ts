import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type AudioQueryType = 'background' | 'dialogue' | 'sfx';
export type AudioQuery = { type: AudioQueryType, audio: string, volume: number, loop?: boolean };

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    onPlay = new Subject<AudioQuery>();
    onPause = new Subject<AudioQuery>();

    play(type: AudioQueryType, url: string, volume: number, loop?: boolean) {
        const audio = this.getUrl(type, url);
        this.onPlay.next({ type, audio, volume, loop });
    }

    getUrl(type: AudioQueryType, audio: string): string {
        switch (type) {
            case 'background': {
                return `assets/audio/bgm/${audio}`;
            }
            case 'dialogue': {
                return `assets/audio/dialogue/${audio}`;
            }
            case 'sfx': {
                return `assets/audio/sfx/${audio}`;
            }
            default: {
                return audio;
            }
        }
    }
}