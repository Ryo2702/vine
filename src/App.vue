<script setup lang="ts">
import CombinedVine from './components/DecorativeVine/CombinedVine.vue'
</script>

<template><main aria-label="Animated botanical ornament"><CombinedVine /></main></template>

<style>
* { box-sizing: border-box; }
body { margin: 0; }
main { min-height: 100svh; display: grid; place-items: center; padding: clamp(12px, 4vw, 72px); }
</style>
