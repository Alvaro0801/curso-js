const showAlertSucces=(id,msg)=>{
    let alert=document.querySelector(`#${id} .alert-success`);
    alert.classList.remove('d-none');
    alert.innerText=msg;
}
const showAlertDanger=(id,msg)=>{
    let alert=document.querySelector(`#${id} .alert-danger`);
    alert.classList.remove('d-none');
    alert.innerText=msg;
}

