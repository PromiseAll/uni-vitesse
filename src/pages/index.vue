<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode({
  attribute: "theme",
  modes: {
    // custom colors
    test: "test",
    test2: "test2"
  }
});
mode.value = "test";
const name = ref("");
</script>

<template>
  <div class="min-h-[100vh] flex-center">
    <div class="space-x-2">
      <tn-button type="primary" @click="mode = 'test'">test</tn-button>
      <tn-button type="primary" @click="mode = 'test2'">test2</tn-button>
    </div>

    <div class="text-text">我是首页</div>
    <img src="/static/logo.png" alt="" />
  </div>
</template>

<!-- <route lang="yaml">
# layout: home
</route> -->
