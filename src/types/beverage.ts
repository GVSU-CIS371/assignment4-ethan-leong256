
interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}

type BeverageType = {
  id: string;
  name: string;
  temp: string;
  base: BaseBeverageType | null;
  syrup: SyrupType | null;
  creamer: CreamerType | null;
};
export type { BaseBeverageType, CreamerType, SyrupType, BeverageType};
