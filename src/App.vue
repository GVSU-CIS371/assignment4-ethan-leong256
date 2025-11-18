<template>
  <div>
    <Beverage :isIced="store.currentTemp === 'Cold'" :base="store.currentBase" :cream="store.currentCreamer" :syrup="store.currentSyrup"/>
    <!-- set default drink combo -->
    <ul>
      <li>
        <template v-for="temp in store.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="store.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in store.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base.id}`"
              :value="base"
              v-model="store.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="cream in store.creamers" :key="cream.id">
          <label>
            <input
              type="radio"
              name="cream"
              :id="`r${cream.id}`"
              :value="cream"
              v-model="store.currentCreamer"
              />
              {{ cream.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in store.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup.id}`"
              :value="syrup"
              v-model="store.currentSyrup"
              />
              {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <div style="margin-top: 20px;">
      <label >
        Name:
        <input
          type="text"
          v-model="store.beverageName"
          placeholder="Enter Beverage Name"
        />
      </label>
      <button @click="store.makeBeverage()">Make Beverage</button>
    </div>
    <div>
      <h3>Saved Beverages</h3>
      <div v-if="store.beverage.length > 0">
        <template v-for="bev in store.beverage" :key="bev.id">
          <label style="display: block; margin-bottom: 5px">
            <input
              type="radio"
              name="savedBeverage"
              :value="bev.id"
              @change="store.showBeverage(bev.id)"
              :checked="store.selectedBeverage?.id === bev.id"
              v-model="store.selectedBeverage"
            />
            {{ bev.name }}
          </label>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const store = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>