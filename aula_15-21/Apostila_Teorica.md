# 📖 Apostila Teórica: Funções, Parâmetros e Clean Code
**Módulo:** Programação Back-End (PBE-1)
**Projeto:** Aetheria Engine API

---

## 1. O Princípio DRY e o Caos do "Copiar e Colar"
Na engenharia de software, existe um princípio de ouro chamado **DRY (Don't Repeat Yourself - Não repita a si mesmo)**. 
Imagine que você tem uma lógica matemática complexa para calcular o dano crítico de um jogador. Se você copiar e colar essa fórmula em 10 lugares diferentes do código e, amanhã, o Designer do Jogo pedir para mudar a fórmula, você terá que caçar e alterar os 10 lugares. Se esquecer de um, o jogo terá um bug severo.

A solução? Encapsular a lógica em uma **Função**.

---

## 2. O que é uma Função?
Uma função é como uma **Máquina/Fábrica**. Você constrói a máquina uma única vez, dá um nome a ela, e depois apenas aperta o botão para usá-la quantas vezes quiser em qualquer lugar do seu código.

### Sintaxe Básica (A Máquina Simples)
```typescript
// Declarando a Máquina (Construindo a fábrica)
// Usamos SEMPRE verbos no infinitivo para nomear funções (Clean Code)
function exibirMenuPrincipal() {
    console.log("1. Atacar");
    console.log("2. Defender");
}

// Chamando a Função (Apertando o botão de ligar)
exibirMenuPrincipal(); 
```

---

## 3. Parâmetros (A Matéria-Prima da Fábrica)
Uma fábrica de suco precisa receber laranjas para funcionar. As funções também! Os **Parâmetros** são as "portas de entrada" da sua função. No TypeScript, nós blindamos essas portas dizendo exatamente **qual tipo** de dado pode entrar.

```typescript
function aplicarDano(dano: number, nomeDoAlvo: string) {
    console.log(`O alvo ${nomeDoAlvo} sofreu ${dano} pontos de dano!`);
}

aplicarDano(50, "Dragão Negro"); 
```

---

## 4. O Retorno (O Produto Final)
Se a sua fábrica processa o suco, ela precisa "devolver" a caixa de suco pronta para você vender. 
Na programação, existem funções que apenas executam tarefas visuais (Imprimir no console, que é classificado como `void`) e funções matemáticas/lógicas que precisam **devolver um valor para o sistema usar**. Para devolver algo, usamos o `return`.

```typescript
function calcularDanoCritico(danoBase: number): number {
    let danoFinal = danoBase * 2;
    return danoFinal; // A máquina "cospe" o resultado para fora (e desliga a função)
}

let danoDoTurno = calcularDanoCritico(40);
console.log(danoDoTurno); // 80
```

---

## 5. Escopo de Variáveis (O que acontece em Vegas...)
**Escopo Local:** Variáveis criadas *dentro* de uma função só existem lá dentro. Assim que a função termina, a variável é destruída da memória RAM. Isso economiza memória e evita conflitos.

```typescript
function testarEscopo() {
    let segredo = "Senha123"; // Nasce aqui
} // E morre aqui!

// console.log(segredo); // ERRO! A variável não existe no mundo exterior.
```

---

## 6. Arrow Functions (O Jeito Moderno)
Na modernidade (ES6+), usamos uma sintaxe mais elegante, a **Função de Flecha (Arrow Function)**. Elas são atribuídas diretamente a constantes. No Back-End Node.js moderno, isso é o padrão da indústria.

```typescript
// Arrow Function
const curarModerno = (hp: number): number => {
    return hp + 50;
};
```

---

## 7. Funções de Callback (Terceirizando o Trabalho)
No JavaScript/TypeScript, funções são tão poderosas que podem ser passadas como **parâmetros** para outras funções! 
Uma **Callback** é uma função que você entrega para uma máquina e diz: *"Faça o seu trabalho e, quando terminar, execute esta função aqui que eu te entreguei"*.

Isso é fundamental no Back-End para processamento Assíncrono (ex: *"Vá buscar os dados no banco de dados e, quando terminar [callback], imprima na tela"*).

```typescript
// 1. Criamos uma função simples
const avisarMorte = () => {
    console.log("O jogador infelizmente faleceu.");
};

// 2. A Função principal recebe OUTRA FUNÇÃO como parâmetro
const processarDano = (hp: number, dano: number, callbackMorte: Function) => {
    let hpFinal = hp - dano;
    if (hpFinal <= 0) {
        callbackMorte(); // Chamando a função terceirizada
    } else {
        console.log(`Sobreviveu com ${hpFinal} HP.`);
    }
};

// 3. Ao chamar, passamos a função 'avisarMorte' inteira como argumento (sem os parênteses)
processarDano(100, 150, avisarMorte);
```

---

## 8. IIFE (Immediately Invoked Function Expression)
Às vezes você quer criar uma função que execute **imediatamente na mesma hora que é criada**, sem precisar chamá-la em outra linha. Isso é muito usado para proteger variáveis da poluição global (isolar a memória na hora do boot do servidor).

Para isso, nós envolvemos a função inteira em parênteses `()` e adicionamos um par de parênteses no final `()` para dar o "start".

```typescript
// A função nasce e já se executa sozinha instantaneamente!
( () => {
    let configuracaoSecreta = "12345";
    console.log("Servidor iniciado com segurança!");
    console.log("Config: " + configuracaoSecreta);
} )();

// console.log(configuracaoSecreta); // Erro! A variável já foi destruída e está segura.
```
