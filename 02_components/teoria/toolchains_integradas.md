# Toolchains Integradas

## **O que é Toolchain integrada**

É uma coleção de ferramentas que operam em conjunto, porém como uma unidade integrada, a fim de projetar, construir, testar, gerenciar, medir e operar software e sistemas.

Basicamente é um conjunto que inclui as ferramentas e a tecnologia que possibilitam que as equipas de desenvolvimento (dev's) e operações (Dev Ops) colaborem em todo o ciclo de vida do software.

### **Quando precisamos de uma Toolchain**

- Escalar para muitos arquivos e componentes.
- Usar bibliotecas de terceiros através do npm.
- Detectar erros comuns cedo.
- Edição em tempo real de CSS e JS em desenvolvimento.
- Otimizar a saída para produção

Pode não ser necessario a utilização com uma toolchain nos nossos projetos contudo se estamos a desenvolver um projeto de raiz esta toolchain acresenta um valor significativo porque nos permite acceder a um conjunto de ferramentas que de outra forma não seria possivel.

## **Toolchain recomendadas em REACT**

- Single-page app's: `Create React App` (Não recomendo) || `Vite`
- Aplicações com renderização em servidor (SSR): `Next.js` || `Remix`.
- Site estáticos orientado a conteúdo: `Gatsby` || `Astro`.

## **Single Page App's**

Vamos então ver como podemos iniciarmos o desenvolvimento com recursos a Toolchains

### **CRA - Create React App**

Uma das primeira build tools existentes em React, veio facilitar imenso a forma como desenvolvemos aplicações em React

**Requisitos:**

- Node >= 14.0.0
- NPM >= 5.6 ou YARN

[Download de NodeJS](https://nodejs.org/en/)

Criação de um projeto novo, executar no terminal:

```sh
npx create-react-app my-app
cd my-app
npm start
```

**Documentação**  
[CRA Docs](https://create-react-app.dev/docs/getting-started/)

### **Vite**

Vite é uma build tool que procura criar uma ponte entre o desenvolvimento atual de aplicações e o futuro do desenvolvimento web.

Foca-se em em providenciar uma experiencia mais performatica e rapida para os desenvolvedores de projetos web.

```sh
npm create vite@latest
# OU
yarn create vite
```

**Documentação**  
[Vite Docs](https://vitejs.dev/guide/)
