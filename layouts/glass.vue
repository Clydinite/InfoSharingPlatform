<template>
  <div class="slidev-layout glass h-full w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 flex flex-col justify-center items-center relative overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute top-[-10%] left-[-10%] w-80 h-80 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
    
    <!-- Main Content Card -->
    <div class="glass-card w-full h-full p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl flex flex-col relative z-10 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

:deep(h1) {
  @apply text-5xl font-bold mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent;
}

:deep(h2) {
  @apply text-3xl font-semibold mb-6 text-purple-300;
}

:deep(p), :deep(li) {
  @apply text-lg text-slate-200 leading-relaxed;
}

:deep(ul) {
  @apply list-disc list-inside space-y-2;
}

:deep(strong) {
  @apply text-white font-bold;
}
</style>
