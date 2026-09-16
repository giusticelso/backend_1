enum EstadoJogador {
    VIVO = "VIVO",
    MORTO = "MORTO",
    ENVENENADO = "ENVENENADO"
}
class Inventario {
    public capacidadeMaxima: number
    public itens: string[]
    
    constructor(){
        this.capacidadeMaxima = 5
        this.itens = []
    }

    adicionarItem(nomeDoItem: string){
        if(this.itens.length < this.capacidadeMaxima){
            this.itens.push(nomeDoItem)
            console.log(`${nomeDoItem} foi guardado na mochila.`)
        } else {
            console.log(`Mochila cheia!`)
        }
            
    }
}

class Personagem{
    protected nome: string
    protected vida: number
    public estado: EstadoJogador
    public mochila: Inventario

    constructor(nomeRecebido: string){
        this.nome = nomeRecebido
        this.vida = 100
        this.estado = EstadoJogador.VIVO
        this.mochila = new Inventario()
    }

    get lerVida(): number{
        return this.vida
    }

    receberDano(dano:number){
        this.vida -= dano
        if(this.vida < 0){
            this.vida = 0
        }
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.vida} de vida!`)
    }

    atacar(){
        console.log(`${this.nome} desferiu um ataque básico.`)
    }

    esquivar(){
        console.log(`${this.nome} tentou rolar para longe do perigo!`)
    }
}


let heroi = new Personagem(`Arthur`)
// heroi.apresentar()
// heroi.lerVida
// heroi.receberDano(400)
// heroi.apresentar()

heroi.estado = EstadoJogador.ENVENENADO





class Pocao{
    public nome: string
    private cura: number

    constructor(nomeDaPocao: string, valorDeCura: number){
        this.nome = nomeDaPocao
        this.cura = valorDeCura
    }

    get poderDeCura():number{
        return this.cura
    }

    set alterarPoderDeCura(novoValorDeCura:number){
        if(novoValorDeCura < 0){
            console.log("Erro: A poção não pode curar com valores negativos!!")
        } else {
            this.cura = novoValorDeCura
        }
    }

    consumir(){
        console.log(`Você bebeu a ${this.nome} e curou ${this.cura} HP!`)
    }
}

// let pocao1 = new Pocao("HP +20",20)
// let pocao2 = new Pocao("HP +30",30)



class Mago extends Personagem{
    public mana: number

    constructor(nomeMago: string){
        super(nomeMago)
        this.mana = 100
        this.vida = 80
    }

    atacar(){
        if(this.mana >= 20){
            console.log(`${this.nome} conjurou Bola de Fogo!`)
            this.mana -= 20
        } else {
            console.log(`${this.nome} está sem mana e bateu com o cajado.`)
        }
    }
}

class Guerreiro extends Personagem{
    public furia: number
    public forcaFisica: number

    constructor(nomeGuerreiro: string, forcaFisica: number){
        super(nomeGuerreiro)
        this.forcaFisica = forcaFisica
        this.furia = 0
        this.vida = 150
    }

    atacar(){
        if(this.furia < 10 ){
            console.log(`${this.nome} executou um golpe com sua espada! tinnnn, tinnnnnnnnn (+10 Fúria)`)
            this.furia += 10
        } else {
            console.log(`${this.nome} executou o Golpe Furiosoooooo! tiinnnn....pannn...powwww...uhg`)
            this.furia = 0
        }
    }
}

let marlom = new Mago("Marlom")
let felipus = new Guerreiro("Felipus",40)

marlom.atacar()
felipus.atacar()
felipus.atacar()

marlom.receberDano(200)

class Arqueiro extends Personagem{
    public flechas: number

    constructor(nomeArqueiro: string){
        super(nomeArqueiro)
        this.flechas = 20
    }

    atacar(){
        if(this.flechas > 0){
            console.log(`${this.nome} disparou uma flecha veloz!`)
            this.flechas -= 1
        } else {
            console.log(`${this.nome} está sem flechas e precisa recarregar!`)
        }
    }
} 

let arqueiroDaniel = new Arqueiro("Daniel Manoel")
arqueiroDaniel.esquivar()

let legolas = new Arqueiro("Legolas")
legolas.atacar()
legolas.atacar()
legolas.atacar()
legolas.esquivar()
legolas.mochila.adicionarItem("Arco Élfico")

console.log(`Itens mochila: ${legolas.mochila.itens[0]}`)
