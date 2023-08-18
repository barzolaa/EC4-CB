const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerEspecialista = () => {

    let { id } = useParams();
    const [especialista, setEspecialista] = useState({});
    const [pacientes, setPacientes] = useState([]);


    useEffect(() => {
        url_especialista = '/api/especialistas/' + id

        client({
            method: 'GET',
            path: url_especialista
        }).done(response => setEspecialista(response.entity));

        client({
            method: 'GET',
            path: url_especialista + '/formacion'
        }).done(response => setPacientes(response.entity))
        
    }, []);


    return (
        <>
            <h1>Especialista</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{especialista.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h2>pacientes</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>USUARIO</th>
                        <th>MASCOTA</th>
                    </tr>
                </thead>
                <tbody>

                    {pacientes.map(paciente => {

                        return (
                            <tr key={paciente.ID}>
                                <td>{paciente.USUARIO}</td>
                                <td>{paciente.MASCOTA}</td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
            <hr />
            <Link to={`/ver-especialista/${id}/nuevo-especialista`}>Agregar especialista</Link> |  
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerEspecialista;