/*const request = require("request-promise-core");

*/

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills course.",
    },
    json: true,
};
async function getJoke() {
    const res = fetch("https://icanhazdadjoke.com/", options)
        .then((res) => res.json())
        .then((data) => console.log(data.joke))
        .catch((err) => console.error(err));
    return res.joke;
}

module.exports = getJoke;