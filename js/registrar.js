if (!validarAcceso()) {
    window.location.href = DIR_LOGIN;
}

let btnRegister=document.getElementById('registrar');

const register=async()=>{
    const inputs=document.querySelectorAll('input')

    let persona={}
    inputs.forEach((input)=>{
        persona[input.name]=input.value;
    })

    try {
        let msgSuccess=document.querySelector('#msg__success')
        let msgError=document.querySelector('#msg__error')
        const response=await fetch('http://172.20.20.145/personas',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(persona)
        })

        const res=await response.text(); 
        if(!response.ok){
            msgError.innerText=res;
            msgError.classList.remove("d-none")
            msgSuccess.classList.add("d-none")
            throw new Error("Error en el servidor");
        }
        
        msgSuccess.innerText=res;
        msgSuccess.classList.remove("d-none")
        msgError.classList.add("d-none")
    } catch (error) {
        console.log('usuario no registrado')
        msgError.classList.remove("d-none")
        console.log(error)
    }
}

btnRegister.addEventListener('click',async()=>{
    await register()
})