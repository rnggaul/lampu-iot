const endpoint = "http://192.168.1.20";

function getDapurLed(){
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledDapur.style.background = "#0d3775";
            dapurLedImage.src = "./assets/led-on.png"
        } else{
            ledDapur.style.background = "#1b68db";
            dapurLedImage.src = "./assets/led-off.png"
        }
    })
}
function getKamarLed(){
    fetch(endpoint + "/kamar", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledKamar.style.background = "#0d3775";
            kamarLedImage.src = "./assets/led-on.png"
        } else{
            ledKamar.style.background = "#1b68db";
            kamarLedImage.src = "./assets/led-off.png"
        }
    })
}
function getHalamanLed(){
    fetch(endpoint + "/halaman", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledHalaman.style.background = "#0d3775";
            halamanLedImage.src = "./assets/led-on.png"
        } else{
            ledHalaman.style.background = "#1b68db";
            halamanLedImage.src = "./assets/led-off.png"
        }
    })
}

function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}
function setKamarLed() {
    fetch(endpoint + "/kamar", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}
function setHalamanLed() {
    fetch(endpoint + "/halaman", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}
function setToiletLed() {
    ledToilet.style.background = "red";
    toiletLedImage.src = "./assets/led-on.png"
}

getDapurLed();
getKamarLed();
getHalamanLed();
