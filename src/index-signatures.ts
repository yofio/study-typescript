export {};

// インデックスシグネチャーの使い方
// {[ index: typeForindex]: typeForValue}

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "aaa", underTwenty: false };
profile.name = "sasa";
profile.age = 43;
profile.nationality = "Japan";
