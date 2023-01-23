// Base API path
export let basePath;
export let cloudDomain;
cloudDomain = "blackbird-osint.herokuapp.com";
if (window.location.hostname == cloudDomain) {
  basePath = "https://" + cloudDomain + "/";
}else{
  basePath = window.location.protocol + "://" +
             window.location.host + ":" + "/";
}
