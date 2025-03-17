// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
function agregarAmigo(){ //corregir esta codigo porque no deja agregar nombre pero msi sortear
    let input=document.getElementById("nombreAmigo");
    let nombre=input.value.trim();
    if(nombre===""){
       prompt("Esta pagina dice");
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);

    actualizarLista();

    input.value="";
}

function actualizarLista(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (let i=0;i<amigos.length;i++){
        lista.innerHTML += `<li> ${amigos[i]}</li>`
    }
}
 function sortearAmigo() {
    if(amigos.length===0){
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceRandom=Math.floor(Math.floor()*amigos.length);
    let amigoSorteado=amigos[indiceRandom];
    document.getElementById("resultadoSorteo").innerHTML=`El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
 }
