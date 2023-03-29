<template>
  <div class="loader-wrap" v-if="isShowLoader">
    <b-spinner type="grow" variant="light" label=""></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageLoader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
