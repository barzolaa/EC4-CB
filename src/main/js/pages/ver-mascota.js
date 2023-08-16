const React = require('react');
const client = require('../client');
const { Link, useParams} = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerMascota = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [mascota, setMascota] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/mascotas/' + id
        }).done(response => {
            setMascota(response.entity);
        });
    }, []);


    return (
        <>
            <h1>Ver Mascota</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{mascota.nombre}</td>
                </tr>
                <tr>
                    <th>Edad</th>
                    <td>{mascota.edad}</td>
                </tr>
                <tr>
                    <th>Raza</th>
                    <td>{mascota.raza}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerMascota;