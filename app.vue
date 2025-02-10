<script setup lang="ts">
const getResult = await $fetch('/api', {
  query: {
    name: 'keigo',
    age: 25,
  },
});

const postResult = await $fetch('/api', {
  method: 'POST',
  body: {
    name: 'keigo',
    age: 25,
  },
});

const routeParamResult = await $fetch('/api/123');

</script>

<template>
  <div>
    <div>
      <p>GET結果: {{ getResult }}</p>
    </div>
    <div>
      <p>POST結果: {{ postResult.message }}</p>
    </div>
    <div>
      <p>ルートパラメータGET結果: {{ routeParamResult }}</p>
    </div>
  </div>
</template>
