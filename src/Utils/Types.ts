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

export enum CategoryEnum {
    PERSONAL_PRON = "Personal pron",
    DEMONSTRATIVE_PRON = "Demonstrative pron",
    INTERROGATIVE_PRON = "Interrogative pron",
    NUMBERAL = "Numberal",
    QUANTIFIER = "Quantifier",
    ADVERB = "Adverb",
    CONJUNCTION = "Conjunction",
    PREPOSITION = "PREPOSITION",
    AUXILIARY = "Auxiliary",
    INTERJECTION = "Interjection",
    NOUN = "Noun",
    VERB = "Verb",
    ADJECTIVE = "Adjective",
}

export type CardType = {
    word: LanguageGroups,
    category: string,
    level: number,
}

