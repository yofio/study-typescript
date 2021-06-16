export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartislType = Partial<Profile>;

type RequiredType = Required<Profile>;
