export interface LanguageGroups {
    chinese: string;
    pinyin: string;
    english: string;
}

export type CardGroups = {
    type: string,
    items: LanguageGroups[],
}

export enum DefaultLanguageEnum {
        Chinese = "CHINESE",
        English = "ENGLISH",
}


