<template>
  <div class="slidev-layout aura-specs h-full w-full bg-[#050505] text-white p-16 flex flex-col justify-center items-center relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
    
    <div class="relative z-10 text-center mb-16 max-w-2xl">
      <slot name="header" />
    </div>

    <div class="relative z-10 grid grid-cols-3 gap-6 w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  @apply text-6xl font-black tracking-tighter mb-4 uppercase;
}

:deep(p) {
  @apply text-slate-400 text-sm leading-relaxed;
}

/* For the grid items, we expect GlassCard components or similar */
</style>
