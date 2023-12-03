<script setup lang="ts">
import BrainIcon from './icons/BrainIcon.vue';
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <BrainIcon />
    </div>
    <ul class="nav">
      <li class="nav__item">
        <button class="nav__link">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-inline: 2rem;
  padding-block: 1rem;

  border-bottom: 1px solid var(--color-border);
}

.nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav__link {
  color: var(--color-text);
  text-decoration: none;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.nav__link:hover {
  color: var(--color-heading);
}

.logo {
  width: 1.875rem;
}
</style>