if ('serviceworker' in navigator) {

  console.log("aslkdjalksjdlaksjdlkajsdlkajsd");

  navigator.serviceWorker.register("./sw.js")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}