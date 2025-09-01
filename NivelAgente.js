//em qual nível você está no valorant?

let agentes = ["Reyna","Viper","Raze","Sova","Sage","KillJoy"]
let indiceAgentes = Math.floor(Math.random() * agentes.length)
let agentesSortidos = agentes[indiceAgentes]

let xp = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]
let indiceXp = Math.floor(Math.random() * xp.length)
let xpSortidos = xp[indiceXp]



switch(true){
    case (xpSortidos <= 1000):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível ferro");
        break;
    case (xpSortidos >= 1001 && xpSortidos <= 2000):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível bronze");
        break;
    case (xpSortidos >= 2001 && xpSortidos <= 5000):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível prata");
        break;
    case (xpSortidos >= 5001 && xpSortidos <= 7000):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível ouro");
        break;
    case (xpSortidos >= 7001 && xpSortidos <= 8000):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível platina");
        break;
    case (xpSortidos >= 8001 && xpSortidos <= 9000):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível ascendente");
        break;
    case (xpSortidos >= 9001 && xpSortidos <= 10000):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível imortal");
        break;
    case (xpSortidos >= 10001):
        console.log("O Agente: " + agentesSortidos + " tem: " + xpSortidos + " de xp e está no nível radiante");
        break;
}