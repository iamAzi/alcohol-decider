<template>
  <div>
    <el-container>
      <el-main>
        <div>
          <el-button type="primary" size="default" @click="handleDrink">
            Click to drink</el-button
          >
        </div>
        <div>{{ alcohol }}</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      alcohol: '',
      isLoading: false,
    };
  },
  methods: {
    handleDrink() {
      axios({
        method: 'get',
        url: '/drink',
      }).then((res) => {
        console.log(res);
        this.alcohol = res.data;
      })
    },
  },
};
</script>

<style>
.greeting {
  color: lightblue;
  font-weight: bold;
}
</style>
