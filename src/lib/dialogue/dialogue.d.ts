export type Dialogue = {
  title: TranslatedText;
  message: TranslatedText;
  scene: string;
  characters?: string[];
  sounds?: string[];
  next?: Reference;
};

export type Language = "en" | "jp";

export type TranslatedText = { [key: Language]: string };

export type Reference = Option[] | string;

export type Option = {
  message: TranslatedText;
  reference: string;
};

export function isOption(value: Reference): boolean is Option[] {
  return typeof value != "string";
}
