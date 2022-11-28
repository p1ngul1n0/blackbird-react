// local path
export let basePath;

if (window.location.hostname == "blackbird-osint.herokuapp.com") {
  basePath = "https://blackbird-osint.herokuapp.com/";
} else {
  basePath = "http://127.0.0.1:9797/";
}
