export {};

type DetaileProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetaileProfile, "name" | "weight">;
type Smallprofile = Omit<DetaileProfile, "height">;

// Omitの定義を分解して当てはめる
type MyOmit = Pick<DetaileProfile, "name" | "weight">;
type MySmallProfile = MyOmit;
