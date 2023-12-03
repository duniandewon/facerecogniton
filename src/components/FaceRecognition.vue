<script setup lang="ts">
import { ref, watchEffect } from 'vue';

import useClarifyStore from '@store/clarifai'

import type { Box } from '@/types/clarifai';

defineProps<{ imageLink: string }>()

const store = useClarifyStore()

const image = ref<HTMLImageElement | null>(null)

const boxes = ref<Box[]>()

watchEffect(() => {
  if (image.value) {
    boxes.value = store.calculateFaceLocations(image.value.width, image.value.height)
    console.log("boxes", boxes.value)
  }
})
</script>
<template>
  <section class="image">
    <img :src="imageLink" alt="" ref="image">
    <div class="bounding-box" v-for="box in boxes" :key="box.left" :style="{ ...box }">
    </div>
  </section>
</template>

<style scoped>
.image {
  width: 31.25rem;
  margin-inline: auto;
  margin-block-start: 2rem;
  position: relative;
  text-align: center;
}

.bounding-box {
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
}
</style>