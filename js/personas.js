
  const renderResult = (data) => {
    let listHTML = document.querySelector("#lista");
    let list = "";
    data.forEach(({id,nombre,dni,correo,celular}) => {
      list += `
            <tr>
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${dni}</td>
            <td>${(correo)?correo:''}</td>
            <td>${(celular)?celular:''}</td>
            </tr>
        `;
    });

    listHTML.innerHTML = list;
  };
  const fetchData = async (tipo) => {
    let url='http://172.20.20.145:777/personas'
    if(tipo) 
      url=`http://172.20.20.145:777/personas?tipo=${tipo}`

    const response = await fetch(url);
    const data = await response.json();
    renderResult(data);
  };

  async function verDocentes(){
    await fetchData('docente')
  }
  async function verUsuarios(){
    await fetchData('usuario')
  }
  
  async function verEstudiantes(){
    await fetchData('estudiante')
  }

  async function listarPersonas(){
    await fetchData('');
  }
  document.addEventListener('DOMContentLoaded',async()=>{
    await fetchData('');

  })

