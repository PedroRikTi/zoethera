import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "Response status ok" });
}

export default status;

// Request (requisição) e Response (resposta) formam o mecanismo fundamental de comunicação síncrona na web, baseada no protocolo HTTP. O cliente (ex: navegador) envia uma request pedindo dados ou ações, e o servidor processa e devolve uma response, contendo o resultado (como dados JSON ou páginas HTML) e códigos de status
// Request (Requisição)Definição: É o pedido que o cliente realiza a um servidor.Anatomia: Contém o método (GET, POST, PUT, DELETE), URL, cabeçalhos (headers) e, às vezes, um corpo (body) com dados.Propósito: Especificar qual ação o cliente quer realizar (ex: buscar um usuário, salvar um produto).
// Response (Resposta)Definição: É a resposta enviada pelo servidor ao cliente após processar a request.Anatomia: Contém uma linha de status (código HTTP, ex: \(200\) para sucesso, \(404\) para não encontrado), cabeçalhos e o corpo com o conteúdo solicitado.Propósito: Informar o resultado da operação e, se aplicável, enviar os dados requisitados.
// export default é Um recurso do JavaScript ES6 usado para exportar um único valor, função ou objeto como a exportação principal de um módulo (arquivo).É muito utilizado no React para exportar componentes.
