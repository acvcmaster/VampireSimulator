export class DialogueScreenModel {
    index: number;
    message: string;
    image: string;
    background: string;
    options: { message: string, index: number, badEnd?: boolean }[];
}
