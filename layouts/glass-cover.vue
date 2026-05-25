<template>
  <div class="slidev-layout glass-cover h-full w-full bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white p-10 flex flex-col justify-center items-center relative overflow-hidden">
    <!-- Animated background accents -->
    <div class="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style="animation-delay: 1s"></div>
    
    <div class="relative z-10 flex flex-col items-center text-center space-y-6">
      <div class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple-200 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
        幸福校園提案：課業議題
      </div>
      <slot />
    </div>
    
    <div class="absolute bottom-12 flex flex-col items-center opacity-50">
      <div class="text-sm font-medium tracking-widest uppercase mb-2">溫暖校園的行動力量</div>
      <div class="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
    </div>
  </div>
</template>

<style scoped>
:deep(h1) {
  @apply text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent;
  filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.3));
}

:deep(p) {
  @apply text-xl text-slate-300 max-w-2xl mx-auto;
}
</style>
