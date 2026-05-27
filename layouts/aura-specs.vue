<template>
  <div class="slidev-layout aura-specs h-full w-full bg-[#050505] text-white p-16 flex flex-col justify-center items-center relative overflow-hidden">
    <AuraBackground />
    
    <div class="relative z-10 text-center mb-16 max-w-2xl text-white">
      <slot name="header" />
    </div>

    <div class="relative z-10 grid grid-cols-3 gap-6 w-full text-white">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  @apply text-6xl font-black tracking-tighter mb-4 uppercase text-white;
}

:deep(p) {
  @apply text-slate-400 text-sm leading-relaxed;
}
</style>
