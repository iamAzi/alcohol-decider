<template>
  <div>
    <el-container>
      <el-main>
        <div class="container">
          <el-button
            class="drink-btn"
            type="primary"
            size="default"
            @click="handleDrink"
          >
            今天喝什么 🥃
          </el-button>
          <el-card
            v-if="alcohol"
            shadow="always"
            :body-style="{ padding: '20px' }"
          >
            <div class="title">{{ alcohol.name }}</div>
            <el-divider></el-divider>
            <div class="detail">
              <div class="recipe">{{ alcohol.recipe }}</div>
              <el-divider></el-divider>
              <div class="operation">{{ alcohol.operation }}</div>
              <div class="acceesory">{{ alcohol.acceesory }}</div>
              <el-divider></el-divider>
              <div class="img-container">
                <img class="img" :src="alcohol.icon" />
              </div>
            </div>
          </el-card>
        </div>
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
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fafafa;
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
    .img-container {
      max-width: 90%;
      max-height: 250px;
      overflow: hidden;
      img {
        max-width: 100%;
        max-height: 100px;
        width: 100%;
      }
    }
  }

}

.drink-btn {
  margin-bottom: 10px;
}
.greeting {
  color: lightblue;
  font-weight: bold;
}
</style>
