if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("ServiceWorker.js").then(registration => {
        console.log("SW Registered!");
    }).catch(error => {
        console.log("SW Registration Failed");
    });
} else {
    console.log("Not supported");
}