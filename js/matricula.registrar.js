if (!validarAcceso()) {
    window.location.href = DIR_LOGIN;
}
const selectStudents=document.getElementById('select-personas');
const selectCourses=document.getElementById('select-cursos');
const btnRegister=document.getElementById('registrarMatricula');

const registrarMatricula=async({idStudent,idCourse})=>{
    try {
        let msgSuccess=document.querySelector('#msg__success')
        let msgError=document.querySelector('#msg__error')
        const response=await fetch('http://172.20.20.145/matriculas',{
            method:'POST',
            headers:{
                "Content-type":"Application/json"
            },
            body:JSON.stringify({persona:idStudent,curso:idCourse})
        });
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
        msgError.classList.remove("d-none")
        console.log(error)
    }
    
}


const renderResultPersons=(data)=>{
    let listHTML='<option value="0">Seleccionar persona</option>';

    data.forEach(({id,nombre})=>{
        listHTML+=`<option value="${id}">${nombre}</option>`
    })
    selectStudents.innerHTML=listHTML;
}

const fetchPersons = async (tipo) => {
    let url = "http://172.20.20.145/personas";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    renderResultPersons(data);
};

const renderResultCourses=(data)=>{
    let listHTML='<option value="0">Seleccionar curso</option>';

    data.forEach(({id,curso})=>{
        listHTML+=`<option value="${id}">${curso}</option>`
    })
    selectCourses.innerHTML=listHTML;
}

const fetchCourses = async (tipo) => {
    let url = "http://172.20.20.145/cursos";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    renderResultCourses(data);
};


fetchPersons();
fetchCourses();

btnRegister.addEventListener('click',(e)=>{
    e.preventDefault();
    const idStudent=document.querySelector('#select-personas').value;
    const idCourse=document.querySelector('#select-cursos').value;
    const matricula={
        idStudent,idCourse
    }
    registrarMatricula(matricula);
})


