export enum LanguageCode {
  EN = "EN",
  FR = "FR",
  KR = "KR",
  ES = "ES",
  DE = "DE",
  IT = "IT",
  JA = "JA",
  ZH = "ZH",
  RU = "RU",
  AR = "AR",
}

export enum LanguageName {
  English = "English",
  French = "French",
  Korean = "Korean",
  Spanish = "Spanish",
  German = "German",
  Italian = "Italian",
  Japanese = "Japanese",
  Chinese = "Chinese",
  Russian = "Russian",
  Arabic = "Arabic",
}

export type Language = {
  name: LanguageName;
  code: LanguageCode;
  createdAt: Date;
  lastUpdatedAt: Date;
};
