import {
  DocumentReference,
  setDoc,
  doc,
  collection,
  addDoc,
} from "firebase/firestore";
import db from "../firebase";

const bases = [
  { "id": "b1", "name": "Black Tea", "color": "#8B4513" },
  { "id": "b2", "name": "Green Tea", "color": "#C8E6C9" },
  { "id": "b3", "name": "Coffee", "color": "#6F4E37" }
]

const creamers = [
  { "id": "c1", "name": "No Cream", "color": "transparent" },
  { "id": "c2", "name": "Milk", "color": "AliceBlue" },
  { "id": "c3", "name": "Cream", "color": "#F5F5DC" },
  { "id": "c4", "name": "Half & Half", "color": "#FFFACD" }
]

const syrups = [
  { "id": "s1", "name": "No Syrup", "color": "transparent" },
  { "id": "s2", "name": "Vanilla", "color": "#FFEFD5" },
  { "id": "s3", "name": "Caramel", "color": "#DAA520" },
  { "id": "s4", "name": "Hazelnut", "color": "#6B4423" }
]

bases.forEach(async (st: any) => {
  const stateDoc = doc(db, "states", st.id);
  await setDoc(stateDoc, { name: st.name, color: st.color });
})

creamers.forEach(async (st: any) => {
  const stateDoc = doc(db, "states", st.id);
  await setDoc(stateDoc, { name: st.name, color: st.color });
})

syrups.forEach(async (st: any) => {
  const stateDoc = doc(db, "states", st.id);
  await setDoc(stateDoc, { name: st.name, color: st.color });
})

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
  base: BaseBeverageType;
  syrup: SyrupType;
  creamer: CreamerType;
};
export type { BaseBeverageType, CreamerType, SyrupType, BeverageType};
