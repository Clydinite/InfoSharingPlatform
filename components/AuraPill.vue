<template>
  <div 
    class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0a0a0a]/60 border border-white/5 backdrop-blur-md shadow-2xl transition-all hover:bg-black/80 hover:border-white/10"
  >
    <div 
      class="w-2 h-2 rounded-full animate-pulse" 
      :class="dotClasses"
    ></div>
    <span class="font-mono text-[10px] font-medium tracking-[0.05em] text-slate-200">
      <slot />
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    default: 'active' // 'active' (green), 'info' (blue), 'warning' (pink)
  }
})

const dotClasses = computed(() => {
  switch (props.status) {
    case 'info':
      return 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.4)]'
    case 'warning':
      return 'bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.4)]'
    case 'active':
    default:
      return 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]'
  }
})
</script>

<style scoped>
div {
  box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.5);
}
</style>
