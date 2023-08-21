const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const PageNuevoPaciente = () => {

    let { id } = useParams();
    const [usuarios, setUsuarios] = useState([])
    const [mascotas, setMascotas] = useState([])
    const [idUsuario, setIdUsuario] = useState('')
    const [idMascota, setIdMascota] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/pacientes',
            entity: {
                especialista: 'http://localhost:8080/api/especialistas/'+id,
                usuario: 'http://localhost:8080/api/usuarios/'+idUsuario,
                mascota: 'http://localhost:8080/api/mascotas/'+idMascota
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/usuarios'
        }).done(response=>{
            let usuarios2 = [];
            response.entity._embedded.usuarios.map(usuario => {
                usuarios2.push({value: usuario._links.self.href.split('/').slice(-1), label: usuario.nombre})
            })
            setUsuarios(usuarios2)
        })
        client({
            method: 'GET',
            path: '/api/mascotas'
        }).done(response=>{
            let mascotas2 = [];
            response.entity._embedded.mascotas.map(mascota => {
                mascotas2.push({value: mascota._links.self.href.split('/').slice(-1), label: mascota.nombre})
            })
            setMascotas(mascotas2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Paciente</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='usuario'>Usuario</label>
                <select name="usuario" id="usuario" onChange={(e)=>{setIdUsuario(e.target.value)}}>
                    {usuarios.map(usuario => {	
                        return (
                            <option key={usuario.value} value={usuario.value}>{usuario.label}</option>
                        )
                    })}
                </select>
                
                <label>Mascota</label>
                <select name="mascota" id="mascota" onChange={(e)=>{setIdMascota(e.target.value)}}>
                    {mascotas.map(mascota => {	
                        return (
                            <option key={mascota.value} value={mascota.value}>{mascota.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nuevo Paciente" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoPaciente;