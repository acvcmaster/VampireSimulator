export class DialogueScreenModel {
    index: number;
    message: string;
    timings?: number[];
    image: string;
    background: string;
    options: { message: string, index: number, badEnd?: boolean }[];
}
