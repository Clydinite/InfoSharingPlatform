<template>
  <div class="relative p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-sm">
    <!-- Corner Accents -->
    <div class="absolute top-0 left-0 w-1 h-1 border-t border-l border-blue-400/50"></div>
    <div class="absolute top-0 right-0 w-1 h-1 border-t border-r border-blue-400/50"></div>
    <div class="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-blue-400/50"></div>
    <div class="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-blue-400/50"></div>
    
    <slot />
  </div>
</template>
