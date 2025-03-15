'use client'

import { useEffect } from 'react'

// This component helps defer loading of non-critical JavaScript
export default function DeferredScripts() {
  useEffect(() => {
    // Function to load non-critical scripts
    const loadNonCriticalResources = () => {
      // Load analytics or other third-party scripts here
      // Example: Load a script dynamically
      const loadScript = (src: string) => {
        const script = document.createElement('script')
        script.src = src
        script.async = true
        document.body.appendChild(script)
      }

      // Add any third-party scripts that aren't critical for initial render
      // loadScript('https://example.com/non-critical-script.js')
    }

    // Use requestIdleCallback for modern browsers or setTimeout as fallback
    if ('requestIdleCallback' in window) {
      // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
      window.requestIdleCallback(loadNonCriticalResources)
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(loadNonCriticalResources, 2000)
    }
  }, [])

  return null
} 