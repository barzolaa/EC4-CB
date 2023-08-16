const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerEspecialista = () => {

    let { id } = useParams();
    const [especialista, setEspecialista] = useState({});
    const [integrantes, setIntegrantes] = useState([]);


    useEffect(() => {
        url_especialista = '/api/especialistas/' + id

        client({
            method: 'GET',
            path: url_especialista
        }).done(response => setEspecialista(response.entity));

        client({
            method: 'GET',
            path: url_especialista + '/formacion'
        }).done(response => setIntegrantes(response.entity))
        
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

            <h2>integrantes</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Musico</th>
                        <th>Mascota</th>
                    </tr>
                </thead>
                <tbody>

                    {integrantes.map(integrante => {

                        return (
                            <tr key={integrante.ID}>
                                <td>{integrante.MUSICO}</td>
                                <td>{integrante.MASCOTA}</td>
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