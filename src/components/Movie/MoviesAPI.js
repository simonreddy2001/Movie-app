export const MoviesAPI = {
    fetchMovies() {
        return fetch("https://noroff-movie-catalogue.herokuapp.com/v1/movies")
            .then(response => response.json())
            .then(data => data.data)
    },
    addFavourite(favourite) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(favourite)
        }
        return fetch("https://noroff-movie-catalogue.herokuapp.com/v1/users/favourites", requestOptions)
            .then(response => response.json())
    }
}