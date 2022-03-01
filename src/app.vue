<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<style>
.greeting {
  color: lightblue;
  font-weight: bold;
}
</style>