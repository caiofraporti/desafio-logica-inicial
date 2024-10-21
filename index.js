let name = "Caio"
let qtdeXp = 500
let nivel = ""

switch(true){
    case qtdeXp <= 1000:
        nivel = "Ferro";
        break;
    case qtdeXp >= 1001 && qtdeXp <= 2000:
        nivel = "Bronze";
        break;
    case qtdeXp >= 2001 && qtdeXp <= 5000:
        nivel = "Prata";
        break;
    case qtdeXp >= 5001 && qtdeXp <= 7000:
        nivel = "Ouro";
        break;
    case qtdeXp >= 7001 && qtdeXp <= 8000:
        nivel = "Platina";
        break;
    case qtdeXp >= 8001 && qtdeXp <= 9000:
        nivel = "Ascendente";
        break;
    case qtdeXp >= 9001 && qtdeXp <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
        break;
}

console.log("O heroi de nome", name, "está no nivel", nivel);