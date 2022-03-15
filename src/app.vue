<template>
  <div class="wrapper">
    <div class="container">
      <el-button
        class="drink-btn"
        type="primary"
        size="default"
        @click="handleDrink"
      >
        今天喝什么 🥃
      </el-button>
      <el-card v-if="alcohol" shadow="always" :body-style="{ padding: '20px' }">
        <div class="title">{{ alcohol.name }}</div>
        <el-divider></el-divider>
        <div class="detail">
          <div class="recipe">{{ alcohol.recipe }}</div>
          <el-divider></el-divider>
          <div class="operation">{{ alcohol.operation }}</div>
          <div class="acceesory">{{ alcohol.acceesory }}</div>
          <el-divider></el-divider>
          <el-image
              style="width: 100%; height: 400px"
              :src="alcohol.icon"
              :fit="fit"></el-image>
        </div>
      </el-card>
    </div>
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
        data: {
          curDrink: this.alcohol.name,
        },
      }).then((res) => {
        console.log(res);
        this.alcohol = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fafafa;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 2rem;
    text-align: center;
  }

  .detail {
    max-width: 100%;
    text-align: center;
    .operation {
      margin-bottom: 5px;
    }
  }
}

.drink-btn {
  margin: 0 auto 10px;
}
.greeting {
  color: lightblue;
  font-weight: bold;
}
</style>
