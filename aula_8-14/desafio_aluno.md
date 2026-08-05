# ⚔️ Hackathon: O Desafio dos 15 Códigos (Aetheria Engine)

**Status:** Desenvolvedor Back-End Júnior  
**Duração Estimada:** 4 horas  
**Objetivo:** Implementar 15 regras de negócio isoladas, subindo gradativamente a dificuldade, para consolidar a base da programação estruturada no TypeScript.

## 📋 Instruções
Crie um arquivo `.ts` para cada bloco de exercícios (ex: `ex1.ts`) ou coloque tudo em um único arquivo separando por comentários. Para rodar, digite no terminal: `npx tsx <nome_do_arquivo>.ts`

---

## 🟢 Nível 1: O Novato (Variáveis e Condicionais Básicas)

**Exercício 1: O Registro da Guilda**
Crie 4 variáveis tipadas: Nome do jogador, Idade, Classe (string) e `isPremium` (boolean). Imprima no console o resumo do jogador.

**Exercício 2: Cálculo de Dano**
Crie uma variável `forca` (ex: 50) e `multiplicador` (ex: 1.5). Crie uma variável `danoTotal` que recebe a multiplicação das duas. Imprima o resultado.

**Exercício 3: O Guardião da Masmorra (IF/ELSE)**
Crie uma variável `nivelJogador`. Se for maior ou igual a 15, imprima "Pode entrar na Masmorra". Senão, imprima "Você é muito fraco, volte depois".

**Exercício 4: A Roda de Loot (IF / ELSE IF)**
Crie uma variável `numeroSorte` e defina um valor de 1 a 100.
Se for menor ou igual a 10, imprima "Item Lendário!". Se for menor ou igual a 50, "Item Raro!". Senão, "Item Comum!".

---

## 🟡 Nível 2: O Aventureiro (Switch e Clean Code)

**Exercício 5: Escolha de Classe (Switch Case)**
Crie uma variável `classeEscolhida` (Ex: "Guerreiro", "Mago" ou "Arqueiro"). Use um `switch` para imprimir as habilidades iniciais de acordo com a classe. Coloque um `default` para classe inválida.

**Exercício 6: Menu do Ferreiro (Switch Case)**
Simule um menu com `opcao = 2`. Caso 1: "Comprar Espada", Caso 2: "Comprar Escudo", Caso 3: "Sair".

**Exercício 7: Clean Code - O Ritual de Cura**
Crie as variáveis `hpAtual` (ex: 0) e `mana` (ex: 20).
Você precisa verificar se pode curar.
- **Regra:** Usando **Cláusulas de Guarda (Guard Clauses)**, verifique primeiro se `hpAtual <= 0` e pare o código se estiver morto. Depois verifique se `mana < 10` e pare se faltar mana. Se passar pelos dois bloqueios, imprima "Cura realizada com sucesso!".

---

## 🟠 Nível 3: O Veterano (Laços de Repetição - FOR)

**Exercício 8: Boneco de Treino**
Use um laço `for` que vá de 1 a 10. Em cada iteração, imprima: "Golpe [numero_do_golpe] desferido!".

**Exercício 9: A Horda de Goblins**
Use um `for` de 1 a 5 (representando 5 goblins mortos). A cada goblin, o jogador ganha 15 XP. Imprima o XP acumulado a cada abate.

**Exercício 10: Salto no Tempo (Continue)**
Faça uma contagem de 1 a 10 usando `for`. Se o número for exatamente 5, pule-o (usando o comando `continue`) e não o imprima.

**Exercício 11: O Fim do Mundo**
Faça um `for` em ordem **decrescente** (contagem regressiva). De 10 até 0. Quando chegar no 0, imprima "BUM!".

---

## 🔴 Nível 4: O Mestre (Laços de Estado - WHILE)

**Exercício 12: Quebrando o Escudo**
Crie `escudoChefe = 100`. Use um `while (escudoChefe > 0)`. A cada iteração (turno), diminua 20 do escudo e imprima "Dano no escudo! Resta: " + escudoChefe.

**Exercício 13: Mineração Persistente**
Crie `ferroColetado = 0`. Enquanto `ferroColetado` for menor que 10, some +1 e imprima o status.

**Exercício 14: Sistema de Level Up Automático**
Crie `xp = 0` e `nivel = 1`. Use um `while (nivel < 5)`. A cada iteração, ganhe 50 de xp. Se o xp passar de 100, diminua 100 do xp e aumente o nível em 1.

**Exercício 15: O Boss Final (A Prova Definitiva)**
Junte Condicionais, Variáveis e o `while`!
O Herói tem 100 de HP. O Chefe tem 200.
Enquanto o Chefe e o Herói estiverem vivos (`while hp > 0 && chefe > 0`), simule turnos de ataques (O chefe perde 30, o herói perde 20). 
Imprima o resultado final (Quem venceu a batalha?).

---
**🔗 Lembre-se:** A persistência é a maior habilidade de um Dev Back-End!
