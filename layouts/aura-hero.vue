<template>
  <div class="slidev-layout aura-hero h-full w-full bg-[#050505] text-white p-16 flex flex-col justify-center relative overflow-hidden">
    <AuraBackground />
    <AuraGlobe />
    
    <!-- Left-aligned content -->
    <div class="relative z-10 max-w-2xl">
      <div class="flex items-center gap-2 mb-6 opacity-60 font-mono text-xs uppercase tracking-[0.2em]">
        <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        Enable Audio Reactivity
      </div>
      <slot />
    </div>

    <!-- Bottom label -->
    <div class="absolute bottom-10 left-16 flex items-center gap-4 opacity-20 font-mono text-[10px] tracking-widest uppercase text-white">
      <span>© 2026 Aura Dynamics</span>
      <span class="w-1 h-1 bg-white rounded-full"></span>
      <span>Final Project</span>
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  @apply text-8xl font-black tracking-tighter mb-2 leading-[0.9] text-white uppercase;
}

:deep(h3) {
  @apply text-5xl font-black tracking-tighter mb-8 leading-[0.9] text-blue-400 uppercase;
}

:deep(p) {
  @apply text-lg text-slate-400 max-w-lg leading-relaxed mb-10;
}

:deep(.btn) {
  @apply inline-block px-8 py-3 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest mr-4 transition-transform hover:scale-105;
}

:deep(.btn-outline) {
  @apply inline-block px-8 py-3 border border-white/20 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-colors hover:bg-white/5;
}
</style>
