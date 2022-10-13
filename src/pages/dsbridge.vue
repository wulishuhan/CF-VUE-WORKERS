<script setup lang="ts">
import { onMounted } from 'vue';
// var dsBridge = require('dsbridge');
import dsBridge from 'dsbridge';
onMounted(() => {
  //同步调用
  var str = dsBridge.call('testSyn', 'testSyn');

  //异步调用
  dsBridge.call('testAsyn', 'testAsyn', function (v) {
    alert(v);
  });

  //注册 javascript API
  dsBridge.register('addValue', function (l, r) {
    return l + r;
  });
});
</script>

<template>test</template>

<style></style>
