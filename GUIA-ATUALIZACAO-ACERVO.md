# Atualização do acervo da LANI

O acervo é alimentado pelo arquivo `dados/acervo.json`. PDFs e imagens são enviados ao repositório GitHub em pastas organizadas.

## Enviar um arquivo
1. Abra o repositório e entre em `arquivos/capacitacoes/`, `arquivos/congressos/`, `arquivos/extensao/` ou em uma pasta de imagens apropriada.
2. Use **Add file → Upload files** e envie o PDF ou imagem.
3. Faça commit e copie o caminho do arquivo.
4. Edite `dados/acervo.json` e acrescente o registro na lista correspondente.

## Exemplos de registros JSON
Capacitação: `{"title":"Aula sobre meningites","date":"2026-11-24","speaker":"Nome do professor","category":"Aula","pdf":"arquivos/capacitacoes/aula.pdf"}`

Congresso: `{"title":"Título do trabalho","authors":"Autores","event":"Congresso","year":"2026","type":"Resumo apresentado","image":"imagens/congressos/banner.png","pdf":"arquivos/congressos/resumo.pdf","url":"https://doi.org/..."}`

Livro: `{"title":"Título","authors":"Autores","edition":"4ª edição","year":"2024","area":"Neurologia","description":"Breve descrição","cover":"imagens/livros/capa.jpg","url":"https://site-da-editora.example"}`

Extensão: `{"title":"Nome da ação","date":"2026-11-24","location":"Local","institutions":"Instituições parceiras","description":"Descrição","objectives":"Objetivos","results":"Resultados","images":["imagens/extensao/acao.jpg"],"materials":[{"title":"Cartilha","url":"arquivos/extensao/cartilha.pdf"}]}`

Use caminhos relativos à raiz do site e links HTTPS. Não cadastre dados pessoais, certificados ou fotografias sem autorização. O acervo começa vazio intencionalmente: nenhum conteúdo foi inventado.

## Importante
O site é estático e não possui painel de upload público. A atualização é feita pelo GitHub, sem expor credenciais de edição. Após o commit, o GitHub Pages publica a mudança; aguarde alguns minutos. Preserve os arquivos existentes.
