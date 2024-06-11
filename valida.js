const usuarios = [ //array de objetos
    {
        login: "Victor",
        pass: "Victor"
    },
    {
        login: "Julio",
        pass: "Julio"
    },
    {
        login: "Admin",
        pass: "Admin"
    }
];

let botao = document.getElementById("btnLogar");

botao.addEventListener("click", function logar(){

    let pegarUsuario = document.getElementById("Usuario").value;
    let pegaSenha = document.getElementById("Senha").value;
    let validaLogin = false;

    for(let i in usuarios){ // in = percorrendo

        if(pegarUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){ // tiver contido em usuarios/
            validaLogin = true;
            break;
        }

    }

    if(validaLogin == true){
        location.href = "index.html"
     }else{
        alert("Usuario e Senha inncorretos");
     }

});



