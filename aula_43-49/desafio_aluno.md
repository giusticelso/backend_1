# ⚔️ Desafio de Modelagem: A Forja de Armas (Aetheria Engine)

Sua Guilda foi formada com sucesso, mas os heróis estão desarmados! Sua missão agora é modelar uma **Forja** (Loja) que vende **Armas** para os personagens guardarem em seus **Inventários**.

⚠️ **Atenção Arquiteto de Software:** Neste desafio, você **NÃO escreverá código TypeScript**. Sua missão é modelar o sistema graficamente construindo o **Diagrama de Classes (UML)** utilizando a sintaxe do **Mermaid**.

---

## 🛠️ Regras de Negócio (As Entidades)

Você deve modelar as seguintes classes (caixinhas) com seus respectivos métodos e atributos públicos (`+`):

1. **Loja:** 
   - Atributos: `nome` (string)
   - Métodos: `adicionarEstoque()`
2. **Arma:** 
   - Atributos: `nome` (string), `dano` (number)
3. **Personagem:** 
   - Atributos: `nome` (string)
   - Métodos: `comprarArma()`
4. **Inventario:** 
   - Atributos: `slots` (number)
   - Métodos: `guardar()`

---

## 🔗 Os Relacionamentos (O Enigma)

Conecte as entidades no seu diagrama Mermaid utilizando os símbolos corretos de Associação (`-->`), Agregação (`o--`) ou Composição (`*--`):

1. O **Personagem** possui um **Inventario** que não existe sozinho. Ele nasce e morre junto com o personagem. Qual é o losango correto?
2. A **Loja** guarda uma lista de **Armas** no seu mostruário. Porém, se a loja for demolida, as armas físicas continuam existindo no mundo. Qual é o losango correto?
3. O **Personagem** interage com a **Loja** apenas naquele momento para comprar itens, mas ninguém é dono de ninguém. Como representamos isso?

---

## 🏁 Sua Resposta

Escreva abaixo o seu código Mermaid contendo todas as classes e ligações. 
*(Dica: Lembre-se de abrir com `classDiagram`!)*

```mermaid
// Apague esta linha e construa seu diagrama aqui!

```
