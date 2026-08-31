# 🎯 Desafio de Laboratório: Expandindo Aetheria

Você acabou de construir o alicerce do motor de Aetheria. Já temos a classe base `Personagem` e as classes herdeiras `Guerreiro` e `Mago`. O seu gerente de projetos pediu para você adicionar uma nova classe jogável e os primeiros monstros do jogo.

Lembre-se da regra de ouro do Polimorfismo: o motor do jogo só sabe chamar o comando genérico `atacar()`. A magia está em como cada classe vai reagir a esse comando.

---

## 🛠️ Missão 1: O Arqueiro (Herança)
A Guilda dos Caçadores abriu recrutamento. Crie a classe `Arqueiro`!

1. O `Arqueiro` **DEVE** herdar de `Personagem`.
2. Ele precisa de um atributo único: `flechas` (do tipo `number`).
3. O construtor do `Arqueiro` deve iniciar com uma quantidade fixa de flechas recebida por parâmetro. (Não esqueça do `super()`).
4. Ele deve sobrescrever (`override`) o método genérico `atacar()`:
   - Se ele tiver pelo menos 1 flecha, exiba a mensagem: *"O Arqueiro dispara uma flecha veloz! 🏹"* e diminua 1 flecha do seu estoque.
   - Se as flechas chegarem a zero, exiba: *"O Arqueiro está sem flechas e precisa recarregar! ❌"*

## 👾 Missão 2: O Monstro (Herança e Enum)
Não existe RPG sem inimigos. Vamos criar os monstros.

1. Crie a classe `Monstro` que também herda de `Personagem`.
2. Adicione uma nova opção no `enum EstadoJogador`: **ATORDOADO**.
3. No construtor do Monstro, ele não tem forca, nem mana, nem flechas. Mas ele tem algo poderoso: **Ele grita ao nascer**. Assim que a classe for instanciada, o console deve exibir automaticamente: *"UM MONSTRO ATERRORIZANTE SURGIU DAS SOMBRAS!"* (Dica: coloque isso no constructor).
4. Sobrescreva o método `atacar()` do Monstro. O ataque dele é tão poderoso que, sempre que ele atacar, ele muda o próprio `estado` para **ATORDOADO** (por ter feito muito esforço).

## 🚀 Missão 3: A Grande Batalha (Polimorfismo)
1. Instancie o seu Mago, o seu Guerreiro, um novo Arqueiro (com 2 flechas) e um Monstro.
2. Coloque TODOS eles dentro do mesmo Array (Lembre-se, o array deve ser tipado como `Personagem[]`).
3. Usando um laço de repetição (como `forEach` ou `for...of`), passe por cada membro do grupo mandando eles atacarem ao mesmo tempo!

**Desafio Bônus:** Crie um laço que faça todos atacarem 3 vezes seguidas. O que acontece com a mana do Mago e com as flechas do Arqueiro no terceiro turno?

---
*💡 Dica do Mestre: Faça testes executando o arquivo com `npx ts-node engine.ts`. Se o TypeScript gritar com uma linha sublinhada em vermelho, leia a mensagem de erro! Ele é o seu melhor amigo na caça aos bugs.*
