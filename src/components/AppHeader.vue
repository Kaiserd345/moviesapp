<template>
  <header class="header">
    <BContainer fluid>
      <BNavbar type="dark" class="navbar" variant="dark">
        <BNavbarBrand href="#">MovieDB</BNavbarBrand>
        <BNavbarNav class="ml-auto">
          <BNavForm>
            <BFormInput
              class="mr-sm-2 search-input"
              placeholder="Search"
              v-model="searchValue"
              debounce="500"
            ></BFormInput>
          </BNavForm>
        </BNavbarNav>
      </BNavbar>
    </BContainer>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  data: () => ({
    searchValue: "",
  }),
  watch: {
    searchValue: "onSearchValueChanged",
  },
  methods: {
    ...mapActions("movies", [
      "searchMovies",
      "fetchMovies",
      "toggleSearchState",
    ]),
    onSearchValueChanged(val) {
      if (val) {
        this.searchMovies(val);
        this.toggleSearchState(true);
      } else {
        this.fetchMovies();
        this.toggleSearchState(false);
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-input {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}

.search-input:focus {
  box-shadow: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.6);
}
</style>
