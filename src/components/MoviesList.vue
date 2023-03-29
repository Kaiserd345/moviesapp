<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty List</div>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    MovieItem,
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
  },
};
</script>

<style scoped>
.list-title {
  padding: 2rem 0;
  font-size: 3rem;
  margin-bottom: 10px;
  color: aliceblue;
}
</style>
