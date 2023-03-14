const ID_FORM_SESSION="form-login"
const DIR_INICIO='personas.html';
const DIR_LOGIN='login.html';
const validarAcceso=()=>{
    return localStorage.getItem('session');
}

const cerrarSesion=()=>{
    localStorage.clear();
    window.location.reload();
}