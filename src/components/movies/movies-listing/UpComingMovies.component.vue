<template>
  <v-container>
    <v-container>
      <v-row justify="center">
        <v-col v-for="item in data" :key="item.title" lg="2">
          <v-card class="mx-auto">
            <v-img :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path" />
            <v-card-actions >
              <v-row class="pa-2">
               <v-col md="8">
                  <p  class="d-inline-block text-truncate" style="max-width: 10em">{{ item.title }}</p>
               </v-col>
                <v-col md="4" align="center" justify="end">
                  <v-icon class="ml-2" color="yellow"> mdi-star </v-icon>
                  <span class="subheading mr-2">{{ item.vote_average }}</span>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Movies from "@/services/movies.js";
export default {
  name: "UpComingMovies",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    Movies.getUpcoming().then(
      (res) => {
        this.data = res.data.results
        console.log(res)
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>
