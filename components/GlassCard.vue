<template>
  <div class="glass-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl transition-all hover:bg-white/10 hover:border-white/20">
    <slot />
  </div>
</template>

<style scoped>
.glass-card {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
