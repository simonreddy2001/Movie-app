<template>
  <div>
      <button @click="onProfileClick" >Go to Profile</button>
      <input @input="onSearchChange" type="text">
      <h3>Movies</h3>
      <ul>
        <Movie v-for="movie in searchedMovies" :movie="movie" :key="movie.id" />
      </ul>
  </div>
          
</template>

<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
import Movie from "@/components/Movie/Movie"


export default {
    name: 'Movies',
    components: { Movie } ,
    methods: {
      ...mapActions([ 'fetchMovies' ]),
      ...mapMutations([ 'setSearchText' ]),
      onSearchChange(event) {
        this.setSearchText(event.target.value.trim())
      },
      onProfileClick() {
        this.$router.push('/profile')
      }
    },
    computed: {
      ...mapGetters([ 'searchedMovies' ])
    },
    created() {
      this.fetchMovies()
    }
}
</script>

<style scoped>

</style>