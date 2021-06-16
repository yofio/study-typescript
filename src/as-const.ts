export {};

let name: string = "Atsushi";

name = "aaa";

let nickname = "aaa" as const;
// nickname = "aaaa";

let profile = {
  name: "adada",
  height: 144,
} as const;

profile.name = "qqw";
profile.height = "3343";
