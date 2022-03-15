<template>
  <div class="wrapper">
    <div class="container">
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
              style="width: 100%; max-height: 400px"
              :src="alcohol.icon"
              :fit="cover">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
          </el-image>
        </div>
      </el-card>
      <el-button
        class="drink-btn"
        type="primary"
        size="default"
        @click="handleDrink"
      >
        今天喝什么 🥃
      </el-button>
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
        params: {
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

.el-divider--horizontal {
  margin: 10px 0;
}

.drink-btn {
  margin: 10px auto;
}
.greeting {
  color: lightblue;
  font-weight: bold;
}
</style>
