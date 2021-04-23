<template>
  <div>
      <button @click="onMoviesClick" >Go to Movies</button>
      <h3>Favourite Movies List</h3>
      <ul v-for="movie in favouriteMoviesFiltered" :key="movie.id">
          <li>
            <p>{{movie.title}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Movies',
    methods: {
      ...mapActions([ 'fetchMovies' ]),
      onMoviesClick() {
        this.$router.push("/movies")
      }
    },
    computed: {
      ...mapGetters(['favouriteMoviesFiltered'])
    },
    created() {
      this.fetchMovies()
    }
}
</script>

<style scoped>

</style>