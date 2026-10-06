<script setup lang="ts">
import LeftVine from './components/DecorativeVine/LeftVine.vue'
</script>

<template><main aria-label="Animated botanical ornament"><LeftVine /></main></template>

<style>
* { box-sizing: border-box; }
body { margin: 0; background: #f8faf5; }
main { min-height: 100svh; display: grid; place-items: center; padding: clamp(12px, 4vw, 72px); }
</style>
