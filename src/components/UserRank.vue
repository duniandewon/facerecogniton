<script setup lang="ts">
defineProps<{ user: string; rank: number }>()
</script>

<template>
  <section class="user-rank">
    <h1>
      <span class="user-rank__user">{{ user }}</span>, you currently rank <span class="user-rank__rank">#{{ rank }}</span>
    </h1>
  </section>
</template>

<style scoped>
.user-rank {
  margin-block-start: 2.5rem;
  text-align: center;
  color: var(--color-heading);
}
</style>