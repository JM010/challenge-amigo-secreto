// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
let campoAmigo = document.getElementById("amigo");
let resultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if(validarAmigo(amigo)) {
        amigos.push(amigo);
        document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`;
        console.log(amigos);
    };
    limpiarCampo();
}

// Función para validar el nombre del amigo
// Verifica que no esté vacío y que no se repita en la lista
function validarAmigo(amigo) {
    if (amigo === "") {
        alert("El nombre del amigo no puede estar vacío.");
        return false;
    } else if (amigos.includes(amigo)) {
        alert("El amigo ya está en la lista.");
        return false;
    }  
    return true
}

// Función para limpiar el campo de entrada
// y enfocar el cursor en él
function limpiarCampo() {
    campo.value = "";
    campo.focus();
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");   
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
    resultado.style.color = "green";
    reinciarSorteo();
}

// Función para reiniciar el sorteo
// Limpia la lista de amigos y el resultado después de 5 segundos
function reinciarSorteo() {
    setTimeout (() => {
        resultado.innerHTML = ``;
    }, 5000);
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = []; 
    limpiarCampo();
}
