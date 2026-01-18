function criarTarefa() {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push({
    nome: novaTarefa.value,
    prio: prioridade.value
  });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  alert("Tarefa criada");
}

function criarEvento() {
  const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
  eventos.push(novoEvento.value);
  localStorage.setItem("eventos", JSON.stringify(eventos));
  alert("Evento criado");
}
