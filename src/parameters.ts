export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};
debugProfile("aaa", 33);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["aasa", 333];

debugProfile(...profile);
