<script setup lang="ts">
import { ref } from 'vue';

import useClarify from '@hooks/useClarifai';
import useClarifyStore from '@store/clarifai'

const imageLink = ref("")

const emits = defineEmits(['onDetectFace'])

const store = useClarifyStore()

const { detectFace } = useClarify()

async function handleSubmit() {
  try {
    const boundingBox = await detectFace(imageLink.value)

    if (boundingBox) {
      emits('onDetectFace', imageLink.value)

      store.$patch({ regions: boundingBox })
    }

    imageLink.value = ""
  } catch (err) {
    console.log("Error: ", err)
  }
}
</script>

<template>
  <section class="container">
    <h2 class="form__title">
      This magic brain will detect faces in your pictures. Give it a try.
    </h2>
    <form @submit.prevent="handleSubmit" class="form">
      <input type="text" class="form__input" placeholder="Input image url" v-model="imageLink">
      <button type="submit" class="form__submit" :disabled="!imageLink.length">detect</button>
    </form>
  </section>
</template>

<style>
.container {
  width: 80%;
  margin-block-start: 2rem;
  margin-inline: auto;
  text-align: center;
}

.form {
  display: flex;
  gap: 1rem;
}

.form__title {
  width: 100%;
  padding-block-end: 1.2rem;
}

.form__input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text);
}

.form__input:active,
.form__input:focus {
  outline: 1px solid var(--color-border-hover);
}

.form__submit {
  color: var(--color-text);
  background-color: var(--color-background-mute);
  border: 0;
  border-radius: 8px;
  text-transform: uppercase;
  display: inline-flex;
  place-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.form__submit:hover {
  background-color: var(--color-background-soft);
}

.form__submit:disabled {
  background-color: var(--color-background-soft);
  cursor: not-allowed;
}

@media only screen and (min-width: 1024px) {
  .container {
    width: 50%;
  }
}
</style>