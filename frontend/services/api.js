import { formatarDataParaBackend } from "../public/js/utils.js";

const baseURL = "http://localhost:3000";

//* Create dos dados dos agendamentos
export async function registrarAgendamento(dados) {
  try {
    const res = await fetch(`${baseURL}/api/agendamentos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    console.log("Erro ao conectar com a API", err);
    throw new Error("Erro ao conectar com a API");
  }
}

//* Buscando horarios
export async function buscarHorarios(data) {
  const dataFormatada = formatarDataParaBackend(data);
  const res = await fetch(`${baseURL}/api/agendamentos?data=${dataFormatada}`);
  return res.json();
}

//* Buscar agendamentos usando o telefone registrado
export async function buscarTelefone(telefone) {
  try {
    const res = await fetch(`${baseURL}/api/buscartelefone`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientPhone: telefone }),
    });

    if (!res.ok) {
      throw new Error("Erro ao buscar telefone");
    }
    return await res.json();
  } catch (e) {
    console.log("Erro ao buscar telefone na API", e);
    throw e;
  }
}

//* Deletar agendamento
export async function deletarAgendamento(id) {
  if (!confirm("Tem certeza que deseja excluir este agendamento?")) return;
  
  try {
    const res = await fetch(`http://localhost:3000/api/agendamentos/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      document.getElementById(`agendamento-${id}`).remove();
      alert("Agendamento excluído com sucesso!");
    } else {
      alert("Erro ao excluir agendamento");
    }
  } catch (err) {
    console.log(`Erro na conexão com API: ${err}`);
  }
}
