const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mascotas: [], usuarios: [], especialistas: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/mascotas' }).done(response => {
			this.setState({ mascotas: response.entity._embedded.mascotas });
		});
		client({ method: 'GET', path: '/api/usuarios' }).done(response => {
			this.setState({ usuarios: response.entity._embedded.usuarios });
		});
		client({ method: 'GET', path: '/api/especialistas' }).done(response => {
			this.setState({especialistas: response.entity._embedded.especialistas });
		});

	}
	render() {
		return (
			<>
				<h1>Evaluacion Final</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Mascotas" emoji="🐶" />
						<MascotaList mascotas={this.state.mascotas} />
						<Link to="/nuevo-mascota">Nueva Mascota</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Usuarios" emoji="👤" />
						<UsuarioList usuarios={this.state.usuarios} />
						<Link to="/nuevo-usuario">Nuevo Usuario</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Especialistas" emoji="👩🏼‍🎤" />
						<EspecialistaList especialistas={this.state.especialistas} />
						<Link to="/nueva-especialista">Nueva Especialistas</Link>
					</div>
				</div>




			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class MascotaList extends React.Component {
	render() {
		const mascotas = this.props.mascotas.map(mascota =>
			<Mascota key={mascota._links.self.href} mascota={mascota} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Raza</th>
					</tr>
					{mascotas}
				</tbody>
			</table>
		)
	}
}
class UsuarioList extends React.Component {
	render() {
		const usuarios = this.props.usuarios.map(usuario =>
			<Usuario key={usuario._links.self.href} usuario={usuario} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{usuarios}
				</tbody>
			</table>
		)
	}
}
class EspecialistaList extends React.Component {
	render() {
		const especialistas = this.props.especialistas.map(especialista =>
			<Especialista key={especialista._links.self.href} especialista={especialista} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{especialistas}
				</tbody>
			</table>
		)
	}
}

class Mascota extends React.Component {
	render() {
		const id = this.props.mascota._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.mascota.nombre}</td>
				<td>
					<Link to={`/ver-mascota/${id}`}>Ver</Link> | 
					<Link to={`/editar-mascota/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Usuario extends React.Component {
	render() {
		const id = this.props.usuario._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.usuario.nombre}</td>
				<td>
					<Link to={`/editar-usuario/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Especialista extends React.Component {
	render() {
		const id = this.props.especialista._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.especialista.nombre}</td>
				<td>
					<Link to={`/ver-especialista/${id}`}>Ver Especialista</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;