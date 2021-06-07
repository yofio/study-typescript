export {};

type Picher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// intersection型
type TwoWayPlayer = Picher1 & Batter1;

const DaimajinSasaki: Picher1 = {
  throwingSpeed: 154,
};

const OtiaiHiromichu: Batter1 = {
  battingAverage: 0.367,
};

const OtaniShowhei: TwoWayPlayer = {
  throwingSpeed: 1111,
  battingAverage: 3333,
};
