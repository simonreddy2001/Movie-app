<template>
  <div>
    <li>
      <p>{{ movie.title }}</p>
      <button @click="onFavouriteClick">Favourite</button>
    </li>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Movie',
    props: [ 'movie' ],
    methods: {
      ...mapActions([ 'addFavourite' ]),
      onFavouriteClick() {
        this.addFavourite(this.movie.id);
      }
    }
}
</script>

<style scoped>

</style>