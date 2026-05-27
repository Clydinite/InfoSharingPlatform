<template>
  <div class="absolute inset-0 pointer-events-none overflow-hidden z-[-1]">
    <!-- Grid -->
    <div class="absolute inset-0 opacity-[0.03]" 
         style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 40px 40px;">
    </div>
    
    <!-- Large Blur Glows -->
    <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]"></div>
    
    <!-- Scanning Line -->
    <div class="scanner absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-0"></div>
  </div>
</template>

<style scoped>
.scanner {
  animation: scan 8s linear infinite;
}

@keyframes scan {
  from { transform: translateY(-100px); }
  to { transform: translateY(120vh); }
}
</style>
