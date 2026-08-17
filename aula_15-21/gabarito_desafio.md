# 🔑 Gabarito: Hackathon Aulas 15-21 (Funções e Modularização)

Este é o gabarito oficial para o Professor, contendo a resolução sugerida para os 15 exercícios focados em Arrow Functions, Parâmetros, Return, Callbacks e IIFE.

---

### 🟢 Nível 1: O Aprendiz de Engenheiro
```typescript
// Exercício 1
const exibirBoasVindas = () => {
    console.log("Bem-vindo ao Aetheria Engine!");
};
exibirBoasVindas();

// Exercício 2
const saudarJogador = (nome: string) => {
    console.log(`Olá, ${nome}!`);
};
saudarJogador("Arthur");

// Exercício 3
const emitirAlerta = () => {
    for (let i = 1; i <= 3; i++) {
        console.log("ALERTA DE INVASÃO!");
    }
};
emitirAlerta();
```

---

### 🟡 Nível 2: O Engenheiro de Sistemas
```typescript
// Exercício 4
const calcularPreco = (valorBase: number): number => {
    return valorBase * 1.20; 
};
let precoFinal = calcularPreco(100);
console.log(`Preço com impostos: ${precoFinal}`);

// Exercício 5 (Guard Clauses)
const isVivo = (hp: number): boolean => {
    if (hp <= 0) {
        return false;
    }
    return true;
};

// Exercício 6
const rolarDadoD20 = (): number => {
    // Math.random() gera entre 0 e 1. Multiplicamos por 20, arredondamos para baixo e somamos 1.
    return Math.floor(Math.random() * 20) + 1;
};

// Exercício 7 (Retorno Múltiplo sem Else)
const obterClasseFase = (nivel: number): string => {
    if (nivel < 10) return "Iniciante";
    if (nivel < 50) return "Intermediário";
    return "Mestre";
};
```

---

### 🟠 Nível 3: O Arquiteto Chefe
```typescript
// Exercício 8
const curar = (hpAtual: number, pocao: number): number => {
    const curaTotal = hpAtual + pocao;
    if (curaTotal > 100) {
        return 100;
    }
    return curaTotal;
};

// Exercício 9
const rolarAtaque = (): number => {
    return 15;
};

// Exercício 10
const verificarAcerto = (ataque: number, defesaBase: number): boolean => {
    return ataque > defesaBase;
};

// Exercício 11 (Integração)
let meuAtaque = rolarAtaque();
let acertou = verificarAcerto(meuAtaque, 10);
if (acertou) {
    console.log("Acertou o golpe!");
} else {
    console.log("O ataque falhou!");
}
```

---

### 🔴 Nível 4: O Hacker do Servidor
```typescript
// Exercício 12 (Callback de Morte)
const jogadorMorreu = () => {
    console.log("Game Over!");
};

const verificarVida = (hp: number, callbackMorte: Function) => {
    if (hp === 0) {
        callbackMorte();
    }
};
verificarVida(0, jogadorMorreu);

// Exercício 13 (Callback em Laço)
const imprimirXP = () => {
    console.log("Ganhou 10 XP!");
};

const processarHorda = (qtdMonstros: number, callbackAbate: Function) => {
    for (let i = 1; i <= qtdMonstros; i++) {
        callbackAbate();
    }
};
processarHorda(5, imprimirXP);

// Exercício 14 (IIFE)
( () => {
    let senhaSecretaDB = "SuperSenha123";
    console.log("Banco inicializado");
})();

// Exercício 15 (Isolamento)
// console.log(senhaSecretaDB); // Esta linha causará ERRO no TypeScript, pois a variável morreu dentro da IIFE.
```
