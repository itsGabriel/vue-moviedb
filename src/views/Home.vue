<template>
  <UpComingMovies />
</template>

<script>
// @ is an alias to /src
import UpComingMovies from "@/components/movies/movies-listing/UpComingMovies.component.vue";

export default {
  name: "Home",
  components: {
    UpComingMovies,
  },
  mounted() {
    console.log(this)

  }
};
</script>
