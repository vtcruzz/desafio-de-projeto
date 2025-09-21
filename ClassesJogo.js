class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){

        const ataques = {
        mago: "usando magia",
        guerreiro: "usando espada",
        monge: "usando artes maciais",
        ninja: "usando shuriken"

        }
      
        const ataque = ataques[this.tipo]
        console.log(`O ${this.tipo} atacou ${ataque}`)
    }
}

let heroi1 = new heroi("thanos", 999, "guerreiro")

heroi1.atacar()

