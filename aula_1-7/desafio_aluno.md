# ⚙️ Missão: Setup da Aetheria Engine API

**Status:** Desenvolvedor Back-End Júnior  
**Objetivo:** Baixar e instalar o Node.js, inicializar o ecossistema do projeto e configurar o TypeScript para começar a desenvolver a engine do Aetheria Online.

## 📋 Contexto
Sua máquina de laboratório possui apenas o VS Code. Para criarmos um servidor em JavaScript/TypeScript, seu sistema operacional precisa do **Node.js**. Sem ele, os comandos `node` e `npm` não existem. Sua missão inicial é instalar o motor e então configurar o projeto.

## ⚙️ Requisitos Rigorosos (Setup)
1. **Instalação do Node.js:**
   - Acesse o site oficial: `nodejs.org`.
   - Baixe a versão **LTS (Long Term Support)**. É a mais estável para produção.
   - Instale com as configurações padrão.
   - Abra o terminal do VS Code (`Ctrl + '`) e valide a instalação digitando:
     `node -v`
     `npm -v`
2. **Organização do Espaço de Trabalho:**
   - Crie uma pasta principal para a SA no seu computador, chamada `aetheria-api`.
   - Abra essa pasta no VS Code.
3. **Inicialização do NPM:**
   - No terminal, inicialize o projeto usando a flag de aceitação automática (`-y`).
   - `npm init -y`
   - Verifique se o arquivo `package.json` apareceu na sua pasta.
4. **Instalação do TypeScript:**
   - Instale as seguintes dependências em modo de desenvolvimento (`--save-dev`):
     `npm install typescript tsx @types/node --save-dev`
5. **Configuração do Compilador (TSConfig):**
   - Gere o arquivo de configuração do compilador:
     `npx tsc --init`
6. **Primeiro Script:**
   - Crie uma pasta chamada `src` e dentro dela um arquivo `index.ts`.
   - Insira um `console.log` informando o nome do seu grupo e rode usando `npx tsx src/index.ts`.

## 💡 Dica de Engenharia (Autogestão)
Nunca versione a pasta `node_modules` no Git. Ela guarda os arquivos baixados pelo `npm install` e é muito pesada!

**🔗 Documentação útil:** 
- [Download Node.js](https://nodejs.org/)
- [Sobre o package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
