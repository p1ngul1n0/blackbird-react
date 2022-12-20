// Base API path
export let basePath;
export let cloudDomain;
cloudDomain = "blackbird-osint.herokuapp.com";
if (window.location.hostname == cloudDomain) {
  basePath = "https://" + cloudDomain + "/";
} else {
  basePath = "http://127.0.0.1:9797/";
}
