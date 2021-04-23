export const LoginAPI = {
    register(registerDetails) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: registerDetails
        }

        return fetch("https://noroff-movie-catalogue.herokuapp.com/v1/users/register", requestOptions)
                .then(response => response.json())
                .then(data => data.data)
    },
    login(loginDetails) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: loginDetails
        }

        return fetch("https://noroff-movie-catalogue.herokuapp.com/v1/users/login", requestOptions)
                .then(response => response.json())
                .then(data => data.data)
    }
}