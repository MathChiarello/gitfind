# Projeto GitFind

## Processo para conseguir subir o projeto para o GitHub Pages

- Criei o projeto com o comando `npx create-react-app gitfind`. Por isso, o arquivo `package.json` já foi criado com os scripts necessários.
- Adicionei a propriedade `homepage` ao `package.json` com o valor `https://mathchiarello.github.io/gitfind`.
- Instalei o pacote `gh-pages` com o comando `npm install gh-pages --save-dev`.
- Adicionei os scripts `predeploy` e `deploy` ao `package.json`:
  - `predeploy`: executa o comando `npm run build` antes do deploy.
  - `deploy`: executa o comando `gh-pages -d build` para publicar o diretório `build` no GitHub Pages.
- Executei o comando `npm run deploy` para realizar o deploy do projeto.
