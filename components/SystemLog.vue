<template>
  <div class="system-log font-mono text-[10px] leading-relaxed bg-black/60 border border-white/5 rounded-md p-4 w-full">
    <div class="flex items-center gap-2 mb-3 border-b border-white/10 pb-2 opacity-50 uppercase tracking-widest">
      <span class="text-blue-400">System_Log</span>
      <span>//</span>
      <span>Neural_Sync</span>
    </div>
    <div class="space-y-2">
      <div v-for="(item, index) in logs" :key="index" class="flex gap-4">
        <span class="text-blue-400 shrink-0">{{ item.time }}</span>
        <span class="text-slate-300">{{ item.msg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logs: {
    type: Array,
    default: () => [
      { time: '08:42', msg: 'Heart rate elevated. Suggesting deep breathing.' },
      { time: '09:15', msg: 'Meeting approaching. Muting notifications.' },
      { time: '12:30', msg: 'Location: Cafe. Enhancing voice isolation.' }
    ]
  }
})
</script>
