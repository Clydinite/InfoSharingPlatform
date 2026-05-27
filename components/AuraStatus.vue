<template>
  <div class="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] opacity-50">
    <div class="w-1.5 h-1.5 rounded-full" :class="active ? 'bg-blue-400 animate-pulse' : 'bg-slate-600'"></div>
    <span><slot /></span>
  </div>
</template>

<script setup>
defineProps({
  active: { type: Boolean, default: true }
})
</script>
