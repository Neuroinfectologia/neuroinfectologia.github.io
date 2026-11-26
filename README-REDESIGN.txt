LANI — pacote de redesign editorial das páginas internas

Inclui a página inicial preservada com navegação atualizada, seis páginas internas, CSS editorial compartilhado e JavaScript para listar automaticamente arquivos das pastas públicas do GitHub.

Páginas: aulas-capacitacoes.html, acoes-extensao.html, imagens.html, nossos-cursos.html, orientadores-gestao.html, publicacoes-congressos.html.
Estilos e scripts: assets/lani-editorial.css e assets/lani-acervo.js.
Aliases antigos mantidos: capacitacoes.html, congressos.html, extensao.html e livros.html.

Para adicionar materiais, envie os arquivos para a pasta correspondente no repositório e faça commit na branch main. As páginas consultam recursivamente a API pública do GitHub para atualizar o acervo. O conteúdo não é fictício; pastas vazias exibem mensagem de acervo em organização.

Imagens científicas adicionadas a partir dos arquivos enviados pela responsável pelo projeto:
- assets/ressonancia-encefalite.webp: utilizada em Aulas e Capacitações, com legenda descritiva e sem alteração do conteúdo da imagem.
- assets/ilustracao-neuro.webp: utilizada na página Imagens, com legenda descritiva e sem alteração do conteúdo da imagem.

As imagens mantêm proporção e são exibidas em moldura responsiva. A imagem de RM é apresentada como material ilustrativo; a legenda não atribui diagnóstico a pacientes nem substitui interpretação radiológica.

Os arquivos de imagem estão em assets/. Para substituir ou acrescentar imagens, envie os arquivos para essa pasta e atualize o src e o texto alternativo/legenda da página correspondente. Preserve os nomes e caminhos já referenciados.
