import { AudioQueryType } from '../audio/audio.service';

export class DialogueScreenModel {
    index: number;
    message: string;
    timings?: number[];
    image: string;
    background: string;
    audioType: AudioQueryType;
    audio: string;
    options: { message: string, index: number, badEnd?: boolean }[];
}
