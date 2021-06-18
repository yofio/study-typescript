export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "aaa",
  age: 133,
};

me.age++;

console.log(me);

type PersonalDatetype = Readonly<Profile>;

const friend: PersonalDatetype = {
  name: "aaa",
  age: 121,
};

// friend.age++;

type YomitoriSenyou<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyou<Profile>;
