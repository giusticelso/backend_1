# ⚔️ Hackathon: Fábrica de Habilidades (Aetheria Engine)

**Status:** Desenvolvedor Back-End Júnior  
**Duração Estimada:** 4 horas  
**Objetivo:** Implementar 15 exercícios graduais focados na criação de Arrow Functions, manipulação de Callbacks e isolamento de escopo (IIFE).

## 📋 Instruções
Crie um arquivo `.ts` para cada nível (ex: `nivel1.ts`). Você DEVE usar **Arrow Functions** no código inteiro. Digite no terminal para testar: `npx tsx <nome_do_arquivo>.ts`. Lembre-se: `console.log` não substitui `return`!

---

## 🟢 Nível 1: O Aprendiz de Engenheiro (Void e Parâmetros)

**Exercício 1: A Mensagem do Sistema**
Crie uma arrow function `exibirBoasVindas` que apenas imprima: "Bem-vindo ao Aetheria Engine!". Chame a função.

**Exercício 2: Saudação Personalizada**
Crie uma arrow function `saudarJogador(nome: string)`. Imprima "Olá, [nome]!". Teste passando o seu nome.

**Exercício 3: O Botão de Pânico**
Crie `emitirAlerta`. Dentro dela, use um `for` de 1 a 3 que imprima "ALERTA DE INVASÃO!". Chame a função.

---

## 🟡 Nível 2: O Engenheiro de Sistemas (Return e Condicionais)

**Exercício 4: A Loja do Ferreiro**
Crie `calcularPreco(valorBase: number): number`. Adicione 20% de impostos ao valorBase e retorne (usando `return`) o resultado final. Guarde em uma variável de fora e imprima.

**Exercício 5: O Escudo Mágico**
Crie `isVivo(hp: number): boolean`. Se hp for maior que 0, retorne `true`. Se for menor ou igual, retorne `false`. *Dica: Use Guard Clauses!*

**Exercício 6: A Rolagem de Dados**
Crie `rolarDadoD20(): number`. (Pesquise no Google como usar o `Math.random()` do JS e adapte para retornar um número entre 1 e 20).

**Exercício 7: Cálculo de Nível (O Retorno Múltiplo)**
Crie `obterClasseFase(nivel: number): string`. 
Se nivel < 10, retorne "Iniciante".
Se nivel < 50, retorne "Intermediário".
Senão, retorne "Mestre". (Use IF e Return, tente fazer sem Else!).

---

## 🟠 Nível 3: O Arquiteto Chefe (Integração)

**Exercício 8: O Curandeiro Inteligente**
Crie `curar(hpAtual: number, pocao: number): number`.
A função soma os dois. Se passar de 100, retorne 100 (HP Máximo). Senão, retorne a soma.

**Exercício 9: Motor de Batalha: Ataque**
Crie `rolarAtaque(): number` -> Retorna um número fixo (ex: 15).

**Exercício 10: Motor de Batalha: Acerto**
Crie `verificarAcerto(ataque: number, defesaBase: number): boolean` -> Retorna true se ataque > defesa.

**Exercício 11: Orquestração do Motor**
Fora das funções criadas no Ex9 e Ex10, role o ataque, guarde na variável. Chame a `verificarAcerto` passando a variável e uma defesa de 10. Imprima se acertou ou não!

---

## 🔴 Nível 4: O Hacker do Servidor (Callbacks e IIFE)

**Exercício 12: A Callback de Morte**
Crie uma arrow function simples `jogadorMorreu() = () => { console.log("Game Over!"); }`.
Em seguida, crie `verificarVida(hp: number, callbackMorte: Function)`.
Se o HP for 0, chame a função `callbackMorte()`. Teste as duas!

**Exercício 13: O Loop de Eventos (Callback em Laço)**
Crie uma função `processarHorda(qtdMonstros: number, callbackAbate: Function)`. Dentro dela, faça um laço `for` do tamanho da horda e, a cada repetição, chame a `callbackAbate()`. A callback passada deve imprimir "Ganhou 10 XP!".

**Exercício 14: Inicialização Segura (IIFE)**
Crie uma IIFE (Immediately Invoked Function Expression).
Sintaxe: `( () => { ...código... } )();`
Lá dentro, declare uma variável de senha secreta do banco de dados e imprima "Banco inicializado".

**Exercício 15: O Isolamento Perfeito**
Modifique o Exercício 14. Tente acessar (dar um `console.log`) a variável da senha secreta do lado de FORA da IIFE. Observe o TypeScript bloqueando o seu código, comprovando que a variável está protegida e o escopo local funciona perfeitamente!
