import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";;
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import type { BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],

    // make selections into arrays
    // set currently selected for ingredients
    bases: bases,
    currentBase: bases[0],

    creamers: creamers,
    currentCreamer: creamers[0],

    syrups: syrups,
    currentSyrup: syrups[0],

    beverageName: "", // input to name new beverage
    beverage: [] as BeverageType[], // array to store saved drinks
    selectedBeverage: null as BeverageType | null, // current displayed beverage, null if none selected
    // | null allows no value for when there is not a saved selected beverage

  }),

  actions: {
    // update selected temp
    setTemp(temp: string) {
      this.currentTemp = temp;
    },
    // update selected base
    setBase(base: string){
      this.currentBase.id = base;
    },
    setCreamer(cream: string){
      this.currentCreamer.id = cream;
    },
    setSyrup(syrup: string){
      this.currentSyrup.id = syrup;
    },
    setName(name: string){
      this.beverageName = name;
    },
    makeBeverage() { // creates new beverage based on user selection
      const newBeverage: BeverageType = {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000000)}`, // creates custom id for each saved drink
        
        // save current selections
        name: this.beverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.beverage.push(newBeverage); // add beverage to list
      this.selectedBeverage = newBeverage; // set new beverage as current beverage
      this.beverageName = ""; // reset input for next beverage
    },
    showBeverage(beverageID: string) { // sets saved beverage as current
      const selected = this.beverage.find((b) => b.id === beverageID); // find beverage by ID
      if (selected) { // if drink ID exists
        this.selectedBeverage = selected; // update current beverage
        
        // update all selections
        this.currentTemp = selected.temp;
        this.currentBase = selected.base;
        this.currentCreamer = selected.creamer;
        this.currentSyrup = selected.syrup;
      }
    },
  },
  persist: true,
});