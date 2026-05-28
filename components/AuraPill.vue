<template>
  <div 
    class="inline-flex items-center justify-center px-6 py-2 rounded-full font-bold tracking-widest uppercase text-[10px] transition-all"
    :class="variantClasses"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'outline' // 'solid', 'outline', 'glass'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'solid':
      return 'bg-white text-black hover:bg-slate-200'
    case 'glass':
      return 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
    case 'outline':
    default:
      return 'border border-white/30 text-white hover:bg-white/5'
  }
})
</script>
