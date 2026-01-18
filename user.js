// PROTEÇÃO
if (!localStorage.getItem("username")) {
  location.href = "index.html";
}

// FUNÇÃO GLOBAL GARANTIDA
function openTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// EVENTOS DE TAB (SEM onclick)
document.querySelectorAll(".tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    openTab(btn.dataset.tab);
  });
});

// CRIAR TAREFA (QUALQUER USUÁRIO)
document.getElementById("btnCriarTarefaUser").addEventListener("click", () => {
  const nome = document.getElementById("novaTarefaUser").value;
  const prio = document.getElementById("prioUser").value;

  if (!nome) {
    alert("Digite a tarefa");
    return;
  }

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push({
    nome,
    prio,
    autor: localStorage.getItem("username")
  });

  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  document.getElementById("novaTarefaUser").value = "";
  carregarTarefas();
});

// LISTAR TAREFAS
function carregarTarefas() {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const div = document.getElementById("tarefas");

  div.innerHTML = "<h3>Tarefas do Clã</h3>";

  tarefas.forEach(t => {
    div.innerHTML += `<p>• ${t.nome} 
      <small>[${t.prio}] — ${t.autor}</small></p>`;
  });
}

// XP / STATS SIMPLES
document.getElementById("xp").innerHTML = "<h3>Sistema de XP</h3>";
document.getElementById("eventos").innerHTML = "<h3>Eventos</h3>";
document.getElementById("stats").innerHTML = "<h3>Estatísticas</h3>";

// INICIALIZA
carregarTarefas();
openTab("tarefas");
