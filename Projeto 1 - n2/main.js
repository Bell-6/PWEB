
window.onload = function () {
  const horario = new Date();
  const hora = horario.getHours();
  const bomx = document.getElementById("bomx");

  if (bomx) {
    if (hora >= 0 && hora < 12) {
      bomx.innerHTML = `<p>Bom dia, <strong>Emerson</strong> 💣</p>`;
    } else if (hora >= 12 && hora < 18) {
      bomx.innerHTML = `<p>Boa tarde, <strong>Emerson</strong> 💣</p>`;
    } else {
      bomx.innerHTML = `<p>Boa noite, <strong>Emerson</strong> 💣</p>`;
    }
  }
};

const tasks = [];
const section = document.getElementById("mainBox");
const contadorArea = document.getElementById("tarefasContador");
let vazio = document.getElementById("vazio");
const nomeTarefa = document.getElementById("nomeTarefa");
const botaoAdicionar = document.querySelector(".opcion button");

if (botaoAdicionar && nomeTarefa) {
  botaoAdicionar.addEventListener("click", function (e) {
    e.preventDefault();

    const nome = nomeTarefa.value.trim();
    if (nome === "") {
      alert("Digite o nome da tarefa!");
      return;
    }

    adicionarTarefa(nome);
    nomeTarefa.value = "";
  });
}

function adicionarTarefa(nome) {
  const horario = new Date();
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const data = `${horario.getDate()} de ${meses[horario.getMonth()]} de ${horario.getFullYear()}`;

  const task = { nome, data, done: false };
  tasks.push(task);

  const vazioEl = document.getElementById("vazio");
  if (vazioEl) {
    vazioEl.remove();
  }

  atualizarContador();
  criartarefaBox(task, tasks.length - 1);
}

function atualizarContador() {
  const completas = tasks.filter((t) => t.done).length;
  let contador = document.getElementById("contador");

  if (!contador) {
    contador = document.createElement("h4");
    contador.id = "contador";
    contadorArea.appendChild(contador);
  }

  contador.innerHTML = `${completas} de ${tasks.length} <strong>concluídas</strong>`;
}

function criartarefaBox(task, index) {
  const tarefaBox = document.createElement("div");
  tarefaBox.className = "taskBox";

  const conteudoTarefa = document.createElement("div");
  conteudoTarefa.className = "taskContent";

  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "check";
  check.addEventListener("change", function () {
    tasks[index].done = this.checked;
    atualizarContador();
    atualizarEstilo(tarefaBox, index);
  });

  const tarefaText = document.createElement("div");
  tarefaText.className = "taskText";

  const h4 = document.createElement("h4");
  h4.className = "taskTitle";
  h4.textContent = task.nome;

  const p = document.createElement("p");
  p.textContent = `Criado em: ${task.data}`;

  tarefaText.appendChild(h4);
  tarefaText.appendChild(p);
  conteudoTarefa.appendChild(check);
  conteudoTarefa.appendChild(tarefaText);

  const lixo = document.createElement("i");
  lixo.className = "fa-solid fa-trash fa-lg";
  lixo.style.color = "#de015d";
  lixo.style.cursor = "pointer";
  lixo.addEventListener("click", function () {
    tarefaBox.remove();
    tasks.splice(index, 1);
    atualizarContador();

    if (tasks.length === 0) {
      mostrarVazio();
    }
  });

  tarefaBox.appendChild(conteudoTarefa);
  tarefaBox.appendChild(lixo);
  section.appendChild(tarefaBox);
}

function atualizarEstilo(box, index) {
  const titulo = box.querySelector(".taskTitle");
  const p = box.querySelector("p");

  if (tasks[index].done) {
    p.textContent = `Concluída em: ${tasks[index].data}`;
    box.style.backgroundColor = "#E4FFF6";
    box.style.border = "1px solid #02AF75";
    titulo.style.color = "#02AF75";
  } else {
    p.textContent = `Criado em: ${tasks[index].data}`;
    box.style.backgroundColor = "#E4E1FF";
    box.style.border = "1px solid #7063F0";
    titulo.style.color = "#7063F0";
  }
}

function mostrarVazio() {
  const div = document.createElement("div");
  div.id = "vazio";
  div.className = "Vazio";
  div.innerHTML = `<p class='emoji'>😭</p><p>Nenhum registro encontrado</p>`;
  section.appendChild(div);

  const contador = document.getElementById("contador");
  if (contador) contador.remove();
}