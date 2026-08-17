# ⚔️ Hackathon: Estruturas Vivas (Aetheria Engine)

**Status:** Desenvolvedor Back-End Sênior  
**Duração Estimada:** 4 horas  
**Objetivo:** Implementar 15 exercícios rigorosos. Você passará de meras mochilas (Arrays) para entidades vivas (Classes)!

## 📋 Instruções
Crie um arquivo `.ts` para cada nível. Teste tudo usando `npx tsx <arquivo>.ts`. O nível de abstração aqui é alto. Não pule etapas!

---

## 🟢 Nível 1: A Mochila (Arrays Simples)

**Exercício 1: Inventário Base**
Crie um array chamado `inventario` do tipo `string[]` contendo 3 itens: "Poção", "Mapa" e "Tocha". Imprima o array inteiro.

**Exercício 2: Saqueando o Baú**
Usando o `.push()`, adicione a "Espada de Ferro" e o "Escudo de Madeira" no inventário criado. Imprima apenas o último item do array usando o índice `[4]`.

**Exercício 3: O Uso do Item**
Usando o `.pop()`, remova o último item do inventário. Em seguida, descubra quantos itens restam acessando a propriedade `.length` do seu array e imprima no console.

---

## 🟡 Nível 2: A Ficha (Objetos e Interfaces)

**Exercício 4: O Contrato do Herói**
Crie uma `interface Jogador` que exija: `nome` (string), `nivel` (number) e `classe` (string).

**Exercício 5: Instanciando o Herói**
Baseado na interface acima, crie um objeto literal chamado `meuPersonagem` que respeite esse contrato (preencha seus dados reais). 

**Exercício 6: Subindo de Nível**
Acesse a propriedade `nivel` do seu objeto `meuPersonagem` (usando o ponto `.`) e some +1 a ela. Imprima: "Parabéns [nome], você avançou para o nível [nivel]!".

**Exercício 7: Rigidez do TypeScript**
Tente adicionar uma propriedade mágica chamada `voar: true` no seu objeto. Observe o erro vermelho que o TypeScript vai gerar provando que a Interface está te protegendo de erros de digitação.

---

## 🟠 Nível 3: A Horda (Array de Objetos)

**Exercício 8: O Contrato do Monstro**
Crie a `interface Inimigo` com `nome` (string) e `dano` (number).

**Exercício 9: O Bando**
Crie uma Array do tipo `Inimigo[]` contendo pelo menos 3 monstros literais formatados.

**Exercício 10: O Atirador de Elite**
Imprima no console apenas o nome e o dano do SEGUNDO monstro do seu array (lembre-se do índice [1]!).

**Exercício 11: O Ataque em Área (O Loop)**
Faça um laço de repetição (pode ser o `forEach` ou um `for` normal) que passe por todos os monstros do seu array e imprima: "O monstro [nome] rosna para você!".

---

## 🔴 Nível 4: A Fábrica (POO e Classes)

**Exercício 12: A Planta do Castelo**
Crie uma `class Arqueiro`. Ela deve ter os atributos: `nome` (string) e `flechas` (number).

**Exercício 13: O Construtor**
Dentro da classe, adicione o `constructor(nomeEscolhido: string, flechasIniciais: number)`. Lembre-se de usar `this.nome` e `this.flechas` para guardar os dados.

**Exercício 14: O Método de Ação**
Ainda dentro da classe, crie um método (função) chamado `atirar()`. Ele deve diminuir as flechas em -1 e imprimir "Flecha disparada! Restam: [flechas]". Se as flechas chegarem a zero, deve imprimir "Sem munição!".

**Exercício 15: A Guerra!**
Fora da classe, instancie (crie usando `new`) dois Arqueiros: "Legolas" com 2 flechas, e "Robin" com 5 flechas. 
Chame o método `.atirar()` do Legolas TRÊS VEZES (na terceira, ele deve avisar que ficou sem munição). O Robin não deve perder flechas. O encapsulamento está perfeito!
