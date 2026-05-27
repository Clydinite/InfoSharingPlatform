<template>
  <div class="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="150" stroke="white" stroke-width="0.5" stroke-dasharray="2 4" />
      <circle cx="200" cy="200" r="100" stroke="white" stroke-width="0.5" stroke-dasharray="4 8" />
      <circle cx="200" cy="200" r="198" stroke="white" stroke-width="0.2" />
      
      <!-- Connecting dots -->
      <line x1="200" y1="50" x2="200" y2="350" stroke="white" stroke-width="0.2" />
      <line x1="50" y1="200" x2="350" y2="200" stroke="white" stroke-width="0.2" />
      
      <circle cx="200" cy="50" r="2" fill="white" />
      <circle cx="200" cy="350" r="2" fill="white" />
      <circle cx="50" cy="200" r="2" fill="white" />
      <circle cx="350" cy="200" r="2" fill="white" />
    </svg>
  </div>
</template>
