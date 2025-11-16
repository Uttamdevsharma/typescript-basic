interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface poorWatch {
  brand: string;
  stopwatch: boolean;
}
interface poorBike {
  brand: string;
  model: string;
}

const poorDeveloper: Developer<poorWatch, poorBike> = {
  name: "poor",
  salary: 20000,
  device: {
    brand: "NOkia",
    model: "A 31",
    releasedYear: 2050,
  },
  smartWatch: {
    brand: "S tech",
    stopwatch: true,
  },
  bike: {
    brand: "Honda",
    model: "hero",
  },
};

interface richWatch {
  brand: string;
  heartbit: boolean;
  calculator: boolean;
}
interface richBike {
  brand: string;
  model: string;
}

const richDeveloper: Developer<richWatch, richBike> = {
  name: "rich",
  salary: 300000,
  device: {
    brand: "NOkia",
    model: "A 31",
    releasedYear: 2050,
  },
  smartWatch: {
    brand: "S tech",
    heartbit: true,
    calculator: true,
  },
  bike: {
    brand: "Yamah",
    model: "xyz",
  },
};
