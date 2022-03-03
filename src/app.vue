<template>
  <div>
    <el-container>
      <el-main>
        <div>
          <el-button class="drink-btn" type="primary" size="default" @click="handleDrink">
            Click to drink 🍺 🍷 🍸 🍹 🍾 🍶 🍼 🥂 🥃 🧋 </el-button
          >
        </div>
        <el-tag v-if="alcohol" class="ml-2" type="success">{{ alcohol }}</el-tag>
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
        this.$message({
          message: `今天喝${this.alcohol}`,
          type: 'success',
        })
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.drink-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.greeting {
  color: lightblue;
  font-weight: bold;
}
</style>
