<script setup lang="ts">
import { ref } from 'vue';

import NavBar from './components/NavBar.vue';
import UserRank from './components/UserRank.vue'
import ImageLinkForm from './components/ImageLinkForm.vue'
import FaceRecognition from './components/FaceRecognition.vue';

const imageLink = ref("")

function handleDetectFace(url: string) {
  imageLink.value = url
}
</script>

<template>
  <div class="wrapper">
    <NavBar />
    <main>
      <UserRank user="Abolfaz" :rank="5" />
      <ImageLinkForm @on-detect-face="handleDetectFace" />
      <FaceRecognition :image-link="imageLink" v-if="imageLink" />
    </main>
  </div>
</template>
