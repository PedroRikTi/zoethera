test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

//A Fetch API é uma interface JavaScript nativa que permite fazer requisições HTTP de forma assíncrona para buscar dados de servidores. Ela substitui o antigo XMLHttpRequest usando um sistema moderno baseado em Promises, tornando o código de integração com APIs muito mais simples e limpo.
