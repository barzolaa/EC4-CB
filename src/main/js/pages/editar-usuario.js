const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarUsuario = ()=>{

    const {id} = useParams();
    const [usuario, setUsuario] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/usuarios/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setUsuario(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/usuarios/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: usuario
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Usuario: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={(e)=>{setMusico({...usuario, nombre: e.target.value})}} />
                <br/>
                <input type='submit' value={`Editar Usuario ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarUsuario