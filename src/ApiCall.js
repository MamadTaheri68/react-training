const fetch = require("isomorphic-fetch");

const userDetails = response => {
    const login = response.login;
    console.log(login);
}

fetch("http://api.github.com/users/ali")
.then(res => res.json())
.then(userDetails)