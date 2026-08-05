# 🚀 Guia de Setup do Aluno: Preparando o Ambiente Back-End

Bem-vindo(a) ao desenvolvimento Back-End! Como você está na sua própria máquina (ou em uma máquina limpa do laboratório), precisaremos instalar o "motor" que faz o JavaScript e o TypeScript rodarem fora do navegador. Siga os passos abaixo com muita atenção!

---

## 🛠️ Passo 1: Instalando o Node.js
O Node.js é o nosso motor de execução. Sem ele, nada funciona no Back-End.

1. Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Baixe a versão **LTS (Long Term Support)**. É o botão verde grande que tem escrito "Recomendado para a maioria dos usuários".
3. Dê dois cliques no arquivo baixado e instale normalmente (Pode clicar em *Next*, aceitar os termos, *Next*, *Next*, *Install*). **Não precisa** marcar a caixa de instalar ferramentas extras (Chocolatey/Python).
4. Feche todos os terminais e o VS Code que estiverem abertos no seu PC (para ele reconhecer a instalação).

**Teste de Fogo:**
Abra o seu **VS Code**, abra um Terminal nele (Caminho: `Terminal > Novo Terminal` no menu superior) e digite:
```bash
node -v
```
Se aparecer a versão (ex: `v22.x.x` ou `v24.x.x`), sucesso! Agora digite:
```bash
npm -v
```
Se aparecer a versão do NPM, seu computador está oficialmente pronto para ser um servidor!

---

## 📁 Passo 2: Criando o Projeto (Aetheria Engine)
Agora vamos criar a pasta do nosso jogo.

1. Crie uma pasta vazia na sua Área de Trabalho (Desktop) chamada `aetheria-api`.
2. Arraste essa pasta para dentro do **VS Code** (ou abra pelo menu `File > Open Folder...`).
3. Abra o Terminal do VS Code (`Ctrl + '` ou `Terminal > Novo Terminal`).
4. Digite o comando abaixo para iniciar um projeto Node.js. Isso criará o arquivo `package.json` (A certidão de nascimento do seu projeto):
```bash
npm init -y
```

---

## 🛡️ Passo 3: Instalando o TypeScript (O nosso Escudo)
O Node.js roda JavaScript, mas nós usaremos TypeScript para evitar bugs graves de matemática. Vamos instalar o TS e o `tsx` (A ferramenta que roda o código visualmente sem precisarmos compilar tudo na mão).

1. No terminal do VS Code, digite:
```bash
npm install typescript tsx @types/node --save-dev
```
2. Após o fim da instalação, você verá que uma pasta gigantesca chamada `node_modules` apareceu. É lá que o código do TypeScript está morando!

---

## ⚙️ Passo 4: Configurando o Compilador
Nós precisamos criar o arquivo que dita as regras do TypeScript (`tsconfig.json`).

1. Digite no terminal:
```bash
npx tsc --init
```
Você verá que o arquivo `tsconfig.json` foi criado na sua lista de arquivos à esquerda.

---

## 🧑‍💻 Passo 5: Criando o seu primeiro Código
Vamos criar a estrutura básica do projeto.

1. Crie uma pasta nova no VS Code chamada `src` (Source / Fonte).
2. Dentro da pasta `src`, crie um arquivo chamado `index.ts`.
3. Escreva o seguinte código dentro do seu `index.ts`:
```typescript
let nomeDaParty: string = "Esquadrão Omega";
console.log(`🚀 O sistema do servidor está online! Bem-vindo, ${nomeDaParty}!`);
```

---

## ▶️ Passo 6: Como executar o código!
Para rodar esse código e ver a mensagem aparecer no terminal, basta usar o `tsx`.

1. Digite no terminal:
```bash
npx tsx src/index.ts
```

Se a mensagem apareceu na sua tela... **PARABÉNS!** Você acaba de configurar e rodar o seu primeiro ambiente de programação Back-End profissional! Está tudo pronto para a aula!
