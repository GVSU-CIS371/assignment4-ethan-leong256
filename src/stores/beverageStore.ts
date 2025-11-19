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
      const baseSnapShot = await getDocs(collection(db, "bases")); // get all documeents in bases collection
      this.bases = baseSnapShot.docs.map(doc => { // map documents to Base array
        const data = doc.data();
        return {
          id: doc.id, // document ID as base ID
          name: data.name, // base name
          color: data.color // base color
        } as BaseBeverageType;
      });
      this.currentBase = this.bases[0]; // set first base as current

      const creamSnapShot = await getDocs(collection(db, "creamers"));
      this.creamers = creamSnapShot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          color: data.color
        } as CreamerType;
      });
      this.currentCreamer = this.creamers[0];
      const syrupSnapShot = await getDocs(collection(db, "syrups"));
      this.syrups = syrupSnapShot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          color: data.color
        } as SyrupType;
      });
      this.currentSyrup = this.syrups[0];
    },
    async makeBeverage() {  // new beverage base on selections
      const newBeverage: BeverageType = {
        id: "", // auto assign id through firestore
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temp: this.currentTemp,
        name: this.currentName,
      };

      const docRef = await addDoc(collection(db, "beverages"), newBeverage); // add new beverage to beverages collection
      newBeverage.id = docRef.id; // update new beverage with ID
      this.currentBeverage = newBeverage; // set new beverage as current

    },

    showBeverage() {},
  },
});