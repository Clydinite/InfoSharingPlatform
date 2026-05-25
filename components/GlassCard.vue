<template>
  <div class="tech-card bg-black/40 backdrop-blur-md border border-white/5 rounded-lg p-6 shadow-2xl relative overflow-hidden group">
    <!-- Subtle glow effect on hover -->
    <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <slot />
  </div>
</template>

<style scoped>
.tech-card {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}
</style>
