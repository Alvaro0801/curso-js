let formSession=document.getElementById(ID_FORM_SESSION)
const btnLogin=document.getElementById("btn-login");

if(validarAcceso()){
    window.location.href="personas.html"
}
if(formSession){
    var [correo,contrasenia]=formSession.querySelectorAll('input');
}

const identificarse=()=> fetch('http://172.20.20.145/sesiones',
    {
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({correo:correo.value,contrasenia:contrasenia.value})
    }).then(res => new Promise((resolve, reject) => {
    if(res.ok) {
        localStorage.setItem('session',true);
        resolve();
    }
    else res.text().then(msg=> reject({log:msg}));
})).then(()=>{
    window.location.href=DIR_INICIO
}).catch(err=> {
    if(err.log){ 
        console.error(err.log);
        showAlertDanger(ID_FORM_SESSION,err.log)
    }else{
        console.error(err);
        showAlertDanger(ID_FORM_SESSION,"Error en el servidor")
    }
})

btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    identificarse();
})