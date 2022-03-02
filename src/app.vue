<template>
  <div>
    <p class="greeting">{{ greeting }}</p>
    <div class="drink" @click="handleDrink">Click to drink</div>
    <el-button type="primary" size="default" @click="handleDrink">Click to drink</el-button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  },
  methods: {
    handleDrink() {
      console.log('drink!');
      alert('Vodka!?!?!?!');
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