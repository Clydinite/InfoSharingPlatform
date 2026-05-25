<template>
  <div class="slidev-layout aura-log h-full w-full bg-[#050505] text-white p-16 relative overflow-hidden grid grid-cols-2 gap-12 items-start">
    <div class="relative z-10 flex flex-col justify-center h-full">
      <slot name="default" />
    </div>
    <div class="relative z-10 flex flex-col justify-center h-full">
      <slot name="log" />
      <!-- Small specs at the bottom of the right column if needed -->
      <div class="mt-8 space-y-4">
        <slot name="specs" />
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  @apply text-6xl font-black tracking-tighter mb-6 leading-tight uppercase;
}

:deep(h2) {
  @apply text-3xl font-bold tracking-tight mb-4 text-blue-400;
}

:deep(p) {
  @apply text-base text-slate-400 leading-relaxed mb-6;
}

:deep(ul) {
  @apply space-y-3;
}

:deep(li) {
  @apply flex items-center gap-3 text-blue-400 font-mono text-sm font-bold uppercase tracking-wider;
}

:deep(li::before) {
  content: "•";
  @apply text-blue-500 text-xl;
}
</style>
