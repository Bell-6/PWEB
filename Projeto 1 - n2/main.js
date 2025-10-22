const agora = new Date();

window.onload = function() {
    let time = agora.getHours();

    let bomx = this.document.getElementById("bomx");

    if (time >= 0 && time <= 12) {
        bomx.innerHTML = "<p>Bom dia,  <strong>Emerson</strong>💣</p>";
    } else if (time > 12 && time < 18) {
        bomx.innerHTML = "<p>Boa tarde,  <strong>Emerson</strong>💣</p>";
    } else {
        bomx.innerHTML = "<p>Boa noite,  <strong>Emerson</strong>💣</p>";
    }
}