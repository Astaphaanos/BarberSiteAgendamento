
// Formatar a data quando for enviar para o backend
export function formatarDataParaBackend(data) {
  const [dia, mes, ano] = data.split('/');
  return `${ano}-${mes}-${dia}`;
}