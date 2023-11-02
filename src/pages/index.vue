<script setup lang="ts">
import logo from "@/static/logo.png";
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
    <img :src="logo" alt=""  class="w-50 h-50"/>
  </div>
</template>

<!-- <route lang="yaml">
# layout: home
</route> -->
