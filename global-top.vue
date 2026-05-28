<template>
  <div v-if="$nav.currentLayout !== 'aura-hero'"
    class="absolute bottom-4 right-5 flex items-center gap-4 opacity-30 font-mono text-[10px] tracking-widest uppercase text-white">
    <span>{{ $slidev.nav.currentPage }}</span>
  </div>
</template>
