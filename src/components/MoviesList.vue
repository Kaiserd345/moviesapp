<template>
  <BContainer>
    <h3 class="list__title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key"></BCol>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<style scoped>
.list__title {
  font-size: 2rem;
  margin-bottom: 30px;
}
</style>
