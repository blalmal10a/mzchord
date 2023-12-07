<template>
    <div>
        <label for="inputValue">{{ label }}</label>
        <input
            type="text"
            id="inputValue"
            v-model="inputValue"

        />
        <p>Current value: {{ inputValue }}</p>
    </div>
</template>
  
<script setup>

import { onMounted, ref } from 'vue';
const label = ref('label of input')
const inputValue = ref('');

onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    inputValue.value = params.get('token');
})
</script>
  