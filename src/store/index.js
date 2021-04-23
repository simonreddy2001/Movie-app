import Vue from 'vue'
import Vuex from 'vuex'
import { LoginAPI } from "@/components/Login/LoginAPI"
import { MoviesAPI } from "@/components/Movie/MoviesAPI"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: '',
        password: '',
        profile: {},
        movies: [],
        searchText: '',
        error: ''
    },
    mutations: {
        setProfile: (state, payload) => {
            state.profile = payload
        },
        setMovies: (state, payload) => {
            state.movies = payload
        },
        addFavourite: (state, payload) => {
            state.profile.favourites = payload
        },
        setUsername: (state, payload) => {
            state.username = payload
        },
        setPassword: (state, payload) => {
            state.password = payload
        },
        setSearchText: (state, payload) => {
            state.searchText = payload
        },
        setError: (state, payload) => {
            state.error = payload
        }

    },
    getters: {
        searchedMovies: state => {
            if (state.searchText !== '')
                return [...state.movies.filter(x => x.title.includes(state.searchText))];
            return state.movies;
        },
        favouriteMoviesFiltered: state => {
            const filteredFavourites = [...state.movies.filter(({id}) => state.profile.favourites.includes(id))]
            return filteredFavourites;
        }
    },
    actions: {
        async loginUser({ state, commit }) {
            try {
                const loginDetails = JSON.stringify({
                    user: {
                        username: state.username,
                        password: state.password
                    }
                })

                const user = await LoginAPI.login(loginDetails)

                if (user) {
                    commit('setProfile', user)
                } else {
                    commit('setError', 'User was not found')
                }
            } catch (e) {
                commit('setError', e.message)
            }
        },
        async registerUser({ state, commit }) {
            try {
                const registerDetails = JSON.stringify({
                    user: {
                        username: state.username,
                        password: state.password
                    }
                })

                const user = await LoginAPI.register(registerDetails)

                if (user) {
                    commit('setProfile', user)
                } else {
                    commit('setError', 'User could not be registered')
                }
            } catch (e) {
                commit('setError', e.message)
            }
        },
        async fetchMovies({ commit }) {
            try {
                const movies = await MoviesAPI.fetchMovies()
                commit('setMovies', movies)
            } catch (e) {
                commit('setError', e.message)
            }
        },
        async addFavourite({ commit, state}, payload) {
            const { profile } = state
            try {
                const favourite = {
                    movieId: payload,
                    userId: profile.id
                }
                const newFavourites = await MoviesAPI.addFavourite(favourite)
                commit('addFavourite', newFavourites)
            } catch (e) {
                commit('setError', e.message)
            }
            
            
            
        }
    }
})
