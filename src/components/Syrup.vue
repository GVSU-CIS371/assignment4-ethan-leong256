<template>
  <div 
    class="syrup"
    :style="{
      backgroundColor: syrup.color
    }"
  >
  </div>
</template>

<script setup lang="ts">
import type { SyrupType } from '../types/beverage';
defineProps<{
  // defineProps declares expected props automatically 
  // handling changes to the object
  syrup: SyrupType;
}>();
</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>