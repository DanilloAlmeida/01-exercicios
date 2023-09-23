const meuFormulario = document.getElementById("meuFormulario");
meuFormulario.addEventListener("submit", 
    function(event){
        event.preventDefault; //Imped o envio padrão do formulario
        const nome= event.target.elements.nome.value;
        alert(`O formulario foi enviado com o nome: ${nome}`);
    }
)



const meuInput = document.getElementById("meuInput");
meuInput.addEventListener("keydown", function(event) {
  console.log(`Tecla pressionada: ${event.key}`);
});


const meuCampo = document.getElementById("meuCampo");
meuCampo.addEventListener("focus", function() {
  console.log("Campo ganhou o foco.");
});

meuCampo.addEventListener("blur", function() {
  console.log("Campo perdeu o foco.");
});