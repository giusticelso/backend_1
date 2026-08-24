# 💻 Laboratório Prático: Expandindo o Motor!

**Aluno:** __________________________________
**Tema:** Missões de Expansão (POO Avançada)

Durante as aulas teóricas, nós já construímos juntos o núcleo do Aetheria Engine. Seu arquivo `index.ts` já deve conter a classe base `Entidade`, o construtor usando `super()`, a proteção da vida usando `protected` e a classe `Mago` atacando com Polimorfismo.

Agora é com você! Sua missão é provar que entendeu o código expandindo o motor com novas mecânicas.

---

## 🏹 Missão 1: A Nova Vocação
O reino precisa de guerreiros que ataquem à distância.
1. Crie uma nova classe chamada `Arqueiro` que herde da classe `Entidade`.
2. O Arqueiro deve ter uma propriedade exclusiva pública chamada `flechas` (tipo number), que sempre começará com **20** no construtor.
3. Não esqueça de chamar o `super()` no construtor para passar o nome do arqueiro!
4. Sobrescreva o método `atacar()`:
   - Se o Arqueiro tiver mais que 0 flechas, ele imprime `"[NOME] disparou uma flecha veloz!"` e diminui 1 flecha do estoque.
   - Se ele não tiver flechas, imprime: `"[NOME] está sem flechas e precisa recarregar!"`

---

## 🥷 Missão 2: Nova Mecânica de Defesa
Até agora, os personagens só sabem atacar. Vamos ensinar eles a se esquivarem!
1. Vá até a classe **Pai** (`Entidade`) e adicione um método novo chamado `esquivar()`.
2. Esse método deve imprimir: `"[NOME] tentou rolar para longe do perigo."`
3. Instancie o seu Arqueiro no final do arquivo e chame o método `esquivar()`. Veja que, mesmo sem você ter escrito `esquivar()` dentro da classe Arqueiro, ele aprendeu sozinho! Por que isso aconteceu? Escreva a resposta em forma de comentário no seu código.

---

## 🎒 Missão 3: Composição (A Mochila do Aventureiro)
No Aetheria, um jogador não é apenas um monte de atributos, ele também carrega coisas. Em vez de usar herança, vamos usar Composição (Uma classe dentro da outra).
1. Crie uma classe completamente nova chamada `Inventario`.
2. Ela deve ter uma propriedade `capacidadeMaxima` (number) iniciando em 5, e uma propriedade `itens` (Array de strings) iniciando vazio `[]`.
3. Crie um método dentro do `Inventario` chamado `adicionarItem(nomeDoItem: string)`. Ele deve dar um `.push()` no item para dentro do array.
4. Agora o grande truque: Volte na classe Pai `Entidade` e adicione uma propriedade pública chamada `mochila`, sendo do tipo `Inventario`.
5. No construtor da Entidade, instancie o inventário: `this.mochila = new Inventario();`

---

## 🧪 Missão 4: Teste Final do Motor
Para tirar a nota máxima neste desafio, prove que tudo funciona em conjunto no mundo aberto:
1. Crie o arqueiro: `let legolas = new Arqueiro("Legolas");`
2. Mande-o atacar 3 vezes seguidas (as flechas devem diminuir!).
3. Mande-o se esquivar.
4. Adicione um "Arco Élfico" na mochila dele usando o comando: `legolas.mochila.adicionarItem("Arco Élfico");`
5. Imprima no `console.log` a lista de itens da mochila do Legolas.

*Rode o código usando `npx tsx index.ts` e veja a mecânica completa do motor rodando no seu terminal!*
