<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <!-- if not no cream add top layer -->
        <Creamer v-if="cream.id !== 'c1'" :cream="cream"/>
      </template>
      <template v-slot:mid>
        <!-- if not no syrup add middle layer -->
        <Syrup v-if="syrup.id !== 's1'" :syrup="syrup" />
      </template>
      <template v-slot:bottom>
        <Base :base="base" />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import type { BaseBeverageType, CreamerType, SyrupType } from "../types/beverage";

defineProps<{
  isIced: boolean;
  base: BaseBeverageType;
  cream: CreamerType;
  syrup: SyrupType;
}>();
</script>