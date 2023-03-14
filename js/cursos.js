const inputSearch=document.getElementById('searchCourse');
const dropdownPersona=document.querySelector('.menu-persona')
if(!validarAcceso()){
    window.location.href=DIR_LOGIN;
}

dropdownPersona.innerHTML=`<a class="nav-link" href="personas.html" role="button">
Personas
</a>`
const fetchData=async(curso='')=>{
    try {
        let url=''
        if(curso.length==0){
            url='http://172.20.20.145/cursos'
        }else{
            url='http://172.20.20.145/cursos?nombre='+curso;
        }
        const response=await fetch(url);

        if(!response.ok){
            const data=await response.text();
            document.getElementById('lista').innerText=data;
            throw new Error(data);
        }
        const data=await response.json();
        console.log(data)
        renderDataCourse(data);
        
    } catch (error) {
        console.error(error)
    }
}


const renderDataCourse=(data)=>{

    const bodyTable=document.getElementById('lista');
    let listHTML='';
    data.forEach(curso=>{
        listHTML+=`
            <tr>
                <td>${curso.id}</td>
                <td>${curso.curso}</td>
            </tr>
        `
    })

    bodyTable.innerHTML=listHTML;
}


fetchData();

inputSearch.addEventListener('keyup',(e)=>{
    fetchData(inputSearch.value)
})
