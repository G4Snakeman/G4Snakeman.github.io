const WHATSAPP_URL = "https://API.whatsapp.com/send?phone=34";
var form = document.querySelector("form");
var send_button = document.getElementById("send");
var phone_input = document.getElementById("phone");

form.addEventListener('submit', preventFormDefault);
send_button.addEventListener("click", sendAnonimousWhatsapp);

function sendAnonimousWhatsapp() {
    let phone_number = phone_input.value;
    let url = WHATSAPP_URL.concat(phone_number);
    window.open(url);
}

function preventFormDefault(event) {
    event.preventDefault();
}