const API = "http://localhost:3000/";

async function CarregaUsu() {
    response = await fetch(`${API}users`);
    usuarios = await response.json();

    console.log(usuarios);
}

CarregaUsu()