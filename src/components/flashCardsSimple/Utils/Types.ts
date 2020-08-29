export interface languageGroups {
    chinese: string;
    pinyin: string;
    english: string;
}

export type cardGroups = {
    type: string,
    items: languageGroups[],
}