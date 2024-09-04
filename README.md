# Tarefas-plus

<!-- 1405x425 -->

![Foto de Capa](./public/assets/capa-projeto.png)

## Sumário

- [\[Tarefas plus\]](#Tarefas-plus)
  - [Sumário](#sumário)
  - [Introdução](#introdução)
  - [Tecnologias Usadas](#tecnologias-usadas)
  - [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
  - [Informações Técnicas](#informações-técnicas)
  - [Snapshots](#snapshots)
  - [Como Executar o Projeto](#como-executar-o-projeto)
  - [Contato](#contato)

## Introdução

Este é um projeto de um sistema de tarefas, com o diferencial de compartilhas suas tarefas com outras pessoas e que elas possam fazer comentários. O foco principal deste projeto é o uso da tecnologia Next.js e entender com funciona Client-Side Rendering (CSR), Server-Side Renderign (SSR) e Static Site Generation (SSG).

## Tecnologias Usadas

![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)&nbsp;
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;

## Ambiente de desenvolvimento

- Virtual Studio Code - Version 1.92.1
- GitHub Desktop - Version 3.4.3
- Node.js - Version 20.17.2

## Informações técnicas

- Utilizado Next.js;
- Utilizado TypeScript;
- Utilizado regras e padrões do Prettier;
- Para criação das tarefas foi usado o [Firebase](https://firebase.google.com/?hl=pt);
- Utilizado a biblioteca [NextAuth](https://next-auth.js.org) para sessão do usuário.

## Snapshots

### Tela Home

**Obs**: Nesta tela foi utilzado o conceito de Static Site Generation (SSG) para informar a quantidade geral de posts e comentários a cada 60 segundos.

<img src="./public/assets/screenshots/home.jpeg" alt="Tela home" width="500" />

### Tela Login

<img src="./public/assets/screenshots/login.jpeg" alt="Tela Login Google" width="500" />

### Tela Terefas

<img src="./public/assets/screenshots/tarefas.png" alt="Tela tarefas" width="500" />

### Tela Comentários

**Obs**: Nesta tela foi utilzado o conceito de Server-Side Renderign (SSR) para carregar as informações do post ao entrar página.

<img src="./public/assets/screenshots/comentários.png" alt="Tela Home editando post" width="500" />

## Como Executar o Projeto

Para executar o projeto em uma ambiente de desenvolvimento siga as instruções:

1. Clone o repositório:

```bash
git clone https://github.com/LucasDoGit/tarefas-plus
cd tarefas-plus
```

2. Instale as dependências:

```bash
npm install
```

3. Crie ou utilize um projeto no firebase com o **Firebase Database**, então copie o acesso ao seu firebase:

<img src="./public/assets/screenshots/connection-firebase.png" alt="Chaves de acesso Firebase" width="500" />

4. Crie e configure Chaves de API para autenticação com o Google, seguindo a biblioteca do [NextAuth](https://next-auth.js.org/getting-started/introduction)

<img src="./public/assets/screenshots/chave-api-google.png" alt="Chaves de acesso Google" width="500" />

5. Cole as chaves de acesso no arquivo **.env** localizado na raiz do projeto:

<img src="./public/assets/screenshots/env-config.png" alt="Arquivo .env" width="500" />

6. As configuração das variaveis **NEXTAUTH_URL** e **NEXT_PUBLIC_URL** dependem do ambiente que vai ser executado. Caso seja local a url deve ser utilizada "http://localhost:3000" e caso seja em um deploy a url deve ser a do seu dominio, exemplo "https://tarefas-plus-sandy.vercel.app":

<img src="./public/assets/screenshots/next-url.png">

6. use o comando abaixo para iniciar o projeto e aguarde.

```bash
npm run dev
```

7. Feito! O projeto deve ser iniciado e pode ser acessado usando um navegador.

## Contato

Para obter mais informações, entre em contato comigo em:

- Email: lucas.saiz19@gmail.com
- GitHub: https://github.com/LucasDoGit
