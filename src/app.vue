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
          <br/>
          <el-tag v-if="alcohol" class="ml-2" type="success">{{
            alcohol
          }}</el-tag>
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
          message: `今天喝${this.alcohol}`,
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
