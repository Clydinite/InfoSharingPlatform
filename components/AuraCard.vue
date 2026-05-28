<template>
  <div 
    class="tech-card bg-black/40 backdrop-blur-md border border-white/5 rounded-lg p-6 shadow-2xl relative overflow-hidden group transition-all"
    :class="$attrs.class"
  >
    <!-- Subtle glow effect on hover -->
    <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    
    <!-- Micro Corner Accents -->
    <div class="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/10 group-hover:border-blue-400/50 transition-colors"></div>
    <div class="absolute top-0 right-0 w-1 h-1 border-t border-r border-white/10 group-hover:border-blue-400/50 transition-colors"></div>
    <div class="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white/10 group-hover:border-blue-400/50 transition-colors"></div>
    <div class="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/10 group-hover:border-blue-400/50 transition-colors"></div>

    <slot />
  </div>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style scoped>
.tech-card {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}
</style>
