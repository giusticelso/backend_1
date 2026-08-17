# 🔑 Gabarito: Hackathon Aulas 8-14 (Condicionais e Laços)

Este é o gabarito oficial para o Professor, contendo a resolução sugerida para os 15 exercícios propostos aos alunos.

---

### 🟢 Nível 1: O Novato
```typescript
// Exercício 1
let nomeJogador: string = "Arthur";
let idade: number = 25;
let classe: string = "Guerreiro";
let isPremium: boolean = true;
console.log(`Jogador: ${nomeJogador}, Idade: ${idade}, Classe: ${classe}, Premium: ${isPremium}`);

// Exercício 2
let forca: number = 50;
let multiplicador: number = 1.5;
let danoTotal: number = forca * multiplicador;
console.log(`Dano total: ${danoTotal}`);

// Exercício 3
let nivelJogador: number = 15;
if (nivelJogador >= 15) {
    console.log("Pode entrar na Masmorra");
} else {
    console.log("Você é muito fraco, volte depois");
}

// Exercício 4
let numeroSorte: number = 45;
if (numeroSorte <= 10) {
    console.log("Item Lendário!");
} else if (numeroSorte <= 50) {
    console.log("Item Raro!");
} else {
    console.log("Item Comum!");
}
```

---

### 🟡 Nível 2: O Aventureiro
```typescript
// Exercício 5
let classeEscolhida: string = "Mago";
switch (classeEscolhida) {
    case "Guerreiro":
        console.log("Habilidade: Golpe de Espada");
        break;
    case "Mago":
        console.log("Habilidade: Bola de Fogo");
        break;
    case "Arqueiro":
        console.log("Habilidade: Tiro Preciso");
        break;
    default:
        console.log("Classe inválida.");
}

// Exercício 6
let opcao: number = 2;
switch (opcao) {
    case 1:
        console.log("Comprar Espada");
        break;
    case 2:
        console.log("Comprar Escudo");
        break;
    case 3:
        console.log("Sair");
        break;
}

// Exercício 7 (Guard Clauses)
let hpAtual: number = 0;
let mana: number = 20;

if (hpAtual <= 0) {
    console.log("Você está morto e não pode ser curado.");
    process.exit(); // No contexto de função, seria um 'return'
}
if (mana < 10) {
    console.log("Mana insuficiente.");
    process.exit();
}
console.log("Cura realizada com sucesso!");
```

---

### 🟠 Nível 3: O Veterano
```typescript
// Exercício 8
for (let i = 1; i <= 10; i++) {
    console.log(`Golpe ${i} desferido!`);
}

// Exercício 9
let xpAcumulado: number = 0;
for (let goblin = 1; goblin <= 5; goblin++) {
    xpAcumulado += 15;
    console.log(`Goblin abatido! XP Total: ${xpAcumulado}`);
}

// Exercício 10
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Exercício 11
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("BUM!");
    } else {
        console.log(i);
    }
}
```

---

### 🔴 Nível 4: O Mestre
```typescript
// Exercício 12
let escudoChefe: number = 100;
while (escudoChefe > 0) {
    escudoChefe -= 20;
    console.log(`Dano no escudo! Resta: ${escudoChefe}`);
}

// Exercício 13
let ferroColetado: number = 0;
while (ferroColetado < 10) {
    ferroColetado++;
    console.log(`Ferro coletado: ${ferroColetado}/10`);
}

// Exercício 14
let xp: number = 0;
let nivel: number = 1;
while (nivel < 5) {
    xp += 50;
    console.log(`Ganhou 50 XP. Total: ${xp}`);
    if (xp >= 100) {
        xp -= 100;
        nivel++;
        console.log(`Level UP! Nível atual: ${nivel}`);
    }
}

// Exercício 15
let hpHeroi: number = 100;
let hpChefe: number = 200;

while (hpHeroi > 0 && hpChefe > 0) {
    hpChefe -= 30; // Herói ataca
    if (hpChefe > 0) {
        hpHeroi -= 20; // Chefe revida
    }
}

if (hpHeroi > 0) {
    console.log("O Herói venceu a batalha!");
} else {
    console.log("O Chefe esmagou o herói!");
}
```
