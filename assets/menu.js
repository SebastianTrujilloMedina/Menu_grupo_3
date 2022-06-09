var url = new URL(window.location);

var params = new URLSearchParams(url.search);
console.log(params.get("menus.html"));