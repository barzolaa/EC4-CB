const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerMascota = require('./pages/ver-mascota');
const PageNuevoMascota = require('./pages/nuevo-mascota');
const PageNuevoUsuario = require('./pages/nuevo-usuario');
const PageEditarUsuario = require('./pages/editar-usuario');
const PageEditarMascota = require('./pages/editar-mascota');
const PageVerEspecialista = require('./pages/ver-especialista');
const PageNuevoPaciente = require('./pages/nuevo-paciente');
const PageNuevoEspecialista = require('./pages/nuevo-especialista');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/ver-mascota/:id', element: <PageVerMascota />},
	{path: '/nuevo-mascota', element: <PageNuevoMascota />},
	{path: '/nuevo-usuario', element: <PageNuevoUsuario />},
	{path: '/editar-usuario/:id', element: <PageEditarUsuario />},
	{path: '/editar-mascota/:id', element: <PageEditarMascota />},
	{path: '/ver-especialista/:id', element: <PageVerEspecialista />},
	{path: '/ver-especialista/:id/nuevo-paciente', element: <PageNuevoPaciente />},
	{path: '/nuevo-especialista', element: <PageNuevoEspecialista />},
	
	
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
