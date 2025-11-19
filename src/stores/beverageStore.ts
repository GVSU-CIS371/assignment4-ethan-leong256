import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import db from "../firebase.ts";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  onSnapshot,
} from "firebase/firestore";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
  }),

  actions: {
    async init() {
      const baseSnapShot = await getDocs(collection(db, "bases"));
      this.bases = baseSnapShot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          color: data.color
        } as BaseBeverageType;
      });
      this.currentBase = this.bases[0] || null;

      const creamSnapShot = await getDocs(collection(db, "creamers"));
      this.creamers = creamSnapShot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          color: data.color
        } as CreamerType;
      });

      const syrupSnapShot = await getDocs(collection(db, "syrups"));
      this.syrups = syrupSnapShot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          color: data.color
        } as SyrupType;
      });
    },
    makeBeverage() {},

    showBeverage() {},
  },
});