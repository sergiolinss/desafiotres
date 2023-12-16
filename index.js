let name = "Apocalipse "
let age = 35
let type = "ninja "

class ataque{
    constructor(){
        this.tipoDeAtaque = ["usou magia", "usou espada", "usou artes marciais", "usou shuriken"] 
    }
}

const tipoDeAtaque = new ataque
if(type === "ninja "){


    console.log(name + type + tipoDeAtaque.tipoDeAtaque[3])


}
else{

console.log("tipo diferente")

}


