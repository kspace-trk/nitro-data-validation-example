<script setup lang="ts">
const getResult = await $fetch('/api', {
  query: {
    name: 'keigo',
  },
});

const postResult = await $fetch('/api', {
  method: 'POST',
  body: {
    name: 'keigo',
  },
});

const routeParamResult = await $fetch('/api/keigo');

</script>

<template>
  <div>
    <div>
      <p>GET結果: {{ getResult.message }}</p>
    </div>
    <div>
      <p>POST結果: {{ postResult.message }}</p>
    </div>
    <div>
      <p>ルートパラメータGET結果: {{ routeParamResult.message }}</p>
    </div>
  </div>
</template>
