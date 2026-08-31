// engine.ts - Starter Kit (Aulas 36-42)
// O objetivo desta aula é criar o motor de batalha usando Herança e Polimorfismo.

// 1. Crie aqui o Enum EstadoJogador (VIVO, MORTO, ENVENENADO)


// 2. Crie aqui a classe Base "Personagem" com nome e vida (lembre-se do protected!)
// e o método genérico atacar()


// 3. Crie aqui a classe Guerreiro herdando de Personagem


// 4. Crie aqui a classe Mago herdando de Personagem


// ==========================================
// AREA DE TESTES (Não apagar)
// ==========================================

/* 
DESCOMENTE O CÓDIGO ABAIXO NO FINAL DA AULA PARA TESTAR O POLIMORFISMO

const arthur = new Guerreiro("Arthur", 85);
const gandalf = new Mago("Gandalf");

const grupo: Personagem[] = [arthur, gandalf];

console.log("--- INÍCIO DO COMBATE ---");
grupo.forEach(membro => {
    membro.atacar();
});
*/
