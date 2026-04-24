# Alura Books

Projeto React com styled-components, preparado para deploy no Vercel.

## Scripts disponíveis

### `npm start`
Inicia o projeto em desenvolvimento.

### `npm run build`
Gera a versão de produção na pasta `build`.

## Deploy no Vercel

O projeto já está configurado com:

- `vercel.json` para tratar rotas de SPA.
- `.vercelignore` para evitar envio de arquivos desnecessários.
- versão do Node definida no `package.json` para maior estabilidade no build.

### Opção 1: subir pelo site do Vercel

1. Envie o projeto para o GitHub.
2. Acesse o painel do Vercel.
3. Clique em **Add New Project**.
4. Importe o repositório.
5. O Vercel deve detectar automaticamente o projeto como React.
6. Confirme o deploy.

### Opção 2: subir pela CLI do Vercel

1. Instale a CLI:
	- `npm i -g vercel`
2. Faça login:
	- `vercel login`
3. Na raiz do projeto, execute:
	- `vercel`

Para publicar em produção:

- `vercel --prod`

## Observações

- O build foi validado com sucesso.
- Ainda existem avisos de acessibilidade sobre `alt` em imagens dentro de componentes do projeto, mas eles não impedem o deploy.
