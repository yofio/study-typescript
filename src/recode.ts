export {};

// Recode<K, T>

type Prefectures = "Tokyo" | "Osaka" | "Nagoya";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 1212 },
  Osaka: { kanji_name: "大阪", confirmed_cases: 222 },
  Nagoya: { kanji_name: "名古屋", confirmed_cases: 333 },
};
