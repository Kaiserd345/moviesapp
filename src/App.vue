<template>
  <div id="app">
    <PageLoader />
    <NotificationComponent />
    <PosterBg :poster="posterBg" />
    <AppHeader />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";
import PageLoader from "@/components/PageLoader";
import AppHeader from "@/components/AppHeader";
import NotificationComponent from "@/components/NotificationComponent";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    PageLoader,
    AppHeader,
    NotificationComponent,
  },
  data: () => ({
    posterBg: "",
  }),
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength",
    ]),
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
      this.changeCurrentPage(page);
    },
  },
  created() {
    if (this.$route.query.page) {
      this.changeCurrentPage(Number(this.$route.query.page));
    }
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
