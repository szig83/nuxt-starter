<template>
	<div>{{ mouse.x }} , {{ mouse.y }}</div>
</template>

<script setup>
const mouse = ref(useMouse());

//const y = 23 / 0;

//console.log(y);
</script>
