// This is a hack. On my device, using the global-top.vue results in
// Error: import { default as __vite_glob_0_0 } from "../Coding/InfoSharingPlatform/D:/Coding/InfoSharingPlatform/global-top.vue"; 
// Which is a mangled path and Vite can't resolve it.

import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [
    {
      name: 'windows-path-fixer',
      enforce: 'pre',
      resolveId(source) {
        // Catch the moment Vite tries to use a string containing a misplaced drive letter
        if (source.includes('D:/') || source.includes('D:\\')) {
          const match = source.match(/(D:.*)$/)
          if (match) {
            // Clean up the slashes and return a valid absolute Windows path
            return path.normalize(match[1])
          }
        }
        return null // Let normal files resolve natively
      }
    }
  ]
})