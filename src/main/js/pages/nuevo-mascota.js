const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevoMascota = () => {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [raza, setRaza] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/mascotas',
            entity: { nombre: nombre, edad: edad, raza: raza },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nuevo Mascota</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor='nombre'>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <br />
                <label htmlFor='edad'>Edad</label>
                <input type="text" id="edad" name="edad" onChange={(e)=>setEdad(e.target.value)} />
                <br />
                <label htmlFor='raza'>Raza</label>
                <textarea cols={30} id="raza" name="raza" onChange={(e)=>setRaza(e.target.value)}></textarea>
                <br />
                <br />
                <input type="submit" value="Nueva Mascota" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoMascota;