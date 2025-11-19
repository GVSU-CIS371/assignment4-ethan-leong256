<template>
  <div>
    <Beverage 
      v-if="beverageStore.currentBase && beverageStore.currentCreamer && beverageStore.currentSyrup"
      :isIced="beverageStore.currentTemp === 'cold'"
      :base="beverageStore.currentBase"
      :cream="beverageStore.currentCreamer"
      :syrup="beverageStore.currentSyrup"
    />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="b in beverageStore.bases" :key="b.id">
          <label>
            <input
              type="radio"
              name="bases"
              :id="`r${b.id}`"
              :value="b"
              v-model="beverageStore.currentBase"
            />
            {{ b.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="s in beverageStore.syrups" :key="s.id">
          <label>
            <input
              type="radio"
              name="syrups"
              :id="`r${s.id}`"
              :value="s"
              v-model="beverageStore.currentSyrup"
            />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="c in beverageStore.creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamers"
              :id="`r${c.id}`"
              :value="c"
              v-model="beverageStore.currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" v-model="beverageStore.currentName" placeholder="Beverage Name" />
    <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>
  </div>
  <div v-for="bev in beverageStore.beverages" :key="bev.id" id="beverage-container" style="margin-top: 20px">
    <label>
      <input 
      type="radio"
      name="beverages"
      :id="bev.id"
      :value="bev"
      v-model="beverageStore.currentBeverage"
      @change="beverageStore.showBeverage(bev)"
      />
      {{ bev.name }}
    </label>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { onMounted } from "vue";
const beverageStore = useBeverageStore();
onMounted(async () => {
  await beverageStore.init();
  await beverageStore.fetchBeverage();
})
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