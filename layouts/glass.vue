<template>
  <div class="slidev-layout aura-default h-full w-full bg-[#050505] text-white p-16 flex flex-col relative overflow-hidden">
    <!-- Subtle side accent -->
    <div class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600/50 via-blue-600/10 to-transparent"></div>
    
    <div class="relative z-10">
      <slot />
    </div>

    <!-- Slide Number / Footer -->
    <div class="absolute bottom-10 right-16 flex items-center gap-4 opacity-30 font-mono text-[10px] tracking-widest uppercase">
      <span>{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</span>
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  @apply text-5xl font-black tracking-tighter mb-8 leading-tight uppercase text-white border-b border-white/10 pb-4;
}

:deep(h2) {
  @apply text-2xl font-bold tracking-tight mb-4 text-blue-400 uppercase;
}

:deep(p) {
  @apply text-base text-slate-400 leading-relaxed mb-6;
}

:deep(ul) {
  @apply space-y-4 mb-8;
}

:deep(li) {
  @apply text-slate-200 flex items-start gap-3;
}

:deep(li strong) {
  @apply text-blue-400 font-bold block mb-1 uppercase text-sm tracking-wide;
}

:deep(blockquote) {
  @apply border-l-2 border-blue-500 pl-6 py-2 italic text-slate-300 bg-blue-500/5;
}
</style>
