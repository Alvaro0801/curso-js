const NAV = `
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
	  <div class="container-fluid">
	    <a class="navbar-brand" href="#">Verano tecnológico</a>
	    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
	        <li class="nav-item">
	          <a class="nav-link active" aria-current="page" href="cursos.html">Cursos</a>
	        </li>
	        <li class="nav-item dropdown menu-persona">
	          <a class="nav-link dropdown-toggle" href="personas.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	            Personas
	          </a>
	          <ul class="dropdown-menu">
	            <li><a class="dropdown-item" href="javascript: verUsuarios()">Usuarios</a></li>
	            <li><a class="dropdown-item" href="javascript: verDocentes()">Docentes</a></li>
	            <li><a class="dropdown-item" href="javascript: verEstudiantes()">Estudiantes</a></li>
	            <li><hr class="dropdown-divider"></li>
	            <li><a class="dropdown-item" href="javascript: listarPersonas('')">Todas las personas</a></li>
	            <li><a class="dropdown-item" href="personas.registro.html">Registrar persona</a></li>
	          </ul>
	        </li>
			<li class="nav-item dropdown">
	          <a class="nav-link dropdown-toggle"  href="personas.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	            Matrículas
	          </a>

	          <ul class="dropdown-menu">
	            <li><a class="dropdown-item" href="matriculas.html">Ver todo</a></li>
	            <li><a class="dropdown-item" href="matriculas.registro.html">Nueva Matrícula</a></li>
	          </ul>
	         </li>
			<li class="nav-item">
	          <a class="nav-link active" aria-current="page" href="javascript: cerrarSesion()">Sign Out</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link disabled">Comité organizacional CIIS - XXIV</a>
	        </li>
	      </ul>
	    </div>
	  </div>
	</nav>
`;