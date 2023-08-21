const React = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');
const {useState} = require('react');

function PageNuevoEspecialista() {

    const [nombre, setNombre] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/especialistas',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nuevo Especialista</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <input type="submit" value="Nuevo Especialista" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoEspecialista;