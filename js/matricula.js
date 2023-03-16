if (!validarAcceso()) {
  window.location.href = DIR_LOGIN;
}
const renderResult = (data) => {
  let listHTML = document.querySelector("#lista");
  let list = "";
  data.forEach(({ id, nombre, dni, correo, celular, cursos }) => {
    let listCursos='';
    cursos.forEach((curso)=>{
        listCursos+=`<span class="badge bg-secondary">${curso}</span> </br>`
    });

    list += `
              <tr>
              <td>${id}</td>
              <td>${nombre}</td>
              <td>${dni}</td>
              <td>${correo ? correo : ""}</td>
              <td>${celular ? celular : ""}</td>
              <td>${listCursos}</td>
              </tr>
          `;
  });

  listHTML.innerHTML = list;
};
const fetchData = async () => {
  let url = "http://172.20.20.145/matriculas";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  renderResult(data);
};
fetchData();
