# 📖 Apostila Teórica: Estruturas de Dados e POO Básica
**Módulo:** Programação Back-End (PBE-1)
**Projeto:** Aetheria Engine API

---

## 1. O Caos das Variáveis Soltas
Até agora, você aprendeu a criar Variáveis e Funções. Mas imagine criar um jogo onde o Monstro tem Vida, Dano, Defesa e Nome. Você teria que criar:
`let hpMonstro = 100; let danoMonstro = 10; let nomeMonstro = "Goblin";`
E se você tivesse 50 Goblins? Seriam 150 variáveis espalhadas! Isso é insustentável. Precisamos agrupar os dados.

---

## 2. Arrays (As Mochilas do Código)
Um **Array** (Vetor ou Lista) é uma estrutura que guarda **vários valores do mesmo tipo** em uma única variável. É perfeito para criar Mochilas (Inventários) ou Listas de Inimigos.

```typescript
// Declarando uma Array de strings (Mochila)
let inventario: string[] = ["Poção", "Espada Quebrada", "Mapa"];

// Acessando um item (O índice sempre começa no ZERO!)
console.log(inventario[0]); // Imprime: Poção

// Adicionando um novo item no final da lista (.push)
inventario.push("Chave Dourada");

// Removendo o último item (.pop)
inventario.pop();
```

---

## 3. Objetos Literais (A Ficha do Personagem)
Enquanto a Array guarda uma lista de itens repetidos, o **Objeto** guarda características diferentes de uma única entidade (como uma Ficha de RPG). Ele usa o formato de **Chave: Valor**.

```typescript
// Declarando um Objeto (Ficha do Jogador)
let jogador = {
    nome: "Arthur",
    vida: 100,
    vivo: true
};

// Acessando propriedades com um Ponto (.)
console.log(jogador.nome); // Imprime: Arthur
jogador.vida = 80; // Levou dano!
```

---

## 4. O Poder das Interfaces (O Contrato)
O problema do Objeto acima é que, no JavaScript puro, você poderia acidentalmente adicionar uma propriedade louca como `jogador.asas = "gigantes"`. 
No **TypeScript**, nós criamos um contrato rigoroso chamado **Interface**. Se um objeto diz que segue aquela interface, ele não pode ter nem uma vírgula a mais ou a menos.

```typescript
// Definindo o Contrato (Começa com Letra Maiúscula!)
interface Monstro {
    nome: string;
    dano: number;
    hp: number;
}

// Criando um objeto que ASSINA o contrato:
let bossFinal: Monstro = {
    nome: "Dragão Rei",
    dano: 50,
    hp: 1000
    // asas: true // ERRO! A interface não permite!
};
```

---

## 5. Arrays de Objetos (A Horda)
O poder real do Back-End surge quando juntamos as duas coisas: Uma Lista (Array) cheia de Fichas (Objetos). 

```typescript
let hordaInimiga: Monstro[] = [
    { nome: "Goblin 1", dano: 5, hp: 30 },
    { nome: "Goblin 2", dano: 5, hp: 30 },
    { nome: "Orc", dano: 15, hp: 80 }
];

// O primeiro monstro da lista ataca!
console.log(`O ${hordaInimiga[0].nome} atacou causando ${hordaInimiga[0].dano} de dano!`);
```

---

## 6. Introdução a Classes e POO (Programação Orientada a Objetos)
As interfaces servem apenas para tipagem (bloquear erros no código). Mas e se o monstro precisar ter uma função dentro dele (como atacar ou sofrer dano)?
Aí entra a **Classe**. A classe é o "Molde da Fábrica", e o "Objeto" é o produto final (a Instância).

```typescript
// O Molde (A Classe)
class Heroi {
    // Atributos (Características)
    nome: string;
    hp: number;

    // O Construtor (A máquina que fabrica o herói)
    constructor(nomeDoHeroi: string) {
        this.nome = nomeDoHeroi;
        this.hp = 100; // Todos nascem com 100 de hp!
    }

    // Métodos (Ações/Funções do Objeto)
    atacar() {
        console.log(`${this.nome} desferiu um golpe de espada!`);
    }
}

// Instanciando (Fabricando os objetos reais)
let guerreiro = new Heroi("Conan");
let mago = new Heroi("Gandalf");

guerreiro.atacar(); // Imprime: Conan desferiu um golpe de espada!
mago.atacar();      // Imprime: Gandalf desferiu um golpe de espada!
```
Com as classes, o seu código vira um mundo vivo, onde entidades conversam e interagem de forma encapsulada!
