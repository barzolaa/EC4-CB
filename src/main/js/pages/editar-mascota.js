const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarMascota = ()=>{

    const {id} = useParams();
    const [mascota, setMascota] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/mascotas/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setMascota(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/mascotas/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: mascota
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Mascota: {id}</h1>

            <form onSubmit={handleSubmit}>

                <label>Nombre</label>
                <input 
                    type="text"
                    name="nombre"
                    value={mascota.nombre}
                    onChange={(e)=>{setMascota({...mascota, nombre: e.target.value})}} />
                <br/>

                <label>Edad</label>
                <input 
                    type="text"
                    name="edad"
                    value={mascota.edad}
                    onChange={(e)=>{setMascota({...mascota, edad: e.target.value})}} />
                <br/>
                
                <label>Raza</label>
                <input 
                    type="text"
                    name="raza"
                    value={mascota.raza}
                    onChange={(e)=>{setMascota({...mascota, raza: e.target.value})}} />
                <br/>
                
                <input type='submit' value={`Editar Mascota ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarMascota