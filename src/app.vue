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
            Click to drink 🍺 🍷 🍸 🍹 🍾 🍶 🍼 🥂 🥃 🧋
          </el-button>
          <el-card shadow="always" :body-style="{ padding: '20px' }">
            <div slot="header">
              <span>{{ alcohol.name }}</span>
            </div>
            <div class="detail">
              <div>{{ alcohol.recipe }}</div>
              <div>{{ alcohol.operation }}</div>
              <div>{{ alcohol.acceesory }}</div>
              <img :src="alcohol.icon" >
            </div>
          </el-card>
          
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      alcohol: "",
      isLoading: false,
    };
  },
  methods: {
    handleDrink() {
      axios({
        method: "get",
        url: "/drink",
      }).then((res) => {
        console.log(res);
        this.alcohol = res.data;
        this.$message({
          message: `今天喝${this.alcohol.name}`,
          type: "success",
        });
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
}

.drink-btn {
  margin-bottom: 10px;
}
.greeting {
  color: lightblue;
  font-weight: bold;
}
</style>
